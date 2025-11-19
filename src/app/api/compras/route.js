// app/api/compras/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/supabaseClient";

function formatErrorVerbose(err) {
  if (!err) return "Error desconocido";
  // Supabase error suele tener: message, details, hint, code
  const parts = [];
  if (err.message) parts.push(`message: ${err.message}`);
  if (err.details) parts.push(`details: ${err.details}`);
  if (err.hint) parts.push(`hint: ${err.hint}`);
  if (err.code) parts.push(`code: ${err.code}`);
  // fallback a stringify si es otro formato
  if (parts.length === 0) return JSON.stringify(err);
  return parts.join(" | ");
}

export async function POST(req) {
  try {
    const payload = await req.json();
    console.log("📦 /api/compras payload:", JSON.stringify(payload));

    const carrito = payload.carrito || payload; // aceptar ambos formatos

    if (!carrito || !Array.isArray(carrito) || carrito.length === 0) {
      console.log("⚠️ Carrito inválido:", carrito);
      return NextResponse.json(
        { success: false, error: "Carrito vacío o con formato inválido" },
        { status: 400 }
      );
    }

    // calcular total
    const total = carrito.reduce((s, it) => s + (it.precio || 0) * (it.cantidad || 0), 0);

    // Insert compra
    const { data: compraData, error: compraError } = await supabase
      .from("compras")
      .insert([{ total, estado: "Compra completada" }])
      .select()
      .limit(1)
      .maybeSingle();

    if (compraError) {
      console.error("❌ Supabase insert compra ERROR:", compraError);
      return NextResponse.json(
        { success: false, error: formatErrorVerbose(compraError) },
        { status: 400 }
      );
    }

    if (!compraData) {
      console.error("❌ Supabase insert compra: data vacía", compraData);
      return NextResponse.json(
        { success: false, error: "No se devolvió data de la inserción de compra" },
        { status: 500 }
      );
    }

    const compraId = compraData.id;
    console.log("✅ Compra creada id:", compraId);

    // detalles
    const detalles = carrito.map((it) => ({
      compra_id: compraId,
      producto_id: it.id,
      cantidad: it.cantidad,
      precio_unitario: it.precio,
      subtotal: (it.precio || 0) * (it.cantidad || 0),
    }));

    const { data: detallesData, error: detallesError } = await supabase
      .from("compra_detalle")
      .insert(detalles)
      .select();

    if (detallesError) {
      console.error("❌ Supabase insert detalles ERROR:", detallesError);
      // rollback
      await supabase.from("compras").delete().eq("id", compraId);
      return NextResponse.json(
        { success: false, error: formatErrorVerbose(detallesError) },
        { status: 400 }
      );
    }

    console.log("✅ Detalles insertados:", detallesData?.length ?? 0);

    // actualizar stock
    for (const it of carrito) {
      const { data: producto, error: prodErr } = await supabase
        .from("productos")
        .select("stock")
        .eq("id", it.id)
        .limit(1)
        .maybeSingle();

      if (prodErr) {
        console.error("❌ Error seleccionando producto id", it.id, prodErr);
        return NextResponse.json(
          { success: false, error: formatErrorVerbose(prodErr) },
          { status: 400 }
        );
      }

      if (!producto) {
        console.error("❌ Producto no encontrado id", it.id);
        return NextResponse.json(
          { success: false, error: `Producto no encontrado id ${it.id}` },
          { status: 404 }
        );
      }

      const nuevoStock = producto.stock - it.cantidad;
      if (nuevoStock < 0) {
        console.warn("⚠️ Stock insuficiente para id", it.id);
        return NextResponse.json(
          { success: false, error: `Stock insuficiente para producto ID ${it.id}` },
          { status: 400 }
        );
      }

      const { error: updErr } = await supabase
        .from("productos")
        .update({ stock: nuevoStock })
        .eq("id", it.id);

      if (updErr) {
        console.error("❌ Error actualizando stock id", it.id, updErr);
        return NextResponse.json(
          { success: false, error: formatErrorVerbose(updErr) },
          { status: 400 }
        );
      }
    }

    console.log("✅ Stock actualizado. Compra completa:", compraId);
    return NextResponse.json({ success: true, compraId }, { status: 200 });
  } catch (err) {
    console.error("🔥 EXCEPCIÓN en /api/compras:", err);
    return NextResponse.json(
      { success: false, error: err?.message || String(err) || "Error desconocido" },
      { status: 500 }
    );
  }
}

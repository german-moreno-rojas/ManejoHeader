// src/services/comprasService.js
export async function realizarCompra(carrito) {
  try {
    const res = await fetch("/api/compras", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carrito }),
    });

    const json = await res.json();
    // si status no ok, retornamos el error detallado
    return json;
  } catch (err) {
    return { success: false, error: err.message || String(err) };
  }
}

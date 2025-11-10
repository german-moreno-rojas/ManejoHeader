"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ObjetosPage() {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 7,
      nombre: "Reloj Minimalista",
      precio: 150000,
      imagen:
        "https://elmeromacho.co/cdn/shop/products/San_Francisco_1.png?v=1631659909&width=480",
    },
    {
      id: 8,
      nombre: "Mochila Urbana",
      precio: 95000,
      imagen:
        "https://http2.mlstatic.com/D_Q_NP_751971-MLU70347575880_072023-O.webp",
    },
    {
      id: 9,
      nombre: "Gorra Urbana",
      precio: 105000,
      imagen:
        "https://libur.com.co/cdn/shop/files/60641241_6.png?v=1748366569&width=600",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Objetos</h1>
      <p>Accesorios, gadgets y artículos de uso diario.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg shadow">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="rounded-lg"
            />
            <p className="mt-2 font-semibold">{producto.nombre}</p>
            <span>${producto.precio.toLocaleString()}</span>

            <Link href={`/producto/${producto.id}`}>
              <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Ver detalles
              </button>
            </Link>

            <button
              onClick={() => addToCart(producto)}
              className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

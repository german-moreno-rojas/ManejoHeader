"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HombresPage() {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 1,
      nombre: "Camiseta Básica",
      precio: 30000,
      imagen: "https://preview.free3d.com/img/2017/12/2202320265654830122/26ookx75.jpg",
    },
    {
      id: 2,
      nombre: "Jean Azul",
      precio: 80000,
      imagen: "https://cdn.baguer.co/uploads/2023/04/corbin-jean-skinny-cruzado-masculino-groggy-azul-824645AZ_D.jpg_LNXqikVtMXObzLG3fEwINAQafIQNTLrJ37bB5oFquHOao4jhBe.jpg",
    },
    {
      id: 3,
      nombre: "Short Azul",
      precio: 90000,
      imagen: "https://samiacl02.akamaized.net/7753-large_default/traje-de-bano-hombre-azul.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sección de Hombres</h1>
      <p>Encuentra camisetas, jeans y accesorios diseñados especialmente para ti.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-lg shadow">
            <img src={producto.imagen} alt={producto.nombre} />
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

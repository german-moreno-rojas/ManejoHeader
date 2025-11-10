"use client";
import Link from "next/link";  // Importamos Link para hacer la redirección
import { useCart } from "@/context/CartContext";

export default function MujeresPage() {
  const { addToCart } = useCart();

  // Lista de productos
  const productos = [
    {
      id: 4,
      nombre: "Vestido Floral",
      precio: 120000,
      imagen:
        "https://i5.walmartimages.com/asr/c6def1bc-20bf-4baa-ad3b-5133c0943d6d.a11d7848337aa511b69eaf7a5e93401b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 5,
      nombre: "Blusa Elegante",
      precio: 60000,
      imagen:
        "https://s.alicdn.com/@sc04/kf/H350cdd0c592b44acb67b8f242c9f56c0Z/7906-French-Style-White-Chiffon-Shirt-for-Women-Hanging-Neck-Off-Shoulder-Blouse-Top.jpg",
    },
    {
      id: 6,
      nombre: "Blue Jean Femenino",
      precio: 99000,
      imagen:
        "https://olimpica.vtexassets.com/arquivos/ids/1330749/image-34a6271ea2a54d00978592addd53976c.jpg?v=638455241149030000",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sección de Mujeres</h1>
      <p>Descubre vestidos, blusas y accesorios de moda para cada ocasión.</p>

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

            {/* Botón de Ver Detalles */}
            <Link href={`/producto/${producto.id}`}>
              <button className="mt-3 bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700">
                Ver detalles
              </button>
            </Link>

            {/* Botón de Agregar al carrito */}
            <button
              onClick={() => addToCart(producto)}
              className="mt-3 bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

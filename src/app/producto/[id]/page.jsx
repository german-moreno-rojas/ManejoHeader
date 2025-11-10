"use client";

import { useParams } from "next/navigation"; // Para obtener el id de la URL
import { useState, useEffect, useContext } from "react";
import { useCart } from "@/context/CartContext"; // Para agregar al carrito

export default function ProductoDetalle() {
  const { id } = useParams(); // Obtener el id de la URL
  const { addToCart } = useCart(); // Para agregar al carrito

  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Básica",
      precio: 30000,
      descripcion: "Camiseta cómoda y ligera para el día a día.",
      imagen: "https://preview.free3d.com/img/2017/12/2202320265654830122/26ookx75.jpg",
    },
    {
      id: 2,
      nombre: "Jean Azul",
      precio: 80000,
      descripcion: "Jeans ajustados de buen material y confort.",
      imagen: "https://cdn.baguer.co/uploads/2023/04/corbin-jean-skinny-cruzado-masculino-groggy-azul-824645AZ_D.jpg_LNXqikVtMXObzLG3fEwINAQafIQNTLrJ37bB5oFquHOao4jhBe.jpg",
    },
    {
      id: 3,
      nombre: "Short Azul",
      precio: 90000,
      descripcion: "Short cómodo y casual para el verano.",
      imagen: "https://samiacl02.akamaized.net/7753-large_default/traje-de-bano-hombre-azul.jpg",
    },
    {
      id: 4,
      nombre: "Vestido Floral",
      precio: 120000,
      descripcion: "Vestido elegante con estampado floral ideal para ocasiones especiales.",
      imagen: "https://i5.walmartimages.com/asr/c6def1bc-20bf-4baa-ad3b-5133c0943d6d.a11d7848337aa511b69eaf7a5e93401b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 5,
      nombre: "Blusa Elegante",
      precio: 60000,
      descripcion: "Blusa de alta calidad, perfecta para cenas formales.",
      imagen: "https://s.alicdn.com/@sc04/kf/H350cdd0c592b44acb67b8f242c9f56c0Z/7906-French-Style-White-Chiffon-Shirt-for-Women-Hanging-Neck-Off-Shoulder-Blouse-Top.jpg",
    },
    {
      id: 6,
      nombre: "Blue Jean Femenino",
      precio: 99000,
      descripcion: "Jean ajustado de corte clásico, cómodo y moderno.",
      imagen: "https://olimpica.vtexassets.com/arquivos/ids/1330749/image-34a6271ea2a54d00978592addd53976c.jpg?v=638455241149030000",
    },
    {
      id: 7,
      nombre: "Reloj Minimalista",
      precio: 150000,
      descripcion: "Reloj elegante de diseño minimalista para todo tipo de ocasión.",
      imagen: "https://elmeromacho.co/cdn/shop/products/San_Francisco_1.png?v=1631659909&width=480",
    },
    {
      id: 8,
      nombre: "Mochila Urbana",
      precio: 95000,
      descripcion: "Mochila de gran capacidad, ideal para la vida urbana.",
      imagen: "https://http2.mlstatic.com/D_Q_NP_751971-MLU70347575880_072023-O.webp",
    },
    {
      id: 9,
      nombre: "Gorra Urbana",
      precio: 105000,
      descripcion: "Gorra moderna y cómoda, para protegerte del sol.",
      imagen: "https://libur.com.co/cdn/shop/files/60641241_6.png?v=1748366569&width=600",
    },
    // Agrega más productos si lo deseas
  ];

  // Estado para almacenar el producto
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Buscar el producto correspondiente por ID
    const prod = productos.find((p) => p.id === parseInt(id)); // Buscar por ID
    setProducto(prod); // Asignar el producto encontrado
  }, [id]); // El efecto se ejecuta cada vez que cambia el id en la URL

  if (!producto) {
    return <div>Cargando producto...</div>; // Mostrar mientras se carga
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white"> {/* Fondo blanco */}
      {/* Imagen del producto */}
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full max-w-[400px] rounded-lg shadow-lg"
      />
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-semibold">{producto.nombre}</h1>
        <p className="mt-2 text-lg text-gray-600"><strong>Descripción:</strong> {producto.descripcion}</p>
        <p className="mt-2 text-xl font-bold text-green-600"><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
        
        <div className="mt-6 flex justify-center gap-4">
          {/* Botón para agregar al carrito */}
          <button
            onClick={() => addToCart(producto)}
            className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
          >
            Agregar al carrito
          </button>
          
          {/* Botón para comprar ahora */}
          <button
            onClick={() => alert("Comprar ahora")}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}

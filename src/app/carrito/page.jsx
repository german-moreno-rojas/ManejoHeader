"use client";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * (item.quantity || 1),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Tu Carrito</h1>

      {cart.length === 0 ? (
        <div className="mt-6 border p-4 rounded-lg shadow text-gray-500">
          <p>No tienes productos en el carrito.</p>
        </div>
      ) : (
        <div className="mt-6">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.nombre}</p>
                    <p className="text-gray-600">
                      ${item.precio.toLocaleString()} x {item.quantity || 1}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">
              Total: ${total.toLocaleString()}
            </h2>
            <button
              onClick={() => alert("Vaciar carrito aún no implementado")}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

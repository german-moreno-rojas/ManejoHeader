"use client";
import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.precio * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">My Cart</h1>

      {cart.length === 0 ? (
        <div className="mt-6 border p-4 rounded-lg shadow text-gray-500">
          <p>No tienes productos en el carrito.</p>
        </div>
      ) : (
        <>
          {/* Tabla de productos */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-600 border-b">
                <tr>
                  <th className="p-4">PRODUCT</th>
                  <th className="p-4 text-center">PRICE</th>
                  <th className="p-4 text-center">QTY</th>
                  <th className="p-4 text-right">TOTAL</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold">{item.nombre}</p>
                        <p className="text-gray-600 text-sm">
                          Precio unidad: ${item.precio.toLocaleString()}
                        </p>
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      ${item.precio.toLocaleString()}
                    </td>

                    <td className="p-4 text-center">
                      {item.quantity || 1}
                    </td>

                    <td className="p-4 text-right font-semibold">
                      ${(item.precio * (item.quantity || 1)).toLocaleString()}
                      <button
                        className="ml-4 text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Panel inferior */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Opciones de envío */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Choose shipping mode:</h3>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="shipping" defaultChecked />
                  <div>
                    <p className="font-semibold">Store pickup (2–5 days) — FREE</p>
                    <p className="text-gray-600 text-sm">
                      435 Chatham Ave - Brooklyn, NY 11203
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="radio" name="shipping" />
                  <div>
                    <p className="font-semibold">
                      Delivery at home (today - 1 day) — 9.90€
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Resumen + botón checkout */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${total.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">FREE</span>
              </div>

              <div className="flex justify-between text-xl font-bold border-t pt-4">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>

              <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
                Checkout — ${total.toLocaleString()}
              </button>

              <button
                onClick={clearCart}
                className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-black"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

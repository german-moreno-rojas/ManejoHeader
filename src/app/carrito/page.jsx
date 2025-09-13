export default function CarritoPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      <p>Aquí verás los productos que has agregado.</p>

      <div className="mt-6 border p-4 rounded-lg shadow">
        <p>No tienes productos en el carrito.</p>
      </div>
    </div>
  );
}

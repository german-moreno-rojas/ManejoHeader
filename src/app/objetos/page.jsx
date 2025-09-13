export default function ObjetosPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Objetos</h1>
      <p>Accesorios, gadgets y artículos de uso diario.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="border p-4 rounded-lg shadow">
          <img src="https://elmeromacho.co/cdn/shop/products/San_Francisco_1.png?v=1631659909&width=480" alt="Reloj" />
          <p className="mt-2 font-semibold">Reloj Minimalista</p>
          <span>$150.000</span>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <img src="https://http2.mlstatic.com/D_Q_NP_751971-MLU70347575880_072023-O.webp" alt="Mochila" />
          <p className="mt-2 font-semibold">Mochila Urbana</p>
          <span>$95.000</span>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <img src="https://libur.com.co/cdn/shop/files/60641241_6.png?v=1748366569&width=600" alt="Gorra" />
          <p className="mt-2 font-semibold">Gorra Urbana</p>
          <span>$105.000</span>
        </div>
      </div>
    </div>
  );
}

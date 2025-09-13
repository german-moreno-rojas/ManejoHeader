export default function HombresPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sección de Hombres</h1>
      <p>Encuentra camisetas, jeans y accesorios diseñados especialmente para ti.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="border p-4 rounded-lg shadow">
          <img src="https://preview.free3d.com/img/2017/12/2202320265654830122/26ookx75.jpg" alt="Camiseta hombre" />
          <p className="mt-2 font-semibold">Camiseta Básica</p>
          <span>$30.000</span>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <img src="https://cdn.baguer.co/uploads/2023/04/corbin-jean-skinny-cruzado-masculino-groggy-azul-824645AZ_D.jpg_LNXqikVtMXObzLG3fEwINAQafIQNTLrJ37bB5oFquHOao4jhBe.jpg" alt="Jean hombre" />
          <p className="mt-2 font-semibold">Jean Azul</p>
          <span>$80.000</span>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <img src="https://samiacl02.akamaized.net/7753-large_default/traje-de-bano-hombre-azul.jpg" alt="short hombre" />
          <p className="mt-2 font-semibold">short Azul</p>
          <span>$90.000</span>
        </div>
      </div>
    </div>
  );
}

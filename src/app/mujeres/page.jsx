export default function MujeresPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sección de Mujeres</h1>
      <p>Descubre vestidos, blusas y accesorios de moda para cada ocasión.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="border p-4 rounded-lg shadow">
          <img src="https://i5.walmartimages.com/asr/c6def1bc-20bf-4baa-ad3b-5133c0943d6d.a11d7848337aa511b69eaf7a5e93401b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Vestido mujer" />
          <p className="mt-2 font-semibold">Vestido Floral</p>
          <span>$120.000</span>
        </div>
        <div className="border p-4 rounded-lg shadow">
          <img src="https://s.alicdn.com/@sc04/kf/H350cdd0c592b44acb67b8f242c9f56c0Z/7906-French-Style-White-Chiffon-Shirt-for-Women-Hanging-Neck-Off-Shoulder-Blouse-Top.jpg" alt="Blusa mujer" />
          <p className="mt-2 font-semibold">Blusa Elegante</p>
          <span>$60.000</span>
        </div>
        <div className="border p-5 rounded-lg shadow">
          <img src="https://olimpica.vtexassets.com/arquivos/ids/1330749/image-34a6271ea2a54d00978592addd53976c.jpg?v=638455241149030000" alt="Blusa mujer" />
          <p className="mt-6 font-semibold">Blue jean femenino</p>
          <span>$99.000</span>
        </div>
      </div>
    </div>
  );
}

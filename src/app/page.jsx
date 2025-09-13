"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero con imagen que hace de header */}
      <section className="relative w-full h-[500px]">
        <img
          src="https://img.freepik.com/fotos-premium/coleccion-coloridas-camisetas-colgadas-perchas-madera-sobre-fondo-blanco_43448-307.jpg"
          alt="Header de inicio"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay con navegación y título */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <nav className="absolute top-6 w-full flex justify-between items-center px-12">
            <Link href="/" className="text-2xl font-bold hover:opacity-80">
              UGMONK
            </Link>
            <ul className="flex gap-6 text-lg">
              <li><Link href="/hombres" className="hover:underline">Hombres</Link></li>
              <li><Link href="/mujeres" className="hover:underline">Mujeres</Link></li>
              <li><Link href="/objetos" className="hover:underline">Objetos</Link></li>
              <li><Link href="/carrito" className="hover:underline">Carrito</Link></li>
              <li><Link href="/login" className="hover:underline">Login</Link></li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl font-bold">Bienvenido a UGMONK</h1>
            <p className="mt-2 text-lg">Explora nuestras colecciones</p>
          </div>
        </div>
      </section>

      {/* Productos de hombres */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Hombres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          <ProductCard
            image="https://preview.free3d.com/img/2017/12/2202320265654830122/26ookx75.jpg"
            title="Camiseta Básica"
            price="$30.000"
          />
          <ProductCard
            image="https://cdn.baguer.co/uploads/2023/04/corbin-jean-skinny-cruzado-masculino-groggy-azul-824645AZ_D.jpg_LNXqikVtMXObzLG3fEwINAQafIQNTLrJ37bB5oFquHOao4jhBe.jpg"
            title="Jean Azul"
            price="$80.000"
          />
          <ProductCard
            image="https://samiacl02.akamaized.net/7753-large_default/traje-de-bano-hombre-azul.jpg"
            title="Short Azul"
            price="$90.000"
          />
        </div>
      </section>

      {/* Productos de mujeres */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Mujeres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          <ProductCard
            image="https://i5.walmartimages.com/asr/c6def1bc-20bf-4baa-ad3b-5133c0943d6d.a11d7848337aa511b69eaf7a5e93401b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            title="Vestido Floral"
            price="$120.000"
          />
          <ProductCard
            image="https://s.alicdn.com/@sc04/kf/H350cdd0c592b44acb67b8f242c9f56c0Z/7906-French-Style-White-Chiffon-Shirt-for-Women-Hanging-Neck-Off-Shoulder-Blouse-Top.jpg"
            title="Blusa Elegante"
            price="$60.000"
          />
          <ProductCard
            image="https://olimpica.vtexassets.com/arquivos/ids/1330749/image-34a6271ea2a54d00978592addd53976c.jpg?v=638455241149030000"
            title="Blue jean femenino"
            price="$99.000"
          />
        </div>
      </section>

      {/* Objetos */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Objetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          <ProductCard
            image="https://elmeromacho.co/cdn/shop/products/San_Francisco_1.png?v=1631659909&width=480"
            title="Reloj Minimalista"
            price="$150.000"
          />
          <ProductCard
            image="https://http2.mlstatic.com/D_Q_NP_751971-MLU70347575880_072023-O.webp"
            title="Mochila Urbana"
            price="$95.000"
          />
          <ProductCard
            image="https://libur.com.co/cdn/shop/files/60641241_6.png?v=1748366569&width=600"
            title="Gorra Urbana"
            price="$105.000"
          />
        </div>
      </section>
    </main>
  );
}

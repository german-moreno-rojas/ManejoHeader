"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="relative w-full h-[550px]">
        <img
          src="https://cdn.pixabay.com/photo/2024/10/10/11/14/coat-hanging-9110646_960_720.jpg"
          alt="Hero de inicio"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col">
          <nav className="flex justify-between items-center px-16 pt-8 text-black">
            <Link href="/" className="text-2xl font-bold tracking-widest">
              UGMONK
            </Link>
            <ul className="flex gap-8 text-base">
              <li><Link href="/hombres" className="hover:underline">Men</Link></li>
              <li><Link href="/mujeres" className="hover:underline">Women</Link></li>
              <li><Link href="/objetos" className="hover:underline">Objects</Link></li>
              <li><Link href="/journal" className="hover:underline">Journal</Link></li>
            </ul>
            <ul className="flex gap-5 text-sm">
              <li><Link href="/login" className="hover:underline">Login</Link></li>
              <li><Link href="/help" className="hover:underline">Help</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
              <li><Link href="/carrito" className="hover:underline">🛒</Link></li>
            </ul>
          </nav>

          <div className="flex-1 flex flex-col justify-center pl-16 text-black">
            <h2 className="text-lg font-light">New Essential Tees</h2>
            <Link
              href="/hombres"
              className="mt-3 text-sm underline underline-offset-4 hover:opacity-80"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-16 py-14">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <ul className="flex gap-10 text-gray-600 text-lg">
            <li className="font-semibold text-black border-b-2 border-black pb-1 cursor-pointer"><Link href="/hombres">
              Mens
            </Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="/mujeres">Womens</Link></li>
            <li className="hover:text-black cursor-pointer"><Link href="/objetos">Objects</Link></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductCard
            image="https://preview.free3d.com/img/2017/12/2202320265654830122/26ookx75.jpg"
            title="Men's Essential Tee (Port)"
            price="$30.000"
          />
          <ProductCard
            image="https://cdn.baguer.co/uploads/2023/04/corbin-jean-skinny-cruzado-masculino-groggy-azul-824645AZ_D.jpg_LNXqikVtMXObzLG3fEwINAQafIQNTLrJ37bB5oFquHOao4jhBe.jpg"
            title="Men's Essential Tee (Deep Forest)"
            price="$30.000"
          />
          <ProductCard
            image="https://www.asics.com.co/arquivos/ids/342438-280-280/Shorts-ASICS-Road-2-N-1-7In-Short---Masculino---Azul.Webp"
            title="Men's Essential Tee (Bone)"
            price="$30.000"
          />
          <ProductCard
            image="https://i5.walmartimages.com/asr/c6def1bc-20bf-4baa-ad3b-5133c0943d6d.a11d7848337aa511b69eaf7a5e93401b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            title="Men's Essential Tee (Charcoal)"
            price="$30.000"
          />
        </div>
      </section>
    </main>
  );
}

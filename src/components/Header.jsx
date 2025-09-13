"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-300">
      <nav className="flex justify-between items-center">
        {/* Logo (ahora es un link al inicio) */}
        <div className="text-2xl font-bold">
          <Link href="/">UGMONK</Link>
        </div>

        {/* Links de navegación */}
        <ul className="flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/hombres">Hombres</Link></li>
          <li><Link href="/mujeres">Mujeres</Link></li>
          <li><Link href="/objetos">Objetos</Link></li>
          <li><Link href="/carrito">Carrito</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

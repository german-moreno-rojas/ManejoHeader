"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  // Contar total de unidades en el carrito
  const totalItems = cart.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <header className="p-4 border-b border-gray-300 bg-white">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">UGMONK</Link>
        </div>

        {/* Links de navegación */}
        <ul className="flex gap-6 items-center">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/hombres">Hombres</Link></li>
          <li><Link href="/mujeres">Mujeres</Link></li>
          <li><Link href="/objetos">Objetos</Link></li>

          {/* Carrito con ícono y contador */}
          <li className="relative">
            <Link href="/carrito" className="flex items-center gap-1">
              {/* Ícono carrito */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0 1.35 5.066m-.001-.002h11.25m-11.25 0L6.75 6.75m12.75 3.75l-1.5 6H7.125m12.375-6H6.375m0 0L5.107 4.272A1.125 1.125 0 004.017 3.5H2.25M6.75 19.5a.75.75 0 100 1.5.75.75 0 000-1.5zm10.5 0a.75.75 0 100 1.5.75.75 0 000-1.5z"
                />
              </svg>

              <span>Carrito</span>
            </Link>

            {/* Burbuja contador */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </li>

          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

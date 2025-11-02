"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


// despues de haber importado todo la razon de este LayoutClient es hacer que no aparezca header ni footer en login
export default function LayoutClient({ children }) {
  const pathname = usePathname();

  // Rutas donde NO se debe mostrar header ni footer
  const hiddenPaths = ["/login"];

  // Rutas donde se debe ocultar solo el header negro (pero mantener el footer)
  const homePath = "/";

  const hideHeaderFooter = hiddenPaths.includes(pathname);
  const hideHeaderOnly = pathname === homePath;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mostrar header solo si no está en login ni en home */}
      {!hideHeaderFooter && !hideHeaderOnly && <Header />}

      <main className="flex-grow">{children}</main>

      {/* Mostrar footer en todas menos login */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
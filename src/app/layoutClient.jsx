"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Este LayoutClient evita mostrar el Header y Footer en la página de login
export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hiddenPaths = ["/login"];
  const homePath = "/";

  const hideHeaderFooter = hiddenPaths.includes(pathname);
  const hideHeaderOnly = pathname === homePath;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mostrar Header solo si no está en login ni en home */}
      {!hideHeaderFooter && !hideHeaderOnly && <Header />}

      <main className="flex-grow">{children}</main>

      {/* Mostrar Footer en todas menos login */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

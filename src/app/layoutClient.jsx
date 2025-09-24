"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function LayoutClient({ children }) {

  const hiddenPaths = [
    '/login'
  ]

  const pathname = usePathname();
  const showHeader = hiddenPaths.includes(pathname)
  return (
    <div className="min-h-screen flex flex-col">
      {!showHeader && <Header />}
      <main className="flex-grow">{children}</main>
      { !showHeader && <Footer /> }
    </div>
  );
}

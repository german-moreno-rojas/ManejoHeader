import "./globals.css";
import LayoutClient from "./LayoutClient";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "UGMONK",
  description: "Tienda minimalista de ropa y objetos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <LayoutClient>{children}</LayoutClient>
        </CartProvider>
      </body>
    </html>
  );
}

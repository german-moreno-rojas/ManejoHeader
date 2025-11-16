import "./globals.css";
import { CartProvider } from "../context/CartContext";
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "UGMONK",
  description: "Tienda minimalista de ropa y objetos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </CartProvider>
      </body>
    </html>
  );
}

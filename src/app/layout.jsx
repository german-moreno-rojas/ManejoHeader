import "./globals.css";
import LayoutClient from "./layoutClient";

export const metadata = {
  title: "Navegación",
  description: "Proyecto con Header y navegación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}

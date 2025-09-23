import type { Metadata } from "next";
import "./globals.css";
import MobileOnly from "@/components/MobileOnly";

export const metadata: Metadata = {
  title: "Evento Maria Helena Amador - Gimnasio Moderno",
  description: "Experiencia móvil del evento Maria Helena Amador en el Gimnasio Moderno de Bogotá",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <MobileOnly>
          {children}
        </MobileOnly>
      </body>
    </html>
  );
}

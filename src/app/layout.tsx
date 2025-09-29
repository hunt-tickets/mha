import type { Metadata, Viewport } from "next";
import "./globals.css";
import MobileOnly from "@/components/MobileOnly";

export const metadata: Metadata = {
  title: "Evento Maria Helena Amador - Gimnasio Moderno",
  description: "Experiencia móvil del evento Maria Helena Amador en el Gimnasio Moderno de Bogotá",
  openGraph: {
    title: "Evento Maria Helena Amador - Gimnasio Moderno",
    description: "Experiencia móvil del evento Maria Helena Amador en el Gimnasio Moderno de Bogotá",
    images: [
      {
        url: "https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSpfOb0JZy37ZlNya9xog4ATiEeFXksuPmWSqV",
        width: 1200,
        height: 630,
        alt: "Evento Maria Helena Amador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evento Maria Helena Amador - Gimnasio Moderno",
    description: "Experiencia móvil del evento Maria Helena Amador en el Gimnasio Moderno de Bogotá",
    images: ["https://8qdflvbxjc.ufs.sh/f/Uou7Uf8rkNCSpfOb0JZy37ZlNya9xog4ATiEeFXksuPmWSqV"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
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

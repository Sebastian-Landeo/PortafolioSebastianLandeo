import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

// Tipografía 
const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Salcito Landing Page",
  description: "Landing Page hecho por Salcito",
};

// Este componente está diseñado para servir como 
// un contenedor de diseño para toda la aplicación.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
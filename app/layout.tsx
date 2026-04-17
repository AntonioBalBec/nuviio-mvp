import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Nuviio - Soluciones IoT Inteligentes",
  description: "Transformamos tu empresa con tecnología IoT de vanguardia. Monitoreo en tiempo real, análisis de datos y automatización inteligente.",
  keywords: ["IoT", "Internet of Things", "Automatización", "Monitoreo", "Tecnología"],
};

export const viewport: Viewport = {
  themeColor: "#ef4444",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

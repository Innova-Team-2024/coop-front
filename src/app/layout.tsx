import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Navbar, RouteLoader ,  Footer } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Cooperativa Telefónica De Grand Bourg y Pablo Nogués",
  description:
    "Servicios de Internet, IPTV y atención al cliente en Grand Bourg y Pablo Nogués. Sucursales abiertas de lunes a viernes de 8:30 a 16:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.variable}>
      <body className="antialiased bg-bgColorPageHome">
        <Navbar />
        <RouteLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

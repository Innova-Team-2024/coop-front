import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar, Footer } from "@/components"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cooperativa Telefónica De Grand Bourg y Pablo Nogués",
  description: "Servicios de Internet, IPTV y atención al cliente en Grand Bourg y Pablo Nogués. Sucursales abiertas de lunes a viernes de 8:30 a 16:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bgColorPageHome`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

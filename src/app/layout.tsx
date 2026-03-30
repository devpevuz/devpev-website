import type { Metadata } from "next";
import { IBM_Plex_Mono, Cutive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotBackground from "@/components/DotBackground";
import RouteBodyClass from "@/components/RouteBodyClass";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const cutive = Cutive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cutive",
});

export const metadata: Metadata = {
  title: "DevPev",
  description: "O'zbekistondagi ochiq dasturchilar jamiyati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${ibmPlexMono.variable} ${cutive.variable} antialiased`}>
        <RouteBodyClass />
        <DotBackground />
        <Navbar />
        <main className="pt-[90px] sm:pt-[130px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

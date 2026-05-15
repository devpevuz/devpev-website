import type { Metadata } from "next";
import { IBM_Plex_Mono, Cutive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotBackground from "@/components/DotBackground";
import RouteBodyClass from "@/components/RouteBodyClass";
import { LanguageProvider } from "@/lib/language-context";

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
    <html lang="uz" className="font-mono" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t!=='light'&&d)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className={`${ibmPlexMono.variable} ${cutive.variable} antialiased`}>
        <LanguageProvider>
          <RouteBodyClass />
          <DotBackground />
          <Navbar />
          <main className="pt-[130px] sm:pt-[170px]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

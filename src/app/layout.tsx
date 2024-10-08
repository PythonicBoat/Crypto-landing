import { Providers } from "./providers";
import type { Metadata } from "next";
import { Comic_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";

const comic_neue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--comic-neue",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
});

export const metadata: Metadata = {
  title: "CryptoBlitz",
  description: "MLSA KIIT | Crypto Trading event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-black font-comic ${comic_neue.variable} ${dm_sans.variable}`}
      >
        {" "}
        <Providers>
          <div className="overflow-hidden">
            <Nav />
            {children}
            <Footer />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}

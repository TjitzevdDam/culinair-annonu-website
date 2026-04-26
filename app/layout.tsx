import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://culinair-annonu.com"),
  title: {
    default: "Culinair AnnoNu — De Culinaire Regisseur voor Merken",
    template: "%s — Culinair AnnoNu",
  },
  description:
    "Wij produceren high-end brand events waarmee merken hun relaties verrassen en hun merk laden. Van concept tot uitvoering. Bewezen bij Penfolds, Gault&Millau, DPG Media en Gall&Gall.",
  keywords: [
    "high-end brand events",
    "brand events Nederland",
    "culinaire merkbeleving",
    "luxury events",
    "exclusieve events organiseren",
    "brand experience agency",
    "gastronomisch event",
    "brand dinner",
    "private chef",
  ],
  openGraph: {
    title: "Culinair AnnoNu — High-End Brand Events",
    description:
      "Wij produceren exclusieve culinaire ervaringen waarmee merken hun relaties verrassen en hun merk laden.",
    type: "website",
    locale: "nl_NL",
    url: "https://culinair-annonu.com",
    images: ["/images/24h-chefs.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-charcoal text-cream antialiased">
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import CookieBanner from "@/components/CookieBanner";

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

const SITE = "https://culinair-annonu.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Culinair AnnoNu — High-End Brand Events Nederland",
    template: "%s — Culinair AnnoNu",
  },
  description:
    "De culinaire regisseur voor merken. Wij produceren exclusieve high-end brand events van 15 tot 2000 gasten — bewezen bij Penfolds, Gault & Millau, DPG Media en Gall & Gall.",
  applicationName: "Culinair AnnoNu",
  authors: [{ name: "Tjitze van der Dam", url: `${SITE}/over-ons` }],
  creator: "Culinair AnnoNu B.V.",
  publisher: "Culinair AnnoNu B.V.",
  generator: "Next.js",
  category: "Brand Events",
  keywords: [
    "high-end brand events",
    "brand events Nederland",
    "luxury brand events",
    "culinaire brand events",
    "exclusieve events organiseren",
    "brand experience agency Nederland",
    "Culinair AnnoNu",
    "Tjitze van der Dam",
  ],
  alternates: {
    canonical: SITE,
    languages: {
      "nl-NL": SITE,
      "en-GB": `${SITE}/en`,
      "x-default": SITE,
    },
  },
  openGraph: {
    title: "Culinair AnnoNu — High-End Brand Events voor Merken",
    description:
      "De culinaire regisseur voor merken. Concept, productie en regie van exclusieve brand events.",
    type: "website",
    locale: "nl_NL",
    alternateLocale: ["en_GB"],
    url: SITE,
    siteName: "Culinair AnnoNu",
    images: [
      {
        url: "/images/24h-chefs.jpg",
        width: 1200,
        height: 800,
        alt: "Culinair AnnoNu — High-End Brand Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culinair AnnoNu — High-End Brand Events Nederland",
    description: "De culinaire regisseur voor merken.",
    images: ["/images/24h-chefs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { email: true, address: true, telephone: true },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E0E0E" },
    { media: "(prefers-color-scheme: light)", color: "#0E0E0E" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl-NL" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-charcoal text-cream antialiased">
        <CursorGlow />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

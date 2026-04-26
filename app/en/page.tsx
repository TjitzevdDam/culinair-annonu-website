import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandEventsLead from "@/components/BrandEventsLead";
import Manifesto from "@/components/Manifesto";
import CasesStrip from "@/components/CasesStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Cta from "@/components/Cta";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getDict, pathFor } from "@/lib/dict";

export const metadata: Metadata = {
  title: { absolute: "Culinair AnnoNu — High-End Brand Events Netherlands" },
  description:
    "The culinary director for brands. We produce exclusive high-end brand events from 15 to 2,000 guests — proven for Penfolds, Gault & Millau, DPG Media and Gall & Gall.",
  keywords: [
    "high-end brand events Netherlands",
    "luxury brand events Europe",
    "culinary brand events",
    "brand experience agency",
    "Tjitze van der Dam",
    "Culinair AnnoNu",
    "private chef Netherlands",
    "winemaker dinner",
  ],
  alternates: {
    canonical: "/en",
    languages: { "nl-NL": "/", "en-GB": "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Culinair AnnoNu — High-End Brand Events Netherlands",
    description:
      "The culinary director for brands. Concept, production and direction of exclusive brand events.",
    locale: "en_GB",
    alternateLocale: ["nl_NL"],
    url: "https://culinair-annonu.com/en",
    siteName: "Culinair AnnoNu",
    images: ["/images/24h-chefs.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culinair AnnoNu — High-End Brand Events Netherlands",
    description: "The culinary director for brands.",
    images: ["/images/24h-chefs.jpg"],
  },
};

export default function HomeEN() {
  const dict = getDict("en");
  const c = dict.ctaHome;
  return (
    <>
      <OrganizationJsonLd />
      <Hero dict={dict} locale="en" />
      <Marquee />
      <BrandEventsLead dict={dict} locale="en" />
      <CasesStrip dict={dict} locale="en" />
      <Manifesto dict={dict} />
      <ServicesGrid dict={dict} locale="en" />
      <Cta
        eyebrow={c.eyebrow}
        title={
          <>
            {c.titleA}{" "}
            <span className="italic gold-gradient-text">{c.titleAccent}</span>
          </>
        }
        body={c.body}
        ctaLabel={c.ctaLabel}
        ctaHref={pathFor("contact", "en")}
      />
    </>
  );
}

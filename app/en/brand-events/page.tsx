import type { Metadata } from "next";
import BrandEventsView from "@/components/pages/BrandEventsView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "High-End Brand Events Netherlands — Brand Dinners up to 2,000 Guests",
  description:
    "We produce high-end brand events for brands — from intimate chef's table for 15 leadership guests to gastronomic festivals for 2,000. Concept, production and direction under one roof.",
  keywords: [
    "high-end brand events",
    "luxury brand events Netherlands",
    "brand dinner",
    "chef's table event",
    "gastronomic festival",
    "brand experience agency",
  ],
  alternates: {
    canonical: "/en/brand-events",
    languages: {
      "nl-NL": "/brand-events",
      "en-GB": "/en/brand-events",
      "x-default": "/brand-events",
    },
  },
  openGraph: {
    title: "High-End Brand Events — Culinair AnnoNu",
    description:
      "From chef's table for 15 to festivals for 2,000. Concept, production and direction under one roof.",
    locale: "en_GB",
    images: ["/images/24h-chefs.jpg"],
  },
};

export default function BrandEventsEN() {
  return <BrandEventsView dict={getDict("en")} locale="en" />;
}

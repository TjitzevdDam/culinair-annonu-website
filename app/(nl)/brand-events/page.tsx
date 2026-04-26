import type { Metadata } from "next";
import BrandEventsView from "@/components/pages/BrandEventsView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "High-End Brand Events Nederland — Brand Dinners tot 2000 Gasten",
  description:
    "Wij produceren high-end brand events voor merken — van intieme chef's table voor 15 directieleden tot gastronomische festivals voor 2000 gasten. Concept, productie en regie onder één dak.",
  keywords: [
    "high-end brand events",
    "brand events Nederland",
    "luxury brand events",
    "brand dinner organiseren",
    "culinaire merkbeleving",
    "chef's table event",
    "gastronomisch festival",
    "brand experience agency",
  ],
  alternates: {
    canonical: "/brand-events",
    languages: {
      "nl-NL": "/brand-events",
      "en-GB": "/en/brand-events",
      "x-default": "/brand-events",
    },
  },
  openGraph: {
    title: "High-End Brand Events — Culinair AnnoNu",
    description:
      "Van chef's table voor 15 gasten tot festivals voor 2000. Concept, productie en regie onder één dak.",
    images: ["/images/24h-chefs.jpg"],
  },
};

export default function BrandEventsNL() {
  return <BrandEventsView dict={getDict("nl")} locale="nl" />;
}

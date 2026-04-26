import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Contact — Plan een Kennismaking",
  description:
    "Plan een kennismaking met Culinair AnnoNu. Conceptvoorstel binnen 5 werkdagen. Bezoekadres De Proefklas Zaandam, info@culinair-annonu.com, +31 6 19 15 09 28.",
  keywords: [
    "Culinair AnnoNu contact",
    "brand events offerte",
    "De Proefklas Zaandam",
    "kennismaking brand event",
    "conceptvoorstel brand events",
  ],
  alternates: {
    canonical: "/contact",
    languages: {
      "nl-NL": "/contact",
      "en-GB": "/en/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    title: "Contact — Culinair AnnoNu",
    description: "Plan een kennismaking. Conceptvoorstel binnen 5 werkdagen.",
    images: ["/images/gm-tivoli.jpg"],
  },
};

export default function ContactNL() {
  return <ContactView dict={getDict("nl")} locale="nl" />;
}

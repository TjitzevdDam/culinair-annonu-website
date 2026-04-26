import type { Metadata } from "next";
import ContactView from "@/components/pages/ContactView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Contact — Schedule an Introduction",
  description:
    "Schedule an introduction with Culinair AnnoNu. Concept proposal within 5 working days. De Proefklas Zaandam, info@culinair-annonu.com, +31 6 19 15 09 28.",
  keywords: [
    "Culinair AnnoNu contact",
    "brand events quote",
    "De Proefklas Zaandam",
    "concept proposal brand events",
  ],
  alternates: {
    canonical: "/en/contact",
    languages: {
      "nl-NL": "/contact",
      "en-GB": "/en/contact",
      "x-default": "/contact",
    },
  },
  openGraph: {
    title: "Contact — Culinair AnnoNu",
    description:
      "Schedule an introduction. Concept proposal within 5 working days.",
    locale: "en_GB",
    images: ["/images/gm-tivoli.jpg"],
  },
};

export default function ContactEN() {
  return <ContactView dict={getDict("en")} locale="en" />;
}

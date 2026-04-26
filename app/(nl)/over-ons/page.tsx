import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Over Ons — Tjitze van der Dam, Culinair Regisseur",
  description:
    "Culinair AnnoNu wordt geleid door Tjitze van der Dam. 25+ jaar culinaire regie, brand events voor duizenden gasten bij premium merken. Auteur van Spijs en Hollandse Klassiekers AnnoNu.",
  keywords: [
    "Tjitze van der Dam",
    "culinair regisseur",
    "Culinair AnnoNu over",
    "chef Tjitze",
    "kookboek Spijs",
    "Hollandse Klassiekers AnnoNu",
  ],
  alternates: {
    canonical: "/over-ons",
    languages: {
      "nl-NL": "/over-ons",
      "en-GB": "/en/about",
      "x-default": "/over-ons",
    },
  },
  openGraph: {
    title: "Over Tjitze van der Dam — Culinair AnnoNu",
    description:
      "25+ jaar culinaire regie. Events voor duizenden gasten bij premium merken in Nederland.",
    images: ["/images/tjitze-portrait.jpg"],
  },
};

export default function OverOnsNL() {
  return <AboutView dict={getDict("nl")} locale="nl" />;
}

import type { Metadata } from "next";
import CasesView from "@/components/pages/CasesView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Cases — Penfolds, Gault & Millau, DPG Media, Gall & Gall",
  description:
    "Bewezen bij premium merken. Bekijk onze cases: Penfolds Grange Dinner, 100Chefs by Gault & Millau, 24H Chefs, wijnmakersdiners en Gault & Millau gidslancering.",
  keywords: [
    "brand event cases Nederland",
    "Penfolds Grange Dinner",
    "100Chefs Gault Millau",
    "24H Chefs",
    "Gault Millau Gidslancering",
    "wijnmakersdiner",
    "DPG Media culinair",
    "premium brand events",
  ],
  alternates: {
    canonical: "/cases",
    languages: {
      "nl-NL": "/cases",
      "en-GB": "/en/cases",
      "x-default": "/cases",
    },
  },
  openGraph: {
    title: "Brand Event Cases — Culinair AnnoNu",
    description:
      "Bewezen bij Penfolds, Gault & Millau, DPG Media, Gall & Gall en meer.",
    images: ["/images/gm-zaal.jpg"],
  },
};

export default function CasesNL() {
  return <CasesView dict={getDict("nl")} locale="nl" />;
}

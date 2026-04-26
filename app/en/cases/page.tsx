import type { Metadata } from "next";
import CasesView from "@/components/pages/CasesView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Cases — Penfolds, Gault & Millau, DPG Media, Gall & Gall",
  description:
    "Proven for premium brands. View our cases: Penfolds Grange Dinner, 100Chefs by Gault & Millau, 24H Chefs, winemaker dinners and the Gault & Millau Guide launch.",
  keywords: [
    "brand event cases",
    "Penfolds Grange Dinner",
    "100Chefs Gault Millau",
    "24H Chefs",
    "winemaker dinner",
    "premium brand events Netherlands",
  ],
  alternates: {
    canonical: "/en/cases",
    languages: {
      "nl-NL": "/cases",
      "en-GB": "/en/cases",
      "x-default": "/cases",
    },
  },
  openGraph: {
    title: "Brand Event Cases — Culinair AnnoNu",
    description:
      "Proven for Penfolds, Gault & Millau, DPG Media, Gall & Gall and more.",
    locale: "en_GB",
    images: ["/images/gm-zaal.jpg"],
  },
};

export default function CasesEN() {
  return <CasesView dict={getDict("en")} locale="en" />;
}

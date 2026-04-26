import type { Metadata } from "next";
import AboutView from "@/components/pages/AboutView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "About — Tjitze van der Dam, Culinary Director",
  description:
    "Culinair AnnoNu is led by Tjitze van der Dam. 25+ years of culinary direction, hundreds of brand events for premium brands. Author of Spijs and Hollandse Klassiekers AnnoNu.",
  keywords: [
    "Tjitze van der Dam",
    "culinary director Netherlands",
    "Culinair AnnoNu about",
    "chef Tjitze",
    "cookbook Spijs",
    "Hollandse Klassiekers AnnoNu",
  ],
  alternates: {
    canonical: "/en/about",
    languages: {
      "nl-NL": "/over-ons",
      "en-GB": "/en/about",
      "x-default": "/over-ons",
    },
  },
  openGraph: {
    title: "About Tjitze van der Dam — Culinair AnnoNu",
    description:
      "25+ years of culinary direction, hundreds of brand events for premium brands.",
    locale: "en_GB",
    images: ["/images/tjitze-portrait.jpg"],
  },
};

export default function AboutEN() {
  return <AboutView dict={getDict("en")} locale="en" />;
}

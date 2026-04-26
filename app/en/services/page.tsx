import type { Metadata } from "next";
import ServicesView from "@/components/pages/ServicesView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Services — Brand Events, Private Chef, De Proefklas",
  description:
    "Brand events, private chef from 6 guests, De Proefklas Zaandam and multi-event partnerships. Four services, one director — for brands that want to charge their relations.",
  keywords: [
    "brand events Netherlands",
    "private chef Netherlands",
    "private chef Amsterdam",
    "De Proefklas Zaandam",
    "chef's table workshop",
    "multi-event partnership",
  ],
  alternates: {
    canonical: "/en/services",
    languages: {
      "nl-NL": "/diensten",
      "en-GB": "/en/services",
      "x-default": "/diensten",
    },
  },
  openGraph: {
    title: "Services — Culinair AnnoNu",
    description:
      "Four services, one director: Brand Events, Private Chef, De Proefklas and Multi-Event Partnership.",
    locale: "en_GB",
    images: ["/images/portret-3.jpg"],
  },
};

export default function ServicesEN() {
  return <ServicesView dict={getDict("en")} locale="en" />;
}

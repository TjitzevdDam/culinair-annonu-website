import type { Metadata } from "next";
import ServicesView from "@/components/pages/ServicesView";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: "Diensten — Brand Events, Private Chef, De Proefklas",
  description:
    "Brand events, private chef vanaf 6 personen, De Proefklas Zaandam en multi-event partnerships. Vier diensten, één regisseur — voor merken die culinair willen laden.",
  keywords: [
    "brand events Nederland",
    "private chef thuis",
    "private chef Amsterdam",
    "De Proefklas Zaandam",
    "chef's table workshop",
    "multi-event partnership",
    "culinaire diensten merken",
  ],
  alternates: {
    canonical: "/diensten",
    languages: {
      "nl-NL": "/diensten",
      "en-GB": "/en/services",
      "x-default": "/diensten",
    },
  },
  openGraph: {
    title: "Diensten — Culinair AnnoNu",
    description:
      "Vier diensten, één regisseur: Brand Events, Private Chef, De Proefklas en Multi-Event Partnership.",
    images: ["/images/portret-3.jpg"],
  },
};

export default function DienstenNL() {
  return <ServicesView dict={getDict("nl")} locale="nl" />;
}

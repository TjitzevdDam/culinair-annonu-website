import type { Metadata } from "next";
import OrderView from "@/components/pages/OrderView";
import { getDict } from "@/lib/dict";

const dict = getDict("nl");

export const metadata: Metadata = {
  title: dict.shop.page.metaTitle,
  description: dict.shop.page.metaDescription,
  alternates: {
    canonical: "/bestellen",
    languages: {
      "nl-NL": "/bestellen",
      "en-GB": "/en/order",
      "x-default": "/bestellen",
    },
  },
  openGraph: {
    title: dict.shop.page.metaTitle,
    description: dict.shop.page.metaDescription,
    images: [{ url: "/images/spijs-cover.jpg", width: 1200, height: 1600 }],
  },
};

export default function BestellenNL() {
  return <OrderView dict={getDict("nl")} locale="nl" />;
}

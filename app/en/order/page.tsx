import type { Metadata } from "next";
import OrderView from "@/components/pages/OrderView";
import { getDict } from "@/lib/dict";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.shop.page.metaTitle,
  description: dict.shop.page.metaDescription,
  alternates: {
    canonical: "/en/order",
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

export default function OrderEN() {
  return <OrderView dict={getDict("en")} locale="en" />;
}

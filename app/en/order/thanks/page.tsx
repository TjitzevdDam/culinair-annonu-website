import type { Metadata } from "next";
import OrderThanksView from "@/components/pages/OrderThanksView";
import { getDict } from "@/lib/dict";

const dict = getDict("en");

export const metadata: Metadata = {
  title: dict.shop.thanks.metaTitle,
  robots: { index: false, follow: false },
};

export default async function ThanksEN({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return <OrderThanksView dict={getDict("en")} locale="en" paymentId={id} />;
}

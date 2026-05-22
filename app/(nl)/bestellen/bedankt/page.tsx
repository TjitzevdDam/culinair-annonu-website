import type { Metadata } from "next";
import OrderThanksView from "@/components/pages/OrderThanksView";
import { getDict } from "@/lib/dict";

const dict = getDict("nl");

export const metadata: Metadata = {
  title: dict.shop.thanks.metaTitle,
  robots: { index: false, follow: false },
};

export default async function BedanktNL({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  return <OrderThanksView dict={getDict("nl")} locale="nl" paymentId={id} />;
}

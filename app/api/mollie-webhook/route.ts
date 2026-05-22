import { NextRequest } from "next/server";
import { getMollie } from "@/lib/mollie";
import {
  sendOrderNotification,
  sendCustomerConfirmation,
  type OrderDetails,
} from "@/lib/email";

export const dynamic = "force-dynamic";

// Mollie roept deze URL aan zodra een betaling van status verandert.
// Body is application/x-www-form-urlencoded met enkel "id=tr_xxx".
export async function POST(req: NextRequest) {
  let paymentId: string | null = null;
  try {
    const text = await req.text();
    paymentId = new URLSearchParams(text).get("id");
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  if (!paymentId) {
    return new Response("Missing payment id", { status: 400 });
  }

  try {
    const mollie = getMollie();
    const payment = await mollie.payments.get(paymentId);

    if (payment.status === "paid") {
      const m = (payment.metadata ?? {}) as Record<string, any>;
      const order: OrderDetails = {
        orderRef: m.orderRef ?? payment.id,
        product: m.product ?? "Spijs",
        quantity: Number(m.quantity) || 1,
        unitPrice: Number(m.unitPrice) || 0,
        shipping: Number(m.shipping) || 0,
        total: Number(m.total) || Number(payment.amount.value),
        customer: {
          name: m.customer?.name ?? "",
          email: m.customer?.email ?? "",
          phone: m.customer?.phone || undefined,
        },
        address: {
          street: m.address?.street ?? "",
          postalCode: m.address?.postalCode ?? "",
          city: m.address?.city ?? "",
          country: m.address?.country ?? "Nederland",
        },
        note: m.note || undefined,
        paymentId: payment.id,
        paymentMethod: payment.method ?? undefined,
        locale: m.locale === "en" ? "en" : "nl",
      };

      // Notificatie naar Tjitze — kritiek. Faalt dit, dan 500 zodat Mollie
      // het later opnieuw probeert.
      await sendOrderNotification(order);

      // Bevestiging naar de klant — best-effort.
      try {
        await sendCustomerConfirmation(order);
      } catch (e) {
        console.warn(
          "[mollie-webhook] klant-bevestiging niet verstuurd:",
          e,
        );
      }
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("[mollie-webhook] fout:", err);
    return new Response("Webhook error", { status: 500 });
  }
}

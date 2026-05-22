import { NextRequest, NextResponse } from "next/server";
import { getMollie } from "@/lib/mollie";
import { spijs, orderTotal } from "@/lib/shop";

export const dynamic = "force-dynamic";

function makeOrderRef(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 5; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return `CAN-${s}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const street = str(body.street);
  const postalCode = str(body.postalCode);
  const city = str(body.city);
  const country = str(body.country) || "Nederland";
  const note = str(body.note).slice(0, 400);
  const locale = str(body.locale) === "en" ? "en" : "nl";
  const quantity = Math.min(
    Math.max(parseInt(String(body.quantity), 10) || 1, 1),
    10,
  );

  // Validatie
  const errors: string[] = [];
  const tr = (nl: string, en: string) => (locale === "en" ? en : nl);
  if (name.length < 2) errors.push(tr("Vul je naam in.", "Please enter your name."));
  if (!EMAIL_RE.test(email))
    errors.push(tr("Vul een geldig e-mailadres in.", "Please enter a valid email."));
  if (street.length < 4)
    errors.push(tr("Vul je straat en huisnummer in.", "Please enter your street and number."));
  if (postalCode.length < 4)
    errors.push(tr("Vul je postcode in.", "Please enter your postal code."));
  if (city.length < 2) errors.push(tr("Vul je woonplaats in.", "Please enter your city."));
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  const { subtotal, shipping, total } = orderTotal(spijs.price, quantity);
  const orderRef = makeOrderRef();

  // Basis-URL afleiden uit de request (werkt op Vercel achter de proxy)
  const host = req.headers.get("host") ?? "";
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  const base = `${proto}://${host}`;
  const isLocal = host.includes("localhost") || host.startsWith("127.");

  // Locale-specifieke bedankpagina
  const thanksPath = locale === "en" ? "/en/order/thanks" : "/bestellen/bedankt";

  try {
    const mollie = getMollie();

    const payment = await mollie.payments.create({
      amount: { currency: "EUR", value: total.toFixed(2) },
      description: `Culinair AnnoNu — ${orderRef} — ${spijs.title} (${quantity}x)`,
      redirectUrl: `${base}${thanksPath}`,
      ...(isLocal ? {} : { webhookUrl: `${base}/api/mollie-webhook` }),
      metadata: {
        orderRef,
        product: spijs.title,
        quantity,
        unitPrice: spijs.price,
        subtotal,
        shipping,
        total,
        customer: { name, email, phone },
        address: { street, postalCode, city, country },
        note,
        locale,
        source: "culinair-annonu.com",
      },
    });

    // redirectUrl bijwerken zodat de bedankpagina de betaalstatus kan tonen
    try {
      await mollie.payments.update(payment.id, {
        redirectUrl: `${base}${thanksPath}?id=${payment.id}`,
      });
    } catch {
      // Niet kritiek — de bedankpagina valt terug op een algemene boodschap.
    }

    const checkoutUrl = payment.getCheckoutUrl();
    if (!checkoutUrl) {
      return NextResponse.json(
        {
          error: tr(
            "Kon geen betaling starten. Probeer het later opnieuw.",
            "Could not start the payment. Please try again later.",
          ),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ checkoutUrl, orderRef });
  } catch (err) {
    console.error("[checkout] Mollie-fout:", err);
    return NextResponse.json(
      {
        error: tr(
          "De betaalkoppeling is nog niet geconfigureerd of niet bereikbaar.",
          "The payment service is not configured or unreachable.",
        ),
      },
      { status: 500 },
    );
  }
}

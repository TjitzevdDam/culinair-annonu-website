import { formatPrice } from "./shop";

export type OrderDetails = {
  orderRef: string;
  product: string;
  quantity: number;
  unitPrice: number;
  shipping: number;
  total: number;
  customer: { name: string; email: string; phone?: string };
  address: { street: string; postalCode: string; city: string; country: string };
  note?: string;
  paymentId?: string;
  paymentMethod?: string;
  locale?: "nl" | "en";
};

// E-mail loopt via Brevo (gratis tier: 300 mails/dag). Geen npm-package nodig —
// we praten rechtstreeks met de Brevo transactional-email API.
const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const NOTIFY =
  process.env.ORDER_NOTIFICATION_EMAIL || "hallo@tjitzevanderdam.com";

// "Naam <email>" of alleen "email" → { name, email }
function parseSender(raw: string): { name: string; email: string } {
  const m = raw.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (m) return { name: m[1] || "Culinair AnnoNu", email: m[2].trim() };
  return { name: "Culinair AnnoNu", email: raw.trim() };
}

async function sendViaBrevo(opts: {
  to: { email: string; name?: string };
  subject: string;
  html: string;
  replyTo?: { email: string; name?: string };
}): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error(
      "BREVO_API_KEY ontbreekt. Zet deze in Vercel → Settings → Environment Variables.",
    );
  }
  const sender = parseSender(
    process.env.ORDER_FROM_EMAIL ||
      "Culinair AnnoNu <info@culinair-annonu.com>",
  );

  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender,
      to: [opts.to],
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
      subject: opts.subject,
      htmlContent: opts.html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Brevo-fout ${res.status}: ${body}`);
  }
}

// Charcoal + gold thematische wrapper — in lijn met de Culinair AnnoNu-site.
const wrap = (inner: string) => `
<div style="font-family:Georgia,'Times New Roman',serif;background:#0E0E0E;padding:32px 0;color:#F5F0E8;">
  <div style="max-width:560px;margin:0 auto;background:#1A1A1A;border:1px solid rgba(196,149,106,0.25);">
    <div style="background:#0E0E0E;padding:28px 32px;border-bottom:1px solid rgba(196,149,106,0.3);">
      <div style="font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#C4956A;margin-bottom:8px;">Culinair AnnoNu</div>
      <div style="font-size:22px;letter-spacing:-0.02em;color:#FAF6F1;">De culinaire regisseur voor merken</div>
    </div>
    <div style="padding:32px;color:#F5F0E8;font-size:15px;line-height:1.65;">
      ${inner}
    </div>
    <div style="padding:18px 32px;background:#0E0E0E;border-top:1px solid rgba(196,149,106,0.2);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:rgba(245,240,232,0.45);">
      Culinair AnnoNu B.V. · Zaandam
    </div>
  </div>
</div>`;

function addressBlock(o: OrderDetails): string {
  return `
    <strong style="color:#FAF6F1;">${o.customer.name}</strong><br/>
    ${o.address.street}<br/>
    ${o.address.postalCode} ${o.address.city}<br/>
    ${o.address.country}<br/>
    <a href="mailto:${o.customer.email}" style="color:#C4956A;text-decoration:none;">${o.customer.email}</a>
    ${o.customer.phone ? `<br/>${o.customer.phone}` : ""}`;
}

function orderTable(o: OrderDetails, locale: "nl" | "en" = "nl"): string {
  const shippingLabel = locale === "en" ? "Shipping" : "Verzendkosten";
  const totalLabel = locale === "en" ? "Total paid" : "Totaal betaald";
  return `
  <table style="width:100%;border-collapse:collapse;margin:8px 0 20px;font-size:14px;color:#F5F0E8;">
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid rgba(196,149,106,0.2);">${o.product} &times; ${o.quantity}</td>
      <td style="padding:8px 0;border-bottom:1px solid rgba(196,149,106,0.2);text-align:right;">${formatPrice(o.unitPrice * o.quantity, locale)}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid rgba(196,149,106,0.2);">${shippingLabel}</td>
      <td style="padding:8px 0;border-bottom:1px solid rgba(196,149,106,0.2);text-align:right;">${formatPrice(o.shipping, locale)}</td>
    </tr>
    <tr>
      <td style="padding:10px 0;font-weight:bold;color:#C4956A;">${totalLabel}</td>
      <td style="padding:10px 0;font-weight:bold;color:#C4956A;text-align:right;">${formatPrice(o.total, locale)}</td>
    </tr>
  </table>`;
}

/** Notificatie naar Tjitze: er moet een boek verstuurd worden. */
export async function sendOrderNotification(o: OrderDetails): Promise<void> {
  const locale = o.locale ?? "nl";
  const html = wrap(`
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4956A;">Nieuwe bestelling</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:400;color:#FAF6F1;letter-spacing:-0.01em;">Verstuur een boek &mdash; ${o.orderRef}</h1>
    <p style="margin:0 0 8px;">De betaling is binnen. Verstuur het volgende boek naar:</p>
    <div style="background:#0E0E0E;border-left:2px solid #C4956A;padding:16px 20px;margin:16px 0 22px;">
      ${addressBlock(o)}
    </div>
    ${orderTable(o, locale)}
    ${o.note ? `<p style="margin:0 0 16px;color:#F5F0E8;"><strong style="color:#C4956A;">Opmerking van de klant:</strong><br/>${o.note}</p>` : ""}
    <p style="margin:18px 0 0;font-size:12px;color:rgba(245,240,232,0.55);letter-spacing:0.05em;">
      Bestelreferentie: ${o.orderRef}${o.paymentId ? ` &middot; Mollie: ${o.paymentId}` : ""}${o.paymentMethod ? ` &middot; ${o.paymentMethod}` : ""} &middot; bron: culinair-annonu.com
    </p>
  `);

  await sendViaBrevo({
    to: { email: NOTIFY, name: "Tjitze van der Dam" },
    replyTo: { email: o.customer.email, name: o.customer.name },
    subject: `Nieuwe bestelling ${o.orderRef} — verstuur ${o.product}`,
    html,
  });
}

/** Bevestiging naar de klant — bilingual op basis van order.locale */
export async function sendCustomerConfirmation(o: OrderDetails): Promise<void> {
  const locale = o.locale ?? "nl";
  const firstName = o.customer.name.split(" ")[0];
  const subject =
    locale === "en"
      ? `Thank you for your order — ${o.product}`
      : `Bedankt voor je bestelling — ${o.product}`;
  const inner =
    locale === "en"
      ? `
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4956A;">Confirmation</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:400;color:#FAF6F1;letter-spacing:-0.01em;">Thank you, ${firstName}.</h1>
    <p style="margin:0 0 16px;">Your payment has been received and your order is in. We'll ship your book as soon as possible to:</p>
    <div style="background:#0E0E0E;border-left:2px solid #C4956A;padding:16px 20px;margin:0 0 22px;">
      ${addressBlock(o)}
    </div>
    ${orderTable(o, "en")}
    <p style="margin:0 0 16px;">Questions about your order? Email us at
      <a href="mailto:info@culinair-annonu.com" style="color:#C4956A;text-decoration:none;">info@culinair-annonu.com</a>.</p>
    <p style="margin:0;color:#F5F0E8;">Best,<br/>Culinair AnnoNu</p>
    <p style="margin:18px 0 0;font-size:12px;color:rgba(245,240,232,0.55);">Order reference: ${o.orderRef}</p>
  `
      : `
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#C4956A;">Bevestiging</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:400;color:#FAF6F1;letter-spacing:-0.01em;">Bedankt voor je bestelling, ${firstName}.</h1>
    <p style="margin:0 0 16px;">Je betaling is gelukt en je bestelling is bij ons binnen. We versturen je boek zo snel mogelijk naar:</p>
    <div style="background:#0E0E0E;border-left:2px solid #C4956A;padding:16px 20px;margin:0 0 22px;">
      ${addressBlock(o)}
    </div>
    ${orderTable(o, "nl")}
    <p style="margin:0 0 16px;">Vragen over je bestelling? Mail gerust naar
      <a href="mailto:info@culinair-annonu.com" style="color:#C4956A;text-decoration:none;">info@culinair-annonu.com</a>.</p>
    <p style="margin:0;color:#F5F0E8;">Culinaire groet,<br/>Culinair AnnoNu</p>
    <p style="margin:18px 0 0;font-size:12px;color:rgba(245,240,232,0.55);">Bestelreferentie: ${o.orderRef}</p>
  `;

  await sendViaBrevo({
    to: { email: o.customer.email, name: o.customer.name },
    subject,
    html: wrap(inner),
  });
}

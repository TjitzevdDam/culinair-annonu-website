# Webshop-koppeling — Culinair AnnoNu

Identieke opzet als tjitzevanderdam.com, gestileerd in Culinair AnnoNu's
charcoal/gold/Playfair-aesthetiek. Tweetalig: NL op `/bestellen`, EN op
`/en/order`.

## Vaste maandkosten: € 0

| Onderdeel | Kosten |
|-----------|--------|
| Mollie | € 0/maand · alleen € 0,32 per iDEAL-transactie |
| Brevo | € 0/maand · gratis tier 300 mails/dag (gedeeld met Tjitze-site) |
| Vercel | € 0/maand · gratis tier |

## Architectuur

```
Klant → /bestellen of /en/order
      → POST /api/checkout (Mollie payment)
      → Mollie betaalpagina (iDEAL / creditcard / Bancontact / …)
      → /bestellen/bedankt of /en/order/thanks (status check)

Mollie → POST /api/mollie-webhook bij status-verandering
       → Bij 'paid':
         · sendOrderNotification → hallo@tjitzevanderdam.com (verzendadres)
         · sendCustomerConfirmation → klant
```

Geen database — alle bestelgegevens reizen mee in de Mollie-payment metadata.

## Setup — environment variables in Vercel

Vercel → project **culinair-annonu-website** → Settings → Environment
Variables. Voeg toe (voor Production + Preview + Development):

| Naam | Waarde |
|------|--------|
| `MOLLIE_API_KEY` | `live_...` van je Mollie-account (zelfde mag, of aparte website) |
| `BREVO_API_KEY` | Nieuwe key uit het Culinair AnnoNu Brevo-account |
| `ORDER_NOTIFICATION_EMAIL` | `hallo@tjitzevanderdam.com` |
| `ORDER_FROM_EMAIL` | `Culinair AnnoNu <info@culinair-annonu.com>` |

Daarna **Deployments → ⋯ → Redeploy**.

## Tweetalig

Routes en teksten zitten in `lib/dict.ts`:

- `paths.bestellen.nl` = `/bestellen`
- `paths.bestellen.en` = `/en/order`
- `dict.shop.callout` — homepage strip
- `dict.shop.page` — bestelpagina
- `dict.shop.form` — formulier-labels
- `dict.shop.thanks` — bedankt-pagina statussen

Beide locales versturen mails in de juiste taal (NL voor NL-bestelling,
EN voor EN-bestelling) — bepaald door `metadata.locale` in de Mollie-payment.

## Wat er is

- `lib/shop.ts` — product Spijs + verzendkosten
- `lib/mollie.ts` — Mollie-client
- `lib/email.ts` — Brevo-mailing (NL + EN templates)
- `app/api/checkout/route.ts` — payment creatie
- `app/api/mollie-webhook/route.ts` — webhook handler
- `components/OrderForm.tsx` — gestileerd formulier (charcoal + gold)
- `components/BookCallout.tsx` — homepage strip (boek-cover + bestel-CTA)
- `components/pages/OrderView.tsx` — bestelpagina (tweetalig)
- `components/pages/OrderThanksView.tsx` — bedankt-pagina met status

## Prijzen aanpassen

`lib/shop.ts`:
- `spijs.price` — € 32,50
- `shop.shippingCost` — € 4,95 (zet op `0` voor gratis verzending)

## Testen

Met `MOLLIE_API_KEY=test_...`:
1. Bestelling op `/bestellen` of `/en/order` plaatsen
2. In Mollie-testomgeving kiezen voor "Paid"
3. Beide mails moeten aankomen (notificatie + bevestiging)
4. Vervang door `live_...` zodra het werkt

## Brevo deelt limiet met Tjitze-site

Het Brevo gratis-plan geeft 300 mails/dag voor het **hele account**. Beide
sites delen dat budget, maar tezamen blijf je daar makkelijk onder bij normaal
boekverkoop-volume. Wil je later splitsen, dan maak je een tweede Brevo-account.

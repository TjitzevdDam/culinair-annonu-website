// Shop-configuratie — Mollie-betaalkoppeling voor het kookboek Spijs.
// Identiek opgezet aan de Tjitze van der Dam-site (zelfde Mollie + Brevo).

import type { Locale } from "./dict";

export const shop = {
  currency: "EUR" as const,
  // Verzendkosten per bestelling (Nederland). Zet op 0 voor gratis verzending.
  shippingCost: 4.95,
};

export type Product = {
  id: string;
  title: string;
  subtitle: { nl: string; en: string };
  price: number;
  cover: string;
  blurb: { nl: string; en: string };
  highlights: { nl: string[]; en: string[] };
};

export const spijs: Product = {
  id: "spijs",
  title: "Spijs",
  subtitle: {
    nl: "Het kookboek van Tjitze van der Dam",
    en: "The cookbook by Tjitze van der Dam",
  },
  price: 32.5,
  cover: "/images/spijs-cover.jpg",
  blurb: {
    nl: "Wat in een professionele keuken vanzelfsprekend is, uitgelegd voor wie thuis échte stappen wil zetten. Hardcover, uitgegeven 2024.",
    en: "What is second nature in a professional kitchen, laid out for anyone who wants to take real steps at home. Hardcover, published 2024.",
  },
  highlights: {
    nl: [
      "Klassieke technieken, helder uitgelegd",
      "Recepten met seizoens-verantwoording",
      "Hardcover · uitgegeven 2024",
    ],
    en: [
      "Classical techniques, clearly explained",
      "Recipes grounded in the seasons",
      "Hardcover · published 2024",
    ],
  },
};

export function productSubtitle(p: Product, locale: Locale): string {
  return p.subtitle[locale];
}
export function productBlurb(p: Product, locale: Locale): string {
  return p.blurb[locale];
}
export function productHighlights(p: Product, locale: Locale): string[] {
  return p.highlights[locale];
}

// Formatteer een bedrag als Nederlandse euro-notatie: 32.5 -> "€32,50" (NL)
// of als € 32.50 (EN).
export function formatPrice(amount: number, locale: Locale = "nl"): string {
  if (locale === "en") {
    return `€${amount.toFixed(2)}`;
  }
  return "€" + amount.toFixed(2).replace(".", ",");
}

// Bereken het totaal van een bestelling.
export function orderTotal(
  unitPrice: number,
  quantity: number,
): {
  subtotal: number;
  shipping: number;
  total: number;
} {
  const subtotal = unitPrice * quantity;
  const shipping = shop.shippingCost;
  return { subtotal, shipping, total: subtotal + shipping };
}

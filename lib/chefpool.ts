// Chefpool private dinners — gedeeld tussen formulier en API-route.

export const NATIONWIDE = "Heel Nederland";

export const PROVINCES = [
  "Groningen",
  "Friesland",
  "Drenthe",
  "Overijssel",
  "Flevoland",
  "Gelderland",
  "Utrecht",
  "Noord-Holland",
  "Zuid-Holland",
  "Zeeland",
  "Noord-Brabant",
  "Limburg",
] as const;

export const REGIONS: string[] = [...PROVINCES, NATIONWIDE];

export type ChefpoolSignup = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  email: string;
  phone: string;
  /** wa.me-link, zodat Flora de chef direct in WhatsApp kan openen. */
  whatsapp: string;
  regions: string[];
};

/** 06 12345678 / +31 6 ... / 0031 6 ... → https://wa.me/31612345678 */
export function whatsappLink(phone: string): string {
  let digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) digits = digits.slice(1);
  else if (digits.startsWith("00")) digits = digits.slice(2);
  else if (digits.startsWith("0")) digits = `31${digits.slice(1)}`;
  digits = digits.replace(/\D/g, "");
  return digits.length >= 10 ? `https://wa.me/${digits}` : "";
}

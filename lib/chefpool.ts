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
  email: string;
  website: string;
  activeRegions: string[];
  wantedRegions: string[];
};

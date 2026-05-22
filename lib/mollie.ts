import { createMollieClient, type MollieClient } from "@mollie/api-client";

let cached: MollieClient | null = null;

/**
 * Mollie-client. Vereist de environment variable MOLLIE_API_KEY
 * (test_xxx tijdens testen, live_xxx voor productie).
 */
export function getMollie(): MollieClient {
  const apiKey = process.env.MOLLIE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "MOLLIE_API_KEY ontbreekt. Zet deze in Vercel → Settings → Environment Variables.",
    );
  }
  if (!cached) {
    cached = createMollieClient({ apiKey });
  }
  return cached;
}

export function isMollieConfigured(): boolean {
  return Boolean(process.env.MOLLIE_API_KEY);
}

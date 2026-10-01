import { NextRequest, NextResponse } from "next/server";
import { REGIONS, type ChefpoolSignup } from "@/lib/chefpool";
import { sendChefpoolNotification } from "@/lib/email";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max = 200): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function regions(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return REGIONS.filter((r) => v.includes(r));
}

function normalizeUrl(raw: string): string {
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith("@")) return `https://www.instagram.com/${raw.slice(1)}`;
  return `https://${raw}`;
}

// Google Sheet koppeling: een Apps Script web-app (zie
// scripts/chefpool-apps-script.gs) die elke aanmelding als rij toevoegt.
async function appendToSheet(c: ChefpoolSignup): Promise<void> {
  const url = process.env.CHEFPOOL_SHEET_WEBHOOK_URL;
  if (!url) throw new Error("CHEFPOOL_SHEET_WEBHOOK_URL ontbreekt");
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(c),
    redirect: "follow",
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) {
    throw new Error(`Sheet-fout ${res.status}: ${JSON.stringify(data)}`);
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot: bots vullen dit verborgen veld in, mensen niet.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const signup: ChefpoolSignup = {
    name: str(body.name, 120),
    email: str(body.email, 160),
    website: normalizeUrl(str(body.website, 200)),
    activeRegions: regions(body.activeRegions),
    wantedRegions: regions(body.wantedRegions),
  };

  const errors: string[] = [];
  if (signup.name.length < 2) errors.push("Vul je naam in.");
  if (!EMAIL_RE.test(signup.email)) errors.push("Vul een geldig e-mailadres in.");
  if (signup.activeRegions.length === 0)
    errors.push("Kies minimaal één regio waar je nu actief bent.");
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  // Sheet en mail los van elkaar: lukt één van de twee, dan is de aanmelding binnen.
  const [sheet, mail] = await Promise.allSettled([
    appendToSheet(signup),
    sendChefpoolNotification(signup),
  ]);
  if (sheet.status === "rejected") console.error("[chefpool] sheet:", sheet.reason);
  if (mail.status === "rejected") console.error("[chefpool] mail:", mail.reason);

  if (sheet.status === "rejected" && mail.status === "rejected") {
    return NextResponse.json(
      {
        error:
          "Je aanmelding kon niet worden verstuurd. Mail je gegevens naar info@culinair-annonu.com.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

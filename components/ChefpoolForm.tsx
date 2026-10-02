"use client";

import { useState } from "react";
import { REGIONS, NATIONWIDE } from "@/lib/chefpool";

const inputClass =
  "w-full bg-charcoal/60 border border-white/15 rounded-md px-4 py-3 text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all duration-300";

const labelClass =
  "block text-[11px] tracking-[0.28em] uppercase text-cream/65 mb-2";

function toggle(list: string[], region: string): string[] {
  if (list.includes(region)) return list.filter((r) => r !== region);
  // "Heel Nederland" sluit losse provincies uit, en andersom.
  if (region === NATIONWIDE) return [NATIONWIDE];
  return [...list.filter((r) => r !== NATIONWIDE), region];
}

function Field({
  id,
  label,
  className = "",
  ...input
}: {
  id: string;
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input id={id} name={id} required className={inputClass} {...input} />
    </div>
  );
}

export default function ChefpoolForm() {
  const [regions, setRegions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [doneName, setDoneName] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (regions.length === 0) {
      setError("Kies minimaal één provincie waar je diners wilt verzorgen.");
      return;
    }
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    try {
      const res = await fetch("/api/chefpool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          street: fd.get("street"),
          postalCode: fd.get("postalCode"),
          city: fd.get("city"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          company: fd.get("company"),
          regions,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Er ging iets mis. Probeer het opnieuw.");
        setLoading(false);
        return;
      }
      setDoneName(name.trim().split(" ")[0] || name);
    } catch {
      setError("Geen verbinding. Controleer je internet en probeer het opnieuw.");
      setLoading(false);
    }
  }

  if (doneName !== null) {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-xl text-gold">
          ✓
        </div>
        <h3 className="mt-6 font-display text-3xl text-cream md:text-4xl">
          Dank je wel, <span className="italic gold-gradient-text">{doneName}.</span>
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/65 md:text-base">
          Je aanmelding is binnen. We nemen contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field
        id="name"
        label="Naam *"
        type="text"
        autoComplete="name"
        placeholder="Voor- en achternaam"
      />

      <Field
        id="street"
        label="Adres *"
        type="text"
        autoComplete="street-address"
        placeholder="Straat en huisnummer"
      />

      <div className="grid gap-4 sm:grid-cols-[2fr_3fr]">
        <Field
          id="postalCode"
          label="Postcode *"
          type="text"
          autoComplete="postal-code"
          placeholder="1234 AB"
        />
        <Field
          id="city"
          label="Woonplaats *"
          type="text"
          autoComplete="address-level2"
          placeholder="Woonplaats"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="email"
          label="E-mailadres *"
          type="email"
          autoComplete="email"
          placeholder="naam@voorbeeld.nl"
        />
        <Field
          id="phone"
          label="Telefoonnummer *"
          type="tel"
          autoComplete="tel"
          placeholder="06 12345678"
        />
      </div>

      <fieldset>
        <legend className={labelClass}>
          In welke provincies wil je diners verzorgen? *
        </legend>
        <p className="-mt-1 mb-3 text-xs text-cream/45">Kies er zoveel als je wilt.</p>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((r) => {
            const on = regions.includes(r);
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => setRegions((prev) => toggle(prev, r))}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  on
                    ? "border-gold bg-gold text-charcoal"
                    : "border-white/15 text-cream/75 hover:border-gold/60 hover:text-cream"
                } ${r === NATIONWIDE ? "font-medium" : ""}`}
              >
                {r}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Honeypot: onzichtbaar voor mensen */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Bedrijf</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-charcoal border-r-transparent" />
            Versturen
          </>
        ) : (
          <>
            Aanmelden voor de chefpool
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] leading-relaxed tracking-[0.12em] text-cream/45">
        We gebruiken je gegevens alleen voor de chefpool: om contact met je op te
        nemen en diners met je af te stemmen via WhatsApp.
      </p>
    </form>
  );
}

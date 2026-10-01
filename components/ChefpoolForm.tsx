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

function RegionPicker({
  legend,
  hint,
  value,
  onChange,
}: {
  legend: string;
  hint?: string;
  value: string[];
  onChange: (next: string[]) => void;
}) {
  return (
    <fieldset>
      <legend className={labelClass}>{legend}</legend>
      {hint && <p className="-mt-1 mb-3 text-xs text-cream/45">{hint}</p>}
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((r) => {
          const on = value.includes(r);
          return (
            <button
              key={r}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(toggle(value, r))}
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
  );
}

export default function ChefpoolForm() {
  const [active, setActive] = useState<string[]>([]);
  const [wanted, setWanted] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [doneName, setDoneName] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (active.length === 0) {
      setError("Kies minimaal één regio waar je nu actief bent.");
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
          email: fd.get("email"),
          website: fd.get("website"),
          company: fd.get("company"),
          activeRegions: active,
          wantedRegions: wanted,
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
          Je aanmelding is binnen. We nemen contact met je op voor een
          kennismaking.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
      <div>
        <label htmlFor="name" className={labelClass}>
          Naam *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Voor- en achternaam"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mailadres *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="naam@voorbeeld.nl"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="website" className={labelClass}>
            Website
          </label>
          <input
            id="website"
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="www.jouwsite.nl of @instagram"
            className={inputClass}
          />
        </div>
      </div>

      <RegionPicker
        legend="Waar ben je nu actief? *"
        value={active}
        onChange={setActive}
      />

      <RegionPicker
        legend="Waar wil je (ook) koken?"
        hint="Optioneel. Kies de regio's waar je naast je huidige werkgebied graag kookt."
        value={wanted}
        onChange={setWanted}
      />

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
        We gebruiken je gegevens alleen om contact met je op te nemen over de
        chefpool.
      </p>
    </form>
  );
}

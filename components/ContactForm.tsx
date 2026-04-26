"use client";

import { useState } from "react";

const eventTypes = [
  { value: "", label: "Selecteer een dienst..." },
  { value: "brand-event", label: "Brand Event" },
  { value: "private-chef", label: "Private Chef" },
  { value: "proefklas", label: "De Proefklas" },
  { value: "multi-event", label: "Multi-Event Partnership" },
  { value: "anders", label: "Anders / Weet ik nog niet" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-sm border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-12 text-center">
        <div className="font-display text-4xl text-cream md:text-5xl">
          Bedankt voor uw bericht.
        </div>
        <p className="mt-6 max-w-md text-cream/70">
          Wij nemen binnen 24 uur contact met u op met een eerste reactie en —
          indien passend — een conceptvoorstel binnen 5 werkdagen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Voornaam" name="firstName" required />
        <Field label="Achternaam" name="lastName" required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Bedrijf / Merk" name="company" />
      </div>
      <div>
        <label className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-cream/60">
          Type event
        </label>
        <select
          name="eventType"
          className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3.5 text-cream outline-none transition-colors focus:border-gold/60"
        >
          {eventTypes.map((t) => (
            <option key={t.value} value={t.value} className="bg-charcoal">
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-cream/60">
          Vertel ons over uw plannen <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Uw merk, het gewenste aantal gasten, de gelegenheid…"
          className="w-full resize-none rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3.5 text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-gold/60"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
      >
        Verstuur aanvraag
        <span className="transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-cream/60"
      >
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3.5 text-cream outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}

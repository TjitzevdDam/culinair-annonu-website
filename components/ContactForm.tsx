"use client";

import { useState } from "react";
import type { Dict } from "@/lib/dict";

export default function ContactForm({ dict }: { dict: Dict }) {
  const t = dict.contactPage.form;
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-sm border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-12 text-center">
        <div className="font-display text-4xl text-cream md:text-5xl">
          {t.thankTitle}
        </div>
        <p className="mt-6 max-w-md text-cream/70">{t.thankBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t.firstName} name="firstName" required />
        <Field label={t.lastName} name="lastName" required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t.email} name="email" type="email" required />
        <Field label={t.company} name="company" />
      </div>
      <div>
        <label className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-cream/60">
          {t.eventType}
        </label>
        <select
          name="eventType"
          className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3.5 text-cream outline-none transition-colors focus:border-gold/60"
        >
          {t.eventTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-charcoal">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-3 block text-[11px] uppercase tracking-[0.28em] text-cream/60">
          {t.message} <span className="text-gold">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          className="w-full resize-none rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3.5 text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-gold/60"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
      >
        {t.submit}
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

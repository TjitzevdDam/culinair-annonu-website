"use client";

import { useState } from "react";
import {
  type Product,
  orderTotal,
  formatPrice,
  productSubtitle,
} from "@/lib/shop";
import type { Dict, Locale } from "@/lib/dict";

const inputClass =
  "w-full bg-charcoal/60 border border-white/15 rounded-md px-4 py-3 text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/40 transition-all duration-300";

const labelClass =
  "block text-[11px] tracking-[0.28em] uppercase text-cream/65 mb-2";

export default function OrderForm({
  product,
  dict,
  locale,
}: {
  product: Product;
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.shop.form;
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { subtotal, shipping, total } = orderTotal(product.price, quantity);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      street: fd.get("street"),
      postalCode: fd.get("postalCode"),
      city: fd.get("city"),
      country: fd.get("country"),
      note: fd.get("note"),
      quantity,
      locale,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t.errors.generic);
        setLoading(false);
        return;
      }
      window.location.href = data.checkoutUrl;
    } catch {
      setError(t.errors.network);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          {t.labels.name} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t.placeholders.name}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.labels.email} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.placeholders.email}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.labels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.placeholders.phone}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="street" className={labelClass}>
          {t.labels.street} *
        </label>
        <input
          id="street"
          name="street"
          type="text"
          required
          autoComplete="street-address"
          placeholder={t.placeholders.street}
          className={inputClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="postalCode" className={labelClass}>
            {t.labels.postalCode} *
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            required
            autoComplete="postal-code"
            placeholder={t.placeholders.postalCode}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            {t.labels.city} *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            placeholder={t.placeholders.city}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className={labelClass}>
            {t.labels.country}
          </label>
          <input
            id="country"
            name="country"
            type="text"
            defaultValue={t.defaultCountry}
            autoComplete="country-name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="quantity" className={labelClass}>
            {t.labels.quantity}
          </label>
          <select
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n} className="bg-charcoal text-cream">
                {n} {n === 1 ? t.qtySuffix.singular : t.qtySuffix.plural}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="note" className={labelClass}>
          {t.labels.note}
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          placeholder={t.placeholders.note}
          className={inputClass}
        />
      </div>

      {/* Prijsoverzicht */}
      <div className="border-t border-white/10 pt-6 space-y-2.5 text-sm text-cream/70">
        <div className="flex justify-between">
          <span>
            {product.title} <span className="text-cream/45">×</span> {quantity}
          </span>
          <span>{formatPrice(subtotal, locale)}</span>
        </div>
        <div className="flex justify-between">
          <span>{t.summary.shipping}</span>
          <span>{shipping === 0 ? t.summary.free : formatPrice(shipping, locale)}</span>
        </div>
        <div className="flex justify-between pt-3 font-display text-2xl text-cream">
          <span className="text-[11px] tracking-[0.28em] uppercase text-gold self-end mb-1">
            {t.summary.total}
          </span>
          <span>{formatPrice(total, locale)}</span>
        </div>
      </div>

      {error && (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="inline-block h-3 w-3 border-2 border-charcoal border-r-transparent rounded-full animate-spin" />
            {t.submitting}
          </>
        ) : (
          <>
            {t.submit} — {formatPrice(total, locale)}
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      <p className="text-[11px] tracking-[0.15em] text-cream/45 text-center leading-relaxed">
        {t.securityNote}
      </p>

      {/* Stille help-tekst (alleen voor screen readers / SEO) */}
      <span className="sr-only">{productSubtitle(product, locale)}</span>
    </form>
  );
}

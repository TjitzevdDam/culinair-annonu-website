import Link from "next/link";
import { getMollie, isMollieConfigured } from "@/lib/mollie";
import { pathFor, type Dict, type Locale } from "@/lib/dict";

type StatusKey = "paid" | "pending" | "failed" | "unknown";

export default async function OrderThanksView({
  dict,
  locale,
  paymentId,
}: {
  dict: Dict;
  locale: Locale;
  paymentId?: string;
}) {
  let key: StatusKey = "unknown";
  if (paymentId && isMollieConfigured()) {
    try {
      const payment = await getMollie().payments.get(paymentId);
      const s = payment.status;
      if (s === "paid" || s === "authorized") key = "paid";
      else if (s === "open" || s === "pending") key = "pending";
      else if (s === "failed" || s === "canceled" || s === "expired")
        key = "failed";
    } catch {
      key = "unknown";
    }
  }

  const t = dict.shop.thanks;
  const view = t[key];

  return (
    <section className="relative isolate overflow-hidden bg-charcoal min-h-screen flex items-center pt-32 pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

      <div className="relative mx-auto max-w-[800px] px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
            {view.kicker}
          </span>
          <span className="h-px w-10 bg-gold" />
        </div>
        <h1 className="mt-8 font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.05] tracking-tightest text-cream text-balance">
          {view.titleA}{" "}
          <span className="italic gold-gradient-text">{view.titleAccent}</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-cream/70 leading-relaxed">
          {view.body}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {key === "failed" && (
            <Link
              href={pathFor("bestellen", locale)}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
            >
              {t.retry}
              <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
          <Link
            href={pathFor("home", locale)}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-cream transition-all duration-500 ease-soft hover:border-gold hover:text-gold-light"
          >
            {t.home}
          </Link>
        </div>
      </div>
    </section>
  );
}

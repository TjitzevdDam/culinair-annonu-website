"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { spijs, formatPrice } from "@/lib/shop";
import { type Dict, type Locale, pathFor } from "@/lib/dict";

export default function BookCallout({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.shop.callout;
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-28 md:py-36">
      {/* Atmospheric glow + grain */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-[720px] w-[720px] rounded-full bg-gold/12 blur-[180px]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-noise opacity-[0.04]" aria-hidden />

      <div className="relative mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:gap-20 lg:grid-cols-[300px_1fr]">
          {/* Boek-tilt */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, y: 30 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, y: -6 }}
            className="relative mx-auto lg:mx-0"
          >
            <Link
              href={pathFor("bestellen", locale)}
              className="block"
              aria-label={t.cta}
            >
              <div className="relative aspect-[3/4] w-[220px] md:w-[300px] shadow-[0_50px_140px_-40px_rgba(196,149,106,0.5)]">
                <Image
                  src={spijs.cover}
                  alt={`${spijs.title} — cover`}
                  fill
                  sizes="(max-width: 768px) 220px, 300px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-gold/25"
                />
              </div>
            </Link>
          </motion.div>

          {/* Content */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  {t.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-7 max-w-2xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[1.05] tracking-tightest text-cream text-balance">
                {t.titleA}{" "}
                <span className="italic gold-gradient-text">
                  {t.titleAccent}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                {t.body}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href={pathFor("bestellen", locale)}
                  className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
                >
                  {t.cta} — {formatPrice(spijs.price, locale)}
                  <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <span className="text-[11px] uppercase tracking-[0.28em] text-cream/45">
                  {t.note}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

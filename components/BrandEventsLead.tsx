"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";
import type { Dict, Locale } from "@/lib/dict";
import { pathFor } from "@/lib/dict";

export default function BrandEventsLead({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const t = dict.brandEventsLead;

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-charcoal-light py-28 md:py-40"
    >
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
      >
        <Image
          src="/images/gm-zaal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-light/85" />
      </motion.div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
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
              <h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-cream md:text-7xl text-balance">
                {t.titleA}{" "}
                <span className="italic gold-gradient-text">{t.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-cream/70 md:text-lg">
                {t.body}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href={pathFor("brandEvents", locale)}
                className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold-light transition-all hover:gap-4 hover:text-gold"
              >
                {t.cta}
                <span className="transition-transform">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="space-y-8">
            {t.pillars.map((p, i) => (
              <Reveal key={p.n} delay={0.15 + i * 0.1}>
                <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-charcoal/60 p-8 backdrop-blur-md transition-all duration-700 ease-soft hover:border-gold/60 hover:bg-charcoal">
                  <div className="absolute -top-12 -right-8 font-display text-[9rem] leading-none text-white/[0.04] transition-colors duration-700 group-hover:text-gold/15">
                    {p.n}
                  </div>
                  <div className="relative">
                    <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                      {p.n}
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-cream md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65 md:text-base">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

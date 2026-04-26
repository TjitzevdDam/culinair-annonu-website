"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";
import type { Dict } from "@/lib/dict";

export default function Manifesto({ dict }: { dict: Dict }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const t = dict.manifesto;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:grid-cols-[5fr_6fr] md:gap-24 md:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.div style={{ y: imgY }} className="absolute -inset-y-12 inset-x-0">
              <Image
                src="/images/tjitze-portrait.jpg"
                alt={t.portraitAlt}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-px -right-px h-24 w-24 border-b-2 border-r-2 border-gold" />
            <div className="absolute -top-px -left-px h-24 w-24 border-t-2 border-l-2 border-gold/40" />
          </div>
        </Reveal>

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
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
              {t.titleA}{" "}
              <span className="italic gold-gradient-text">{t.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              {t.body1}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              {t.body2}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:gap-12">
              {t.stats.map((s) => (
                <Stat key={s.label} number={s.number} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-gold md:text-5xl">{number}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/55">
        {label}
      </div>
    </div>
  );
}

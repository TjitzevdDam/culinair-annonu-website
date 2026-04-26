"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "./Reveal";

const cases = [
  {
    title: "Penfolds Grange Dinner",
    tag: "Brand Dinner",
    img: "/images/gerecht-tartaar.jpg",
    blurb:
      "Exclusief wijnmakers-diner rond de Penfolds Grange 2018. Een avond op het hoogste niveau voor relaties en pers.",
  },
  {
    title: "100Chefs by Gault & Millau",
    tag: "Grand Experience · 2000 gasten",
    img: "/images/100chefs.jpg",
    blurb:
      "100 chefs, 2000 gasten, 2 dagen Miele Experience Center. Het grootste gastronomische brand event van Nederland.",
  },
  {
    title: "Wijnmakersdiner",
    tag: "Brand Dinner",
    img: "/images/dinner-tafel.jpg",
    blurb:
      "Exclusief diner met de wijnmaker aan tafel. Het verhaal achter elke fles, vertaald in een gastronomisch parcours dat het merk laadt en relaties verrast.",
  },
  {
    title: "24H Chefs",
    tag: "Signature Event",
    img: "/images/24h-chefs-table.jpg",
    blurb:
      "Ons eigen signature event: 24 uur non-stop koken met de top van Nederland. Het bewijs van onze slagkracht.",
  },
];

export default function CasesStrip() {
  return (
    <section className="relative bg-charcoal py-28 md:py-40">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  Cases
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                Bewezen bij{" "}
                <span className="italic gold-gradient-text">
                  premium merken
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/cases"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.22em] text-cream transition-all duration-500 hover:border-gold hover:text-gold-light"
            >
              Alle cases
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <CaseCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  title,
  tag,
  img,
  blurb,
}: {
  title: string;
  tag: string;
  img: string;
  blurb: string;
}) {
  return (
    <motion.article
      whileHover="hover"
      className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal-light"
    >
      <motion.div
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      <motion.div
        variants={{
          hover: { opacity: 0.4 },
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-gold/30 mix-blend-overlay"
      />

      <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
        <span className="inline-flex w-fit rounded-full border border-gold/40 bg-charcoal/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-light backdrop-blur">
          {tag}
        </span>
        <h3 className="mt-5 font-display text-3xl leading-tight text-cream md:text-4xl text-balance">
          {title}
        </h3>
        <motion.p
          variants={{
            hover: { opacity: 1, y: 0 },
          }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-md text-sm leading-relaxed text-cream/80"
        >
          {blurb}
        </motion.p>
      </div>
    </motion.article>
  );
}

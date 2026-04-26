"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const rotatingWords = [
  "verrassen",
  "raken",
  "verbinden",
  "verbluffen",
  "laden",
];

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-charcoal pb-20 pt-40 md:pb-32"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <Image
          src="/images/24h-chefs.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1320px] px-6 md:px-10">
        <div className="fade-up flex items-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
            High-End Brand Events
          </span>
        </div>

        <h1 className="fade-up fade-up-delay-1 mt-8 max-w-5xl font-display text-[clamp(2.6rem,7vw,6.4rem)] font-medium leading-[1.02] tracking-tightest text-cream text-balance">
          Culinaire ervaringen
          <br />
          die uw merk
          <br />
          <RotatingWord words={rotatingWords} />
        </h1>

        <p className="fade-up fade-up-delay-3 mt-10 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          Concept, productie en regie — onder één dak. Wij ontwerpen culinaire
          merkmomenten waarmee u uw relaties verrast en uw merk op het hoogste
          niveau presenteert. Bewezen bij Penfolds, Gault&amp;Millau, DPG Media en
          Gall&amp;Gall.
        </p>

        <div className="fade-up fade-up-delay-4 mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
          >
            Bespreek uw event
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/cases"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm uppercase tracking-[0.18em] text-cream transition-all duration-500 ease-soft hover:border-gold hover:text-gold-light"
          >
            Bekijk cases
          </Link>
        </div>
      </div>

      <div className="fade-up fade-up-delay-6 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[10px] uppercase tracking-[0.42em] text-cream/50">
          Scroll
        </span>
        <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold via-gold/30 to-transparent" />
      </div>
    </section>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  const items = [...words, words[0]];
  const total = items.length;
  return (
    <span className="relative inline-flex h-[1.05em] min-w-[3ch] flex-col overflow-hidden align-baseline italic">
      <motion.span
        animate={{ y: items.map((_, i) => `-${(i * 100) / total}%`) }}
        transition={{
          duration: words.length * 2.6,
          times: items.map((_, i) => i / (total - 1)),
          repeat: Infinity,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="flex flex-col leading-[1.05]"
      >
        {items.map((word, i) => (
          <span
            key={i}
            className="block bg-gradient-to-br from-gold-light via-gold to-gold-dark bg-clip-text text-transparent"
          >
            {word}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

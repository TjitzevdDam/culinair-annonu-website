"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

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
                src="/images/private-chef.jpg"
                alt="Culinair regie — Tjitze van der Dam"
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
                Wie wij zijn
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
              Voor merken die{" "}
              <span className="italic gold-gradient-text">
                hoog mikken.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              Culinair AnnoNu bedenkt, produceert en levert exclusieve culinaire
              ervaringen waarmee merken hun relaties verrassen, hun merk laden en
              hun netwerk activeren. Onder creatieve leiding van{" "}
              <span className="text-cream">Tjitze van der Dam</span> combineren
              wij culinaire autoriteit met merkstrategie en totaalregie.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              Wij werken met topchefs, regisseren de avond van tafelschikking
              tot entertainment, en zorgen dat uw merk centraal staat. Niet als
              leverancier, maar als creatief partner.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <Stat number="25+" label="Jaar culinaire regie" />
              <Stat number="100+" label="Brand events" />
              <Stat number="50+" label="Premium merken" />
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

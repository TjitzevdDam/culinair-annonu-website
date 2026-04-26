import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "High-End Brand Events",
  description:
    "Wij produceren high-end brand events voor merken in Nederland. Van intieme chef's table voor 15 gasten tot festivals voor 2000 bezoekers — onze hoofddiscipline.",
};

const formats = [
  {
    title: "Brand Dinner",
    range: "15 – 60 gasten",
    desc: "Intieme chef's table of meergangendiner waarbij uw merk persoonlijk wordt geladen via verhaal, smaak en sfeer. Ideaal voor relatiebeheer, productlanceringen en VIP-introducties.",
  },
  {
    title: "Brand Experience",
    range: "60 – 300 gasten",
    desc: "Een immersive culinaire avond waarbij gasten meegenomen worden door een gecureerd parcours van smaken, momenten en activaties. Eén thema, één merk, één avond.",
  },
  {
    title: "Grand Experience",
    range: "300 – 2000 gasten",
    desc: "Festival-formaat. Meerdere chefs, meerdere zones, één regie. Bewezen bij 100Chefs by Gault & Millau en 24H Chefs.",
  },
];

const process = [
  {
    n: "01",
    title: "Briefing & strategie",
    text: "We beginnen niet bij het menu, maar bij uw merk. Wat moet de gast voelen? Wat moet hij doorvertellen? Welk merkverhaal moet centraal staan?",
  },
  {
    n: "02",
    title: "Concept & regie",
    text: "Wij vertalen die merkstrategie naar een culinair concept met chef, locatie, decor, sommelier, entertainment en tafelschikking. Eén regisseur, één draaiboek.",
  },
  {
    n: "03",
    title: "Productie",
    text: "Logistiek, vergunningen, leveranciers, decor, AV, personeel, content. Wij sturen het hele orkest aan zodat uw team zich op het merk kan richten.",
  },
  {
    n: "04",
    title: "Uitvoering & nazorg",
    text: "Op de avond zelf staat onze regie ernaast u. Na afloop volgen content, evaluatie en — bij multi-event partnerships — een doorlopend programma.",
  },
];

export default function BrandEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze hoofddiscipline"
        title={
          <>
            High-end <span className="italic gold-gradient-text">brand events</span>{" "}
            van concept tot applaus
          </>
        }
        intro="Wij zijn de culinaire regisseur voor merken die op het hoogste niveau willen spelen. Geen cateraar, geen eventbureau — een creatief partner met culinaire autoriteit, merkstrategie en totaalregie."
        image="/images/private-dinner.jpg"
      />

      <Marquee />

      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                    Formats
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                  Drie schaalformaten,{" "}
                  <span className="italic gold-gradient-text">één regie</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
                  Of het nu een diner voor 15 directieleden is of een festival
                  voor 2000 gasten — onze werkwijze blijft dezelfde: één
                  regisseur die het merk centraal stelt.
                </p>
              </Reveal>
            </div>

            <div className="space-y-px">
              {formats.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="group relative overflow-hidden border-t border-white/10 py-8 transition-colors duration-500 last:border-b">
                    <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12 md:items-baseline">
                      <div>
                        <h3 className="font-display text-2xl text-cream md:text-3xl">
                          {f.title}
                        </h3>
                        <span className="mt-2 inline-block text-xs uppercase tracking-[0.22em] text-gold">
                          {f.range}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-cream/70 md:text-base">
                        {f.desc}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 ease-soft group-hover:w-full" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-charcoal-light/40 py-28 md:py-40">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            src="/images/hero-action.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  Werkwijze
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                Vier fases,{" "}
                <span className="italic gold-gradient-text">één regisseur</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-white/[0.08] sm:grid-cols-2">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="group h-full bg-charcoal-light/80 p-10">
                  <div className="font-display text-5xl text-gold/40 transition-colors duration-500 group-hover:text-gold">
                    {p.n}
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-cream md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65 md:text-base">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title={
          <>
            Een idee voor uw merk?{" "}
            <span className="italic gold-gradient-text">Wij regisseren.</span>
          </>
        }
        body="Vertel ons over uw merk, uw doelgroep en de gelegenheid. Binnen 5 werkdagen leveren wij een conceptvoorstel."
        ctaLabel="Bespreek uw event"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Culinair AnnoNu is de culinaire regisseur voor merken in Nederland, onder leiding van Tjitze van der Dam. Wij combineren culinaire autoriteit met merkstrategie en totaalregie.",
};

const principles = [
  {
    title: "Concept eerst, menu later",
    text: "Wij beginnen niet bij ingrediënten of gerechten. We beginnen bij uw merk, uw doelgroep en het gevoel dat u wilt opwekken.",
  },
  {
    title: "Eén regie",
    text: "Geen losse leveranciers. Eén projectleider houdt locatie, chef, sommelier, decor en logistiek in handen.",
  },
  {
    title: "Culinaire autoriteit",
    text: "Tjitze werkt al 25+ jaar met de top van de Nederlandse gastronomie. Die autoriteit zit verweven in elk concept.",
  },
  {
    title: "Het merk centraal",
    text: "Wij zijn niet de ster van uw avond — uw merk wel. Ons werk lukt als gasten praten over u, niet over ons.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wie wij zijn"
        title={
          <>
            Geen cateraar.
            <br />
            Geen eventbureau.{" "}
            <span className="italic gold-gradient-text">Culinaire regie.</span>
          </>
        }
        intro="Culinair AnnoNu bedenkt, produceert en levert exclusieve culinaire ervaringen voor merken die op het hoogste niveau willen spelen."
        image="/images/private-chef.jpg"
      />

      <section className="bg-charcoal py-28 md:py-40">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-6 md:grid-cols-[5fr_6fr] md:gap-24 md:px-10">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/private-chef.jpg"
                alt="Tjitze van der Dam — Culinair Regisseur"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute -bottom-px -right-px h-24 w-24 border-b-2 border-r-2 border-gold" />
              <div className="absolute -top-px -left-px h-24 w-24 border-t-2 border-l-2 border-gold/40" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  Tjitze van der Dam
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                Culinair regisseur,{" "}
                <span className="italic gold-gradient-text">creatief partner</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-base leading-relaxed text-cream/75 md:text-lg">
                Tjitze van der Dam is oprichter en culinair regisseur van
                Culinair AnnoNu. Met 25+ jaar ervaring in de top van de
                Nederlandse gastronomie produceerde hij honderden brand events
                voor onder andere Penfolds, Gault & Millau, DPG Media, Gall &
                Gall en Landgoed de Salentein.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
                Hij combineert culinaire autoriteit met een scherp oog voor
                merkstrategie. Daarnaast is hij auteur van de kookboeken{" "}
                <em className="text-cream">Spijs</em> en{" "}
                <em className="text-cream">Hollandse Klassiekers AnnoNu</em>,
                bedenker van het signature event 24H Chefs en samenwerker bij
                100Chefs by Gault & Millau.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-light/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-gold">
                  Onze principes
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl text-balance">
                Vier principes,{" "}
                <span className="italic gold-gradient-text">één manier van werken</span>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="border-t border-white/10 pt-8">
                  <h3 className="font-display text-2xl text-cream md:text-3xl">
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
        eyebrow="Werken met ons"
        title={
          <>
            Een merk dat ons{" "}
            <span className="italic gold-gradient-text">interesseert?</span>
          </>
        }
        body="Wij werken alleen met merken waar we creatief mee uit de voeten kunnen. Vertel ons over uw ambitie."
      />
    </>
  );
}

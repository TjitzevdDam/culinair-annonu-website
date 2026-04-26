import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { CasesJsonLd, BreadcrumbsJsonLd } from "@/components/JsonLd";

const SITE = "https://culinair-annonu.com";

export const metadata: Metadata = {
  title: "Cases — Penfolds, Gault & Millau, DPG Media, Gall & Gall",
  description:
    "Bewezen bij premium merken. Bekijk onze cases: Penfolds Grange Dinner, 100Chefs by Gault & Millau, 24H Chefs, wijnmakersdiners en Gault & Millau gidslancering.",
  keywords: [
    "brand event cases Nederland",
    "Penfolds Grange Dinner",
    "100Chefs Gault Millau",
    "24H Chefs",
    "Gault Millau Gidslancering",
    "wijnmakersdiner",
    "DPG Media culinair",
    "premium brand events",
  ],
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Brand Event Cases — Culinair AnnoNu",
    description:
      "Bewezen bij Penfolds, Gault & Millau, DPG Media, Gall & Gall en meer.",
    url: `${SITE}/cases`,
    images: ["/images/gm-zaal.jpg"],
  },
};

const cases = [
  {
    title: "Penfolds Grange Dinner",
    tag: "Brand Dinner",
    img: "/images/gerecht-tartaar.jpg",
    blurb:
      "Exclusief wijnmakers-diner rond de Penfolds Grange 2018. Topchef, sommelier en een avond die het merk op het hoogste niveau presenteerde aan relaties en pers.",
  },
  {
    title: "100Chefs by Gault & Millau",
    tag: "Grand Experience · 2000 gasten",
    img: "/images/100chefs.jpg",
    blurb:
      "100 chefs, 2000 gasten, 2 dagen in het Miele Experience Center. Het grootste gastronomische brand event van Nederland — volledig door ons geproduceerd.",
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
      "Ons eigen signature event: 24 uur non-stop koken met de beste chefs van Nederland. Jaarlijks het bewijs van onze culinaire slagkracht en creatieve ambitie.",
  },
  {
    title: "Gault & Millau Gidslancering",
    tag: "Brand Event · Gidslancering",
    img: "/images/gm-winnaars.jpg",
    blurb:
      "De jaarlijkse lancering van de Gault & Millau Gids. Culinaire regie van het evenement waar de top van de Nederlandse gastronomie samenkomt.",
  },
  {
    title: "DPG Media & JOE Radio",
    tag: "Multi-Event Partnership",
    img: "/images/gerecht.jpg",
    blurb:
      "Doorlopend culinair programma voor DPG Media en JOE Radio. Van branded content tot live culinaire events bij radioshows en mediaproducties.",
  },
];

export default function CasesPage() {
  return (
    <>
      <CasesJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: SITE },
          { name: "Cases", url: `${SITE}/cases` },
        ]}
      />
      <PageHero
        eyebrow="Ons werk"
        title={
          <>
            Bewezen bij{" "}
            <span className="italic gold-gradient-text">premium merken</span>
          </>
        }
        intro="Een selectie van de culinaire brand events die wij hebben geproduceerd. Van intieme chef's tables tot grootschalige gastronomische festivals."
        image="/images/gm-zaal.jpg"
      />

      <section className="bg-charcoal py-28 md:py-32">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="space-y-24 md:space-y-32">
            {cases.map((c, i) => (
              <article
                key={c.title}
                className={`grid gap-10 md:grid-cols-2 md:gap-16 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1500ms] ease-soft hover:scale-105"
                    />
                    <div className="absolute -bottom-px -right-px h-20 w-20 border-b-2 border-r-2 border-gold/60" />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div>
                    <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-light">
                      {c.tag}
                    </span>
                    <h2 className="mt-6 font-display text-3xl leading-[1.05] tracking-tight text-cream md:text-5xl text-balance">
                      {c.title}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                      {c.blurb}
                    </p>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title={
          <>
            Uw merk{" "}
            <span className="italic gold-gradient-text">hier?</span>
          </>
        }
        body="Wij bedenken graag een concept dat past bij uw merk en doelgroep. Laten we kennismaken."
      />
    </>
  );
}

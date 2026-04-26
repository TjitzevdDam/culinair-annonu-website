import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Brand events, private chef, De Proefklas en multi-event partnerships. De diensten van Culinair AnnoNu — de culinaire regisseur voor merken.",
};

const services = [
  {
    id: "brand-events",
    n: "01",
    title: "Brand Events",
    eyebrow: "Onze hoofddiscipline",
    text: "De kern van wat wij doen. Wij produceren culinaire evenementen waarmee merken als Penfolds, Gault&Millau en Nestlé hun relaties verrassen en hun merkidentiteit versterken — van intiem diner voor 15 gasten tot grootschalig festival voor 2000 bezoekers.",
    bullets: ["Concept", "Locatie", "Chef", "Entertainment", "Styling", "Totaalregie"],
    cta: { href: "/brand-events", label: "Lees meer over Brand Events" },
  },
  {
    id: "private-chef",
    n: "02",
    title: "Private Chef",
    eyebrow: "Vanaf 6 personen",
    text: "Wij transformeren uw locatie tot een exclusief restaurant. Chef Tjitze of een van onze private chefs komt naar u toe voor een gastronomisch meergangendiner dat nergens anders te ervaren is. Inclusief sommelier en bediening.",
    bullets: ["Op locatie", "Meerdere gangen", "Sommelier", "Bediening"],
  },
  {
    id: "proefklas",
    n: "03",
    title: "De Proefklas",
    eyebrow: "Onze culinaire locatie in Zaandam",
    text: "Een inspirerende ruimte voor workshops, Chef's Table diners en creatieve sessies. De perfecte setting voor intieme brand events tot 25 gasten. Eerder ingezet door Gall & Gall en Landgoed de Salentein.",
    bullets: ["Workshops", "Chef's Table", "Teambuilding", "Productlancering"],
  },
  {
    id: "partnership",
    n: "04",
    title: "Multi-Event Partnership",
    eyebrow: "Voor structurele inzet",
    text: "Voor merken die culinaire beleving structureel willen inzetten — zoals onze samenwerking met DPG Media en JOE Radio. Een doorlopend programma van events, content en ervaringen die uw merk het hele jaar laden.",
    bullets: ["Jaarprogramma", "Contentstrategie", "Merkactivatie", "ROI-tracking"],
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        eyebrow="Wat wij leveren"
        title={
          <>
            Totaalregie, van{" "}
            <span className="italic gold-gradient-text">concept</span> tot applaus
          </>
        }
        intro="Wij bedenken het concept, regisseren de avond, en zorgen dat elk detail bijdraagt aan uw merkbeleving. Vier diensten, één regisseur."
        image="/images/private-chef.jpg"
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] space-y-24 px-6 md:space-y-32 md:px-10">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article
                id={s.id}
                className={`scroll-mt-32 grid gap-10 md:grid-cols-[3fr_5fr] md:gap-16 md:items-start ${
                  i === 0
                    ? "rounded-sm border border-gold/30 bg-gradient-to-br from-gold/5 via-transparent to-transparent p-8 md:p-12"
                    : ""
                }`}
              >
                <div>
                  <div className="font-display text-7xl text-gold/30 md:text-8xl">
                    {s.n}
                  </div>
                  <div className="mt-6 text-[11px] uppercase tracking-[0.32em] text-gold">
                    {s.eyebrow}
                  </div>
                  <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-cream md:text-5xl text-balance">
                    {s.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
                    {s.text}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/75"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold-light transition-all hover:gap-5"
                    >
                      {s.cta.label}
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Cta
        title={
          <>
            Klaar om uw merk{" "}
            <span className="italic gold-gradient-text">culinair te laden?</span>
          </>
        }
        body="Vertel ons over uw merk, uw doelgroep en wat u wilt bereiken. Wij komen met een concept dat past bij uw ambitie."
      />
    </>
  );
}

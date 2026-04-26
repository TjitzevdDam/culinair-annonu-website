import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandEventsLead from "@/components/BrandEventsLead";
import Manifesto from "@/components/Manifesto";
import CasesStrip from "@/components/CasesStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Cta from "@/components/Cta";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { getDict } from "@/lib/dict";

export const metadata: Metadata = {
  title: { absolute: "Culinair AnnoNu — High-End Brand Events Nederland" },
  description:
    "De culinaire regisseur voor merken in Nederland. Wij produceren exclusieve brand events van 15 tot 2000 gasten — bewezen bij Penfolds, Gault & Millau, DPG Media en Gall & Gall.",
  alternates: {
    canonical: "/",
    languages: { "nl-NL": "/", "en-GB": "/en", "x-default": "/" },
  },
};

export default function HomeNL() {
  const dict = getDict("nl");
  const c = dict.ctaHome;
  return (
    <>
      <OrganizationJsonLd />
      <Hero dict={dict} locale="nl" />
      <Marquee />
      <BrandEventsLead dict={dict} locale="nl" />
      <CasesStrip dict={dict} locale="nl" />
      <Manifesto dict={dict} />
      <ServicesGrid dict={dict} locale="nl" />
      <Cta
        eyebrow={c.eyebrow}
        title={
          <>
            {c.titleA}{" "}
            <span className="italic gold-gradient-text">{c.titleAccent}</span>
          </>
        }
        body={c.body}
        ctaLabel={c.ctaLabel}
        ctaHref="/contact"
      />
    </>
  );
}

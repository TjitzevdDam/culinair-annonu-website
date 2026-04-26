import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "General terms and conditions of Culinair AnnoNu B.V.",
  alternates: { canonical: "/en/terms" },
  robots: { index: false, follow: true },
};

export default function TermsEN() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms &amp; conditions</>}
        intro="Text follows. For questions: info@culinair-annonu.com."
      />
      <section className="bg-charcoal py-20" />
    </>
  );
}

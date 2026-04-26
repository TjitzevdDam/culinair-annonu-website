import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy of Culinair AnnoNu B.V.",
  alternates: { canonical: "/en/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyEN() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy</>}
        intro="Text follows. For privacy questions: info@culinair-annonu.com."
      />
      <section className="bg-charcoal py-20" />
    </>
  );
}

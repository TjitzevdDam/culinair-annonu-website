import Image from "next/image";
import Link from "next/link";
import type { Dict, Locale } from "@/lib/dict";
import { pathFor } from "@/lib/dict";

const socials = [
  {
    href: "https://www.instagram.com/culinairannonu",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/culinair-annonu/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/culinairannonu",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const t = dict.footer;
  const sitemap = [
    { href: pathFor("brandEvents", locale), label: dict.nav.brandEvents },
    { href: pathFor("cases", locale), label: dict.nav.cases },
    { href: pathFor("services", locale), label: dict.nav.services },
    { href: pathFor("about", locale), label: dict.nav.about },
    { href: pathFor("contact", locale), label: dict.nav.contact },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-charcoal text-cream/70">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 md:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={pathFor("home", locale)} className="inline-flex items-center" aria-label="Culinair AnnoNu">
              <Image
                src="/images/logo-gold.png"
                alt="Culinair AnnoNu"
                width={80}
                height={80}
                className="h-16 w-16"
              />
            </Link>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-cream/90">
              {t.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/55">
              {t.blurb}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-gold">
              {t.navHeading}
            </h4>
            <ul className="mt-6 space-y-3">
              {sitemap.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-gold">
              {t.addressHeading}
            </h4>
            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              {t.addressVenue}
              {t.addressLines.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-6 text-sm">
              <a
                href="mailto:info@culinair-annonu.com"
                className="text-cream/85 transition-colors hover:text-gold-light"
              >
                info@culinair-annonu.com
              </a>
              <br />
              <a
                href="tel:+31619150928"
                className="text-cream/85 transition-colors hover:text-gold-light"
              >
                +31 6 19 15 09 28
              </a>
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-all hover:border-gold hover:text-gold-light"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Culinair AnnoNu B.V. — {t.legalSuffix}</p>
          <div className="flex items-center gap-5">
            <Link href={pathFor("privacy", locale)} className="hover:text-gold-light">
              {t.privacy}
            </Link>
            <Link href={pathFor("terms", locale)} className="hover:text-gold-light">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

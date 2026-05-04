"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "culinair-annonu-cookie-consent";

const TEXT = {
  nl: {
    title: "Cookies & privacy",
    body:
      "We gebruiken functionele cookies om de site te laten werken en geanonimiseerde statistieken bij te houden — geen trackers, geen advertenties.",
    accept: "Accepteren",
    reject: "Alleen noodzakelijke",
    more: "Lees ons privacybeleid",
    privacyHref: "/privacy",
  },
  en: {
    title: "Cookies & privacy",
    body:
      "We use functional cookies to make the site work and to keep anonymised statistics — no trackers, no ads.",
    accept: "Accept",
    reject: "Necessary only",
    more: "Read our privacy policy",
    privacyHref: "/en/privacy",
  },
} as const;

type Choice = "accepted" | "rejected";

export default function CookieBanner() {
  const [locale, setLocale] = useState<"nl" | "en">("nl");
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    setLocale(path === "/en" || path.startsWith("/en/") ? "en" : "nl");

    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    if (saved) return;

    // delay zodat de banner niet meteen ploft op load
    const t = window.setTimeout(() => setShow(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  const choose = (choice: Choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setClosing(true);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: choice }),
    );
    window.setTimeout(() => setShow(false), 350);
  };

  if (!show) return null;
  const t = TEXT[locale];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className={`fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 transition-all duration-500 ease-soft md:px-6 md:pb-6 ${
        closing
          ? "translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={{
        animation: closing
          ? undefined
          : "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      <div className="mx-auto flex max-w-[1100px] flex-col gap-5 rounded-sm border border-white/10 bg-charcoal-light/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl md:flex-row md:items-center md:gap-8 md:p-6">
        <div className="flex-1">
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
              <circle cx="9" cy="9" r="0.9" fill="currentColor" />
              <circle cx="15" cy="13" r="0.9" fill="currentColor" />
              <circle cx="11" cy="16" r="0.9" fill="currentColor" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
              {t.title}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/75">
            {t.body}{" "}
            <Link
              href={t.privacyHref}
              className="text-gold-light underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
            >
              {t.more}
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border border-white/15 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-cream/85 transition-all duration-500 ease-soft hover:border-gold/50 hover:text-gold-light"
          >
            {t.reject}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition-all duration-500 ease-soft hover:bg-gold-light"
          >
            {t.accept}
            <span className="transition-transform duration-500 ease-soft group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

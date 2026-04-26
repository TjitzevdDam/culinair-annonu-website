"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "/brand-events", label: "Brand Events" },
  { href: "/cases", label: "Cases" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl py-3 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center group" aria-label="Culinair AnnoNu">
          <Image
            src="/images/logo-gold.png"
            alt="Culinair AnnoNu"
            width={64}
            height={64}
            priority
            className="h-12 w-12 transition-transform duration-500 ease-soft group-hover:scale-105 md:h-14 md:w-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[13px] uppercase tracking-[0.22em] text-cream/80 transition-colors duration-300 hover:text-cream"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-soft ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full border border-gold/50 px-5 py-2.5 text-[12px] uppercase tracking-[0.22em] text-gold-light transition-all duration-500 ease-soft hover:bg-gold hover:text-charcoal hover:border-gold lg:inline-block"
          >
            Plan een gesprek
          </Link>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
          >
            <span
              className={`relative block h-px w-5 bg-cream transition-all ${
                open ? "translate-y-[3px] rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-px w-5 bg-cream transition-all ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden"
          >
            <div className="mx-6 mt-4 rounded-2xl border border-white/10 bg-charcoal-light/95 p-6 backdrop-blur-xl">
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-lg font-display text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

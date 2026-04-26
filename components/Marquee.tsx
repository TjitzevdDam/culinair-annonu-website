const clients = [
  "Penfolds",
  "Gault & Millau",
  "DPG Media",
  "Gall & Gall",
  "Nestlé",
  "JOE Radio",
  "Landgoed de Salentein",
  "24H Chefs",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-charcoal-light/40 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-charcoal to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap will-change-transform">
        {[...clients, ...clients].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-16 font-display text-2xl tracking-tight text-cream/55 md:text-3xl"
          >
            <span>{c}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
          </div>
        ))}
      </div>
    </section>
  );
}

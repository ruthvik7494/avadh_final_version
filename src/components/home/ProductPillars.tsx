import backdrop from "@/assets/pillars-backdrop.jpg";

const PILLARS = [
  {
    name: "Dehydrated Fruits",
    descriptor: "Sun-kissed sweetness, naturally preserved.",
    no: "I",
  },
  {
    name: "Dehydrated Vegetables",
    descriptor: "Garden-fresh nutrition, year-round ready.",
    no: "II",
  },
  {
    name: "Cold-Pressed Oils",
    descriptor: "Wooden-pressed in the traditional way.",
    no: "III",
  },
  {
    name: "Jaggery & Condiments",
    descriptor: "Pure cane sweetness, ancestral craft.",
    no: "IV",
  },
];

export function ProductPillars() {
  return (
    <section id="pillars" className="relative pt-12 pb-32 md:pt-16 md:pb-44 overflow-hidden">
      {/* Subtle backdrop image */}
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <img
          src={backdrop}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow">The Collection</p>
          <span className="hairline mt-5 mb-8 block mx-auto" aria-hidden />
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
            Four pillars.
            <br />
            <em className="italic gold-text">One uncompromising standard.</em>
          </h2>
          <p className="mt-8 text-ivory-muted text-sm md:text-base leading-relaxed">
            From wooden cold presses to vacuum slow-frying, every A-VADH product
            honours the integrity of its source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
          {PILLARS.map((p) => (
            <article
              key={p.name}
              className="group relative bg-background p-10 lg:p-12 transition-all duration-700 hover:bg-onyx-elevated"
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-display italic text-2xl gold-text">{p.no}</span>
                <span className="label-caps text-ivory-muted/70">A-Vadh</span>
              </div>

              <div className="min-h-[140px] flex flex-col justify-end">
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {p.name}
                </h3>
                <p className="mt-4 text-sm text-ivory-muted leading-relaxed">
                  {p.descriptor}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="label-caps">Explore</span>
                <span className="hairline" aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPLICATIONS = [
  {
    no: "I",
    title: "Disaster Relief & Humanitarian Aid",
    body: "Lightweight, long-shelf-life nutrition for refugee camps, war zones, and famine response.",
  },
  {
    no: "II",
    title: "Defense, Expedition & Space Nutrition",
    body: "Energy-dense, freeze-thaw stable rations for armed forces, mountaineers, and research missions.",
  },
  {
    no: "III",
    title: "Institutional & Long-Shelf Supply",
    body: "Hospitals, schools, prisons, and corporate kitchens — bulk nutrition with batch consistency.",
  },
];

export function CriticalApplications() {
  return (
    <section id="applications" className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="absolute inset-0 glow-soft opacity-50" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow">Critical Applications</p>
          <span className="hairline mt-5 mb-10 block mx-auto" aria-hidden />
          <blockquote className="font-display italic text-2xl md:text-4xl lg:text-[2.5rem] leading-[1.3] text-foreground">
            “At A-VADH, we don't just produce hygienic food —
            <br className="hidden md:block" />
            we <span className="gold-text not-italic font-display">manufacture resilience.</span>”
          </blockquote>
          <p className="mt-10 text-ivory-muted text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mission-ready resources that support healthcare, defense, space
            exploration, and humanitarian aid — powered from a purpose-built
            unit in rural Ayodhya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/40 max-w-6xl mx-auto">
          {APPLICATIONS.map((a) => (
            <article
              key={a.title}
              className="bg-background p-10 lg:p-12 group hover:bg-onyx-elevated transition-colors duration-500"
            >
              <div className="font-display italic text-3xl md:text-4xl gold-text mb-8">
                {a.no}
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground leading-snug min-h-[3rem]">
                {a.title}
              </h3>
              <span className="block mt-6 mb-6 hairline opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
              <p className="text-sm text-ivory-muted leading-relaxed">{a.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#footer" className="ghost-gold-btn">
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  );
}

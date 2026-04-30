const PILLARS = [
  {
    title: "Hygiene Protocols",
    body: "Pharma-grade cleanliness across every step of production.",
  },
  {
    title: "Chemical & Cruelty-Free",
    body: "No synthetic additives. Compassion at every stage.",
  },
  {
    title: "AI-Powered Quality Control",
    body: "Computer-vision inspection of every batch we ship.",
  },
  {
    title: "Batch Traceability",
    body: "From farm to fork — every jar tells its own story.",
  },
];

const CERTS = ["FSSAI", "ISO", "APEDA", "USDA Organic", "Fair Trade"];

export function TrustQuality() {
  return (
    <section id="trust" className="relative py-32 md:py-44 px-6 bg-onyx-elevated/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow">Trust & Quality</p>
          <span className="hairline mt-5 mb-8 block mx-auto" aria-hidden />
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
            A <em className="italic gold-text">farm-to-fork</em>
            <br />
            integrity system.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="bg-background p-8 lg:p-10 group hover:bg-onyx-elevated transition-colors duration-500"
            >
              <div className="font-display italic text-xl gold-text mb-8">
                0{i + 1}
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground leading-snug">
                {p.title}
              </h3>
              <span className="block mt-5 mb-5 hairline opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
              <p className="text-sm text-ivory-muted leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-20 pt-12 border-t border-border/40 text-center">
          <p className="eyebrow mb-6">Certified & Compliant</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {CERTS.map((c, i) => (
              <span key={c} className="flex items-center gap-x-10">
                <span className="label-caps text-ivory-muted">{c}</span>
                {i < CERTS.length - 1 && (
                  <span className="hidden md:inline text-border" aria-hidden>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

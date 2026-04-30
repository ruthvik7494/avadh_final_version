import { Link } from "@tanstack/react-router";
import ethosHeritage from "@/assets/ethos-heritage.jpg";

export function BrandEthos() {
  return (
    <section id="ethos" className="relative pt-16 pb-12 md:pt-20 md:pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="eyebrow">What is A-VADH?</p>
          <span className="hairline mt-5 mb-8 block" aria-hidden />
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-foreground">
            Born of an ancient land.
            <br />
            <em className="italic gold-text">Made for the modern table.</em>
          </h2>

          <div className="mt-10 space-y-6 text-ivory-muted leading-relaxed text-[0.95rem] max-w-lg">
            <p>
              A-VADH is more than a name. It is a promise — drawn from the
              sacred soil of Ayodhya, refined through generations of craft, and
              held to a single uncompromising standard: purity.
            </p>
            <p>
              Every jar, every bottle, every grain that leaves our facility
              carries that promise. No artificial preservatives. No shortcuts.
              No compromise.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <Link
              to="/about"
              className="label-caps text-gold hover:text-gold-soft transition-colors duration-300 inline-flex items-center gap-3"
            >
              Our Story <span aria-hidden>→</span>
            </Link>
            <span className="hairline" aria-hidden />
          </div>
        </div>

        {/* Image — heritage editorial */}
        <div className="order-1 md:order-2 relative">
          <div className="relative max-w-md mx-auto aspect-[3/4] overflow-hidden">
            <div className="absolute -inset-12 glow-soft" aria-hidden />
            <img
              src={ethosHeritage}
              alt="Hands cradling sun-dried grains and vegetables at sunrise, with Ayodhya temple silhouette and marigold petals — heritage of A-VADH"
              className="relative w-full h-full object-cover"
              width={1080}
              height={1440}
              loading="lazy"
            />
            {/* Subtle gold border frame */}
            <div className="absolute inset-0 ring-1 ring-gold/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

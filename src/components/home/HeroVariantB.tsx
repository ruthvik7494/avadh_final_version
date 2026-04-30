import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-split.jpg";

/**
 * Variant B — Magazine split-screen.
 * Image on the right (mustard fields → cold-pressed oil), text panel on the left.
 */
export function HeroVariantB() {
  return (
    <section className="relative min-h-[85vh] grid md:grid-cols-[1.5fr_1fr] overflow-hidden bg-onyx">
      <div className="relative flex items-start px-6 md:px-12 lg:px-20 pt-16 md:pt-32 pb-16 order-2 md:order-1">
        <div className="max-w-3xl w-full">
          <p className="eyebrow reveal-up">Pure as Avadh</p>
          <span className="hairline mt-6 mb-8 hairline-draw block" aria-hidden />
          <h1 className="font-display text-[2.5rem] sm:text-3xl md:text-4xl lg:text-[4rem] leading-[1.05] reveal-up reveal-up-d1">
            From sacred soil to your <em className="italic gold-text">table.</em>
          </h1>
          <p className="mt-8 text-ivory-muted leading-relaxed reveal-up reveal-up-d2">
            Cold-pressed oils, pure jaggery, and slow-dried produce —
            sourced from the farms of rural Ayodhya, kept whole and honest.
          </p>

          <div className="mt-10 reveal-up reveal-up-d3">
            <Link to="/shop" className="ghost-gold-btn">
              Shop the Collection
            </Link>
          </div>

          {/* Decorative meta strip */}
          <div className="mt-16 hidden md:flex items-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">
            <span>Est. Ayodhya</span>
            <span className="hairline" aria-hidden />
            <span>FSSAI · ISO · APEDA</span>
          </div>
        </div>
      </div>

      {/* RIGHT — image */}
      <div className="relative order-1 md:order-2 min-h-[55vh] md:min-h-screen">
        <img
          src={heroImage}
          alt="Sunrise over the mustard fields of rural Ayodhya transitioning into golden cold-pressed mustard oil pouring from a glass bottle"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Subtle edge blend — keep the warm sunrise tones visible */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--onyx) 0%, transparent 8%)",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/data/products";

export function PremiumLine() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-gradient-to-b from-background via-onyx-elevated to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow">Featured Collection</p>
          <span className="hairline mt-5 mb-8 block mx-auto" aria-hidden />
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-foreground">
            Pure goods, <em className="italic gold-text">slowly crafted.</em>
          </h2>
          <p className="mt-8 text-ivory-muted text-sm md:text-base leading-relaxed">
            A patient process that locks in colour, nutrition, and the deep
            character of every ingredient. No artificial preservatives. No
            artificial additives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/shop" className="ghost-gold-btn">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

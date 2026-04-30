import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShopFilters,
  initialFilters,
  type FilterState,
} from "@/components/shop/ShopFilters";
import {
  PRODUCTS,
  minPrice,
  discountPct,
  isInStock,
  variantSizes,
} from "@/data/products";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import scienceImg from "@/assets/res-science.png";

const TITLE = "Shop — A-VADH | Premium Dehydrated Foods, Cold-Pressed Oils & Jaggery";
const DESC =
  "Browse the A-VADH collection: premium dehydrated fruits and vegetables, cold-pressed mustard oil, and pure jaggery — crafted in rural Ayodhya.";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach((p) => variantSizes(p).forEach((s) => set.add(s)));
    return Array.from(set);
  }, []);

  const products = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (
        filters.useCases.length &&
        !filters.useCases.some((u) => p.use_cases?.includes(u))
      )
        return false;
      if (
        filters.solutions.length &&
        !filters.solutions.some((s) => p.solutions?.includes(s))
      )
        return false;
      if (filters.formats.length && (!p.format || !filters.formats.includes(p.format)))
        return false;
      if (
        filters.packagings.length &&
        (!p.packaging || !filters.packagings.includes(p.packaging))
      )
        return false;

      const price = minPrice(p);
      if (price < filters.price[0] || price > filters.price[1]) return false;

      if (filters.discount > 0 && discountPct(p) < filters.discount) return false;

      if (filters.sizes.length) {
        const sizes = variantSizes(p);
        if (!filters.sizes.some((s) => sizes.includes(s))) return false;
      }

      const inStock = isInStock(p);
      if (filters.availability === "in-stock" && !inStock) return false;
      if (filters.availability === "out-of-stock" && inStock) return false;

      return true;
    });
  }, [filters]);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <section className="pt-44 md:pt-52 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="eyebrow">The Collection</p>
        <span className="hairline mt-5 mb-6 block" aria-hidden />
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          Pure goods,
          <br />
          <em className="italic gold-text">slowly crafted.</em>
        </h1>
        <p className="mt-8 text-ivory-muted max-w-xl leading-relaxed text-[0.95rem]">
          Every jar and bottle in our collection is rooted in rural Ayodhya — made without preservatives, additives, or compromise.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="flex items-center justify-between border-y border-border/40 py-4 mb-10">
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden flex items-center gap-2 label-caps text-ivory-muted hover:text-gold transition-colors">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[340px] overflow-y-auto p-0 bg-background">
              <div className="pt-2">
                <ShopFilters filters={filters} setFilters={setFilters} allSizes={allSizes} />
              </div>
            </SheetContent>
          </Sheet>
          <span className="hidden lg:block label-caps text-ivory-muted">
            Refine your selection
          </span>
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-ivory-muted tabular-nums">
            {products.length} {products.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <ShopFilters filters={filters} setFilters={setFilters} allSizes={allSizes} />
            </div>
          </div>

          <div className="min-h-[400px] flex flex-col items-center">
            <AnimatePresence mode="popLayout">
              {products.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20 flex flex-col items-center"
                >
                  <div className="relative w-48 h-48 mb-10 group">
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors" />
                    <img 
                      src={scienceImg} 
                      alt="No results" 
                      className="w-full h-full object-cover rounded-full grayscale opacity-40 mix-blend-luminosity border border-border/40"
                    />
                  </div>
                  <p className="text-ivory-muted text-lg font-display italic">
                    No products match your filters.
                  </p>
                  <button 
                    onClick={() => setFilters(initialFilters)}
                    className="mt-8 label-caps text-gold hover:text-foreground transition-colors border-b border-gold/40 pb-1"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 w-full"
                >
                  <AnimatePresence>
                    {products.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-20 text-center">
              <Link to="/" className="label-caps text-ivory-muted hover:text-gold transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

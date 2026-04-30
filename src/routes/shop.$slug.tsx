import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { useCart } from "@/cart/CartContext";
import {
  getProductBySlug,
  formatINR,
  defaultVariant,
  PRODUCTS,
  type ProductVariant,
} from "@/data/products";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { product } = loaderData;
    const title = `${product.name} — A-VADH`;
    const desc = product.short_description;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: product.image },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="eyebrow mb-4">Something went wrong</p>
          <h1 className="font-display text-3xl">{error.message}</h1>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="ghost-gold-btn mt-8"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="eyebrow mb-4">Not Found</p>
          <h1 className="font-display text-3xl">
            We couldn't find <em className="italic gold-text">"{slug}"</em>.
          </h1>
          <Link to="/shop" className="ghost-gold-btn mt-8">
            Browse Shop
          </Link>
        </div>
      </div>
    );
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    defaultVariant(product).id,
  );
  const [qty, setQty] = useState(1);

  const variant: ProductVariant =
    product.variants.find((v) => v.id === selectedVariantId) ??
    defaultVariant(product);
  const onSale = !!variant.compare_at_price && variant.compare_at_price > variant.price;
  const discountPct = onSale
    ? Math.round(((variant.compare_at_price! - variant.price) / variant.compare_at_price!) * 100)
    : 0;

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  );
  const fillers = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category,
  );
  const recommendations = [...related, ...fillers].slice(0, 4);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-12 text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted flex items-center gap-3">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-onyx-elevated overflow-hidden md:sticky md:top-32">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute top-5 left-5 flex flex-col gap-2">
              {product.is_new && (
                <span className="text-[0.6rem] tracking-[0.3em] uppercase bg-gold text-onyx px-2.5 py-1">
                  New
                </span>
              )}
              {onSale && (
                <span className="text-[0.6rem] tracking-[0.3em] uppercase bg-onyx text-gold border border-gold/60 px-2.5 py-1">
                  −{discountPct}%
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="eyebrow">{product.category_label}</p>
            <span className="hairline mt-5 mb-6 block" aria-hidden />
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">
              {product.name}{" "}
              <span className="text-ivory-muted text-2xl md:text-3xl">
                [{variant.size}]
              </span>
            </h1>
            <p className="mt-4 text-ivory-muted leading-relaxed">
              {product.short_description}
            </p>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-4 flex-wrap">
              {onSale && (
                <span className="font-display text-xl text-ivory-muted line-through tabular-nums">
                  {formatINR(variant.compare_at_price!)}
                </span>
              )}
              <span className="font-display text-3xl md:text-4xl tabular-nums text-gold">
                {formatINR(variant.price)}
              </span>
              <span
                className={`label-caps ${
                  variant.in_stock ? "text-gold" : "text-ivory-muted"
                }`}
              >
                {variant.in_stock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Quantity / Size variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-10">
                <p className="label-caps text-foreground mb-4">Quantity</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const selected = v.id === variant.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantId(v.id)}
                        disabled={!v.in_stock}
                        className={`min-w-[64px] px-4 py-3 border text-sm tracking-[0.15em] uppercase transition-all ${
                          selected
                            ? "border-gold text-gold bg-gold/5"
                            : "border-border/60 text-ivory-muted hover:border-gold/60 hover:text-foreground"
                        } disabled:opacity-30 disabled:cursor-not-allowed disabled:line-through`}
                      >
                        {v.size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <span className="hairline mt-10 mb-8 block" aria-hidden />

            {/* Qty + add */}
            <div className="flex items-stretch gap-4">
              <div className="flex items-center border border-border/60">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-12 h-full text-ivory-muted hover:text-gold transition-colors text-lg"
                  aria-label="Decrease quantity"
                  disabled={!variant.in_stock}
                >
                  −
                </button>
                <span className="w-12 text-center tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-12 h-full text-ivory-muted hover:text-gold transition-colors text-lg"
                  aria-label="Increase quantity"
                  disabled={!variant.in_stock}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => add(product, variant, qty)}
                disabled={!variant.in_stock}
                className="ghost-gold-btn flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {variant.in_stock ? "Add to Cart" : "Notify When Available"}
              </button>
            </div>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-14">
                <p className="label-caps text-gold mb-5">Highlights</p>
                <ul className="space-y-3 text-sm text-ivory-muted">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="hairline mt-2.5 flex-shrink-0" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certification chip */}
            {product.certification && (
              <div className="mt-8 inline-flex items-center gap-3 border border-gold/40 px-4 py-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                <span className="label-caps text-gold">{product.certification}</span>
              </div>
            )}
          </div>
        </div>

        {/* About / Description */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
          <div>
            <p className="label-caps text-gold">About</p>
            <span className="hairline mt-4 block" aria-hidden />
          </div>
          <p className="font-display text-xl md:text-2xl leading-[1.5] text-foreground">
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-24 md:mt-32 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
            <div>
              <p className="label-caps text-gold">Specifications</p>
              <span className="hairline mt-4 block" aria-hidden />
            </div>
            <div className="space-y-12">
              {product.specifications.map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-2xl mb-6 text-foreground">
                    {group.title}
                  </h3>
                  <dl className="border-t border-border/40">
                    {group.rows.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-4 border-b border-border/40"
                      >
                        <dt className="text-[0.7rem] tracking-[0.25em] uppercase text-ivory-muted">
                          {row.label}
                        </dt>
                        <dd className="text-foreground text-sm md:text-base leading-relaxed">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Usage instructions */}
        {product.usage_instructions && (
          <div className="mt-24 md:mt-32 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 max-w-5xl">
            <div>
              <p className="label-caps text-gold">Usage</p>
              <span className="hairline mt-4 block" aria-hidden />
            </div>
            <p className="text-ivory-muted leading-[1.9] text-base md:text-lg">
              {product.usage_instructions}
            </p>
          </div>
        )}

        {/* Trust strip */}
        <div className="mt-24 md:mt-32 grid sm:grid-cols-3 gap-8 border-y border-border/40 py-12">
          {[
            { t: "Pure", d: "No artificial preservatives or additives." },
            { t: "Sourced", d: "From partner farms in rural Ayodhya." },
            { t: "Certified", d: "Batch-traceable. FSSAI certified facility." },
          ].map((item) => (
            <div key={item.t} className="text-center">
              <p className="font-display text-2xl text-gold">{item.t}</p>
              <p className="mt-3 text-sm text-ivory-muted leading-relaxed max-w-xs mx-auto">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* You may also like */}
      {recommendations.length > 0 && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24 md:pb-32">
          <p className="eyebrow">You may also like</p>
          <span className="hairline mt-5 mb-12 block" aria-hidden />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {recommendations.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

import { Link } from "@tanstack/react-router";
import { useCart } from "@/cart/CartContext";
import { motion } from "framer-motion";
import {
  formatINR,
  defaultVariant,
  isInStock,
  type Product,
} from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const variant = defaultVariant(product);
  const inStock = isInStock(product);
  const hasMultipleSizes = product.variants.length > 1;
  const onSale = !!variant.compare_at_price && variant.compare_at_price > variant.price;

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link
        to="/shop/$slug"
        params={{ slug: product.slug }}
        className="block relative aspect-[4/5] overflow-hidden bg-onyx-elevated"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Status chips */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.is_new && (
            <span className="text-[0.6rem] tracking-[0.3em] uppercase bg-gold text-onyx px-2.5 py-1">
              New
            </span>
          )}
          {onSale && (
            <span className="text-[0.6rem] tracking-[0.3em] uppercase bg-onyx text-gold border border-gold/60 px-2.5 py-1">
              Sale
            </span>
          )}
          {!inStock && (
            <span className="text-[0.6rem] tracking-[0.3em] uppercase bg-onyx/85 text-ivory-muted border border-border/60 px-2.5 py-1">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick look overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-onyx via-onyx/80 to-transparent pt-16 pb-5 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="label-caps text-gold">Quick Look →</span>
        </div>
      </Link>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">
            {product.category_label}
          </p>
          <Link
            to="/shop/$slug"
            params={{ slug: product.slug }}
            className="font-display text-lg mt-1 block text-foreground hover:text-gold transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-xs text-ivory-muted mt-1">
            {hasMultipleSizes
              ? `${product.variants[0].size} – ${product.variants[product.variants.length - 1].size}`
              : variant.size}
          </p>
        </div>
        <div className="text-right">
          {onSale && (
            <p className="text-xs text-ivory-muted line-through tabular-nums">
              {formatINR(variant.compare_at_price!)}
            </p>
          )}
          <p className="font-display text-base tabular-nums">
            {hasMultipleSizes && (
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-ivory-muted mr-1">
                From
              </span>
            )}
            {formatINR(variant.price)}
          </p>
        </div>
      </div>

      {hasMultipleSizes ? (
        <Link
          to="/shop/$slug"
          params={{ slug: product.slug }}
          className="mt-4 w-full label-caps border border-border/60 hover:border-gold py-3 text-ivory-muted hover:text-gold transition-all flex items-center justify-center"
        >
          Choose Size →
        </Link>
      ) : (
        <button
          onClick={() => add(product, variant)}
          disabled={!inStock}
          className="mt-4 w-full label-caps border border-border/60 hover:border-gold py-3 text-ivory-muted hover:text-gold transition-all disabled:opacity-40 disabled:hover:border-border/60 disabled:hover:text-ivory-muted disabled:cursor-not-allowed"
        >
          {inStock ? "Add to Cart" : "Notify Me"}
        </button>
      )}
    </motion.article>
  );
}

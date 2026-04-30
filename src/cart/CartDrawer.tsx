import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useCart } from "./CartContext";
import { formatINR } from "@/data/products";

export function CartDrawer() {
  const { isOpen, close, lines, setQty, remove, subtotal, count } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-onyx/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[440px] bg-onyx-elevated border-l border-border/40 shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.8)] transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-border/40">
          <div>
            <p className="eyebrow">Your Selection</p>
            <h2 className="font-display text-2xl mt-1">
              Cart{" "}
              <span className="text-ivory-muted text-base">({count})</span>
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Close cart"
            className="text-ivory-muted hover:text-gold transition-colors p-2 -mr-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <span className="hairline mb-6" aria-hidden />
              <p className="font-display text-xl text-foreground">
                Your cart is empty.
              </p>
              <p className="text-sm text-ivory-muted mt-3 max-w-xs leading-relaxed">
                Discover our collection of pure, slow-crafted goods from rural Ayodhya.
              </p>
              <Link
                to="/shop"
                onClick={close}
                className="ghost-gold-btn mt-10"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <ul className="space-y-7">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-5">
                  <Link
                    to="/shop/$slug"
                    params={{ slug: line.product.slug }}
                    onClick={close}
                    className="block w-20 h-24 bg-onyx flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={line.product.image}
                      alt={line.product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">
                      {line.product.category_label}
                    </p>
                    <Link
                      to="/shop/$slug"
                      params={{ slug: line.product.slug }}
                      onClick={close}
                      className="font-display text-base mt-0.5 text-foreground hover:text-gold transition-colors block truncate"
                    >
                      {line.product.name}
                    </Link>
                    <p className="text-xs text-ivory-muted mt-0.5">
                      {line.variant.size}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center border border-border/60">
                        <button
                          onClick={() => setQty(line.key, line.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 text-ivory-muted hover:text-gold transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          onClick={() => setQty(line.key, line.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 text-ivory-muted hover:text-gold transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm text-foreground tabular-nums">
                        {formatINR(line.qty * line.variant.price)}
                      </span>
                    </div>

                    <button
                      onClick={() => remove(line.key)}
                      className="mt-2 text-[0.65rem] tracking-[0.25em] uppercase text-ivory-muted hover:text-gold transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-border/40 px-7 py-6 space-y-5">
            <div className="flex items-center justify-between text-sm">
              <span className="label-caps text-ivory-muted">Subtotal</span>
              <span className="font-display text-xl tabular-nums">
                {formatINR(subtotal)}
              </span>
            </div>
            <p className="text-[0.7rem] text-ivory-muted leading-relaxed">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={close}
              className="ghost-gold-btn w-full justify-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

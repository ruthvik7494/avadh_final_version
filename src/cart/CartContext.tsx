import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product, ProductVariant } from "@/data/products";

export type CartLine = {
  /** Unique line key = `${product.id}::${variant.id}` */
  key: string;
  product: Product;
  variant: ProductVariant;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (product: Product, variant: ProductVariant, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "avadh-cart-v2";

type StoredLine = { productId: string; variantId: string; qty: number };

const lineKey = (productId: string, variantId: string) =>
  `${productId}::${variantId}`;

export function CartProvider({
  children,
  catalog,
}: {
  children: React.ReactNode;
  catalog: Product[];
}) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored: StoredLine[] = JSON.parse(raw);
        const restored: CartLine[] = stored
          .map((s) => {
            const product = catalog.find((p) => p.id === s.productId);
            const variant = product?.variants.find((v) => v.id === s.variantId);
            if (!product || !variant) return null;
            return {
              key: lineKey(product.id, variant.id),
              product,
              variant,
              qty: s.qty,
            };
          })
          .filter((x): x is CartLine => x !== null);
        setLines(restored);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [catalog]);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    const stored: StoredLine[] = lines.map((l) => ({
      productId: l.product.id,
      variantId: l.variant.id,
      qty: l.qty,
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [lines, hydrated]);

  const value = useMemo<CartState>(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce(
      (sum, l) => sum + l.qty * l.variant.price,
      0,
    );
    return {
      lines,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((o) => !o),
      add: (product, variant, qty = 1) => {
        if (!variant.in_stock) return;
        const key = lineKey(product.id, variant.id);
        setLines((curr) => {
          const existing = curr.find((l) => l.key === key);
          if (existing) {
            return curr.map((l) =>
              l.key === key ? { ...l, qty: l.qty + qty } : l,
            );
          }
          return [...curr, { key, product, variant, qty }];
        });
        setIsOpen(true);
      },
      setQty: (key, qty) => {
        setLines((curr) =>
          qty <= 0
            ? curr.filter((l) => l.key !== key)
            : curr.map((l) => (l.key === key ? { ...l, qty } : l)),
        );
      },
      remove: (key) => setLines((curr) => curr.filter((l) => l.key !== key)),
      clear: () => setLines([]),
      count,
      subtotal,
    };
  }, [lines, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

/**
 * Product catalog
 *
 * Shape mirrors WooCommerce Store API (/wp-json/wc/store/v1/products) so this
 * file can later be replaced with live API calls without changing the UI.
 */

import tomatoImg from "@/assets/products/tomato.jpg";
import orangeImg from "@/assets/products/orange.jpg";
import jaggeryImg from "@/assets/products/jaggery.jpg";
import mustardOilImg from "@/assets/products/mustard-oil.jpg";

export type ProductCategory =
  | "fruit-vegetables"
  | "citrus-fruits"
  | "jaggery"
  | "mustard-oil";

export type ProductUseCase =
  | "cooking"
  | "ayurveda"
  | "snacking"
  | "baking"
  | "personal-care";

export type ProductSolution =
  | "ready-to-cook"
  | "ready-to-eat"
  | "ingredient"
  | "wellness";

export type ProductFormat = "powder" | "whole" | "slices" | "oil" | "granules";

export type ProductPackaging = "bottle" | "pouch" | "jar" | "box";

/** A purchasable size variant (e.g. "1L" at ₹299, "2L" at ₹579). */
export type ProductVariant = {
  id: string;
  size: string; // "1L", "100g"
  price: number; // selling price in INR
  compare_at_price?: number; // original price (struck-through)
  in_stock: boolean;
};

/** Specification rows shown in the spec table. */
export type ProductSpecGroup = {
  title: string;
  rows: { label: string; value: string }[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  category_label: string;
  short_description: string;
  description: string;
  image: string;
  is_new?: boolean;

  /** Facets used by the shop sidebar. */
  use_cases?: ProductUseCase[];
  solutions?: ProductSolution[];
  format?: ProductFormat;
  packaging?: ProductPackaging;
  /** Discount percentage (0-100); auto-derived when omitted. */
  discount?: number;

  /** Variants drive price + size selector. The first variant is the default. */
  variants: ProductVariant[];

  /** Bullet highlights shown above the spec table. */
  highlights?: string[];

  /** Grouped specifications. */
  specifications?: ProductSpecGroup[];

  /** Long-form usage instructions. */
  usage_instructions?: string;

  /** Certification line, e.g. "FSSAI Certified". */
  certification?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "tomato",
    slug: "tomato",
    name: "Tomato",
    category: "fruit-vegetables",
    category_label: "Fruit Vegetables",
    short_description: "Sun-ripened, vacuum-dehydrated tomato pieces.",
    description:
      "Hand-selected ripe tomatoes from our partner farms in rural Ayodhya, gently vacuum-dehydrated to lock in the deep umami sweetness. Rehydrates beautifully into curries, pastas, and broths. No preservatives, no additives.",
    image: tomatoImg,
    is_new: true,
    use_cases: ["cooking"],
    solutions: ["ingredient", "ready-to-cook"],
    format: "slices",
    packaging: "pouch",
    variants: [
      { id: "tomato-100g", size: "100g", price: 100, in_stock: true },
    ],
    highlights: [
      "Used for: Curries, sauces, pastas, broths",
      "Processing Type: Vacuum Dehydrated",
      "No Added Preservatives",
    ],
    certification: "FSSAI Certified",
  },
  {
    id: "orange",
    slug: "orange",
    name: "Orange",
    category: "citrus-fruits",
    category_label: "Citrus Fruits",
    short_description: "Translucent dehydrated orange wheels.",
    description:
      "Whole-fruit orange slices, slowly dried to preserve their natural citrus oils and vibrant colour. A refined garnish for cocktails, teas, and desserts — or eaten as a wholesome snack.",
    image: orangeImg,
    is_new: true,
    use_cases: ["snacking", "baking"],
    solutions: ["ready-to-eat", "ingredient"],
    format: "slices",
    packaging: "pouch",
    variants: [
      { id: "orange-100g", size: "100g", price: 100, in_stock: true },
    ],
    highlights: [
      "Used for: Cocktails, teas, desserts, snacking",
      "Processing Type: Slow Air-Dried",
      "No Added Preservatives",
    ],
    certification: "FSSAI Certified",
  },
  {
    id: "jaggery-powder",
    slug: "jaggery-powder",
    name: "Jaggery Powder",
    category: "jaggery",
    category_label: "Jaggery",
    short_description: "Pure, unrefined cane jaggery — finely milled.",
    description:
      "Traditional cane jaggery, slow-cooked and stone-milled into a soft golden powder. A natural mineral-rich alternative to refined sugar — perfect for tea, baking, and traditional sweets.",
    image: jaggeryImg,
    is_new: true,
    use_cases: ["cooking", "baking", "ayurveda"],
    solutions: ["ingredient", "wellness"],
    format: "powder",
    packaging: "jar",
    variants: [
      { id: "jaggery-100g", size: "100g", price: 100, in_stock: false },
    ],
    highlights: [
      "Used for: Tea, baking, traditional sweets",
      "Processing Type: Stone-Milled",
      "Unrefined · No Chemicals",
    ],
    certification: "FSSAI Certified",
  },
  {
    id: "black-mustard-oil",
    slug: "black-mustard-oil",
    name: "Black Mustard Oil",
    category: "mustard-oil",
    category_label: "Mustard Oil",
    short_description:
      "Used in massage therapies to relieve muscle pain and promote relaxation.",
    description:
      "Pressed in single small batches from indigenous black mustard seeds using the traditional kachi ghani method. Pungent, aromatic, and uncompromisingly pure — the soul of an Indian kitchen, and a time-honoured remedy for the body.",
    image: mustardOilImg,
    is_new: true,
    use_cases: ["cooking", "ayurveda", "personal-care"],
    solutions: ["ingredient", "wellness"],
    format: "oil",
    packaging: "bottle",
    variants: [
      { id: "mustard-1l", size: "1L", price: 299, compare_at_price: 499, in_stock: true },
      { id: "mustard-2l", size: "2L", price: 579, compare_at_price: 949, in_stock: true },
      { id: "mustard-3l", size: "3L", price: 849, compare_at_price: 1399, in_stock: true },
      { id: "mustard-4l", size: "4L", price: 1099, compare_at_price: 1849, in_stock: true },
      { id: "mustard-5l", size: "5L", price: 1349, compare_at_price: 2299, in_stock: true },
      { id: "mustard-6l", size: "6L", price: 1599, compare_at_price: 2749, in_stock: true },
    ],
    highlights: [
      "Used for: Cooking, Massage & Ayurvedic, Hair & Skin Care",
      "Processing Type: Cold Pressed",
      "No Added Preservatives",
    ],
    specifications: [
      {
        title: "General Information",
        rows: [
          { label: "Brand", value: "AVADH Premium" },
          {
            label: "Model Name",
            value: "Cold Pressed Mustard Oil | 100% Pure, Organic & Natural",
          },
          { label: "Type", value: "Mustard Oil" },
          { label: "Used For", value: "Cooking, Massage & Ayurvedic, Hair & Skin Care" },
          { label: "Processing Type", value: "Cold Pressed" },
          { label: "Container Type", value: "Bottle" },
        ],
      },
    ],
    usage_instructions:
      "Cooking — perfect for Indian curries, stir-frying, and pickling. Massage & Ayurvedic — helps improve circulation and relieves joint pain. Hair & skin care — naturally nourishes scalp and skin.",
    certification: "FSSAI Certified",
  },
];

export const CATEGORIES: { slug: ProductCategory; label: string }[] = [
  { slug: "fruit-vegetables", label: "Fruit Vegetables" },
  { slug: "citrus-fruits", label: "Citrus Fruits" },
  { slug: "jaggery", label: "Jaggery" },
  { slug: "mustard-oil", label: "Mustard Oil" },
];

export const USE_CASES: { slug: ProductUseCase; label: string }[] = [
  { slug: "cooking", label: "Cooking" },
  { slug: "ayurveda", label: "Ayurveda & Wellness" },
  { slug: "snacking", label: "Snacking" },
  { slug: "baking", label: "Baking" },
  { slug: "personal-care", label: "Hair & Skin Care" },
];

export const SOLUTIONS: { slug: ProductSolution; label: string }[] = [
  { slug: "ready-to-cook", label: "Ready-to-Cook" },
  { slug: "ready-to-eat", label: "Ready-to-Eat" },
  { slug: "ingredient", label: "Ingredient" },
  { slug: "wellness", label: "Wellness" },
];

export const FORMATS: { slug: ProductFormat; label: string }[] = [
  { slug: "powder", label: "Powder" },
  { slug: "whole", label: "Whole" },
  { slug: "slices", label: "Slices" },
  { slug: "oil", label: "Oil" },
  { slug: "granules", label: "Granules" },
];

export const PACKAGING: { slug: ProductPackaging; label: string }[] = [
  { slug: "bottle", label: "Bottle" },
  { slug: "pouch", label: "Pouch" },
  { slug: "jar", label: "Jar" },
  { slug: "box", label: "Box" },
];

/** Returns the lowest variant price for a product. */
export function minPrice(p: Product): number {
  return Math.min(...p.variants.map((v) => v.price));
}

/** Returns the max variant size string and parsed grams/ml for sorting. */
export function variantSizes(p: Product): string[] {
  return p.variants.map((v) => v.size);
}

/** Compute discount percentage for a product (max across variants). */
export function discountPct(p: Product): number {
  if (p.discount != null) return p.discount;
  let max = 0;
  for (const v of p.variants) {
    if (v.compare_at_price && v.compare_at_price > v.price) {
      const pct = Math.round(((v.compare_at_price - v.price) / v.compare_at_price) * 100);
      if (pct > max) max = pct;
    }
  }
  return max;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Convenience: cheapest in-stock variant (or first) for cards. */
export function defaultVariant(p: Product): ProductVariant {
  return p.variants.find((v) => v.in_stock) ?? p.variants[0];
}

/** True if any variant is in stock. */
export function isInStock(p: Product): boolean {
  return p.variants.some((v) => v.in_stock);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

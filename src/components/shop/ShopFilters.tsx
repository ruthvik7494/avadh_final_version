import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  CATEGORIES,
  USE_CASES,
  SOLUTIONS,
  FORMATS,
  PACKAGING,
  type ProductCategory,
  type ProductUseCase,
  type ProductSolution,
  type ProductFormat,
  type ProductPackaging,
} from "@/data/products";

export type FilterState = {
  categories: ProductCategory[];
  useCases: ProductUseCase[];
  solutions: ProductSolution[];
  formats: ProductFormat[];
  packagings: ProductPackaging[];
  price: [number, number];
  discount: number; // minimum discount %
  sizes: string[];
  availability: "all" | "in-stock" | "out-of-stock";
};

export const PRICE_MIN = 100;
export const PRICE_MAX = 2000;

export const initialFilters: FilterState = {
  categories: [],
  useCases: [],
  solutions: [],
  formats: [],
  packagings: [],
  price: [PRICE_MIN, PRICE_MAX],
  discount: 0,
  sizes: [],
  availability: "all",
};

const SIZE_OPTIONS = ["100g", "1L", "2L", "3L", "4L", "5L", "6L"];
const DISCOUNT_OPTIONS = [10, 25, 40, 50];

export function ShopFilters({
  filters,
  setFilters,
  allSizes,
}: {
  filters: FilterState;
  setFilters: (f: FilterState) => void;
  allSizes?: string[];
}) {
  const sizes = allSizes ?? SIZE_OPTIONS;

  const toggle = <K extends keyof FilterState>(key: K, value: any) => {
    const arr = filters[key] as any[];
    const next = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];
    setFilters({ ...filters, [key]: next });
  };

  const reset = () => setFilters(initialFilters);

  return (
    <aside className="border border-border/40 bg-onyx-elevated/30">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/40">
        <h2 className="font-display text-2xl gold-text">Filters</h2>
        <button
          onClick={reset}
          className="text-[0.7rem] tracking-[0.2em] uppercase text-gold hover:text-foreground transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Products */}
      <div className="px-5 py-4 border-b border-border/40">
        <p className="label-caps text-foreground mb-2">Products</p>
        <button
          onClick={() => setFilters({ ...filters, categories: [] })}
          className={`text-sm transition-colors ${
            filters.categories.length === 0 ? "text-gold" : "text-ivory-muted hover:text-foreground"
          }`}
        >
          All Products
        </button>
      </div>

      <FilterGroup label="Category">
        {CATEGORIES.map((c) => (
          <CheckRow
            key={c.slug}
            label={c.label}
            checked={filters.categories.includes(c.slug)}
            onChange={() => toggle("categories", c.slug)}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Use-Case">
        {USE_CASES.map((u) => (
          <CheckRow
            key={u.slug}
            label={u.label}
            checked={filters.useCases.includes(u.slug)}
            onChange={() => toggle("useCases", u.slug)}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Solution">
        {SOLUTIONS.map((s) => (
          <CheckRow
            key={s.slug}
            label={s.label}
            checked={filters.solutions.includes(s.slug)}
            onChange={() => toggle("solutions", s.slug)}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Format">
        {FORMATS.map((f) => (
          <CheckRow
            key={f.slug}
            label={f.label}
            checked={filters.formats.includes(f.slug)}
            onChange={() => toggle("formats", f.slug)}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Packaging">
        {PACKAGING.map((p) => (
          <CheckRow
            key={p.slug}
            label={p.label}
            checked={filters.packagings.includes(p.slug)}
            onChange={() => toggle("packagings", p.slug)}
          />
        ))}
      </FilterGroup>

      {/* Price */}
      <div className="px-5 py-5 border-b border-border/40">
        <div className="flex items-center justify-between mb-4">
          <p className="label-caps text-foreground">Price</p>
          <button
            onClick={() => setFilters({ ...filters, price: [PRICE_MIN, PRICE_MAX] })}
            className="text-[0.7rem] tracking-[0.2em] uppercase text-gold hover:text-foreground transition-colors"
          >
            Reset
          </button>
        </div>
        <Slider
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={50}
          value={filters.price}
          onValueChange={(v) => setFilters({ ...filters, price: [v[0], v[1]] as [number, number] })}
          className="my-2"
        />
        <div className="flex justify-between text-xs text-ivory-muted mt-3 tabular-nums">
          <span>Min ₹{filters.price[0]}</span>
          <span>Max ₹{filters.price[1]}</span>
        </div>
      </div>

      <FilterGroup label="Discount">
        {DISCOUNT_OPTIONS.map((d) => (
          <RadioRow
            key={d}
            label={`${d}% or more`}
            checked={filters.discount === d}
            onChange={() => setFilters({ ...filters, discount: filters.discount === d ? 0 : d })}
          />
        ))}
      </FilterGroup>

      <FilterGroup label="Size">
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => {
            const active = filters.sizes.includes(s);
            return (
              <button
                key={s}
                onClick={() => toggle("sizes", s)}
                className={`px-3 py-1.5 text-xs tracking-wider border transition-colors ${
                  active
                    ? "border-gold text-gold bg-gold/10"
                    : "border-border/60 text-ivory-muted hover:border-gold/60 hover:text-foreground"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup label="Availability" last>
        {(["all", "in-stock", "out-of-stock"] as const).map((a) => (
          <RadioRow
            key={a}
            label={a === "all" ? "All" : a === "in-stock" ? "In Stock" : "Out of Stock"}
            checked={filters.availability === a}
            onChange={() => setFilters({ ...filters, availability: a })}
          />
        ))}
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({
  label,
  children,
  last,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={last ? "" : "border-b border-border/40"}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="label-caps text-foreground">{label}</span>
        <ChevronDown
          className={`h-4 w-4 text-ivory-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-5 space-y-2.5">{children}</div>}
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label 
      onClick={(e) => {
        e.preventDefault();
        onChange();
      }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span
        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
          checked ? "border-gold bg-gold/20" : "border-border/60 group-hover:border-gold/60"
        }`}
      >
        {checked && <span className="w-2 h-2 bg-gold" />}
      </span>
      <span
        className={`text-sm transition-colors ${
          checked ? "text-foreground" : "text-ivory-muted group-hover:text-foreground"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

function RadioRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label 
      onClick={(e) => {
        e.preventDefault();
        onChange();
      }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span
        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
          checked ? "border-gold" : "border-border/60 group-hover:border-gold/60"
        }`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-gold" />}
      </span>
      <span
        className={`text-sm transition-colors ${
          checked ? "text-foreground" : "text-ivory-muted group-hover:text-foreground"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

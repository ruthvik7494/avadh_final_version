import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/avadh-logo.png";
import { useCart } from "@/cart/CartContext";

type NavTo = "/" | "/shop" | "/applications" | "/about" | "/rd" | "/sustainability" | "/resources" | "/contact" | "/trust-quality";

type NavItem =
  | { label: string; to: NavTo; hash?: string }
  | { label: string; dropdown: ProductDropdownItem[] };

type ProductDropdownItem = { label: string; to: "/shop"; search?: Record<string, string> };

const PRODUCT_MENU: ProductDropdownItem[] = [
  { label: "All Products", to: "/shop" },
  { label: "By Category", to: "/shop" },
  { label: "By Use-Case", to: "/shop" },
  { label: "By Solution", to: "/shop" },
  { label: "By Format", to: "/shop" },
  { label: "By Packaging", to: "/shop" },
];

const NAV: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Products", dropdown: PRODUCT_MENU },
  { label: "Applications", to: "/applications" },
  { label: "Trust & Quality", to: "/trust-quality" },
  { label: "R & D", to: "/rd" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Resources", to: "/resources" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { count, open: openCart } = useCart();

  return (
    <>
      {/* Main nav */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-md py-4 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="A-VADH home">
            <img src={logo} alt="A-VADH — Pure as Avadh" className="h-9 md:h-11 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center gap-5">
            {NAV.map((item) =>
              "dropdown" in item ? (
                <div key={item.label} className="relative group">
                  <button className="label-caps text-ivory-muted hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-[220px] bg-background border border-gold/40 shadow-xl py-2">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          to={d.to}
                          className="flex items-center justify-between px-5 py-2.5 text-sm text-ivory-muted hover:text-gold hover:bg-onyx-elevated/50 transition-colors"
                        >
                          <span>{d.label}</span>
                          {d.label !== "All Products" && <ChevronRight className="h-3 w-3" />}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={item.hash}
                  className="label-caps text-ivory-muted hover:text-gold transition-colors duration-300"
                  activeOptions={{ exact: true, includeHash: false }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className="relative text-ivory-muted hover:text-gold transition-colors p-2"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M5 7h14l-1.5 11a2 2 0 01-2 1.75h-7A2 2 0 016.5 18L5 7z" />
                <path d="M9 7V5a3 3 0 016 0v2" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-onyx text-[0.6rem] font-medium flex items-center justify-center tabular-nums">
                  {count}
                </span>
              )}
            </button>

            <button
              className="xl:hidden text-foreground p-2"
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="block w-6 h-px bg-foreground mb-1.5" />
              <span className="block w-6 h-px bg-foreground mb-1.5" />
              <span className="block w-4 h-px bg-foreground ml-auto" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="xl:hidden border-t border-border/40 bg-background/98 backdrop-blur-md">
            <nav className="flex flex-col px-8 py-6 gap-5">
              {NAV.map((item) =>
                "dropdown" in item ? (
                  <div key={item.label} className="flex flex-col gap-3">
                    <span className="label-caps text-gold">{item.label}</span>
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.label}
                        to={d.to}
                        className="text-sm text-ivory-muted hover:text-gold pl-4"
                        onClick={() => setOpen(false)}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    hash={item.hash}
                    className="label-caps text-ivory-muted hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { CartProvider } from "@/cart/CartContext";
import { CartDrawer } from "@/cart/CartDrawer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { PRODUCTS } from "@/data/products";

import appCss from "../index.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-10">
          <Link to="/" className="ghost-gold-btn">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a1614" },
      { name: "author", content: "A-VADH" },
      { name: "description", content: "Premium dehydrated foods, cold-pressed oils, and pure jaggery — meticulously crafted in rural Ayodhya." },
      { property: "og:site_name", content: "A-VADH" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider catalog={PRODUCTS}>
      <ScrollObserver />
      <Outlet />
      <CartDrawer />
    </CartProvider>
  );
}

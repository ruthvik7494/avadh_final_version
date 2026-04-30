import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

import { CartProvider } from "@/cart/CartContext";
import { CartDrawer } from "@/cart/CartDrawer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { PRODUCTS } from "@/data/products";



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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <CartProvider catalog={PRODUCTS}>
      <ScrollObserver />
      <Outlet />
      <CartDrawer />
    </CartProvider>
  );
}

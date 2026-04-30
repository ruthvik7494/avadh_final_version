import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { useCart } from "@/cart/CartContext";
import { formatINR } from "@/data/products";

const TITLE = "Checkout — A-VADH";
const DESC = "Complete your A-VADH order — secure checkout.";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

type Address = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postcode: string;
};

const SHIPPING_FEE = 99;

function CheckoutPage() {
  const router = useRouter();
  const { lines, subtotal, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [address, setAddress] = useState<Address>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
  });
  const [payment, setPayment] = useState<"upi" | "card" | "cod">("upi");

  const shipping = subtotal > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  const update = (k: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress((a) => ({ ...a, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: POST to WooCommerce Store API /checkout
    await new Promise((r) => setTimeout(r, 900));
    clear();
    setPlaced(true);
    setSubmitting(false);
  };

  if (placed) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Nav />
        <section className="pt-44 pb-32 px-6 max-w-xl mx-auto text-center">
          <p className="eyebrow">Thank you</p>
          <span className="hairline mt-5 mb-8 block mx-auto" aria-hidden />
          <h1 className="font-display text-4xl md:text-5xl">
            Your order is <em className="italic gold-text">placed.</em>
          </h1>
          <p className="mt-6 text-ivory-muted leading-relaxed">
            A confirmation has been sent to your email. We will contact you with
            tracking details shortly.
          </p>
          <Link to="/shop" className="ghost-gold-btn mt-12 inline-flex">
            Continue Shopping
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Nav />
        <section className="pt-44 pb-32 px-6 max-w-xl mx-auto text-center">
          <p className="eyebrow">Checkout</p>
          <span className="hairline mt-5 mb-8 block mx-auto" aria-hidden />
          <h1 className="font-display text-4xl">Your cart is empty.</h1>
          <p className="mt-6 text-ivory-muted">
            Add a few pieces from the collection to begin checkout.
          </p>
          <Link to="/shop" className="ghost-gold-btn mt-10 inline-flex">
            Browse Shop
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      <section className="pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="eyebrow">Checkout</p>
        <span className="hairline mt-5 mb-6 block" aria-hidden />
        <h1 className="font-display text-4xl md:text-5xl">Complete your order</h1>

        <form
          onSubmit={onSubmit}
          className="mt-14 grid lg:grid-cols-[1fr_420px] gap-14 items-start"
        >
          {/* LEFT: form */}
          <div className="space-y-14">
            {/* Contact */}
            <fieldset>
              <legend className="label-caps text-gold mb-6">01 · Contact</legend>
              <Field label="Email" value={address.email} onChange={update("email")} type="email" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="First name" value={address.firstName} onChange={update("firstName")} required />
                <Field label="Last name" value={address.lastName} onChange={update("lastName")} required />
              </div>
              <Field label="Phone" value={address.phone} onChange={update("phone")} type="tel" required />
            </fieldset>

            {/* Shipping */}
            <fieldset>
              <legend className="label-caps text-gold mb-6">02 · Shipping Address</legend>
              <Field label="Address" value={address.address1} onChange={update("address1")} required />
              <Field label="Apartment, suite (optional)" value={address.address2} onChange={update("address2")} />
              <div className="grid sm:grid-cols-3 gap-5">
                <Field label="City" value={address.city} onChange={update("city")} required />
                <Field label="State" value={address.state} onChange={update("state")} required />
                <Field label="PIN code" value={address.postcode} onChange={update("postcode")} required />
              </div>
            </fieldset>

            {/* Payment */}
            <fieldset>
              <legend className="label-caps text-gold mb-6">03 · Payment</legend>
              <div className="space-y-3">
                {(["upi", "card", "cod"] as const).map((m) => (
                  <label
                    key={m}
                    className={`flex items-center gap-4 border px-5 py-4 cursor-pointer transition-colors ${
                      payment === m ? "border-gold" : "border-border/60 hover:border-border"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === m}
                      onChange={() => setPayment(m)}
                      className="accent-gold"
                    />
                    <span className="label-caps">
                      {m === "upi" && "UPI"}
                      {m === "card" && "Credit / Debit Card"}
                      {m === "cod" && "Cash on Delivery"}
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-4 text-[0.7rem] text-ivory-muted leading-relaxed">
                Payment processing will be enabled once WooCommerce is connected. This is a demo checkout.
              </p>
            </fieldset>

            <button
              type="submit"
              disabled={submitting}
              className="ghost-gold-btn w-full justify-center disabled:opacity-50"
            >
              {submitting ? "Placing order…" : `Place Order · ${formatINR(total)}`}
            </button>
          </div>

          {/* RIGHT: summary */}
          <aside className="bg-onyx-elevated border border-border/40 p-7 lg:sticky lg:top-32">
            <p className="label-caps text-gold mb-6">Order Summary</p>
            <ul className="space-y-5 max-h-[340px] overflow-y-auto pr-1">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <div className="relative w-16 h-20 bg-onyx flex-shrink-0">
                    <img
                      src={line.product.image}
                      alt={line.product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-onyx text-[0.65rem] flex items-center justify-center tabular-nums">
                      {line.qty}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-sm truncate">{line.product.name}</p>
                    <p className="text-[0.7rem] text-ivory-muted mt-0.5">
                      {line.variant.size}
                    </p>
                  </div>
                  <span className="text-sm tabular-nums">
                    {formatINR(line.qty * line.variant.price)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-border/40 space-y-3 text-sm">
              <Row label="Subtotal" value={formatINR(subtotal)} />
              <Row label="Shipping" value={formatINR(shipping)} />
              <div className="pt-3 mt-3 border-t border-border/40 flex justify-between items-baseline">
                <span className="label-caps text-foreground">Total</span>
                <span className="font-display text-xl tabular-nums">{formatINR(total)}</span>
              </div>
            </div>
          </aside>
        </form>

        <button
          type="button"
          onClick={() => router.history.back()}
          className="mt-12 label-caps text-ivory-muted hover:text-gold transition-colors"
        >
          ← Continue Shopping
        </button>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block mb-5">
      <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted block mb-2">
        {label}
      </span>
      <input
        {...rest}
        className="w-full bg-transparent border border-border/60 focus:border-gold outline-none px-4 py-3 text-foreground transition-colors"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-ivory-muted">
      <span>{label}</span>
      <span className="tabular-nums text-foreground">{value}</span>
    </div>
  );
}

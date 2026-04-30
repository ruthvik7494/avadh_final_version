import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

const TITLE = "Contact — A-VADH";
const DESC =
  "Reach the A-VADH team for partnerships, bulk orders, exports, and general enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <section className="pt-44 md:pt-52 pb-32 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="eyebrow">Get in Touch</p>
        <span className="hairline mt-5 mb-6 block" aria-hidden />
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Let's <em className="italic gold-text">talk.</em>
        </h1>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <p className="label-caps text-gold mb-3">Email</p>
            <a href="mailto:info@avadh.co.in" className="font-display text-2xl hover:text-gold transition-colors">
              info@avadh.co.in
            </a>
          </div>
          <div>
            <p className="label-caps text-gold mb-3">Address</p>
            <p className="text-ivory-muted leading-relaxed">
              280, Hathigo,<br />
              Uttar Pradesh 224209<br />
              India
            </p>
          </div>
        </div>

        <Link to="/" className="mt-16 inline-block label-caps text-ivory-muted hover:text-gold transition-colors">
          ← Back to Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}

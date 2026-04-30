import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPhilosophy from "@/assets/about-philosophy.jpg";
import rural from "@/assets/rural-ayodhya.jpg";

const TITLE = "About A-VADH — Pure as Avadh | Cruelty-Free Agro-Food from Rural Ayodhya";
const DESC =
  "A-VADH (अ-वध) means 'without killing.' Discover our vision, ethos, and ethical manufacturing framework — premium dehydrated foods, cold-pressed oils, and jaggery from rural Ayodhya.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: aboutHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const ETHOS_PILLARS = [
  {
    n: "01",
    title: "Cruelty-Free Philosophy",
    body: "Every A-VADH product is created with compassion — completely free from animal harm or exploitation.",
  },
  {
    n: "02",
    title: "Natural & Chemical-Free",
    body: "Purity preserved through advanced, hygienic processes — no chemicals, preservatives, or artificial additives.",
  },
  {
    n: "03",
    title: "Sustainable Rural Empowerment",
    body: "Our modern plant in rural Ayodhya supports local farmers, creates employment, and promotes eco-friendly growth.",
  },
  {
    n: "04",
    title: "Health & Well-Being First",
    body: "Crafted for nutrition, taste, and longevity — wholesome, natural goodness that enriches everyday life.",
  },
];

const WHY_US = [
  { title: "Lightweight & Compact", body: "Engineered for shelf life and travel without compromise on nutrition." },
  { title: "Hygienic & Safe", body: "Clean-room standards from sourcing to seal — every batch traceable." },
  { title: "Quick Meal Preparation", body: "Rehydrate in minutes; restore the flavor and texture of fresh produce." },
  { title: "Hygiene Commitment", body: "Independently audited processes that meet global food-safety benchmarks." },
];

const FRAMEWORK = [
  {
    title: "Sustainable Production",
    body: "Eco-friendly processes that minimize waste, conserve energy, and protect natural resources.",
  },
  {
    title: "Fair & Responsible Practices",
    body: "Operations grounded in fair wages, safe working conditions, and dignity for every individual.",
  },
  {
    title: "Transparency & Integrity",
    body: "From sourcing to delivery, complete honesty and accountability in every step of production.",
  },
];

const STATS = [
  { value: "10K+", label: "Satisfied Customers" },
  { value: "1K+", label: "Followers" },
  { value: "500+", label: "Clients" },
  { value: "100+", label: "Products" },
];

const TESTIMONIALS = [
  {
    quote:
      "The cold-pressed mustard oil reminded me of my grandmother's kitchen — pure, golden, and unmistakably honest.",
    name: "Ananya Sharma",
    role: "Home Chef · Mumbai",
  },
  {
    quote:
      "We've sourced dehydrated produce from many suppliers. A-VADH delivers consistency, hygiene, and a story we're proud to share.",
    name: "Rohan Mehta",
    role: "F&B Procurement · Dubai",
  },
  {
    quote:
      "Their jaggery is the closest thing to what my village used to make. Clean, aromatic, and absolutely sattvic.",
    name: "Dr. Lakshmi Iyer",
    role: "Ayurveda Practitioner · Bengaluru",
  },
];

function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="An artisan in rural Ayodhya carefully sorting golden turmeric and dehydrated produce"
            className="w-full h-full object-cover opacity-40"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <p className="eyebrow">Why · A-VADH</p>
          <span className="hairline mt-5 mb-8 block w-12" aria-hidden />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Without killing.
            <br />
            <em className="italic gold-text">Pure by intention.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-ivory-muted leading-relaxed text-base md:text-lg">
            At Avadh Premium International LLP, we are building a modern facility in rural Ayodhya — producing
            dehydrated fruits and vegetables, wood-pressed oils, and pure jaggery through advanced, hygienic processes.
            No cruelty. No chemicals. No artificial colors, flavors, or preservatives. For premium domestic and export
            markets.
          </p>
        </div>
      </section>

      {/* ETYMOLOGY */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow">The Name</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              What is <em className="italic gold-text">"A-VADH"</em>?
            </h2>

            <div className="mt-10 space-y-6 text-ivory-muted leading-relaxed text-[0.95rem] max-w-xl">
              <p>
                The name is drawn from Sanskrit — a quiet, deliberate vow rooted in the philosophy of non-violence
                that has shaped this land for millennia.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="border border-border/50 p-8 bg-card/40">
                <div className="font-display text-5xl gold-text">अ</div>
                <div className="mt-4 label-caps text-ivory-muted">"A"</div>
                <p className="mt-3 text-ivory leading-relaxed">means "without" or "absence of"</p>
              </div>
              <div className="border border-border/50 p-8 bg-card/40">
                <div className="font-display text-5xl gold-text">वध</div>
                <div className="mt-4 label-caps text-ivory-muted">"VADH"</div>
                <p className="mt-3 text-ivory leading-relaxed">means "killing" or "slaughter"</p>
              </div>
            </div>

            <p className="mt-10 max-w-xl text-ivory leading-relaxed text-base">
              Together, <span className="gold-text font-medium">A-VADH</span> means
              <em className="italic"> "without killing"</em> — a philosophy of purity, non-violence, and
              cruelty-free craft, in every jar we seal.
            </p>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative max-w-md mx-auto aspect-[3/4] overflow-hidden">
              <div className="absolute -inset-12 glow-soft" aria-hidden />
              <img
                src={aboutPhilosophy}
                alt="A white lotus floating in a brass bowl with marigold petals — symbolic of A-VADH's non-violent philosophy"
                className="relative w-full h-full object-cover"
                width={1080}
                height={1600}
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-gold/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 md:py-32 px-6 bg-onyx-elevated/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">The Future</p>
            <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              What the <em className="italic gold-text">organization</em> does
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
            <div className="relative pl-10">
              <span className="absolute left-0 top-1 font-display text-3xl gold-text">◆</span>
              <p className="label-caps text-gold mb-5">Vision</p>
              <p className="text-ivory leading-relaxed">
                To make A-VADH a global name in pure, sustainable agro-food processing from Ayodhya. Blending
                tradition with AI-driven innovation, we aim to set benchmarks in cruelty-free, sattvic food —
                fostering community empowerment and next-generation entrepreneurship.
              </p>
            </div>
            <div className="relative pl-10">
              <span className="absolute left-0 top-1 font-display text-3xl gold-text">◆</span>
              <p className="label-caps text-gold mb-5">Vision 2030</p>
              <p className="text-ivory leading-relaxed">
                To establish A-VADH as a globally trusted brand representing purity, sustainability, and
                compassion — empowering rural India through ethical food production that nourishes people and the
                planet, while upholding our core principle of "without killing" in every process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="eyebrow">Ethos</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              Purity with <em className="italic gold-text">Purpose.</em>
            </h2>
            <p className="mt-8 text-ivory-muted leading-relaxed text-[0.95rem]">
              At A-VADH, purity is not just a standard — it is a way of life. Every product we create embodies a
              deep respect for nature, humanity, and all living beings. Our purpose goes beyond business: it is
              about nurturing health, empowering rural communities, and promoting a sustainable, compassionate way
              of living that honors both tradition and innovation.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50">
            {ETHOS_PILLARS.map((p) => (
              <div key={p.n} className="bg-background p-8 lg:p-10 hover:bg-onyx-elevated/60 transition-colors">
                <div className="label-caps text-gold">{p.n}</div>
                <span className="hairline mt-4 mb-6 block w-8" aria-hidden />
                <h3 className="font-display text-xl text-foreground leading-snug">{p.title}</h3>
                <p className="mt-5 text-ivory-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 px-6 bg-onyx-elevated/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">About Us</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              Why choose <em className="italic gold-text">A-VADH?</em>
            </h2>
            <p className="mt-8 text-ivory-muted leading-relaxed text-[0.95rem]">
              We combine purity, innovation, and ethics to deliver products you can truly trust. From sourcing to
              packaging, every step reflects our commitment to quality, sustainability, and compassion. Choosing
              A-VADH means choosing honesty, health, and harmony with nature.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/50">
            {WHY_US.map((w) => (
              <div key={w.title} className="bg-background p-8">
                <span className="hairline mb-5 block w-8" aria-hidden />
                <h3 className="font-display text-lg text-foreground">{w.title}</h3>
                <p className="mt-3 text-ivory-muted text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYGIENE COMMITMENT */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">Hygiene Commitment</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.2]">
            Cruelty &amp; chemical-free,
            <br />
            <em className="italic gold-text">with an unwavering hygiene commitment.</em>
          </h2>
          <div className="mt-10 space-y-6 text-ivory-muted leading-relaxed text-[0.95rem] max-w-2xl mx-auto">
            <p>
              At A-VADH, we uphold the highest standards of purity and care. Our products are completely free from
              cruelty, chemicals, and artificial additives — crafted through clean, hygienic, and eco-friendly
              processes.
            </p>
            <p>
              Every stage of production, from sourcing to packaging, is guided by our unwavering commitment to
              safety, sanitation, and compassion — ensuring that what reaches you is pure, wholesome, and ethically
              produced.
            </p>
          </div>
        </div>
      </section>

      {/* ETHICAL MANUFACTURING FRAMEWORK */}
      <section className="py-24 md:py-32 px-6 bg-onyx-elevated/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="eyebrow">Manufacturing</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              Ethical Manufacturing <em className="italic gold-text">Framework.</em>
            </h2>
            <p className="mt-8 text-ivory-muted leading-relaxed text-[0.95rem]">
              Our manufacturing philosophy is rooted in integrity, transparency, and responsibility. We follow a
              strict ethical framework that prioritizes humane practices, fair labor, and environmental
              stewardship — combining advanced technology with traditional wisdom to deliver excellence without
              compromising ethics.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-12">
            {FRAMEWORK.map((f, i) => (
              <div key={f.title} className="border-t border-gold/30 pt-8">
                <div className="label-caps text-gold">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-4 text-ivory-muted text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / TRACK RECORD */}
      <section className="py-24 md:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="eyebrow">Progress Indicator</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15] max-w-2xl mx-auto">
            A proven track record of <em className="italic gold-text">success.</em>
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 max-w-5xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="bg-background py-12 px-6">
                <div className="font-display text-4xl md:text-5xl gold-text tabular-nums">{s.value}</div>
                <div className="mt-4 text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RURAL AYODHYA */}
      <section className="py-24 md:py-32 px-6 bg-onyx-elevated/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden">
              <img
                src={rural}
                alt="A farmer in rural Ayodhya at golden hour — the heartland of A-VADH's sourcing"
                className="w-full h-[420px] md:h-[560px] object-cover"
                width={1600}
                height={900}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow">Why Rural Ayodhya?</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
              The heart of <em className="italic gold-text">India.</em>
            </h2>
            <div className="mt-8 space-y-5 text-ivory-muted leading-relaxed text-[0.95rem]">
              <p>
                Rural Ayodhya represents the heart of India — rich in tradition, purity, and potential. By
                establishing our modern production facility here, A-VADH empowers local communities through
                sustainable employment, fair trade, and skill development.
              </p>
              <p>
                The region's natural environment and agricultural diversity provide ideal conditions for sourcing
                fresh, high-quality raw materials — strengthening the local economy while reviving India's ancient
                values of purity, compassion, and harmony with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <p className="eyebrow">Client Feedback</p>
            <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.15]">
              Our customers' <em className="italic gold-text">experiences.</em>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border/50 bg-card/40 p-8 lg:p-10 flex flex-col">
                <span className="font-display text-5xl gold-text leading-none" aria-hidden>"</span>
                <blockquote className="mt-4 text-ivory leading-relaxed text-[0.95rem] flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/50">
                  <div className="font-display text-base text-foreground">{t.name}</div>
                  <div className="mt-1 text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">Partner With Us</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15]">
            Begin your journey with <em className="italic gold-text">A-VADH.</em>
          </h2>
          <p className="mt-8 text-ivory-muted max-w-xl mx-auto leading-relaxed">
            Whether you're a discerning home cook, a chef, or a global distributor — discover a brand that
            measures success in purity, not shortcuts.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/shop"
              className="px-8 py-4 bg-gold text-onyx label-caps hover:bg-gold-soft transition-colors"
            >
              Explore the Shop
            </Link>
            <Link
              to="/applications"
              className="label-caps text-gold hover:text-gold-soft transition-colors inline-flex items-center gap-3"
            >
              Common Applications <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

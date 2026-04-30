import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import heroImage from "@/assets/applications-hero.jpg";

const TITLE = "Common Applications — A-VADH | Where Pure Ingredients Find Purpose";
const DESC =
  "From culinary arts and clinical nutrition to Ayurveda, cosmetics and humanitarian aid — discover the breadth of industries served by A-VADH's dehydrated foods, cold-pressed oils and pure jaggery.";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: ApplicationsPage,
});

type Application = {
  eyebrow: string;
  title: string;
  intro: string;
  uses: string[];
};

const APPLICATIONS: Application[] = [
  {
    eyebrow: "Food Technology",
    title: "Culinary & Food Processing",
    intro:
      "The foundation of the modern Indian kitchen — from instant convenience to slow-crafted depth.",
    uses: [
      "Instant soups, gravies, stews.",
      "Curry bases and dry masalas.",
      "Spice blends and seasonings.",
      "Condiments: chutneys, pickles, relishes.",
      "Gravies for ready-to-eat (RTE) & ready-to-cook (RTC) meals.",
      "Thickeners for sauces, dips, and dressings.",
      "Jams, jellies, and fruit preserves.",
      "Ketchup and tomato-based sauces.",
      "Flavour enhancers in snack powders (namkeen, bhujia, popcorn).",
    ],
  },
  {
    eyebrow: "Baked Goods",
    title: "Bakery, Snacks & Convenience Foods",
    intro:
      "Naturally sourced flavour, colour and nutrition for the next generation of healthier indulgence.",
    uses: [
      "Flavour enhancers in crackers, biscuits, khakhra.",
      "Natural sweeteners and flavouring agents in cakes and muffins.",
      "Vegetable flours for multigrain, keto, gluten-free bread.",
      "Flavour and colour boosters in cookies, breadsticks, rusks.",
      "Chips, extruded snacks, and energy bars (powders or dough components).",
      "Flavoured coatings and dry dips (nachos, fries).",
    ],
  },
  {
    eyebrow: "Sweets",
    title: "Ice Creams & Desserts",
    intro:
      "Real fruit, real colour, real texture — clean-label sweetness for premium dessert houses.",
    uses: [
      "Natural fruit powders in ice creams and sorbets.",
      "Colouring and flavouring in frozen yogurts.",
      "Sweet toppings and decorative swirls.",
      "Base ingredients for kulfis, custards, gels, and puddings.",
      "Gelatin-free dessert stabilizers (fruit pectin-based).",
    ],
  },
  {
    eyebrow: "Liquids",
    title: "Beverages, Smoothies & Instant Drink Mixes",
    intro:
      "Functional hydration and wellness — instantly soluble, naturally vibrant.",
    uses: [
      "Immunity-boosting drink mixes (amla, orange, beetroot).",
      "Detox and prebiotic beverage powders (spinach, ginger, celery).",
      "Herbal wellness teas and kadha blends.",
      "Ready-to-mix shakes, smoothies, and health drinks.",
      "Electrolyte rehydration beverages.",
    ],
  },
  {
    eyebrow: "Clinical Nutrition",
    title: "Medical, Clinical & Geriatric Nutrition",
    intro:
      "Mission-critical nutrition formulated for hospitals, recovery centres and care institutions.",
    uses: [
      "Enteral and tube feeding in hospitals and recovery centers.",
      "Diabetic-safe nutritional powders.",
      "Nutrient-dense formulations for oncology and dialysis patients.",
      "Pediatric nutrition and fortified foods.",
      "Supplements for micronutrients (iron, calcium, antioxidants).",
    ],
  },
  {
    eyebrow: "Natural Remedies",
    title: "Ayurvedic & Herbal Formulations",
    intro:
      "Traditional wisdom, modernised — carrier powders and excipients for India's herbal heritage.",
    uses: [
      "Ayurvedic churna and herbal powder blends (triphala, giloy, ashwagandha).",
      "Carrier powders for herbal extracts (amla, tulsi, brahmi).",
      "Excipients in tablets and capsules.",
      "Rasayana and adaptogenic mixtures.",
      "Infusions in medicinal oils and decoctions.",
    ],
  },
  {
    eyebrow: "Medicinal Foods",
    title: "Nutraceutical & Functional Foods",
    intro:
      "Plant-powered functional ingredients for the wellness economy.",
    uses: [
      "Carrier agents in capsules and tablets.",
      "Excipients for probiotic and enzyme powders.",
      "Plant-based functional supplements (digestive health, immunity, cognitive support).",
      "Wellness blends and adaptogenic superfoods.",
      "Dietary fiber and antioxidant-enriched foods.",
    ],
  },
  {
    eyebrow: "Traditional Dyeing",
    title: "Natural Colorants & Dyeing Industry",
    intro:
      "A return to plant-based colour — for textiles, food and personal care.",
    uses: [
      "Textile and fabric dyes (turmeric, beetroot, indigo, spinach).",
      "Natural food coloring for bakery, beverages, desserts.",
      "Cosmetics color base (lip balm, eye shadow, blush).",
      "Decorative coatings in confectionery.",
      "Floral-based pigments (hibiscus, butterfly pea, rose).",
    ],
  },
  {
    eyebrow: "Dietary Supplements",
    title: "Fitness & Nutritional Supplements",
    intro:
      "Clean ingredients for performance, recovery and everyday wellbeing.",
    uses: [
      "Protein bar and granola bar ingredients.",
      "Natural sweeteners and binders in health supplements.",
      "Pre-workout blends and recovery drinks.",
      "Fiber-rich supplements for digestive health.",
      "Diabetic-safe or low-GI functional powders.",
    ],
  },
  {
    eyebrow: "Skincare",
    title: "Cosmetics & Personal Care",
    intro:
      "Botanical-grade powders for natural beauty formulations.",
    uses: [
      "Natural exfoliants (papaya, pineapple, orange peel).",
      "Face mask powders (turmeric, rose petals, neem).",
      "Hair and scalp treatment packs (hibiscus, amla, bhringraj).",
      "Soap and bath product additives (mint, citrus, lavender).",
      "Organic skin cleansers and moisturizing scrubs.",
    ],
  },
  {
    eyebrow: "Aroma",
    title: "Perfumes, Fragrances & Aromatic Products",
    intro:
      "Slow-dried botanicals as the soul of natural scent.",
    uses: [
      "Base ingredients for incense sticks (agarbatti, dhoop).",
      "Potpourri mixtures (flowers, herbs, spices).",
      "Aromatherapy and scented sachets (lavender, rose, jasmine).",
      "Natural fragrance powders in air fresheners.",
      "Aroma-therapeutic blends for spa products.",
    ],
  },
  {
    eyebrow: "Personal Care Industry",
    title: "Candle & Soap Industry",
    intro:
      "Artisan ingredients for handmade, therapeutic and decorative goods.",
    uses: [
      "Natural fragrances for handmade candles (lavender, citrus, rose).",
      "Herbal additives for therapeutic candles.",
      "Colorants and fragrance in natural soaps.",
      "Floral and herbal infusions for artisanal soaps.",
      "Decorative, botanical candle toppings (dried flowers, herbs).",
    ],
  },
  {
    eyebrow: "Flavours & Fragrances",
    title: "Floral & Aromatic Applications",
    intro:
      "Edible flowers and aromatic infusions for refined sensorial experiences.",
    uses: [
      "Herbal teas and aromatic infusions (chamomile, lavender, rose).",
      "Floral flavourings and aromatics in confectionery and desserts.",
      "Essential oil and fragrance formulations.",
      "Decorative culinary toppings (edible flowers).",
      "Potpourri and aromatherapy products.",
    ],
  },
  {
    eyebrow: "Animal Feed",
    title: "Animal & Pet Nutrition",
    intro:
      "Wholesome plant-based fortification for pets and livestock.",
    uses: [
      "Pet food additives (vitamins, flavour enhancers).",
      "Nutritional supplements for livestock and poultry.",
      "Colorants and fragrance in natural soaps.",
      "Floral and herbal infusions for artisanal soaps.",
      "Herbal wellness powders for animal health.",
    ],
  },
  {
    eyebrow: "Consumer Behavior",
    title: "Retail & Consumer Lifestyle",
    intro:
      "Designed for the modern, conscious consumer — at home and on the move.",
    uses: [
      "Travel-friendly single-serve sachets.",
      "Gifting: health baskets, gourmet and Ayurvedic hampers.",
      "Subscription boxes for health-conscious consumers.",
      "Emergency home-use kits (non-refrigerated).",
    ],
  },
  {
    eyebrow: "Bulk Distribution",
    title: "Institutional & Bulk Supply",
    intro:
      "At the scale of nations — feeding institutions, defence forces and humanitarian missions.",
    uses: [
      "School and institutional mid-day meal programs.",
      "Army / naval ration packs.",
      "Long-shelf-life nutritional kits for disaster relief (UN, NGOs, humanitarian aid).",
      "Export-grade dehydrated products for international markets.",
      "Bulk ingredients for commercial food production.",
    ],
  },
];

function ApplicationsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cinematic flat-lay of dehydrated food powders, herbs, oils and aromatic ingredients on a black surface"
            className="w-full h-full object-cover"
            width={1920}
            height={1024}
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.10 0.005 60 / 0.65) 0%, transparent 30%, transparent 55%, oklch(0.10 0.005 60 / 0.97) 100%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="eyebrow reveal-up">General Uses</p>
          <span className="hairline mt-6 mb-8 hairline-draw block w-12" aria-hidden />
          <h1 className="font-display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] max-w-5xl reveal-up reveal-up-d1">
            Common
            <br />
            <em className="italic gold-text">Applications.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-base md:text-lg text-ivory-muted leading-relaxed font-light reveal-up reveal-up-d2">
            From the kitchen counter to the operating theatre, from boutique
            fragrance houses to global humanitarian missions — A-VADH's pure,
            slow-crafted ingredients quietly serve seventeen distinct industries.
          </p>
        </div>
      </section>

      {/* INDEX strip */}
      <section className="border-y border-border/40 bg-onyx-elevated/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <p className="label-caps text-gold mb-6">An Index of {APPLICATIONS.length} Industries</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {APPLICATIONS.map((app, i) => (
              <li key={app.title}>
                <a
                  href={`#app-${i + 1}`}
                  className="group flex items-baseline gap-3 text-sm text-ivory-muted hover:text-gold transition-colors"
                >
                  <span className="font-display text-gold/70 group-hover:text-gold tabular-nums text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{app.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPLICATION SECTIONS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 space-y-24 md:space-y-32">
        {APPLICATIONS.map((app, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <article
              key={app.title}
              id={`app-${i + 1}`}
              className="grid md:grid-cols-[260px_1fr] gap-10 md:gap-16 scroll-mt-32"
            >
              {/* LEFT — meta column */}
              <div className="md:sticky md:top-32 md:self-start">
                <p className="font-display text-6xl md:text-7xl text-gold/30 tabular-nums leading-none">
                  {num}
                </p>
                <span className="hairline mt-6 mb-5 block" aria-hidden />
                <p className="eyebrow text-gold">{app.eyebrow}</p>
              </div>

              {/* RIGHT — content */}
              <div>
                <h2 className="font-display text-3xl md:text-5xl leading-[1.1]">
                  {app.title}
                </h2>
                <p className="mt-6 text-ivory-muted leading-relaxed text-base md:text-lg max-w-2xl">
                  {app.intro}
                </p>

                <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5">
                  {app.uses.map((use) => (
                    <li
                      key={use}
                      className="flex items-start gap-4 text-foreground/90 text-sm md:text-[0.95rem] leading-relaxed border-b border-border/30 pb-4"
                    >
                      <span className="font-display text-gold text-lg leading-none mt-1 flex-shrink-0">
                        ◆
                      </span>
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-12 py-28 md:py-36 border-t border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Partner with A-VADH</p>
          <span className="hairline mt-6 mb-8 hairline-draw block mx-auto" aria-hidden />
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Found your <em className="italic gold-text">application?</em>
          </h2>
          <p className="mt-8 text-ivory-muted leading-relaxed max-w-xl mx-auto">
            We supply private-label, white-label and bulk B2B formats across all
            seventeen industries. Tell us what you're crafting — we'll build the
            spec sheet around it.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/" hash="footer" className="ghost-gold-btn">
              Request a Spec Sheet
            </Link>
            <Link
              to="/shop"
              className="label-caps text-ivory-muted hover:text-gold transition-colors"
            >
              Browse Retail Range →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ApplicationsPage;

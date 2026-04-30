import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

// Import images
import envImg from "@/assets/sustainability-env.png";
import socialImg from "@/assets/sustainability-social.png";
import culturalImg from "@/assets/sustainability-cultural.png";
import digitalImg from "@/assets/sustainability-digital.png";
import bioImg from "@/assets/sustainability-bio.png";
import econImg from "@/assets/sustainability-econ.png";
import resilienceImg from "@/assets/sustainability-resilience.png";
import govImg from "@/assets/sustainability-gov.png";

const TITLE = "Sustainability Framework — A-VADH";
const DESC =
  "Our comprehensive commitment to environmental stewardship, social impact, and ethical governance in rural Ayodhya.";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: envImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: envImg },
    ],
  }),
  component: SustainabilityPage,
});

const SUSTAINABILITY_PILLARS = [
  {
    id: "7.1",
    title: "Environmental Sustainability",
    subtitle: "Reduce, reclaim, regenerate",
    points: [
      "Energy-Efficient Processes",
      "Zero-Waste Manufacturing (Core Operational)",
      "Sustainable Packaging Solutions",
      "Ethical Sourcing & Supply Chain",
      "Water Conservation Initiatives",
      "Carbon Footprint Reduction",
      "Climate Impact & SDG Alignment",
    ],
    tags: ["ISO 14001", "LCA", "REAWADDD"],
    image: envImg,
  },
  {
    id: "7.2",
    title: "Social Impact",
    subtitle: "Equity, dignity, opportunity",
    points: [
      "Farmer Empowerment & Fair Wages",
      "Women-Led Workforce Model",
      "Rural Empowerment & Employment",
      "Skill Development Programs",
      "Community Nutrition Initiatives",
      "CSR & Local Upliftment Projects",
    ],
    tags: ["SEDEX/SMETA", "SA8000", "FAIRTRADE"],
    image: socialImg,
  },
  {
    id: "7.3",
    title: "Cultural Preservation",
    subtitle: "Safeguarding heritage & knowledge",
    points: [
      "Indigenous Knowledge Documentation",
      "Traditional Awadhi Food Heritage",
      "Sacred Crop Preservation",
    ],
    tags: ["Ethnography", "ID Tags", "Archives"],
    image: culturalImg,
  },
  {
    id: "7.4",
    title: "Digital Sustainability",
    subtitle: "Tech for good, responsible",
    points: [
      "Tech-for-Good Initiatives",
      "Digital Literacy Programs",
      "E-Waste Management",
    ],
    tags: ["Right-to-Repair", "Refurbished", "Green Cloud"],
    image: digitalImg,
  },
  {
    id: "7.5",
    title: "Biodiversity Stewardship",
    subtitle: "Protect habitats & pollinators",
    points: [
      "Native Crop Revival",
      "Pollinator-Friendly Practices",
      "Seed Sovereignty Programs",
    ],
    tags: ["agro-forestry", "no-pesticide areas", "community seed"],
    image: bioImg,
  },
  {
    id: "7.6",
    title: "Economic Sustainability",
    subtitle: "Fair value, resilient markets",
    points: [
      "Circular Economy Models",
      "Cost-Efficient Technology",
      "Shared Value Creation",
      "Financial Inclusion Programs",
    ],
    tags: ["Fair-pay-labs", "MSME Finance", "Reverse Logistics"],
    image: econImg,
  },
  {
    id: "7.7",
    title: "Resilience Building",
    subtitle: "Prepare, adapt, bounce forward",
    points: [
      "Climate Adaptation Training",
      "Disaster-Preparedness Kits",
      "Supply Chain Decentralization",
    ],
    tags: ["EIA", "BCM/DR", "Local Sourcing"],
    image: resilienceImg,
  },
  {
    id: "7.8",
    title: "Governance & Policy",
    subtitle: "Accountability, ethics, measurement",
    points: [
      "Sustainability & Zero-Waste Policy",
      "Ethical Labor Practices",
      "Transparency Framework",
      "Impact Measurement System",
    ],
    tags: ["GRI", "ESG", "SDG Align"],
    image: govImg,
  },
];

function SustainabilityPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
          <img
            src={envImg}
            alt="Sustainability at A-VADH"
            className="w-full h-full object-cover opacity-60 transition-all duration-1000"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Our Commitment</p>
            <span className="hairline mt-5 mb-8 block w-12" aria-hidden />
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
              Nurturing <br />
              <em className="italic gold-text">the future.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-ivory-muted leading-relaxed text-base md:text-lg">
              At A-VADH, sustainability is not a destination but a continuous journey. 
              Our framework is built on the pillars of environmental stewardship, 
              social equity, and ethical governance — ensuring that every action we take 
              nourishes both people and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FRAMEWORK HEADER */}
      <section className="py-24 md:py-32 px-6 border-y border-border/40 bg-onyx-elevated/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-8">
            Sustainability <em className="italic gold-text">Framework</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
            {SUSTAINABILITY_PILLARS.map((p) => (
              <a 
                key={p.id} 
                href={`#pillar-${p.id}`} 
                className="label-caps text-[0.65rem] md:text-[0.72rem] text-ivory-muted hover:text-gold border border-border/50 px-4 py-2 hover:border-gold transition-all"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS TIMELINE */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block -translate-x-1/2 z-0" />

        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {SUSTAINABILITY_PILLARS.map((pillar, index) => (
            <div 
              key={pillar.id} 
              id={`pillar-${pillar.id}`}
              className="relative grid md:grid-cols-2 gap-16 md:gap-32 items-center scroll-mt-32"
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-20 hidden md:block" />

              {/* Image Column */}
              <div className={`relative z-10 flex ${index % 2 === 0 ? "md:justify-end" : "md:order-2 md:justify-start"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full max-w-md aspect-[4/3] overflow-hidden border border-border/40 relative rounded-3xl group shadow-2xl shadow-gold/5"
                >
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 label-caps text-gold text-[0.65rem] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {pillar.subtitle}
                  </div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className={`relative z-10 ${index % 2 === 0 ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:text-right"}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={`flex items-center gap-4 mb-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    <span className="font-display text-4xl text-gold/40">{pillar.id}</span>
                    <span className="hairline w-12" />
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gold label-caps text-[0.7rem] mb-8 tracking-[0.2em]">
                    {pillar.subtitle}
                  </p>
                  
                  <ul className={`space-y-4 mb-10 ${index % 2 !== 0 ? "md:items-end" : ""}`}>
                    {pillar.points.map((point, i) => (
                      <li key={i} className={`flex items-start gap-3 text-ivory-muted text-[0.95rem] ${index % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                        <span className="text-gold mt-1 text-xs">◆</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-3 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    {pillar.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-onyx-elevated border border-border/50 text-ivory-muted label-caps text-[0.6rem] hover:border-gold hover:text-gold transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 md:py-40 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">Our Vow</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Sustainability is <em className="italic gold-text">integrity.</em>
          </h2>
          <p className="mt-10 text-ivory-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Every product from A-VADH carries the promise of purity and responsibility. 
            Join us in supporting a food system that honors tradition, empowers people, 
            and protects our shared future.
          </p>
          <div className="mt-12">
            <Link to="/about" className="ghost-gold-btn">
              Explore Our Story
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

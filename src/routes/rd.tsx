import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";
import { 
  Microscope, 
  Cpu, 
  BookOpen, 
  Handshake, 
  FlaskConical, 
  Activity,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

// Asset imports
import rdHero from "@/assets/rd-hero.jpg";
import techImg from "@/assets/res-science.png";
// import aiImg from "@/assets/trust-ai-qc.png";
import pubImg from "@/assets/res-hero.png";
import researchImg from "@/assets/trust-processing.png";
import teamImg from "@/assets/team-placeholder.jpg";

const TITLE = "Research & Development — A-VADH Innovation Lab";
const DESC =
  "Pioneering the future of food preservation in rural Ayodhya. Exploring AI-driven quality control, advanced dehydration science, and nutritional bio-availability.";

export const Route = createFileRoute("/rd")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: rdHero },
    ],
  }),
  component: RDPage,
});

const TEAM = [
  { name: "Alex Cooper", title: "Director of Innovation" },
  { name: "Sofia Garcia", title: "Lead Food Technologist" },
  { name: "Brian Lee", title: "AI Systems Engineer" },
  { name: "Emma Wood", title: "Nutritional Researcher" },
];

const QC_FEATURES = [
  {
    title: "Smart Defect Detection",
    body: "AI cameras and sensors instantly identify impurities or inconsistencies in real time.",
  },
  {
    title: "Automated Quality Monitoring",
    body: "Continuous AI analysis ensures every batch maintains optimal freshness, color, and texture.",
  },
  {
    title: "Predictive Efficiency",
    body: "Machine learning forecasts maintenance and process adjustments to prevent downtime.",
  },
];

function RDPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={rdHero} alt="R&D Lab" className="w-full h-full object-cover opacity-40 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Innovation</p>
            <span className="hairline mt-5 mb-8 block w-12" aria-hidden />
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] gold-text">
              R & D
            </h1>
            <p className="mt-8 text-ivory-muted max-w-xl label-caps tracking-[0.2em] text-xs">
              Innovation in rural Ayodhya — where tradition meets the lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow">Partner</p>
            <h2 className="font-display text-4xl md:text-6xl mt-4">Teammate</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM.map((m, i) => (
              <motion.article 
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-onyx-elevated/40 overflow-hidden rounded-2xl border border-border/20 mb-6">
                  <img src={teamImg} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-xl text-center group-hover:text-gold transition-colors">{m.name}</h3>
                <p className="text-[0.6rem] text-center text-ivory-muted label-caps mt-2 tracking-widest">{m.title}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EXPLAINED */}
      <section className="py-24 px-6 bg-onyx-elevated/10 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="eyebrow text-gold">Drying</p>
              <h2 className="font-display text-3xl md:text-5xl mt-6 mb-8 leading-tight">
                Dehydration <br />
                <em className="italic gold-text">Technology Explained</em>
              </h2>
              <div className="space-y-6 text-ivory-muted leading-relaxed text-[0.95rem]">
                <p>
                  At A-VADH, we use advanced dehydration technology to gently remove moisture 
                  while preserving natural color, flavor, and nutrients. Our controlled drying process 
                  ensures optimal temperature and airflow, preventing nutrient loss.
                </p>
                <p>
                  This results in long-lasting, nutrient-rich products that retain the authentic 
                  taste of fresh produce — without any chemicals or preservatives.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-gold/5 max-w-xl mx-auto lg:ml-auto"
            >
              <img src={techImg} alt="Dehydration Technology" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI QUALITY CONTROL */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow text-gold">Quality Assurance</p>
            <h2 className="font-display text-3xl md:text-5xl mt-6 leading-tight">
              AI-Powered <em className="italic gold-text">Quality Control Systems</em>
            </h2>
            <p className="mt-8 text-ivory-muted leading-relaxed text-sm">
              Integrating artificial intelligence into every stage of production to maintain 
              unmatched precision, consistency, and absolute safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {QC_FEATURES.map((f, i) => (
              <div key={f.title} className="p-8 border border-border/40 rounded-3xl bg-onyx-elevated/20 group hover:border-gold/40 transition-colors">
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-8">
                  {i === 0 ? <Cpu className="text-gold h-5 w-5" /> : i === 1 ? <Activity className="text-gold h-5 w-5" /> : <Microscope className="text-gold h-5 w-5" />}
                </div>
                <h3 className="font-display text-xl mb-4">{f.title}</h3>
                <p className="text-xs text-ivory-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS & PATENTS */}
      <section className="py-24 px-6 bg-onyx-elevated/5 border-y border-border/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border/40 relative max-w-lg"
          >
            <img src={pubImg} alt="Scientific Publications" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
          </motion.div>
          <div>
            <p className="eyebrow">Technical Content</p>
            <h2 className="font-display text-3xl md:text-5xl mt-6 mb-8 leading-tight">
              Scientific Publications, <em className="italic gold-text">Patents, & White Papers</em>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-10 text-[0.95rem]">
              Innovation at A-VADH is driven by research and rigorous validation. Our team 
              actively contributes to advanced food processing technologies through global publications.
            </p>
            <button className="flex items-center gap-3 label-caps text-gold hover:text-foreground transition-colors">
              Access Resource Library <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">Strategic Alliances</p>
              <h2 className="font-display text-3xl md:text-5xl mt-6 leading-tight">
                Institutional <br />
                <em className="italic gold-text">Collaborations & Projects</em>
              </h2>
            </div>
            <p className="text-ivory-muted text-sm max-w-sm">
              Meaningful partnerships that drive innovation, sustainability, and social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40 rounded-3xl overflow-hidden">
            {[
              { t: "Research Alliances", d: "Developing advanced dehydration and preservation tech.", icon: FlaskConical },
              { t: "Govt Collaborations", d: "Programs promoting rural entrepreneurship and sustainability.", icon: Handshake },
              { t: "Industry Links", d: "Ensuring best practices in quality, production, and exports.", icon: BookOpen },
              { t: "Community Impact", d: "Strengthening rural economies through local employment.", icon: Users },
            ].map((item) => (
              <div key={item.t} className="bg-background p-10 hover:bg-onyx-elevated/50 transition-colors group">
                <item.icon className="h-6 w-6 text-gold/40 group-hover:text-gold mb-8 transition-colors" />
                <h3 className="font-display text-lg mb-4">{item.t}</h3>
                <p className="text-xs text-ivory-muted leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH & NUTRITION GRID */}
      <section className="py-24 px-6 bg-onyx-elevated/10">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Food Tech */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="eyebrow">Food Technology</p>
              <h2 className="font-display text-3xl md:text-5xl mt-6 mb-8 leading-tight">
                Food Tech & <em className="italic gold-text">Process Research</em>
              </h2>
              <p className="text-ivory-muted leading-relaxed text-[0.95rem] mb-8">
                Combining traditional food wisdom with modern scientific methods to develop advanced 
                dehydration and cold-pressing techniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Texture Analysis", "Flavor Mapping", "Purity Testing", "Bio-Availability"].map(t => (
                  <div key={t} className="flex items-center gap-3 text-[0.6rem] label-caps text-gold/80">
                    <CheckCircle2 className="h-3 w-3" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/40 max-w-lg mx-auto lg:ml-auto"
            >
              <img src={researchImg} alt="Process Research" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Nutritional Research */}
          <div className="text-center">
            <p className="eyebrow text-gold">Clinical Nutrition</p>
            <h2 className="font-display text-4xl md:text-6xl mt-6 mb-16">Nutritional Research</h2>
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="space-y-8 text-right order-2 md:order-1">
                {["Micronutrient Retention", "Antioxidant Profiling", "Nutrient Stability"].map(t => (
                  <div key={t} className="border-r-2 border-gold/40 pr-6">
                    <h4 className="font-display text-lg mb-1">{t}</h4>
                    <p className="text-[0.6rem] label-caps text-ivory-muted">Preservation Standards</p>
                  </div>
                ))}
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                   <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl" />
                   <img src={techImg} alt="Nutritional Research" className="relative z-10 w-full h-full object-cover rounded-full grayscale mix-blend-luminosity border border-border/40" />
                </div>
              </div>
              <div className="space-y-8 text-left order-3">
                {["Bioavailability Research", "Functional Development", "Health Assessment"].map(t => (
                  <div key={t} className="border-l-2 border-gold/40 pl-6">
                    <h4 className="font-display text-lg mb-1">{t}</h4>
                    <p className="text-[0.6rem] label-caps text-ivory-muted">Core R&D Pillars</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY TESTING */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow text-gold">Testing</p>
            <h2 className="font-display text-3xl md:text-5xl mt-6">Product Trials & Safety Testing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Pilot Batch Trials", d: "Small-scale production runs to evaluate product performance and consistency." },
              { n: "02", t: "Microbial Testing", d: "Pathogen and contaminant analysis to ensure absolute food safety." },
              { n: "03", t: "Shelf-Life Evaluation", d: "Stability testing to assess freshness and nutrient retention over time." },
            ].map((step) => (
              <div key={step.n} className="p-10 border border-border/40 rounded-[2.5rem] bg-onyx-elevated/5 relative overflow-hidden group">
                <span className="absolute top-8 right-8 font-display text-6xl text-gold/10 group-hover:text-gold/20 transition-colors">{step.n}</span>
                <h3 className="font-display text-xl mb-6 mt-10">{step.t}</h3>
                <p className="text-xs text-ivory-muted leading-relaxed">{step.d}</p>
                <div className="mt-8 flex items-center gap-2 text-gold label-caps text-[0.6rem]">
                  <span className="w-8 h-px bg-gold" /> Protocol Verified
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Re-importing missing lucide icon
const Users = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

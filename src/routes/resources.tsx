import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";
import { Download, PlayCircle, BookOpen, Users, Lightbulb, ChefHat } from "lucide-react";

// Import images
import heroImg from "@/assets/res-hero.png";
import scienceImg from "@/assets/res-science.png";
import trendsImg from "@/assets/res-trends.png";
import recipesImg from "@/assets/res-recipes.png";
import communityImg from "@/assets/res-community.png";

const TITLE = "Resources — A-VADH Knowledge Hub";
const DESC =
  "A comprehensive knowledge hub for dehydration science, agro-tech trends, traditional Indian techniques, and sustainable food preservation.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img
            src={heroImg}
            alt="A-VADH Resources Hub"
            className="w-full h-full object-cover opacity-50 transition-all duration-1000 scale-105"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Knowledge Hub</p>
            <span className="hairline mt-5 mb-8 block w-12" aria-hidden />
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05]">
              Resources <br />
              <em className="italic gold-text">& Insights.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-ivory-muted leading-relaxed text-base md:text-lg">
              Empowering farmers, chefs, and partners with the science and tradition of 
              premium food preservation. A hub that builds credibility, SEO value, and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDUCATIONAL CONTENT */}
      <section className="py-24 px-6 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Main Feature */}
            <div className="lg:col-span-8">
              <p className="eyebrow text-gold">Educational Content</p>
              <h2 className="font-display text-3xl md:text-5xl mt-6 mb-8 leading-tight">
                Learn the Science & <em className="italic gold-text">Tradition of Dehydration</em>
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-video rounded-3xl overflow-hidden border border-border/40 relative group mb-12"
              >
                <img src={scienceImg} alt="Science of Dehydration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-display text-2xl mb-2">Techniques & Insights</h3>
                  <p className="text-sm text-ivory-muted label-caps tracking-widest">Scientific approach to nutritional preservation</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-border/40 rounded-2xl bg-onyx-elevated/10">
                  <BookOpen className="text-gold mb-6 h-8 w-8" />
                  <h3 className="font-display text-xl mb-4">Dehydration Techniques</h3>
                  <ul className="space-y-3 text-sm text-ivory-muted">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Traditional vs. Modern Methods
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Solar Drying Best Practices
                    </li>
                  </ul>
                </div>
                <div className="p-8 border border-border/40 rounded-2xl bg-onyx-elevated/10">
                  <Lightbulb className="text-gold mb-6 h-8 w-8" />
                  <h3 className="font-display text-xl mb-4">Sustainability Insights</h3>
                  <ul className="space-y-3 text-sm text-ivory-muted">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Zero-Waste Farm Practices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Carbon Footprint Reduction
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 border border-border/40 rounded-3xl bg-gold/5">
                <h3 className="font-display text-xl mb-6 flex items-center gap-3">
                  Quick Starters
                </h3>
                <a href="#" className="flex items-center justify-between py-4 border-b border-border/40 text-sm hover:text-gold transition-colors group">
                  Getting Started for Partners <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#" className="flex items-center justify-between py-4 border-b border-border/40 text-sm hover:text-gold transition-colors group">
                  Dehydration Guide PDF <Download className="h-4 w-4" />
                </a>
              </div>

              <div className="p-8 border border-border/40 rounded-3xl bg-onyx-elevated/30">
                <h3 className="font-display text-xl mb-6 flex items-center gap-3">
                  Video Walkthroughs
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="h-12 w-20 rounded-lg bg-onyx border border-border/40 flex items-center justify-center relative overflow-hidden">
                       <PlayCircle className="h-6 w-6 text-gold z-10" />
                       <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Solar Drying Process</p>
                      <p className="text-[0.6rem] text-ivory-muted label-caps">3:45 MIN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="h-12 w-20 rounded-lg bg-onyx border border-border/40 flex items-center justify-center relative overflow-hidden">
                       <PlayCircle className="h-6 w-6 text-gold z-10" />
                       <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">HACCP Checklists</p>
                      <p className="text-[0.6rem] text-ivory-muted label-caps">5:12 MIN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-border/40 rounded-3xl bg-onyx">
                <h3 className="font-display text-xl mb-6">Downloadables</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between text-xs text-ivory-muted hover:text-gold transition-colors cursor-pointer">
                    <span>SOP: Traditional Indian Techniques</span>
                    <Download className="h-3 w-3" />
                  </li>
                  <li className="flex items-center justify-between text-xs text-ivory-muted hover:text-gold transition-colors cursor-pointer">
                    <span>Nutrient Retention Data Sheet</span>
                    <Download className="h-3 w-3" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY & TRENDS */}
      <section className="py-24 px-6 bg-onyx-elevated/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">Industry & Trends</p>
              <h2 className="font-display text-3xl md:text-5xl mt-6 leading-tight">
                What's Happening in <br />
                <em className="italic gold-text">Agro-Tech & Industry</em>
              </h2>
            </div>
            <p className="text-ivory-muted text-sm max-w-sm">
              A bi-monthly dive into practical trends, supply-chain innovation, and scientific insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Agro-Tech Trends", d: "Affordable tech solutions for rural producers and cooperatives.", img: trendsImg },
              { t: "Industry Insights", d: "Global supply chain innovations and the rise of clean labels.", img: scienceImg },
              { t: "Scientific Insights", d: "The latest research on nutrient retention in vacuum dehydration.", img: heroImg },
            ].map((item, i) => (
              <motion.div 
                key={item.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 mb-6">
                  <img src={item.img} alt={item.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-display text-xl mb-4 group-hover:text-gold transition-colors">{item.t}</h3>
                <p className="text-sm text-ivory-muted leading-relaxed">{item.d}</p>
                <span className="mt-6 inline-block text-gold label-caps text-[0.6rem] tracking-widest">Read Analysis →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL TOOLS */}
      <section className="py-24 px-6 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="eyebrow text-gold">Practical Tools</p>
            <h2 className="font-display text-3xl md:text-5xl mt-6 mb-8 leading-tight">
              Hands-On Recipes, <em className="italic gold-text">Guides & Assets</em>
            </h2>
            <p className="text-ivory-muted">Ready-to-use references for the kitchen, field teams, and partners.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Recipes & Tips", d: "Chef-tested meal ideas & rehydration guides.", icon: ChefHat, img: recipesImg },
              { t: "Downloadable Assets", d: "Product brochures & case study PDFs.", icon: Download, img: trendsImg },
              { t: "Field Brochures", d: "Print-ready guides for rural training.", icon: BookOpen, img: heroImg },
              { t: "Packaging Checklists", d: "SOPs for labeling, storage, and QA.", icon: Users, img: scienceImg },
            ].map((tool, i) => (
              <motion.div
                key={tool.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-80 rounded-3xl overflow-hidden border border-border/40 group"
              >
                <img src={tool.img} alt={tool.t} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <tool.icon className="text-gold mb-4 h-6 w-6" />
                  <h3 className="font-display text-lg mb-2">{tool.t}</h3>
                  <p className="text-[0.7rem] text-ivory-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {tool.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY & CULTURE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="eyebrow text-gold">Community & Culture</p>
            <h2 className="font-display text-3xl md:text-5xl mt-6 leading-tight">
              Stories, Impact & <em className="italic gold-text">Ayurvedic Wisdom</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/40 mb-8 relative">
                <img src={communityImg} alt="AVADH Field Stories" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <p className="label-caps text-gold text-[0.6rem] mb-2 tracking-widest">Impact</p>
                  <h3 className="font-display text-2xl">Farmer Spotlights</h3>
                </div>
              </div>
              <p className="text-sm text-ivory-muted leading-relaxed">
                Meet the families in rural Ayodhya who make A-VADH possible. Before/after income analysis 
                and cooperative success stories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/40 mb-8 relative">
                <img src={scienceImg} alt="Sattvic Wisdom" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <p className="label-caps text-gold text-[0.6rem] mb-2 tracking-widest">Tradition</p>
                  <h3 className="font-display text-2xl">Sattvic Food Wisdom</h3>
                </div>
              </div>
              <p className="text-sm text-ivory-muted leading-relaxed">
                Dehydrated offerings for temple stations and dosha-balancing recipes rooted in 
                ancient Ayurvedic dehydration principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/40 mb-8 relative">
                <img src={heroImg} alt="Workshops" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <p className="label-caps text-gold text-[0.6rem] mb-2 tracking-widest">Training</p>
                  <h3 className="font-display text-2xl">Community Guides</h3>
                </div>
              </div>
              <p className="text-sm text-ivory-muted leading-relaxed">
                Partner training modules and blueprints for micro-units. Empowering local communities 
                to maintain global standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 border-t border-border/40 bg-onyx-elevated/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-8">
            Stay <em className="italic gold-text">Informed.</em>
          </h2>
          <p className="text-ivory-muted mb-12">
            Subscribe to our newsletter for bi-monthly agro-tech insights and rural development news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-background border border-border/40 px-6 py-4 focus:border-gold outline-none transition-colors"
            />
            <button className="bg-gold text-onyx label-caps px-8 py-4 hover:bg-gold-soft transition-colors">
              Join Hub
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

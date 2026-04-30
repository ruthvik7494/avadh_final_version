import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

// Import images
import heroImg from "@/assets/trust-hero.png";
import hygieneImg from "@/assets/trust-hygiene.png";
import processingImg from "@/assets/trust-processing.png";
import aiQcImg from "@/assets/trust-ai-qc.png";
import cleanLabelImg from "@/assets/trust-clean-label.png";
import traceabilityImg from "@/assets/trust-traceability.png";
import packagingImg from "@/assets/trust-packaging.png";

const TITLE = "Trust & Quality — A-VADH";
const DESC =
  "Discover A-VADH's unwavering commitment to food safety, hygiene protocols, and advanced quality control in every product.";

export const Route = createFileRoute("/trust-quality")({
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
  component: TrustQualityPage,
});

function TrustQualityPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] pt-44 md:pt-52 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <img
            src={heroImg}
            alt="Trust and Quality at A-VADH"
            className="w-full h-full object-cover opacity-60 transition-all duration-1000 scale-105"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Assurance</p>
            <span className="hairline mt-5 mb-8 block w-12" aria-hidden />
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
              Trust, <br />
              <em className="italic gold-text">earned daily.</em>
            </h1>
            <p className="mt-10 max-w-2xl text-ivory-muted leading-relaxed text-base md:text-lg">
              At A-VADH, quality is not a standard — it's a vow. From rural Ayodhya to your home, 
              we uphold the highest benchmarks of hygiene, purity, and transparency in every batch we craft.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HYGIENE PROTOCOLS */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow">Safety Standards</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Hygiene <em className="italic gold-text">Protocols</em>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border/40 p-6 rounded-2xl bg-onyx-elevated/20">
                <h3 className="font-display text-lg mb-4 text-gold">Visual Quality Control</h3>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  Rigorous multi-stage visual inspections ensure only the finest produce enters our facility.
                </p>
              </div>
              <div className="border border-border/40 p-6 rounded-2xl bg-onyx-elevated/20">
                <h3 className="font-display text-lg mb-4 text-gold">Advanced Standards</h3>
                <p className="text-xs text-ivory-muted leading-relaxed">
                  Our facility adheres to global hygiene benchmarks, with sterilized environments and touch-free processing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-gold/5"
            >
              <img src={hygieneImg} alt="Hygiene Protocols" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESSING & AI QC */}
      <section className="py-20 md:py-24 px-6 bg-onyx-elevated/10 border-y border-border/40">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Chemical Free */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border/40"
              >
                <img src={processingImg} alt="Chemical Free Processing" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow">The Purity Vow</p>
              <span className="hairline mt-5 mb-8 block" aria-hidden />
              <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
                Chemical & <em className="italic gold-text">Cruelty-Free</em>
              </h2>
              <p className="text-ivory-muted leading-relaxed mb-8 text-[0.95rem]">
                A-VADH products are created without a single drop of synthetic chemicals or preservatives. 
                Our dehydration process preserves the soul of the ingredient, ensuring 100% natural goodness.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-ivory-muted">
                  <span className="text-gold">◆</span> No artificial colors or flavors
                </li>
                <li className="flex items-center gap-3 text-sm text-ivory-muted">
                  <span className="text-gold">◆</span> Ethically sourced, non-GMO produce
                </li>
              </ul>
            </div>
          </div>

          {/* AI QC */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow">Intelligence</p>
              <span className="hairline mt-5 mb-8 block" aria-hidden />
              <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
                AI-Powered <em className="italic gold-text">Quality Control</em>
              </h2>
              <p className="text-ivory-muted leading-relaxed mb-8 text-[0.95rem]">
                Blending traditional wisdom with modern tech. Our AI-driven systems monitor every stage 
                of production, from color consistency to moisture levels, ensuring perfection in every jar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Automated Sorting", "Purity Checks", "Consistent Texture", "Zero Human Error"].map(t => (
                  <div key={t} className="flex items-center gap-2 text-[0.65rem] label-caps text-gold">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border/40 shadow-2xl shadow-gold/5"
              >
                <img src={aiQcImg} alt="AI Quality Control" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TRANSPARENCY */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="eyebrow">Transparency</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
            Our Process <em className="italic gold-text">Transparency</em>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Raw Selection", d: "Sourcing only peak-season, farm-fresh ingredients." },
            { n: "02", t: "Hygienic Production", d: "Touch-free, clean-room standards throughout." },
            { n: "03", t: "Secure Packaging", d: "Advanced sealing to lock in freshness and nutrients." },
            { n: "04", t: "Product Confidence", d: "Every batch tested and certified for purity." },
          ].map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-border/40 rounded-3xl bg-onyx-elevated/10 text-center group hover:border-gold transition-colors"
            >
              <span className="font-display text-3xl text-gold/30 mb-4 block group-hover:text-gold transition-colors">{item.n}</span>
              <h3 className="font-display text-lg mb-3">{item.t}</h3>
              <p className="text-xs text-ivory-muted leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLEAN LABEL & BATCH TRACEABILITY */}
      <section className="py-20 md:py-24 px-6 bg-onyx-elevated/20 border-t border-border/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-gold/20 shadow-2xl shadow-gold/10"
            >
              <img src={cleanLabelImg} alt="Clean Label Initiative" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div>
            <p className="eyebrow">Beyond Ingredients</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Clean Label <em className="italic gold-text">Initiative</em>
            </h2>
            <p className="text-ivory-muted leading-relaxed text-lg italic mb-6">
              "If you can't pronounce it, we don't use it."
            </p>
            <p className="text-ivory-muted leading-relaxed text-[0.95rem]">
              Our Clean Label Initiative ensures that every A-VADH product contains only what nature intended. 
              Minimal processing, zero additives, and absolute honesty on the label.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Traceability</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Batch <em className="italic gold-text">Traceability</em>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-8 text-[0.95rem]">
              Every package of A-VADH carries a unique identity. Through our advanced traceability system, 
              you can trace your product back to its specific batch, date of production, and even the region of sourcing.
            </p>
            <div className="p-6 border border-gold/30 rounded-2xl bg-gold/5 max-w-sm">
              <p className="label-caps text-gold text-[0.65rem] mb-2">Compliance</p>
              <p className="text-xs text-ivory-muted">FSSAI & Global Food Safety Standards Compliant</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-border/40 shadow-lg shadow-gold/5"
            >
              <img src={traceabilityImg} alt="Batch Traceability" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGING & TESTING */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-border/40 relative shadow-xl shadow-gold/5"
            >
              <img src={packagingImg} alt="Packaging Technology" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="label-caps text-gold text-[0.6rem] mb-2">Shelf Life</p>
                <h3 className="font-display text-xl">Nutrient Integrity</h3>
              </div>
            </motion.div>
          </div>
          <div>
            <p className="eyebrow">Engineering</p>
            <span className="hairline mt-5 mb-8 block" aria-hidden />
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Packaging <em className="italic gold-text">Technology</em>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-10 text-[0.95rem]">
              Freshness locked in, naturally. Our moisture-barrier packaging and advanced sealing 
              technology ensure that the aroma, color, and nutritional profile of our products 
              remain intact for months without any preservatives.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-5 border border-border/40 rounded-2xl hover:bg-gold/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display text-lg">✓</div>
                <div>
                  <h4 className="font-display text-base mb-1">Certified Assurance</h4>
                  <p className="text-[0.6rem] text-ivory-muted label-caps tracking-widest">Lab testing for every batch</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-5 border border-border/40 rounded-2xl hover:bg-gold/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display text-lg">✓</div>
                <div>
                  <h4 className="font-display text-base mb-1">Regular Audits</h4>
                  <p className="text-[0.6rem] text-ivory-muted label-caps tracking-widest">Independent verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & COMPLIANCE HUB */}
      <section className="py-24 md:py-32 px-6 border-t border-border/40 bg-onyx-elevated/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow">Integrity & Compliance</p>
            <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Certifications & <br />
              <em className="italic gold-text">Market Credibility</em>
            </h2>
            <p className="mt-8 text-ivory-muted max-w-2xl mx-auto text-sm leading-relaxed">
              Prioritizing safety, legality, and ethical excellence. A-VADH maintains a rigorous 
              framework of national and international certifications to ensure absolute trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* 5.11.1 Mandatory Registrations */}
            <div className="space-y-6">
              <h3 className="label-caps text-gold text-[0.65rem] tracking-widest border-b border-gold/20 pb-4">Mandatory Registrations</h3>
              <ul className="space-y-4">
                {[
                  { t: "FSSAI License", d: "Food Safety and Standards Authority of India" },
                  { t: "MSME Registration", d: "Ministry of Micro, Small & Medium Enterprises" },
                  { t: "GST Registration", d: "Goods and Services Tax Compliance" }
                ].map(item => (
                  <li key={item.t} className="group">
                    <h4 className="font-display text-lg group-hover:text-gold transition-colors">{item.t}</h4>
                    <p className="text-[0.6rem] text-ivory-muted uppercase tracking-tighter">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5.11.2 Government Schemes */}
            <div className="space-y-6">
              <h3 className="label-caps text-gold text-[0.65rem] tracking-widest border-b border-gold/20 pb-4">Government Initiatives</h3>
              <ul className="space-y-4">
                {[
                  { t: "ODOP Ayodhya", d: "One District One Product Initiative" },
                  { t: "Startup India", d: "DPIIT Recognition for Innovation" },
                  { t: "PMFME Scheme", d: "PM Formalization of Micro Food Enterprises" }
                ].map(item => (
                  <li key={item.t} className="group">
                    <h4 className="font-display text-lg group-hover:text-gold transition-colors">{item.t}</h4>
                    <p className="text-[0.6rem] text-ivory-muted uppercase tracking-tighter">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5.11.3 Quality & Safety */}
            <div className="space-y-6">
              <h3 className="label-caps text-gold text-[0.65rem] tracking-widest border-b border-gold/20 pb-4">Quality & Safety</h3>
              <ul className="space-y-4">
                {[
                  { t: "ISO 22000:2018", d: "Food Safety Management System" },
                  { t: "ZED Certification", d: "Zero Defect Zero Effect Standard" },
                  { t: "AGMARK", d: "Agricultural Marketing Grading" }
                ].map(item => (
                  <li key={item.t} className="group">
                    <h4 className="font-display text-lg group-hover:text-gold transition-colors">{item.t}</h4>
                    <p className="text-[0.6rem] text-ivory-muted uppercase tracking-tighter">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5.11.4 Ethical & Sustainable */}
            <div className="space-y-6">
              <h3 className="label-caps text-gold text-[0.65rem] tracking-widest border-b border-gold/20 pb-4">Ethical Practices</h3>
              <ul className="space-y-4">
                {[
                  { t: "Jaivik Bharat", d: "Organic Certification of India" },
                  { t: "PETA Vegan", d: "Approved Vegan & Cruelty-Free" },
                  { t: "FPO Network", d: "Farmer Producer Organization Linkage" }
                ].map(item => (
                  <li key={item.t} className="group">
                    <h4 className="font-display text-lg group-hover:text-gold transition-colors">{item.t}</h4>
                    <p className="text-[0.6rem] text-ivory-muted uppercase tracking-tighter">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5.11.5 Export & International */}
            <div className="space-y-6">
              <h3 className="label-caps text-gold text-[0.65rem] tracking-widest border-b border-gold/20 pb-4">Export & Global</h3>
              <ul className="space-y-4">
                {[
                  { t: "APEDA", d: "Agricultural & Processed Food Exports" },
                  { t: "Fair Trade", d: "Ethical Trading & Fair Wages" },
                  { t: "USDA Organic", d: "National Organic Program Compliance" }
                ].map(item => (
                  <li key={item.t} className="group">
                    <h4 className="font-display text-lg group-hover:text-gold transition-colors">{item.t}</h4>
                    <p className="text-[0.6rem] text-ivory-muted uppercase tracking-tighter">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance Badge */}
            <div className="flex items-center justify-center border border-gold/20 rounded-3xl bg-gold/5 p-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-gold font-display text-2xl">V</span>
                </div>
                <h4 className="label-caps text-gold text-[0.6rem] mb-2">Integrity Verified</h4>
                <p className="text-[0.65rem] text-ivory-muted">100% Compliance across all 17 industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 md:py-32 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">The Standard</p>
          <span className="hairline mt-5 mb-8 mx-auto block w-12" aria-hidden />
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Quality is our <em className="italic gold-text">silent ambassador.</em>
          </h2>
          <p className="mt-10 text-ivory-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the peace of mind that comes with A-VADH. 
            No shortcuts, no compromises — just pure, honest, and high-quality nourishment.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Link to="/shop" className="px-8 py-4 bg-gold text-onyx label-caps hover:bg-gold-soft transition-colors">
              Shop Pure Products
            </Link>
            <Link to="/contact" className="label-caps text-gold hover:text-gold-soft transition-colors">
              Contact Us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

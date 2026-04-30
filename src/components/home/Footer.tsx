import logo from "@/assets/avadh-logo.png";

const COLS = [
  {
    title: "Brand",
    items: ["Our Ethos", "Vision 2030", "Why Rural Ayodhya", "Sustainability"],
  },
  {
    title: "Products",
    items: ["Dehydrated Fruits", "Dehydrated Vegetables", "Cold-Pressed Oils", "Jaggery & Condiments"],
  },
  {
    title: "Applications",
    items: ["Disaster Relief", "Defense & Expedition", "Institutional Supply", "Industrial Manufacturing"],
  },
  {
    title: "Resources",
    items: ["Trust & Quality", "Certifications", "Recipes & Stories", "Press"],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="relative pt-24 pb-10 px-6 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <img src={logo} alt="A-VADH" className="h-12 w-auto mb-6" />
            <p className="text-sm text-ivory-muted leading-relaxed max-w-sm">
              Premium dehydrated foods, cold-pressed oils, and pure jaggery —
              meticulously crafted in rural Ayodhya. Pure as Avadh.
            </p>

            <div className="mt-10 space-y-3 text-sm text-ivory-muted">
              <p>280, Hathigo, Uttar Pradesh 224209</p>
              <p>
                <a href="mailto:info@avadh.co.in" className="hover:text-gold transition-colors">
                  info@avadh.co.in
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="label-caps text-gold mb-6">{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-ivory-muted hover:text-foreground transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">
            © {new Date().getFullYear()} A-VADH. All rights reserved.
          </p>
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted">
            Pure as Avadh
          </p>
        </div>
      </div>
    </footer>
  );
}

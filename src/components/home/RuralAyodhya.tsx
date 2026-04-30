import rural from "@/assets/rural-ayodhya.jpg";

const STATS = [
  { value: "300+", label: "Farmers Empowered" },
  { value: "85%",  label: "Women in Workforce" },
  { value: "1",    label: "Sacred Origin" },
];

export function RuralAyodhya() {
  return (
    <section className="relative py-32 md:py-44 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden">
            <img
              src={rural}
              alt="An Indian farmer in rural Ayodhya gathering wheat at golden hour"
              className="w-full h-[420px] md:h-[560px] object-cover"
              width={1600}
              height={900}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-5">
          <p className="eyebrow">Why Rural Ayodhya</p>
          <span className="hairline mt-5 mb-8 block" aria-hidden />
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-foreground">
            <em className="italic gold-text">Local innovation,</em>
            <br />
            global resilience.
          </h2>

          <p className="mt-8 text-ivory-muted leading-relaxed text-[0.95rem]">
            Our purpose-built facility rises from the heartland of Uttar Pradesh
            — a women-led workforce, farmer-first sourcing, and an ethical
            manufacturing framework that turns rural soil into world-class food.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-border/60 pl-4">
                <div className="font-display text-2xl md:text-3xl gold-text">{s.value}</div>
                <div className="mt-2 text-[0.65rem] tracking-[0.3em] uppercase text-ivory-muted leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

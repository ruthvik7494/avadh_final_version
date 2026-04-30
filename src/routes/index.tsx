import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/home/Nav";
import { HeroVariantB } from "@/components/home/HeroVariantB";
import { BrandEthos } from "@/components/home/BrandEthos";
import { ProductPillars } from "@/components/home/ProductPillars";
import { PremiumLine } from "@/components/home/PremiumLine";
import { RuralAyodhya } from "@/components/home/RuralAyodhya";
import { TrustQuality } from "@/components/home/TrustQuality";
import { CriticalApplications } from "@/components/home/CriticalApplications";
import { Footer } from "@/components/home/Footer";

import jarsLineup from "@/assets/jars-lineup.png";

const TITLE = "A-VADH — Pure as Avadh | Premium Dehydrated Foods, Cold-Pressed Oils & Jaggery";
const DESC =
  "Premium dehydrated foods, cold-pressed oils, and pure jaggery — meticulously crafted in rural Ayodhya. No artificial preservatives. No compromise.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "A-VADH" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: jarsLineup },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: jarsLineup },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      
      {/* Hero Variant B - Chosen Version */}
      <HeroVariantB />

      {/* Rest of the homepage */}
      <BrandEthos />
      <ProductPillars />
      <PremiumLine />
      <RuralAyodhya />
      <TrustQuality />
      <CriticalApplications />
      <Footer />
    </main>
  );
}

import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Squares } from "@/components/ui/squares-background";
import { Spotlight } from "@/components/ui/spotlight";
import StaticGrid from "@/components/ui/static-grid";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Static grid background */}
      <StaticGrid
        className="fixed inset-0 w-full h-full"
        color="#24242a"
        size={48}
        opacity={0.22}
      />
      {/* Spotlight layer */}
      <Spotlight className="z-10 pointer-events-none" />
      {/* Content layer */}
      <div className="relative z-20 min-h-screen">
        <SplineSceneBasic />
        <Hero />
        <BenefitsSection />
        <FeaturesSection />
        <ProcessSection />
        <PossibilitiesSection />
      </div>
    </div>
  );
};

export default Index;

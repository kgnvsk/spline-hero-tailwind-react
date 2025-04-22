
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Black background */}
      <div
        className="fixed inset-0 w-full h-full bg-black"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      
      {/* Grid placed above content but with pointer-events enabled */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 30 }}>
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#6b6b6b"
          hoverFillColor="#333333"
        />
      </div>
      
      {/* Spotlight effect (beneath grid) */}
      <div className="fixed inset-0" style={{ zIndex: 20 }}>
        <Spotlight className="pointer-events-none" />
      </div>
      
      {/* Content beneath everything */}
      <div className="relative" style={{ zIndex: 10 }}>
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

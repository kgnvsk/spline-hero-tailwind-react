
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Squares } from "@/components/ui/squares-background";
import { Spotlight } from "@/components/ui/spotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Fixed background grid with absolute positioning to cover the entire viewport */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={40}
          hoverFillColor="#222"
          className="w-full h-full"
        />
      </div>
      
      {/* Spotlight layer */}
      <Spotlight className="z-10" />
      
      {/* Content layer with higher z-index to appear above the grid */}
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

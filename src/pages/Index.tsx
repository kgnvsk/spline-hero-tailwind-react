
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Spotlight } from "@/components/ui/spotlight";
import StaticGrid from "@/components/ui/static-grid";
import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#101014" }}>
      {/* Static grid as the bottom layer */}
      <StaticGrid 
        color="#6b6b6b" 
        size={48} 
        opacity={0.4} 
      />
      
      {/* Content layer with higher z-index */}
      <div className="relative z-1 min-h-screen">
        {/* Spotlight effect */}
        <Spotlight className="z-10 pointer-events-none" />
        
        {/* Main content */}
        <div className="relative z-20 min-h-screen">
          <SplineSceneBasic />
          <Hero />
          <BenefitsSection />
          <FeaturesSection />
          <ProcessSection />
          <PossibilitiesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

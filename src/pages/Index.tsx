
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Spotlight } from "@/components/ui/spotlight";
import StaticGrid from "@/components/ui/static-grid";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Static grid as a fixed background */}
      <StaticGrid 
        color="#6b6b6b" 
        size={48} 
        opacity={0.4} 
      />
      
      {/* Content layer with higher z-index */}
      <div className="relative z-10 min-h-screen">
        {/* Spotlight effect */}
        <Spotlight className="pointer-events-none" />
        
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


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
    <>
      {/* Статичная сетка на заднем плане, вне других контейнеров */}
      <StaticGrid 
        color="#6b6b6b" 
        size={48} 
        opacity={0.4} 
      />
      
      <div className="min-h-screen bg-transparent relative">
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
    </>
  );
};

export default Index;

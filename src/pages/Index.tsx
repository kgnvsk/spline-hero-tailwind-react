
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
      {/* ЧЁРНЫЙ ФОН */}
      <div
        className="fixed inset-0 w-full h-full bg-black z-0"
        aria-hidden="true"
      />
      
      {/* АНИМИРОВАННАЯ СЕТКА - стоит в слое z-10 */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 10 }}>
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#6b6b6b"
          hoverFillColor="#333333"
        />
      </div>
      
      {/* ВЕСЬ КОНТЕНТ (z-20) */}
      <div className="relative" style={{ zIndex: 20 }}>
        {/* Spotlight не должен получать события мыши */}
        <Spotlight className="pointer-events-none" />
        
        {/* Контент должен получать события мыши */}
        <div>
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

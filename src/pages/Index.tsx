
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Фиксированный фон grid */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none select-none">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#333"
          squareSize={40}
          hoverFillColor="#222"
          className="w-full h-full"
        />
      </div>
      {/* Spotlight поверх grid если нужно (оставляем) */}
      <Spotlight className="z-20" />
      {/* Основной контент поверх зафиксированного фона */}
      <div className="relative z-30 min-h-screen">
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

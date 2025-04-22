
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { BackgroundCells } from "@/components/ui/background-cells";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Black background */}
      <div
        className="fixed inset-0 w-full h-full bg-black"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      {/* Новый красивый фон */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <BackgroundCells className="bg-slate-950" />
      </div>
      {/* Main content */}
      <div className="relative z-10">
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

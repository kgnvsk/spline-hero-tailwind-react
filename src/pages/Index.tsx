
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { SparklesSection } from "@/components/ui/sparkles-section";
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
      {/* Animated grid background with gradient */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <Squares
          direction="right"
          speed={1}
          borderColor="#333"
          squareSize={40}
          hoverFillColor="#222"
        />
      </div>
      {/* Main content */}
      <div className="relative z-10">
        <SplineSceneBasic />
        <Hero />
        <BenefitsSection />
        <FeaturesSection />
        <ProcessSection />
        <PossibilitiesSection />
        <div className="relative">
          <SparklesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

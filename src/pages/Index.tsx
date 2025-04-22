
import { SplineSceneBasic } from "@/components/ui/spline-scene";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { SiteBackground } from "@/components/ui/background-paths";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SiteBackground />
      <SplineSceneBasic />
      <Hero />
      <BenefitsSection />
      <FeaturesSection />
      <ProcessSection />
      <PossibilitiesSection />
    </div>
  );
};

export default Index;

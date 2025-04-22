
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessWorkflowSection } from "@/components/ui/process-workflow-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SplineSceneBasic />
      <Hero />
      <BenefitsSection />
      <FeaturesSection />
      <ProcessWorkflowSection />
      <PossibilitiesSection />
    </div>
  );
};

export default Index;

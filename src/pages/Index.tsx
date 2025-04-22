
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessWorkflowSection } from "@/components/ui/process-workflow-section";
import { ProcessSection } from "@/components/ui/process-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SplineSceneBasic />
      <Hero />
      <BenefitsSection />
      <FeaturesSection />
      <ProcessWorkflowSection />
      <ProcessSection />
    </div>
  );
};

export default Index;


import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SplineSceneBasic />
      <Hero />
      <FeaturesSection />
      <ProcessSection />
    </div>
  );
};

export default Index;


import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { SiteBackground } from "@/components/ui/background-paths";
import { Spotlight } from "@/components/ui/spotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background is placed with z-index 5 */}
      <SiteBackground />
      
      {/* Spotlight on top of background but below content */}
      <Spotlight className="z-10" />
      
      {/* Content with higher z-index */}
      <div className="relative z-20">
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

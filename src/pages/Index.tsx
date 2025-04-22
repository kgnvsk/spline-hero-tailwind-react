
import { SplineSceneBasic } from "@/components/SplineHero";
import { Hero } from "@/components/ui/animated-hero";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { ProcessSection } from "@/components/ui/process-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { Spotlight } from "@/components/ui/spotlight";
// import StaticGrid from "@/components/ui/static-grid";
import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* ЧЁРНЫЙ ФОН */}
      <div
        className="fixed inset-0 w-full h-full bg-black z-0"
        aria-hidden="true"
      />
      {/* АНИМИРОВАННАЯ СЕТКА НА СЛОЕ Z-10 */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#6b6b6b"
        hoverFillColor="#333333"
        className="z-10 fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      {/* Если нужно, можете вернуть StaticGrid вместо (или вместе с) Squares ниже */}
      {/*
      <StaticGrid 
        color="#6b6b6b" 
        size={48} 
        opacity={0.4}
        className="z-10 fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      */}
      {/* ВЕСЬ КОНТЕНТ (z-20) */}
      <div className="relative z-20 min-h-screen">
        <Spotlight className="pointer-events-none" />
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

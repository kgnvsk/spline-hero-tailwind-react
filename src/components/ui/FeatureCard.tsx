
import React from "react";
import GridPatternBackground from "./GridPatternBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";

type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
};

export function FeatureCard({ icon: Icon, title, items }: FeatureCardProps) {
  return (
    <div className="relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-6 rounded-3xl overflow-hidden backdrop-blur-sm h-full flex flex-col">
      <GlowingEffect
        spread={38}
        glow={true}
        disabled={false}
        proximity={72}
        inactiveZone={0.01}
        borderWidth={3}
        className="z-10"
      />
      <GridPatternBackground size={20} />
      <div className="relative z-20 flex flex-col h-full">
        <div className="mb-2">
          <Icon className="w-8 h-8 text-white mr-0" />
        </div>
        <h3 className="text-lg font-extrabold text-white mb-4 font-russo">
          {title}
        </h3>
        <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none font-russo" style={{marginTop: "auto"}}>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full flex-shrink-0"></span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

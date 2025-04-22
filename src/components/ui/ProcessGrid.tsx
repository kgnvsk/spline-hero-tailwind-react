
import React from "react";
import { ProcessGridCard } from "./ProcessGridCard";

interface StepData {
  title: string;
  description: string[];
}

export const ProcessGrid: React.FC<{ steps: StepData[] }> = ({ steps }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-5xl mx-auto w-full">
    {steps.map((step, i) => (
      <ProcessGridCard
        key={step.title}
        title={step.title}
        description={step.description}
        className={(i === 4 && steps.length === 5) ? "lg:col-span-2" : ""}
      />
    ))}
  </div>
);

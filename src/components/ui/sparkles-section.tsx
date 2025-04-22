
"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesSection() {
  return (
    <div className="h-[16rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-4">
      <h1 className="md:text-lg text-xs lg:text-xl font-bold text-center text-white relative z-20">
        Є питання? Задай нашому голосовому АІ асистенту
      </h1>
      <div className="w-full max-w-[28rem] h-16 relative mx-auto mt-2">
        {/* Gradients */}
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-28 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-28 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(180px_80px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

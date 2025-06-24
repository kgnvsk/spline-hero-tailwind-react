
import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white font-russo">
            AI-ПРОДАВЕЦЬ
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="text-white hover:text-gray-300 transition-colors font-russo"
            >
              Що вміє
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-gray-300 transition-colors font-russo"
            >
              Навіщо
            </button>
            <button 
              onClick={() => scrollToSection('target')}
              className="text-white hover:text-gray-300 transition-colors font-russo"
            >
              Для кого
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-white hover:text-gray-300 transition-colors font-russo"
            >
              Як працює
            </button>
            <ShimmerButton
              shimmerColor="#000"
              background="#fff"
              className="text-black font-russo"
              onClick={() => scrollToSection('demo-form')}
            >
              ОТРИМАТИ ДЕМО
            </ShimmerButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

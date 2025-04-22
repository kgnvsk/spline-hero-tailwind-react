import React, { useEffect, useRef, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Remove any existing ElevenLabs widget from the document
    const existingWidgets = document.querySelectorAll("elevenlabs-convai");
    existingWidgets.forEach(widget => widget.remove());
    
    // Remove any existing script
    const existingScript = document.getElementById("elevenlabs-widget-script-section");
    if (existingScript) {
      existingScript.remove();
    }
    
    // Only load the script when the component mounts
    if (sectionRef.current) {
      const script = document.createElement("script");
      script.id = "elevenlabs-widget-script-section";
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      
      // Set the script as loaded when it's ready
      script.onload = () => {
        setScriptLoaded(true);
      };
      
      // Append script to the section container
      sectionRef.current.appendChild(script);
      
      // Cleanup function to remove the script when component unmounts
      return () => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
        
        // Also remove any widget that might have been created
        const widgets = document.querySelectorAll("elevenlabs-convai");
        widgets.forEach(widget => widget.remove());
      };
    }
  }, []);

  useEffect(() => {
    // Only create the widget when script is loaded and widgetRef is available
    if (scriptLoaded && widgetRef.current && !widgetRef.current.querySelector("elevenlabs-convai")) {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "aGDIPWEQyXk5ZFnlOvI6");
      widget.setAttribute("standalone", "true"); // Important! This prevents the widget from being floating
      widget.style.display = "block";
      widget.style.width = "340px";
      widget.style.margin = "0";
      widget.style.position = "static"; // Ensure it's not positioned fixed
      widgetRef.current.appendChild(widget);
      
      // Cleanup function to remove the widget when component unmounts
      return () => {
        if (widgetRef.current) {
          const existingWidget = widgetRef.current.querySelector("elevenlabs-convai");
          if (existingWidget) {
            widgetRef.current.removeChild(existingWidget);
          }
        }
      };
    }
  }, [scriptLoaded]);

  return (
    <div 
      ref={sectionRef} 
      className="relative h-[16rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-4 pb-36"
    >
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
      
      {/* Widget container - now centered */}
      <div
        ref={widgetRef}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}

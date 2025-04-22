
import React, { useEffect, useRef } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesSection() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Script should only be added once
    if (!document.getElementById("elevenlabs-widget-script")) {
      const script = document.createElement("script");
      script.id = "elevenlabs-widget-script";
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }

    // Return cleanup function to remove the script when component unmounts
    return () => {
      // We don't remove the script to avoid affecting other potential instances
    };
  }, []);

  useEffect(() => {
    // Create widget only when widgetRef is available and doesn't already have the widget
    if (widgetRef.current && !widgetRef.current.querySelector("elevenlabs-convai")) {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "aGDIPWEQyXk5ZFnlOvI6");
      widget.style.display = "block";
      widget.style.width = "340px";
      widget.style.margin = "0";
      widgetRef.current.appendChild(widget);
    }

    // Cleanup function to remove the widget when component unmounts
    return () => {
      if (widgetRef.current) {
        const widget = widgetRef.current.querySelector("elevenlabs-convai");
        if (widget) {
          widgetRef.current.removeChild(widget);
        }
      }
    };
  }, []);

  return (
    <div className="relative h-[16rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md py-4 pb-36">
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
      {/* Контейнер для виджета - справа внизу секции */}
      <div
        ref={widgetRef}
        className="absolute right-4 bottom-4 z-50"
        style={{ pointerEvents: "auto" }}
      />
    </div>
  );
}


import React from "react";
import { motion } from "framer-motion";

export interface PhoneMockupProps {
  desktop?: boolean;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  desktop = false,
  className = "",
}) => {
  if (desktop) {
    // Desktop-sized mockup
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className={className}
      >
        <div className="relative mx-auto w-[266px] h-[555px]">
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[46px] bg-neutral-950 shadow-2xl overflow-hidden border-[10px] border-neutral-900">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[28px] bg-black rounded-b-3xl z-20"></div>
            {/* Screen with video */}
            <div className="absolute inset-0 overflow-hidden bg-black flex flex-col justify-center items-center">
              <iframe
                src="https://fast.wistia.net/embed/iframe/xcdo71c2zz"
                allow="autoplay; fullscreen"
                allowFullScreen
                width="220"
                height="470"
                className="rounded-[30px] border-0 shadow-xl my-6"
                style={{ background: "#000", width: "220px", height: "470px", display: "block" }}
                title="Demo video"
              />
            </div>
            {/* Home indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[70px] h-1.5 bg-white/30 rounded-full"></div>
          </div>
          {/* Phone buttons */}
          <div className="absolute -left-1 top-[110px] h-12 w-1.5 bg-neutral-700 rounded-l"></div>
          <div className="absolute -left-1 top-[170px] h-10 w-1 bg-neutral-700 rounded-l"></div>
          <div className="absolute -right-1 top-[140px] h-14 w-1 bg-neutral-700 rounded-r"></div>
        </div>
      </motion.div>
    );
  } else {
    // Mobile-sized mockup
    return (
      <div className={`w-full flex flex-col items-center ${className}`}>
        <div className="relative mx-auto w-[180px] h-[375px] mt-4">
          <div className="absolute inset-0 rounded-[30px] bg-neutral-800 shadow-xl overflow-hidden border-[6px] border-neutral-950">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50px] h-[12px] bg-black rounded-b-3xl z-20"></div>
            {/* Screen with video */}
            <div className="absolute inset-0 overflow-hidden bg-black flex flex-col justify-center items-center">
              <iframe
                src="https://fast.wistia.net/embed/iframe/xcdo71c2zz"
                allow="autoplay; fullscreen"
                allowFullScreen
                width="130"
                height="280"
                className="rounded-[18px] border-0 shadow-xl my-4"
                style={{ background: "black", width: "130px", height: "280px", display: "block" }}
                title="Demo video"
              />
            </div>
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40px] h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }
};

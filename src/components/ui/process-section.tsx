
import React from "react";
import { motion } from "framer-motion";
import { ProcessSectionHeader } from "./ProcessSectionHeader";
import { ProcessGrid } from "./ProcessGrid";
import { PhoneMockup } from "./PhoneMockup";
import { ProcessFootnote } from "./ProcessFootnote";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const steps = [
  {
    title: "Підключення до каналів",
    description: [
      "Ви підключаєте AI-продавця до своїх каналів комунікації і внутрішніх систем"
    ]
  },
  {
    title: "Навчання на ваших кейсах",
    description: [
      "Навчаєте його на своїх кейсах та діалогах"
    ]
  },
  {
    title: "Повна автоматизація",
    description: [
      "Він бере на себе все — від консультації до оплати"
    ]
  },
  {
    title: "Результат",
    description: [
      "Ви спостерігаєте, як ростуть продажі без росту штату"
    ]
  }
];

export function ProcessSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="process" className="py-20 relative overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-russo">
          Як це працює?
        </h2>
      </motion.div>

      {/* Desktop version */}
      <div className="container mx-auto px-4 relative hidden lg:flex flex-row justify-center z-10 gap-10">
        <div className="flex-1">
          <ProcessGrid steps={steps} />
        </div>
        {/* Right column with phone mockup */}
        <div className="w-[290px] flex flex-col justify-between h-full" style={{ minHeight: '590px' }}>
          <div className="flex-1 flex items-center justify-center">
            <PhoneMockup desktop />
          </div>
          <ProcessFootnote />
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden block mt-10 px-4">
        <ProcessGrid steps={steps} />
        <div className="w-full flex flex-col items-center justify-start mt-4">
          <PhoneMockup />
          <ProcessFootnote />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center mt-12"
      >
        <ShimmerButton
          shimmerColor="#000"
          background="#fff"
          className="text-black font-russo text-lg px-8 py-4"
          onClick={scrollToDemo}
        >
          ОТРИМАТИ ДЕМО
        </ShimmerButton>
      </motion.div>
    </div>
  );
}

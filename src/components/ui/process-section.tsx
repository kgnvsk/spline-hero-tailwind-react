
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Інтеграція з CRM",
    description: [
      "Отримує всі дані про товари: описи, характеристики, ціни, залишки, SKU тощо.",
      "Автоматично оновлює інформацію при зміні даних (наприклад, коли товар закінчується)."
    ]
  },
  {
    title: "Комунікація та продаж",
    description: [
      "АІ відповідає на типові запитання про розміри, варіанти кольорів, строки доставки тощо.",
      "Пропонує супутні товари та робить апсейл (наприклад, аксесуари)."
    ]
  },
  {
    title: "Автоматичне навчання",
    description: [
      "АІ 'запам'ятовує' нові запити та відповіді, вдосконалюється з часом.",
      "Стає ще точнішим у відповідях з кожною взаємодією."
    ]
  },
  {
    title: "Аналіз запитів та фото",
    description: [
      "Якщо клієнт надіслав фото, бот аналізує його, аби уточнити модель чи тип товару.",
      "За потреби звертається до бази знань, щоб знайти релевантну відповідь."
    ]
  },
  {
    title: "Підключення до діректу",
    description: [
      "Інсталюється в директ вашого Instagram (чи іншої соцмережі, де є приватні повідомлення).",
      "Має 'розумний' алгоритм діалогів, що допомагає клієнтам у процесі вибору товару чи послуги."
    ]
  }
];

// SVG-линия для соединения блоков в зигзаг
function ConnectingLine({ position }: { position: "left-to-right" | "right-to-left" }) {
  const pathData = position === "left-to-right"
    ? "M0,0 C30,0 30,40 60,40"     // From left to right
    : "M0,0 C-30,0 -30,40 -60,40"; // From right to left
    
  return (
    <svg className="absolute w-16 h-10 overflow-visible" style={{ bottom: "-40px", [position === "left-to-right" ? "right" : "left"]: "30%" }}>
      <path
        d={pathData}
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Header section - title and description */}
      <div className="container mx-auto px-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Як працює AI Sales Manager
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center text-neutral-400 max-w-2xl mx-auto"
        >
          AI Sales Manager інтегрується у ваші системи та працює на повну потужність
        </motion.p>
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left column - zigzag process */}
          <div className="w-full lg:w-3/5 relative">
            <div className="relative">
              {steps.map((step, idx) => {
                // Determine if the step should be on the left or right side
                const isLeft = idx % 2 === 0;
                
                return (
                  <div 
                    key={step.title} 
                    className={`relative mb-20 last:mb-0 flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Step indicator circle */}
                    <div 
                      className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-7 w-5 h-5 bg-blue-500 rounded-full z-10`}
                    ></div>
                    
                    {/* Step content box */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: idx * 0.15 }}
                      className={`w-5/6 sm:w-3/4 ${isLeft ? 'ml-8' : 'mr-8'}`}
                    >
                      <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <ul className="text-neutral-400 text-sm space-y-3">
                          {step.description.map((desc, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    
                    {/* Connecting line (except for the last step) */}
                    {idx < steps.length - 1 && (
                      <ConnectingLine position={isLeft ? "left-to-right" : "right-to-left"} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right column - iPhone mockup */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="sticky top-32"
            >
              <div className="relative mx-auto w-[266px] h-[555px]">
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[46px] bg-neutral-800 shadow-xl overflow-hidden border-[10px] border-neutral-950">
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
                      style={{ background: "black", width: "220px", height: "470px", display: "block" }}
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
          </div>
        </div>
      </div>
    </div>
  );
}

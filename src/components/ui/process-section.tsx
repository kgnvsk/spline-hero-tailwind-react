
import React from "react";
import { motion } from "framer-motion";
import { useId } from "react";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline-scene";

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

export function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          AI Sales Manager інтегрується у ваші системи та працює на повну потужність
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Process steps with snake path - Left column (2/3 width) */}
          <div className="lg:col-span-2 relative">
            {/* Snake path */}
            <div className="absolute hidden lg:block" style={{ left: '0', right: '50%', top: '0', bottom: '0', zIndex: 0 }}>
              {/* Vertical lines */}
              <div className="absolute w-2 bg-gradient-to-b from-purple-500 to-blue-500" 
                   style={{ left: '20%', top: '0', height: '100%' }}></div>
              
              {/* Horizontal connections for each step */}
              <div className="absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500" 
                   style={{ top: '10%', left: '20%', width: '25%' }}></div>
              <div className="absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500" 
                   style={{ top: '30%', left: '20%', width: '50%' }}></div>
              <div className="absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500" 
                   style={{ top: '50%', left: '20%', width: '25%' }}></div>
              <div className="absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500" 
                   style={{ top: '70%', left: '20%', width: '50%' }}></div>
              <div className="absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500" 
                   style={{ top: '90%', left: '20%', width: '25%' }}></div>
            </div>

            {/* Process steps */}
            <div className="relative z-10 grid gap-10">
              {steps.map((step, index) => {
                // Alternate between left and right positioning
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={step.title}
                    variants={itemVariants}
                    className={`w-full lg:w-[80%] ${isEven ? 'lg:ml-[45%]' : 'lg:ml-0'}`}
                  >
                    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden relative">
                      <Grid size={20} />
                      <div className="relative z-20">
                        <h3 className="text-lg font-bold text-white mb-4">
                          {step.title}
                        </h3>
                        <ul className="text-neutral-400 space-y-2">
                          {step.description.map((desc, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* iPhone mockup with video - Right column (1/3 width) */}
          <div className="lg:col-span-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className="sticky top-[120px] w-full h-full"
            >
              <div className="iphone-mockup">
                {/* iPhone frame */}
                <div className="relative mx-auto w-[280px] h-[580px]">
                  {/* Phone outer case */}
                  <div className="absolute inset-0 rounded-[50px] bg-neutral-800 shadow-xl overflow-hidden border-8 border-neutral-900">
                    {/* iPhone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[30px] bg-black rounded-b-3xl z-20"></div>
                    
                    {/* Screen content */}
                    <div className="absolute inset-0 overflow-hidden bg-black">
                      {/* Embedded SplineScene inside iPhone */}
                      <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full scale-[1.5] transform translate-y-[20%]"
                      />
                    </div>
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Phone buttons */}
                  <div className="absolute -left-1 top-[120px] h-12 w-1 bg-neutral-700 rounded-l"></div>
                  <div className="absolute -left-1 top-[170px] h-12 w-1 bg-neutral-700 rounded-l"></div>
                  <div className="absolute -right-1 top-[140px] h-16 w-1 bg-neutral-700 rounded-r"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-white/10 stroke-white/10 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

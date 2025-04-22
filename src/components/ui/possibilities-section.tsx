import React from "react";
import { Zap, Globe, Workflow, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useId } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const possibilities = [
  {
    title: "Швидкий старт",
    icon: Zap,
    description: [
      "Запуск можливий уже за кілька днів після встановлення й базового налаштування."
    ]
  },
  {
    title: "Мультиплатформність",
    icon: Globe,
    description: [
      "Інтегрується не лише з Instagram, а й із Facebook Messenger, WhatsApp Business та іншими каналами."
    ]
  },
  {
    title: "Гнучка адаптація",
    icon: Workflow,
    description: [
      "Підходить для будь-якого бізнесу: від e-commerce, що продає одяг, до послуг зі страхування чи туризму."
    ]
  },
  {
    title: "Прозорість результатів",
    icon: BarChart,
    description: [
      "Ви бачите статистику: кількість звернень, конверсії з діректу, суми продажів. Можливість A/B тестування різних підходів."
    ]
  }
];

export function PossibilitiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section className="py-16 lg:py-24 relative z-10 font-russo">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto px-6 mb-12"
      >
        <h2 className="text-4xl font-extrabold mb-4 font-russo heading-white">
          Можливості
        </h2>
        <p className="text-neutral-400 font-russo">
          AI Sales Manager надає унікальні можливості для вашого бізнесу
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto px-6"
      >
        {possibilities.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-6 rounded-3xl overflow-hidden backdrop-blur-sm h-full flex flex-col"
          >
            <GlowingEffect
              spread={38}
              glow={true}
              disabled={false}
              proximity={72}
              inactiveZone={0.01}
              borderWidth={3}
              className="z-10"
            />
            <Grid size={20} />
            <div className="relative z-20 flex flex-col h-full">
              <div className="mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-extrabold mb-4 font-russo text-white text-left">{item.title}</h3>
              <div className="flex-1"></div>
              <div className="mt-6 flex items-start text-left">
                <span className="mr-4 mt-1.5 inline-block w-3 h-3 bg-neutral-400 rounded-full flex-shrink-0"></span>
                <span className="font-russo text-base md:text-lg text-white font-bold leading-snug" style={{lineHeight: 1.32}}>
                  {item.description[0]}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
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

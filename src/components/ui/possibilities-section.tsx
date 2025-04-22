
import React from "react";
import { Zap, Globe, Workflow, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useId } from "react";

const possibilities = [
  {
    title: "Швидкий старт",
    icon: Zap,
    description: "Запуск можливий уже за кілька днів після встановлення й базового налаштування."
  },
  {
    title: "Мультиплатформність",
    icon: Globe,
    description: "Інтегрується не лише з Instagram, а й із Facebook Messenger, WhatsApp Business та іншими каналами."
  },
  {
    title: "Гнучка адаптація",
    icon: Workflow,
    description: "Підходить для будь-якого бізнесу: від e-commerce, що продає одяг, до послуг зі страхування чи туризму."
  },
  {
    title: "Прозорість результатів",
    icon: BarChart,
    description: "Ви бачите статистику: кількість звернень, конверсії з діректу, суми продажів. Можливість A/B тестування різних підходів."
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
    <section className="py-16 lg:py-24 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto px-6 mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Можливості
        </h2>
        <p className="text-neutral-400">
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
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <div className="relative z-20">
              <item.icon className="w-8 h-8 text-white mb-4" />
              <p className="text-lg font-bold text-white mb-4">
                {item.title}
              </p>
              <p className="text-neutral-400 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Reusing the Grid component from features-section.tsx
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

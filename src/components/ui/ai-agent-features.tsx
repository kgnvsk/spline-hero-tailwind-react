
import React, { useId } from "react";
import { Brain, Users, Shield } from "lucide-react";

// Используем тот же массив, но корректируем иконки
const features = [
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    iconBg: "from-[#8674f8] to-[#36b3ff]",
    title: "Людський фактор",
    description: "AI Агент не вигорає, не обіжається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    iconBg: "from-[#36b3ff] to-[#8674f8]",
    title: "Плинність кадрів",
    description: "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    iconBg: "from-[#9b87f5] to-[#8B5CF6]",
    title: "Безпека",
    description: "Ви не втратите цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
  },
];

// Сетка поверх секции
function GridBackgroundDark({ gridSize = 32 }: { gridSize?: number }) {
  // Рисуем svg-сетку (dark)
  const id = useId();
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full"
        width="100%"
        height="100%"
        aria-hidden="true"
        style={{
          minHeight: "100%",
          minWidth: "100%",
          opacity: 0.24,
        }}
      >
        <defs>
          <pattern
            id={id}
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <rect width={gridSize} height={gridSize} fill="none" />
            <path
              d={`M 0 0 H ${gridSize} V ${gridSize} H 0 Z`}
              stroke="#333"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

const IconCard = ({
  icon,
  iconBg,
}: {
  icon: React.ReactNode;
  iconBg: string;
}) => (
  <span
    className={
      "inline-flex items-center justify-center rounded-xl mb-5 shadow-lg bg-gradient-to-br " +
      iconBg +
      " w-12 h-12"
    }
  >
    {icon}
  </span>
);

export default function AIAgentFeatures() {
  return (
    <section className="relative w-full py-14 md:py-20 bg-[#151720] dark:bg-[#11111B] overflow-hidden font-russo">
      <GridBackgroundDark gridSize={40} />
      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="relative bg-[#191B22]/95 dark:bg-[#191B22]/95 rounded-3xl overflow-hidden p-8 min-h-[220px] shadow-xl ring-1 ring-white/10 hover:ring-accent/40 transition ring-inset backdrop-blur-md flex flex-col"
            >
              <IconCard icon={f.icon} iconBg={f.iconBg} />
              <h3 className="text-xl font-extrabold text-white mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-base">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

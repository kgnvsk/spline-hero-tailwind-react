
import React, { useId } from "react";
import { User, Users, ShieldCheck } from "lucide-react";

// Features data with the same content as before
const features = [
  {
    icon: <User className="w-6 h-6 text-primary" />,
    title: "Людський фактор",
    description: "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Плинність кадрів",
    description: "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Безпека",
    description: "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
  },
];

// GridPattern component for the card overlays
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
          {squares.map(([x, y]: any, i: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
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

// Grid component for the card overlays
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
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
}

// Background grid component for the entire section
function SectionBackgroundGrid({ gridSize = 40 }: { gridSize?: number }) {
  const id = useId();
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg
        className="w-full h-full"
        width="100%"
        height="100%"
        aria-hidden="true"
        style={{
          opacity: 0.3,
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

export default function AIAgentFeatures() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-black overflow-hidden font-russo">
      <SectionBackgroundGrid gridSize={40} />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Переваги AI Агента</h2>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-16">
          AI Sales Manager &amp; Consultant суттєво перевершує звичайного працівника
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-3xl overflow-hidden ring-1 ring-white/10 backdrop-blur-sm"
            >
              <Grid size={20} />
              <div className="relative z-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-400 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

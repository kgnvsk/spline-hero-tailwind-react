
import React, { useId } from "react";

// Замените эти данные на ваши финальные значения для карточек!
const features = [
  {
    title: "AI Агент завжди на зв'язку",
    description: "Працює 24/7. Не хворіє, не вигорає, не запізнюється, не втомлюється, не сумує і не бере відпустку."
  },
  {
    title: "Стабільність роботи",
    description: "AI не має плинності кадрів — не потрібно навчати кожного нового співробітника. Всі знання завжди з вами."
  },
  {
    title: "Безпека даних",
    description: "Інформація про клієнтів, процедури та ноу-хау залишаються у компанії — не " +
      "втрачаються із звільненням працівників."
  },
  {
    title: "Оперативна комунікація",
    description: "AI обробляє звернення за секунди, надаючи миттєві відповіді у месенджерах, пошті, чаті на сайті."
  },
  {
    title: "Єдиний стиль спілкування",
    description: "AI завжди використовує погоджений тон, грамотику та корпоративний стиль. Жодної суб'єктивності чи випадкових фраз."
  },
  {
    title: "Масштабування",
    description: "Без залучення нових спеціалістів — обробка сотень паралельних звернень без черг та затримок."
  },
  {
    title: "Навчання під бізнес",
    description: "AI враховує деталі саме вашого бізнесу та постійно покращується під ваші задачі."
  },
  {
    title: "Беземоційна об'єктивність",
    description: "Жодних людських факторів — лише чіткі, лаконічні і коректні відповіді без емоцій."
  },
];

// Сетка-фон с градиентом (Grid и GridPattern, взят из вашего примера)
export const Grid = ({
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
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
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
          {squares.map(([sx, sy]: any) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Новый рефакторинг секции в тёмном стиле
export default function AIAgentFeatures() {
  return (
    <section className="py-20 lg:py-36 w-full font-russo bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 p-7 rounded-3xl overflow-hidden min-h-[210px] shadow-xl flex flex-col"
            >
              <Grid size={20} />
              <p className="text-base md:text-lg font-bold dark:text-white text-neutral-900 relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-400 dark:text-neutral-300 mt-3 md:mt-5 text-sm md:text-base font-normal relative z-20 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

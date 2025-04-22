import React from "react";
import { useId } from "react";
import { MessageCircle, TrendingUp, Database, ChartBar } from "lucide-react";

export function FeaturesSection() {
  return (
    <div className="py-10 lg:py-20 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-16">Основні функції</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto px-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <div className="relative z-20">
              <feature.icon className="w-8 h-8 text-white mb-4" />
              <p className="text-lg font-bold text-white mb-4">
                {feature.title}
              </p>
              <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none">
                {feature.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Клієнтська комунікація",
    icon: MessageCircle,
    items: [
      "Автоматична обробка повідомлень",
      "Швидкі відповіді на типові запитання",
      "Цілодобова підтримка клієнтів",
      "Багатоканальна комунікація"
    ],
  },
  {
    title: "Продажі та конверсія",
    icon: TrendingUp,
    items: [
      "Персоналізовані пропозиції",
      "Автоматичні воронки продажів",
      "Супровід клієнта до покупки",
      "Крос-продажі та апсейли"
    ],
  },
  {
    title: "Ведення клієнтської бази",
    icon: Database,
    items: [
      "Сегментація клієнтів",
      "Історія взаємодії",
      "Аналіз поведінки",
      "Автоматичне оновлення даних"
    ],
  },
  {
    title: "Аналітика та звітність",
    icon: ChartBar,
    items: [
      "Детальна статистика",
      "Показники ефективності",
      "Прогнозування результатів",
      "Автоматична генерація звітів"
    ],
  },
];

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

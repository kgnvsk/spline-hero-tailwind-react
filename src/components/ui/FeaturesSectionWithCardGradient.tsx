import React from "react";
import { MessageCircle, LineChart, Users, PieChart } from "lucide-react";
import { useId } from "react";

// Градіентні іконки (фон + іконка — як в референсі)
const iconBg =
  "flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#8674f8] to-[#36b3ff] mb-6 shadow-md";

// Дані
const features = [
  {
    icon: <MessageCircle className="w-7 h-7 text-white" />,
    title: "Клієнтська комунікація",
    items: [
      "Оперативне реагування на всі повідомлення в Direct соціальних мереж (Instagram, Facebook) та месенджерах (Telegram, Viber, WhatsApp), а також на сайті",
      "Відповіді на коментарі під публікаціями, які потребують консультації",
      "Підтримка єдиного корпоративного стилю спілкування",
      "Ведення історії комунікації з клієнтами",
    ],
  },
  {
    icon: <LineChart className="w-7 h-7 text-white" />,
    title: "Продажі та конверсія",
    items: [
      "Консультування клієнтів щодо продуктів та послуг",
      "Формування індивідуальних пропозицій",
      "Проведення продажу від первинного звернення до оформлення",
      "Робота із запереченнями клієнтів",
      "Інформування про акції та спеціальні пропозиції",
    ],
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: "Ведення клієнтської бази",
    items: [
      "Систематичне оновлення бази клієнтів в CRM-системі",
      "Сегментація клієнтів за різними параметрами",
      "Аналіз історії покупок та рекомендації",
      "Реактивація \"сплячих\" клієнтів",
    ],
  },
  {
    icon: <PieChart className="w-7 h-7 text-white" />,
    title: "Аналітика та звітність",
    items: [
      "Щоденний моніторинг ефективності комунікації",
      "Підготовка щотижневих звітів щодо продажів",
      "Аналіз найпоширеніших запитань",
      "Визначення найбільш популярних продуктів",
    ],
  },
];

// Компонент сетки
function GridPatternCardBg({ pattern, size }: { pattern?: number[][]; size?: number }) {
  const p =
    pattern ??
    [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
  const id = useId();
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <svg aria-hidden="true"
          width="100%" height="100%"
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        >
          <defs>
            <pattern
              id={id}
              width={size ?? 20}
              height={size ?? 20}
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d={`M.5 ${size ?? 20}V.5H${size ?? 20}`} fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill={`url(#${id})`}
          />
          {p && (
            <svg x="-12" y="4" className="overflow-visible">
              {p.map(([x, y]) => (
                <rect
                  strokeWidth="0"
                  key={`${x}-${y}`}
                  width={(size ?? 20) + 1}
                  height={(size ?? 20) + 1}
                  x={x * (size ?? 20)}
                  y={y * (size ?? 20)}
                />
              ))}
            </svg>
          )}
        </svg>
      </div>
    </div>
  );
}

// Головна секція
export function FeaturesSectionWithCardGradient() {
  return (
    <section className="py-14 lg:py-24 font-russo">
      <div className="max-w-7xl mx-auto px-3">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 heading-white text-center">
          Основні функції
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-white via-[#f5f6fc] to-[#f1f7fd] dark:from-neutral-900 dark:to-neutral-950 p-7 pt-8 rounded-3xl overflow-hidden min-h-[421px] flex flex-col shadow-lg"
            >
              <GridPatternCardBg size={20} />
              <div className={iconBg + " relative z-10"}>
                {feature.icon}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <ul className="text-neutral-600 dark:text-neutral-300 space-y-3 text-base pl-0 list-disc ml-4">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed text-[15px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSectionWithCardGradient;

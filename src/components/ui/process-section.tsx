
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
    title: "Підключення до діректу",
    description: [
      "Інсталюється в директ вашого Instagram (чи іншої соцмережі, де є приватні повідомлення).",
      "Має 'розумний' алгоритм діалогів, що допомагає клієнтам у процесі вибору товару чи послуги."
    ]
  },
  {
    title: "Аналіз запитів та фото",
    description: [
      "Якщо клієнт надіслав фото, бот аналізує його, аби уточнити модель чи тип товару.",
      "За потреби звертається до бази знань, щоб знайти релевантну відповідь."
    ]
  }
];

// SVG-кривая между карточками
function ZigzagLine({ from, to }: { from: string; to: string }) {
  // from/to: div id
  // Можно улучшить — для мобильного пропускать линии, только desktop
  return (
    <svg className="absolute pointer-events-none z-10 hidden lg:block"
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}>
      <defs>
        <linearGradient id="zigzagline" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8367FA" />
          <stop offset="1" stopColor="#45B2FF" />
        </linearGradient>
      </defs>
      {/* Здесь координаты привязаны к макету */}
      {from === "step0" && to === "step1" && (
        // Левый верх → левый средний
        <path d="M32,80 Q160,170 290,140" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      )}
      {from === "step1" && to === "step2" && (
        // Левый средний → левый низ
        <path d="M32,210 Q150,320 290,270" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      )}
      {from === "step1" && to === "step3" && (
        // Левый средний → правый верх (прыжок через правую колонку)
        <path d="M420,110 Q370,170 330,110 T500,80"
          stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      )}
      {from === "step3" && to === "step4" && (
        // Правый верх → правый низ
        <path d="M555,160 Q610,230 420,320"
          stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      )}
    </svg>
  );
}

export function ProcessSection() {
  // left (steps 0,1,2), right (steps 3,4)
  return (
    <div className="py-20 bg-white relative overflow-visible" style={{
      background: "repeating-linear-gradient(0deg,#f5f7fa, #f5f7fa 39px, #edeef1 40px, #edeef1 41px)"
    }}>
      {/* Header section - title and description */}
      <div className="container mx-auto px-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-[#23234c] mb-2"
        >
          Як працює AI Sales Manager
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center text-[#717391] max-w-2xl mx-auto"
        >
          AI Sales Manager інтегрується у ваші системи та працює на повну потужність
        </motion.p>
      </div>

      <div className="container mx-auto flex justify-center items-start gap-10 relative px-0 max-w-7xl">
        <div className="relative flex-1 flex min-w-0">
          {/* Блок-контейнер для линий поверх всех */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <ZigzagLine from="step0" to="step1" />
            <ZigzagLine from="step1" to="step2" />
            <ZigzagLine from="step1" to="step3" />
            <ZigzagLine from="step3" to="step4" />
          </div>
          {/* Сетка — 2 колонки (лево/право) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-0 gap-x-0 relative z-20">
            {/* Слева — 3 блока (0,1,2) — выровнены по центру ячейки */}
            <div className="flex flex-col items-end gap-14 w-full pt-2">
              {[0, 1, 2].map(idx => (
                <motion.div
                  key={idx}
                  id={`step${idx}`}
                  initial={{ opacity: 0, x: -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.09 }}
                  className="relative w-[350px] max-w-full bg-white rounded-2xl shadow-xl border border-[#ebedf7] px-7 py-6 mb-2"
                  style={{
                    marginTop: idx === 1 ? "48px" : undefined,
                    marginBottom: idx === 1 ? "30px" : undefined,
                  }}
                >
                  <h3 className="text-lg font-bold text-[#23234c] mb-2">{steps[idx].title}</h3>
                  <ul className="text-[#404075] text-base space-y-2">
                    {steps[idx].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            {/* Справа — 2 блока (3,4), выровнены по центру ячейки */}
            <div className="flex flex-col items-start gap-16 w-full pt-[100px]">
              {[3, 4].map((idx, i) => (
                <motion.div
                  key={idx}
                  id={`step${idx}`}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.09 }}
                  className="relative w-[350px] max-w-full bg-white rounded-2xl shadow-xl border border-[#ebedf7] px-7 py-6"
                  style={{
                    marginTop: i === 0 ? "50px" : "30px",
                  }}
                >
                  <h3 className="text-lg font-bold text-[#23234c] mb-2">{steps[idx].title}</h3>
                  <ul className="text-[#404075] text-base space-y-2">
                    {steps[idx].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Телефон справа */}
        <div className="w-[280px] flex flex-col items-center justify-start pt-[40px] relative z-10 hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
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
      {/* Мобильная версия: все блоки по вертикали, без линий, телефон под блоками */}
      <div className="lg:hidden block mt-10 px-4">
        {[0, 1, 2, 3, 4].map(idx => (
          <div key={idx} className="mb-5 bg-white rounded-2xl shadow-md border border-[#ebedf7] px-5 py-4">
            <h3 className="text-base font-bold text-[#23234c] mb-2">{steps[idx].title}</h3>
            <ul className="text-[#404075] text-sm space-y-1">
              {steps[idx].description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
        {/* Телефон */}
        <div className="w-full flex flex-col items-center">
          <div className="relative mx-auto w-[180px] h-[375px] mt-4">
            <div className="absolute inset-0 rounded-[30px] bg-neutral-800 shadow-xl overflow-hidden border-[6px] border-neutral-950">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50px] h-[12px] bg-black rounded-b-3xl z-20"></div>
              {/* Screen with video */}
              <div className="absolute inset-0 overflow-hidden bg-black flex flex-col justify-center items-center">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/xcdo71c2zz"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  width="130"
                  height="280"
                  className="rounded-[18px] border-0 shadow-xl my-4"
                  style={{ background: "black", width: "130px", height: "280px", display: "block" }}
                  title="Demo video"
                />
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[40px] h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

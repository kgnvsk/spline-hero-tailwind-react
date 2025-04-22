import React from "react";
import { motion } from "framer-motion";

// Список шагов
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

// SVG-кривая между карточками с улучшенными соединениями
function ZigzagConnector() {
  return (
    <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" style={{overflow: "visible"}}>
      <defs>
        <linearGradient id="zigzagline" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Исправленная линия из 1 -> 2 */}
      <path d="M130,110 C180,160 180,240 240,250" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      {/* Исправленная линия из 2 -> 3 */}
      <path d="M320,250 C250,280 180,330 130,390" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      {/* Линия из 3 -> 4 */}
      <path d="M220,390 C400,420 400,500 400,500" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
      {/* Линия из 4 -> 5 */}
      <path d="M520,500 C290,540 290,630 290,630" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <div className="py-20 bg-black relative overflow-visible">
      {/* Header section */}
      <div className="container mx-auto px-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-2"
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

      {/* Десктоп: Два столбца + телефон, абсолютные линии */}
      <div className="container mx-auto px-4 relative hidden lg:flex flex-row justify-center items-start z-10">
        {/* Карточки в два столбца */}
        <div className="relative flex flex-row w-[750px] min-h-[680px]">
          {/* SVG линии между карточками */}
          <ZigzagConnector />
          {/* Первый столбец (шаги 0,2,4) */}
          <div className="flex flex-col gap-[90px] pt-0 pr-3 w-1/2">
            {[0,2,4].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.09 }}
                className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden z-10"
              >
                <div className="relative z-20">
                  <h3 className="text-lg font-bold text-white mb-4">{steps[idx].title}</h3>
                  <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none">
                    {steps[idx].description.map((desc, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Второй столбец (шаги 1,3), смещён вниз */}
          <div className="flex flex-col gap-[110px] pl-3 w-1/2" style={{marginTop: "80px"}}>
            {[1,3].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.09 }}
                className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden z-10"
              >
                <div className="relative z-20">
                  <h3 className="text-lg font-bold text-white mb-4">{steps[idx].title}</h3>
                  <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none">
                    {steps[idx].description.map((desc, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Мокап телефона справа */}
        <div className="w-[290px] flex flex-col items-center justify-start pt-4 lg:ml-10 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative mx-auto w-[266px] h-[555px]">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[46px] bg-neutral-950 shadow-2xl overflow-hidden border-[10px] border-neutral-900">
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
                    style={{ background: "#000", width: "220px", height: "470px", display: "block" }}
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

      {/* Мобильная версия — прежняя: все карточки и телефон под ними */}
      <div className="lg:hidden block mt-10 px-4">
        {[0, 1, 2, 3, 4].map(idx => (
          <div 
            key={idx} 
            className="mb-5 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-6"
          >
            <h3 className="text-base font-bold text-white mb-4">{steps[idx].title}</h3>
            <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none">
              {steps[idx].description.map((desc, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Mobile phone */}
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

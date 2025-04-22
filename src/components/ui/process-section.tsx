
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
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12 px-6">
        {/* Timeline steps — left */}
        <div className="w-full flex-1 flex justify-center">
          <div className="relative flex flex-col items-center w-full max-w-md">
            {/* Вертикальная змейка-лайнап */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 rounded-full z-0" />
            <div className="flex flex-col gap-12 z-10 mt-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, translateY: 40 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  {/* Буллит */}
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <span className="block w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-black shadow-lg"></span>
                  </div>
                  {/* Контент шага */}
                  <div className={`ml-8 pl-6 pr-2 py-4 rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-xl w-[340px] max-w-[85vw] relative`}>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <ul className="text-neutral-400 text-sm space-y-2">
                      {step.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
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
        </div>
        {/* iPhone with video — right */}
        <div className="flex-1 flex justify-center items-start mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            className="sticky top-24 w-full flex justify-center"
          >
            <div className="relative mx-auto w-[266px] h-[555px]">
              {/* Phone outer case */}
              <div className="absolute inset-0 rounded-[46px] bg-neutral-800 shadow-xl overflow-hidden border-[10px] border-neutral-950">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[28px] bg-black rounded-b-3xl z-20"></div>
                {/* Screen content — встроенное видео */}
                <div className="absolute inset-0 overflow-hidden bg-black flex flex-col justify-center items-center">
                  {/* Wistia iframe-видео */}
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/xcdo71c2zz"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    width="220"
                    height="470"
                    className="rounded-[30px] border-0 shadow-xl my-6"
                    style={{ background: 'black', width: '220px', height: '470px', display: 'block' }}
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
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-bold text-center text-white mb-4 mt-[-60px]"
      >
        Як працює AI Sales Manager
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="text-center text-neutral-400 mb-10 max-w-2xl mx-auto"
      >
        AI Sales Manager інтегрується у ваші системи та працює на повну потужність
      </motion.p>
    </div>
  );
}

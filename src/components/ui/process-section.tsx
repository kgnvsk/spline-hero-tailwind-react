
import React from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "./ProcessCard";
import { PhoneMockup } from "./PhoneMockup";
import { ZigzagConnector } from "./ZigzagConnector";

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

      {/* Desktop: two columns + phone + connectors */}
      <div className="container mx-auto px-4 relative hidden lg:flex flex-row justify-center items-start z-10">
        <div className="relative flex flex-row w-[750px] min-h-[680px]">
          {/* SVG connectors */}
          <ZigzagConnector />
          {/* First column (steps 0,2,4) */}
          <div className="flex flex-col gap-[90px] pt-0 pr-3 w-1/2">
            {[0,2,4].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.09 }}
              >
                <ProcessCard title={steps[idx].title} description={steps[idx].description} />
              </motion.div>
            ))}
          </div>
          {/* Second column (steps 1,3), shifted down */}
          <div className="flex flex-col gap-[110px] pl-3 w-1/2" style={{marginTop: "80px"}}>
            {[1,3].map((idx, i) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.09 }}
              >
                <ProcessCard title={steps[idx].title} description={steps[idx].description} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-[290px] flex flex-col items-center justify-start pt-4 lg:ml-10 relative z-20">
          <PhoneMockup desktop />
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden block mt-10 px-4">
        {[0, 1, 2, 3, 4].map(idx => (
          <div key={idx} className="mb-5">
            <ProcessCard
              title={steps[idx].title}
              description={steps[idx].description}
              className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-6"
              titleClassName="text-base mb-4"
            />
          </div>
        ))}
        <PhoneMockup />
      </div>
    </div>
  );
}

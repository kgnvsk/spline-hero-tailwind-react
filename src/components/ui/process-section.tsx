
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

// Функция для определения смещения для змейки
function getStepTranslate(idx: number) {
  // Чётные блоки вправо, нечётные влево — смещение для линии
  return idx % 2 === 0 ? "translate-x-0" : "translate-x-[40px]";
}

// Функция SVG-линии для змейки (вертикальная с отводом)
function SnakeLine({ index }: { index: number }) {
  // Для последнего элемента линии не рисуем
  if (index === steps.length - 1) return null;

  // Ломаная линия SVG: вертикаль - горизонталь - вертикаль
  // В зависимости от чётности шагов линия уходит вправо или влево
  const isOdd = index % 2 !== 0;
  return (
    <svg
      className={`absolute left-1/2 top-full z-0 ${isOdd ? "translate-x-[40px]" : "-translate-x-[40px]"}`}
      width="80"
      height="70"
      fill="none"
      style={{ stroke: "#fff" }}
    >
      <polyline
        points={
          isOdd
            // от центра вниз, потом вправо, потом снова вниз
            ? "0,0 0,35 80,35 80,70"
            // от центра вниз, потом влево, потом снова вниз
            : "80,0 80,35 0,35 0,70"
        }
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <div className="py-20 bg-black relative overflow-x-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-0 px-6">
        {/* Левая часть: змейка и блоки */}
        <div className="relative flex-1 flex justify-end">
          <div className="relative w-[430px] z-10">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative flex">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.13 }}
                  className="w-full"
                >
                  <div className="relative flex items-center mb-0">
                    {/* Буллит */}
                    <div className="absolute left-[-27px] top-7 z-20">
                      <span className="block w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-black shadow-lg"></span>
                    </div>
                    {/* Блок */}
                    <div
                      className="bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl shadow-xl px-7 py-6 w-[400px] min-h-[104px] border-[1.5px] border-[#23272f] transition-[border] duration-300"
                    >
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
                  </div>
                  {/* Линия (кроме последнего) */}
                  <SnakeLine index={idx} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* Правая часть: айфон с видео */}
        <div className="flex-1 flex justify-center items-start mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="relative mx-auto w-[266px] h-[555px]">
              {/* Phone outer case */}
              <div className="absolute inset-0 rounded-[46px] bg-neutral-800 shadow-xl overflow-hidden border-[10px] border-neutral-950">
                {/* iPhone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[28px] bg-black rounded-b-3xl z-20"></div>
                {/* Экран - встроенное Wistia-видео */}
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
      {/* Section title, описание */}
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

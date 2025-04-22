
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

// Функция для определения смещения для зигзага
function getStepTransform(idx: number) {
  // Нечетные блоки смещаем вправо на 100px (для создания зигзага)
  return idx % 2 === 0 ? "translate-x-0" : "translate-x-[100px]";
}

// SVG-линия для соединения блоков в зигзаг
function SnakeLine({ index }: { index: number }) {
  // Для последнего элемента линии не рисуем
  if (index === steps.length - 1) return null;

  // Определяем тип линии в зависимости от четности шага
  const isEven = index % 2 === 0;
  
  return (
    <svg
      className="absolute w-[100px] h-[70px] overflow-visible z-0"
      style={{
        left: isEven ? "27px" : "127px", // Позиционирование линии в зависимости от блока
        top: "100%",
        stroke: "#333",
        strokeWidth: 2
      }}
    >
      <path
        d={isEven
          ? "M0,0 L0,35 L100,35 L100,70" // от левого блока к правому
          : "M0,0 L0,35 L-100,35 L-100,70" // от правого блока к левому
        }
        fill="none"
        stroke="#333"
      />
    </svg>
  );
}

export function ProcessSection() {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Заголовок и описание секции */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-bold text-center text-white mb-4"
      >
        Як працює AI Sales Manager
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto px-4"
      >
        AI Sales Manager інтегрується у ваші системи та працює на повну потужність
      </motion.p>
      
      {/* Основной контент */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-10 px-6">
        {/* Левая часть: змейка с блоками */}
        <div className="relative flex-1 flex justify-center lg:justify-end max-w-[600px] mx-auto lg:mx-0">
          <div className="relative w-full max-w-[500px]">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative mb-20 last:mb-0">
                {/* Круглый индикатор слева */}
                <div className="absolute left-0 top-7 w-5 h-5 bg-blue-500 rounded-full z-10"></div>
                
                {/* Блок с информацией */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.13 }}
                  className={`relative ${getStepTransform(idx)}`}
                >
                  <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-6 ml-8 shadow-lg max-w-[400px]">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <ul className="text-neutral-400 text-sm space-y-3">
                      {step.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Соединительная линия */}
                <SnakeLine index={idx} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Правая часть: айфон с видео */}
        <div className="flex-1 flex justify-center items-start lg:mt-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="relative mx-auto w-[266px] h-[555px]">
              {/* Корпус телефона */}
              <div className="absolute inset-0 rounded-[46px] bg-neutral-800 shadow-xl overflow-hidden border-[10px] border-neutral-950">
                {/* Вырез (notch) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85px] h-[28px] bg-black rounded-b-3xl z-20"></div>
                
                {/* Экран с видео */}
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
                
                {/* Индикатор Home */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[70px] h-1.5 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Кнопки телефона */}
              <div className="absolute -left-1 top-[110px] h-12 w-1.5 bg-neutral-700 rounded-l"></div>
              <div className="absolute -left-1 top-[170px] h-10 w-1 bg-neutral-700 rounded-l"></div>
              <div className="absolute -right-1 top-[140px] h-14 w-1 bg-neutral-700 rounded-r"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

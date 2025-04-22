
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneMockup } from "./PhoneMockup";

const processItems = [
  {
    title: "Інтеграція з CRM",
    items: [
      "Отримує всі дані про товари: описи, характеристики, ціни, залишки, SKU тощо.",
      "Автоматично оновлює інформацію при зміні даних (наприклад, коли товар закінчується)."
    ]
  },
  {
    title: "Комунікація та продаж",
    items: [
      "AI відповідає на типові запитання про розміри, варіанти кольорів, строки доставки тощо.",
      "Пропонує супутні товари та робить апсейл (наприклад, аксесуари)."
    ]
  },
  {
    title: "Автоматичне навчання",
    items: [
      "AI 'запам'ятовує' нові запити та відповіді, вдосконалюється з часом.",
      "Стає ще точнішим у відповідях з кожною взаємодією."
    ]
  },
  {
    title: "Підключення до діректу",
    items: [
      "Інсталюється в директ вашого Instagram (чи іншої соцмережі, де є приватні повідомлення).",
      "Має 'розумний' алгоритм діалогів, що допомагає клієнтам у процесі вибору товару чи послуги."
    ]
  },
  {
    title: "Аналіз запитів та фото",
    items: [
      "Якщо клієнт надіслав фото, бот аналізує його, аби уточнити модель чи тип товару.",
      "За потреби звертається до бази знань, щоб знайти релевантну відповідь."
    ],
    isWide: true
  }
];

export function ProcessWorkflowSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 120 }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto px-6 mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Як працює AI Sales Manager
        </h2>
        <p className="text-neutral-400">
          AI Sales Manager інтегрується у ваші системи та працює на повну потужність
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {processItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`${
                item.isWide ? "md:col-span-2" : ""
              } ${
                index === processItems.length - 1 && "lg:col-span-2"
              }`}
            >
              <Card className="h-full bg-white rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-black">
                    {item.title}
                  </h3>
                  <ul className="space-y-3">
                    {item.items.map((text, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="mr-2 flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="text-sm">{text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          {/* Phone mockup */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block"
          >
            <div className="flex justify-center items-center h-full">
              <PhoneMockup />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

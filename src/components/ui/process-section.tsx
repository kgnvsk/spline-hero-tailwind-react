
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          AI Sales Manager інтегрується у ваші системи та працює на повну потужність
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl">
                  <h3 className="text-lg font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <ul className="text-neutral-400 space-y-2">
                    {step.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-12 w-1 bg-gradient-to-b from-purple-500 to-blue-500 left-1/2 -bottom-12 transform -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-4 border-neutral-800 p-2"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-neutral-800 rounded-full"></div>
              </div>
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-neutral-900">
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script src="https://fast.wistia.com/embed/medias/xcdo71c2zz.jsonp" async></script>
                      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                      <div class="wistia_responsive_padding" style="padding:188.89% 0 0 0;position:relative;">
                        <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                          <div class="wistia_embed wistia_async_xcdo71c2zz videoFoam=true" style="height:100%;position:relative;width:100%">
                            <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                              <img src="https://fast.wistia.com/embed/medias/xcdo71c2zz/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                    `
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

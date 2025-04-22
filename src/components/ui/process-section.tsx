
import React from "react";
import { motion } from "framer-motion";
import { ProcessSectionHeader } from "./ProcessSectionHeader";
import { ProcessGrid } from "./ProcessGrid";
import { PhoneMockup } from "./PhoneMockup";
import { ProcessFootnote } from "./ProcessFootnote";

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
      <ProcessSectionHeader />

      {/* Desktop version */}
      <div className="container mx-auto px-4 relative hidden lg:flex flex-row justify-center z-10 gap-10">
        <div className="flex-1">
          <ProcessGrid steps={steps} />
        </div>
        {/* Right column with phone mockup */}
        <div className="w-[290px] flex flex-col justify-between h-full" style={{ minHeight: '590px' }}>
          <div className="flex-1 flex items-center justify-center">
            <PhoneMockup desktop />
          </div>
          <ProcessFootnote />
        </div>
      </div>

      {/* Mobile version */}
      <div className="lg:hidden block mt-10 px-4">
        <ProcessGrid steps={steps} />
        <div className="w-full flex flex-col items-center justify-start mt-4">
          <PhoneMockup />
          <ProcessFootnote />
        </div>
      </div>
    </div>
  );
}

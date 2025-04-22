
import React from "react";
import { MessageCircle, TrendingUp, Database, ChartBar } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <div className="py-10 lg:py-20 relative z-10 font-russo">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center font-russo heading-white mb-12"
      >
        Основні функції
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto px-6"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="h-full"
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              items={feature.items}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const features = [
  {
    title: "Клієнтська комунікація",
    icon: MessageCircle,
    items: [
      "Автоматична обробка повідомлень",
      "Швидкі відповіді на типові запитання",
      "Цілодобова підтримка клієнтів",
      "Багатоканальна комунікація"
    ],
  },
  {
    title: "Продажі та конверсія",
    icon: TrendingUp,
    items: [
      "Персоналізовані пропозиції",
      "Автоматичні воронки продажів",
      "Супровід клієнта до покупки",
      "Крос-продажі та апсейли"
    ],
  },
  {
    title: "Ведення клієнтської бази",
    icon: Database,
    items: [
      "Сегментація клієнтів",
      "Історія взаємодії",
      "Аналіз поведінки",
      "Автоматичне оновлення даних"
    ],
  },
  {
    title: "Аналітика та звітність",
    icon: ChartBar,
    items: [
      "Детальна статистика",
      "Показники ефективності",
      "Прогнозування результатів",
      "Автоматична генерація звітів"
    ],
  },
];

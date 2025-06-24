
import React from "react";
import { TrendingUp, Clock, Shield, Target, Sun, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const benefits = [
  {
    title: "Зменшення витрат на команду",
    icon: TrendingUp,
    description: "Один AI-продавець замінює кілька менеджерів"
  },
  {
    title: "Конверсія виростає в 2–3 рази",
    icon: Target,
    description: "Професійний підхід до кожного клієнта"
  },
  {
    title: "Відповіді — за секунди",
    icon: Clock,
    description: "без \"повернемося до вас завтра\""
  },
  {
    title: "Жодної втраченої заявки",
    icon: Shield,
    description: "Кожен запит обробляється миттєво"
  },
  {
    title: "24/7 без перерв",
    icon: Sun,
    description: "вихідних і \"я на обіді\""
  },
  {
    title: "Справжній прорив у продажах",
    icon: Zap,
    description: "більше не потрібно десятки менеджерів, які губляться в задачах і втрачають клієнтів"
  }
];

export function BenefitsSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="benefits" className="py-14 lg:py-20 relative z-10 font-russo">
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-center font-russo heading-white mb-2"
      >
        Навіщо вам AI-продавець?
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto px-4 mb-12"
      >
        {benefits.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-7 rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm"
          >
            <GlowingEffect
              spread={38}
              glow={true}
              disabled={false}
              proximity={72}
              inactiveZone={0.01}
              borderWidth={3}
              className="z-10"
            />
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-6 relative z-20">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4 relative z-20 font-russo">{title}</h3>
            <p className="text-neutral-400 leading-snug text-base relative z-20 font-russo">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="text-center px-4"
      >
        <div className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-8 rounded-3xl backdrop-blur-sm border border-white/10 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-white mb-4 font-russo">AI-продавець:</h3>
          <ul className="space-y-3 text-gray-300 font-russo">
            <li>• скорочує час відповіді до декількох секунд</li>
            <li>• підвищує конверсію в 2–3 рази</li>
            <li>• працює без перерв, вихідних і демотивації</li>
          </ul>
        </div>
        
        <ShimmerButton
          shimmerColor="#000"
          background="#fff"
          className="text-black font-russo"
          onClick={scrollToDemo}
        >
          Отримати демо
        </ShimmerButton>
      </motion.div>
    </section>
  );
}

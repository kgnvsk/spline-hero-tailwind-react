
import React from "react";
import { User, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const benefits = [
  {
    title: "Людський фактор",
    icon: User,
    description: [
      "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям."
    ]
  },
  {
    title: "Плинність кадрів",
    icon: Users,
    description: [
      "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього."
    ]
  },
  {
    title: "Безпека",
    icon: ShieldCheck,
    description: [
      "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста."
    ]
  }
];

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.18,
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
    <section className="py-14 lg:py-20 relative z-10 font-russo">
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-extrabold text-center font-russo heading-white mb-2"
      >
        Переваги AI Sales Manager
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="text-center text-neutral-400 max-w-2xl mx-auto mb-12 font-russo"
      >
        AI Sales Manager &amp; Consultant суттєво перевершує звичайного працівника
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto px-4"
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
            <ul className="text-neutral-400 leading-snug text-base space-y-0 list-none pl-0 relative z-20 font-russo">
              {description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

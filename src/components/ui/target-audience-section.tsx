
import React from "react";
import { motion } from "framer-motion";
import { Store, GraduationCap, Scissors, Building, Users, Plane } from "lucide-react";

const audiences = [
  {
    title: "E-commerce магазинів",
    icon: Store,
  },
  {
    title: "Онлайн-шкіл і курсів",
    icon: GraduationCap,
  },
  {
    title: "Салонів краси та медичних клінік",
    icon: Scissors,
  },
  {
    title: "Рітейлу будь-якого масштабу",
    icon: Building,
  },
  {
    title: "Агентств та сервісних компаній",
    icon: Users,
  },
  {
    title: "HoReCa, туризму, страхування",
    icon: Plane,
  },
];

export function TargetAudienceSection() {
  return (
    <section id="target" className="py-16 lg:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-russo">
            Ідеально для:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center"
            >
              <audience.icon className="w-8 h-8 text-white mx-auto mb-4" />
              <p className="text-white font-russo">{audience.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-gray-300 font-russo">
            Будь-якої B2C-комунікації з високим навантаженням
          </p>
        </motion.div>
      </div>
    </section>
  );
}

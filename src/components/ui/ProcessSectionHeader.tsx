
import React from "react";
import { motion } from "framer-motion";

export const ProcessSectionHeader = () => (
  <div className="container mx-auto px-6 mb-10">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-extrabold text-center font-manrope heading-gradient heading-shadow mb-2"
    >
      Як працює AI Sales Manager
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="text-center text-neutral-400 font-manrope max-w-2xl mx-auto"
    >
      AI Sales Manager інтегрується у ваші системи та працює на повну потужність
    </motion.p>
  </div>
);

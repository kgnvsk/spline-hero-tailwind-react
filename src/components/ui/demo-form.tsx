
import React, { useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    window.open("https://t.me/vitalii_2get", "_blank", "noopener,noreferrer");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="demo-form" className="py-16 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-russo">
            Щодня ви втрачаєте клієнтів через затримки з відповідями, перевантажених менеджерів або пропущені повідомлення.
          </h2>
          <p className="text-xl text-white mb-4 font-russo">
            Пора це зупинити.
          </p>
          <p className="text-gray-300 font-russo">
            Залиште заявку — і ми покажемо вам, як AI-продавець може автоматизувати продажі у ваших каналах уже зараз.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Повне ім'я"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/50 font-russo"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/50 font-russo"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white/50 font-russo"
              />
            </div>
            <ShimmerButton
              type="submit"
              shimmerColor="#000"
              background="#fff"
              className="text-black font-russo w-full text-lg py-4"
            >
              ОТРИМАТИ ДЕМО
            </ShimmerButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}


import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, Cog, Zap, CreditCard, Users } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const capabilities = [
  {
    title: "Омніканальна комунікація",
    description: "миттєво реагує в Instagram Direct, Facebook Messenger, Telegram, WhatsApp, live-чаті на сайті",
    icon: MessageSquare,
  },
  {
    title: "Розпізнає намір клієнта",
    description: "веде його по скрипту до покупки",
    icon: Brain,
  },
  {
    title: "Інтегрується з вашими системами",
    description: "CRM, ERP, склад, сервіси оплати, бронювання, доставки",
    icon: Cog,
    details: [
      "Перевіряє залишки",
      "Враховує історію покупок",
      "Видає релевантну пропозицію",
      "Формує посилання на оплату",
      "Контролює оплату прямо в чаті"
    ]
  },
  {
    title: "Багатофункціональність",
    description: "Працює як sales-менеджер, support, консультант і касир одночасно",
    icon: Users,
  },
  {
    title: "Масштабується",
    description: "без збільшення штату",
    icon: Zap,
  },
];

export function CapabilitiesSection() {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="capabilities" className="py-16 lg:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-russo">
            Що вміє наш AI-продавець?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/70 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 font-russo">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 font-russo mb-4">
                    {capability.description}
                  </p>
                  {capability.details && (
                    <ul className="space-y-2">
                      {capability.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 font-russo">
                          <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-8 font-russo max-w-3xl mx-auto">
            AI-продавець вчиться на вашій комунікації й адаптується до стилю бренду — без потреби писати 100 сценаріїв вручну.
          </p>
          <ShimmerButton
            shimmerColor="#000"
            background="#fff"
            className="text-black font-russo"
            onClick={scrollToDemo}
          >
            Отримати демо
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}

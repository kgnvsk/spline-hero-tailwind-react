
import React from 'react';
import { useId } from "react";
import { User, Users, ShieldCheck } from "lucide-react";

const AIAgentFeatures = () => {
  const features = [
    {
      title: "Людський фактор",
      description: "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
      icon: <User className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Плинність кадрів",
      description: "Цикл роботи кадрів на даній посаді зазвичай займає від кількох місяців до року. З AI Агентом, ви забезпечені від цього.",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Безпека",
      description: "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="py-16 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-black border border-[#222] p-6 rounded-2xl overflow-hidden"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg opacity=\'0.05\'%3E%3Cpath d=\'M0 0H9.5V9.5H0V0Z\' fill=\'%23D9D9D9\'/%3E%3Cpath d=\'M10.5 0H20V9.5H10.5V0Z\' fill=\'%23D9D9D9\'/%3E%3Cpath d=\'M0 10.5H9.5V20H0V10.5Z\' fill=\'%23D9D9D9\'/%3E%3Cpath d=\'M10.5 10.5H20V20H10.5V10.5Z\' fill=\'%23D9D9D9\'/%3E%3C/g%3E%3C/svg%3E")' }}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-400 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentFeatures;

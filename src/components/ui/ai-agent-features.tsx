
import React from "react";
import { Brain, Users, Shield } from "lucide-react";

// Тексты и структура строго по скрину
const features = [
  {
    title: "Людський фактор",
    icon: Brain,
    gradient: "from-[#7B7FF5] to-[#954EDC]",
    description:
      "AI Агент не вигорає, не обіжається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
  },
  {
    title: "Плинність кадрів",
    icon: Users,
    gradient: "from-[#7B7FF5] to-[#954EDC]",
    description:
      "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього.",
  },
  {
    title: "Безпека",
    icon: Shield,
    gradient: "from-[#7B7FF5] to-[#954EDC]",
    description:
      "Ви не втратите цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
  },
];

export default function AIAgentFeatures() {
  return (
    <section className="w-full py-16 bg-transparent relative z-10 font-russo">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
        {features.map((feat, i) => (
          <div
            key={i}
            className="bg-white rounded-[32px] shadow-lg px-10 py-10 flex flex-col items-start min-h-[270px] transition-all"
            style={{ boxShadow: "0 4px 32px 0 rgba(100,106,164,0.07)" }}
          >
            {/* Иконка в круглом фоне с градиентом */}
            <div className="mb-6">
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br"
                style={{
                  background:
                    "linear-gradient(135deg, #7B7FF5 0%, #954EDC 100%)",
                }}
              >
                <feat.icon className="text-white" size={32} strokeWidth={2.2} />
              </div>
            </div>
            {/* Тайтл */}
            <div className="text-2xl md:text-[26px] font-bold mb-2 text-[#1A1F2C]">
              {feat.title}
            </div>
            {/* Описание */}
            <div className="text-[18px] leading-snug text-[#23242B] font-normal opacity-100 font-russo">
              {feat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


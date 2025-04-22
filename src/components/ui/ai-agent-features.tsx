
import React from "react";
import { User, Users, Shield } from "lucide-react";

// Данные карточек – строго по скриншоту!
const features = [
  {
    title: "Людський фактор",
    icon: User,
    description:
      "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
  },
  {
    title: "Плинність кадрів",
    icon: Users,
    description:
      "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього.",
  },
  {
    title: "Безпека",
    icon: Shield,
    description:
      "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
  },
];

export default function AIAgentFeatures() {
  return (
    <section className="w-full px-2 py-14 max-w-7xl mx-auto relative z-10 font-russo">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <div
            key={i}
            className="relative bg-black/70 rounded-[36px] px-10 py-9 shadow-xl flex flex-col min-h-[330px] justify-start items-start overflow-hidden"
            style={{
              boxShadow:
                "0 9px 36px -8px rgba(25,31,44,0.18), 0 1.5px 8px rgba(73,65,110,0.08)",
            }}
          >
            {/* Ghost icon в левом верхнем углу */}
            <div className="absolute left-8 top-8 opacity-10 z-0">
              <feat.icon size={56} strokeWidth={2.2} />
            </div>
            <div className="relative z-10 mt-10">
              <div className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight text-white font-russo">
                {feat.title}
              </div>
              <div className="text-[20px] text-white/80 font-russo leading-snug font-bold whitespace-pre-line">
                {feat.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

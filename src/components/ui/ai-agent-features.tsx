
import React from "react";
import { Brain, Users, Shield } from "lucide-react";

// Определяем градиентную иконку-рамку. Используем фиолетовый градиент
const GradientIconWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div
    className="w-14 h-14 rounded-xl flex items-center justify-center"
    style={{
      background: "linear-gradient(135deg, #9b87f5 10%, #8B5CF6 90%)"
    }}
  >
    {children}
  </div>
);

const features = [
  {
    title: "Людський фактор",
    icon: <Brain size={34} className="text-white" />,
    description: "AI Агент не вигорає, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям."
  },
  {
    title: "Плинність кадрів",
    icon: <Users size={34} className="text-white" />,
    description: "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього."
  },
  {
    title: "Безпека",
    icon: <Shield size={34} className="text-white" />,
    description: "Ви не втратите цінні знання та навички як це буває зазвичай при звільненні спеціаліста."
  }
];

export default function AIAgentFeatures() {
  return (
    <section className="relative z-0 py-14 px-2 w-full overflow-x-hidden select-none font-russo" style={{ background: "#F8FAFF" }}>
      {/* Фоновая светлая сетка */}
      <div
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <svg
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ position: "absolute", top: 0, left: 0, minHeight: "100%" }}
        >
          <defs>
            <pattern
              id="light-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="40" height="40" fill="none" />
              <rect x="0" y="0" width="40" height="40" rx="8" ry="8" fill="none" stroke="#DBE4F7" strokeWidth="1" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#light-grid)"
            opacity="1"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                flex flex-col bg-white rounded-3xl p-10 min-h-[260px] shadow-[0_7px_36px_-8px_rgba(25,31,44,0.13)] transition-all
                border border-[#f1f3fa] 
                relative
              "
              style={{
                // Только лёгкая тень вокруг карточки для воздушности
              }}
            >
              <div className="mb-6">
                <GradientIconWrapper>
                  {feature.icon}
                </GradientIconWrapper>
              </div>
              <div className="text-2xl font-extrabold mb-4 text-[#222] font-russo">{feature.title}</div>
              <div className="text-[18px] text-[#333] font-russo leading-snug">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

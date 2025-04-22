
import React from "react";
import { User, Users, Shield } from "lucide-react";

const features = [
  {
    title: "Людський фактор",
    description:
      "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям.",
    icon: <User size={46} className="text-blue-800/15 dark:text-blue-400/10" />,
  },
  {
    title: "Плинність кадрів",
    description:
      "Цикл роботи кадрів на даній посаді зазвичай займає від декількох місяців до року. З AI Агентом, ви забезпечені від цього.",
    icon: <Users size={46} className="text-blue-800/15 dark:text-blue-400/10" />,
  },
  {
    title: "Безпека",
    description:
      "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста.",
    icon: <Shield size={46} className="text-blue-800/15 dark:text-blue-400/10" />,
  },
];

// Компонент сетки фона
function GridBG() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    >
      <svg
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          minHeight: "100%",
        }}
      >
        <defs>
          <pattern
            id="ai-feature-bg"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="80" height="80" fill="none" />
            <rect x="0" y="0" width="80" height="80" rx="8" ry="8" fill="none" stroke="#262729" strokeWidth="2" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#ai-feature-bg)"
          opacity="0.16"
        />
      </svg>
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </div>
  );
}

export default function AIAgentFeatures() {
  return (
    <section className="relative py-20 font-russo select-none z-0 overflow-hidden">
      <GridBG />
      <div className="max-w-5xl mx-auto px-4 mb-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-7 drop-shadow-lg">
          Переваги AI Агента
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 relative z-10">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="
              relative rounded-3xl bg-[#19191c]/70 backdrop-blur-[2px]
              border border-[#24242b]/40 shadow-lg p-10
              min-h-[280px] flex flex-col
              hover:shadow-2xl transition-shadow
              "
            style={{
              boxShadow: "0 12px 56px 0 rgba(12,12,27,0.28)",
            }}
          >
            <div className="absolute left-8 top-8 z-0 opacity-80">
              {feature.icon}
            </div>
            <div className="flex flex-col h-full relative z-10">
              <div className="font-extrabold text-white text-2xl md:text-2xl mb-4 leading-snug drop-shadow-sm">
                {feature.title}
              </div>
              <div className="font-russo text-neutral-200 text-lg tracking-tight leading-snug" style={{ textShadow: "0px 1px 2px #10101080" }}>
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


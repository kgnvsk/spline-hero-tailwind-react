
import React from 'react';

const AIAgentFeatures = () => {
  const features = [
    {
      title: "Людський фактор",
      description: "AI Агент не втомлюється, не ображається, не помиляється, не запізнюється, не забуває, не підвладний емоціям."
    },
    {
      title: "Плинність кадрів",
      description: "Цикл роботи кадрів на даній посаді зазвичай займає від кількох місяців до року. З AI Агентом, ви забезпечені від цього."
    },
    {
      title: "Безпека",
      description: "Ви не втрачаєте цінні знання та навички як це буває зазвичай при звільненні спеціаліста."
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#111] border border-[#222] rounded-2xl p-6 space-y-4 hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-neutral-400 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentFeatures;

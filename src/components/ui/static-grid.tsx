
import React from "react";

interface StaticGridProps {
  className?: string;
  opacity?: number;
  color?: string;
  size?: number;
}

export const StaticGrid: React.FC<StaticGridProps> = ({
  className = "",
  opacity = 0.36,
  color = "#323232",
  size = 40,
}) => {
  // Генерируем CSS для сетки через градиенты
  const gridStyle: React.CSSProperties = {
    position: "fixed", // Fixed позиционирование для охвата всего экрана
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#101014",
    backgroundImage: `
      linear-gradient(to right, ${color} 1px, transparent 1px),
      linear-gradient(to bottom, ${color} 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
    opacity: opacity,
    zIndex: 0, // Меняем с -1 на 0, чтобы сетка была видна
    pointerEvents: "none", // Чтобы сетка не блокировала клики
    userSelect: "none",
  };

  return <div className={className} style={gridStyle} />;
};

export default StaticGrid;

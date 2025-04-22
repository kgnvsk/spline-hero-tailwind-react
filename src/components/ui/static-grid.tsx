
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
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#101014",
    backgroundImage: `
      linear-gradient(to right, ${color}31 1px, transparent 1px),
      linear-gradient(to bottom, ${color}31 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
    opacity,
    zIndex: 0,
    pointerEvents: "none",
    userSelect: "none",
  };

  return <div className={className} style={gridStyle} />;
};

export default StaticGrid;


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
  const gridStyle: React.CSSProperties = {
    position: "fixed", // Changed from absolute to fixed to ensure it covers the entire viewport
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent", 
    backgroundImage: `
      linear-gradient(to right, ${color} 1px, transparent 1px),
      linear-gradient(to bottom, ${color} 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
    opacity: opacity,
    pointerEvents: "none", 
    userSelect: "none",
    zIndex: 1, // Increase z-index slightly but still behind content
  };

  return <div className={className} style={gridStyle} />;
};

export default StaticGrid;

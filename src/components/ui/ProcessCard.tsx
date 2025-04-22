
import React from "react";

export interface ProcessCardProps {
  title: string;
  description: string[];
  className?: string;
  titleClassName?: string;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  className = "",
  titleClassName = ""
}) => (
  <div className={`relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden z-10 ${className}`}>
    <div className="relative z-20">
      <h3 className={`text-lg font-bold text-white mb-4 ${titleClassName}`}>{title}</h3>
      <ul className="text-neutral-400 space-y-2 text-sm pl-0 list-none">
        {description.map((desc, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

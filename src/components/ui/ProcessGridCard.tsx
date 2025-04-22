
import React, { useId } from "react";

interface ProcessGridCardProps {
  title: string;
  description: string[];
  className?: string;
}

export const ProcessGridCard: React.FC<ProcessGridCardProps> = ({
  title,
  description,
  className = ""
}) => {
  return (
    <div
      className={`relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden ${className}`}
      style={{ minHeight: '260px' }}
    >
      <ProcessCardGridGraphic size={20} />
      <div className="flex flex-col h-full z-20 relative">
        <h3 className="text-base font-bold text-neutral-800 dark:text-white mb-4">
          {title}
        </h3>
        <ul className="text-neutral-600 dark:text-neutral-400 text-sm pl-0 list-none space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 inline-block w-2 h-2 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function ProcessCardGridGraphic({ size }: { size?: number }) {
  const patternId = useId();
  const width = size ?? 20;
  const height = size ?? 20;

  // Fixed subtle pattern (not random to avoid SSR mismatch)
  const pattern = [
    [7, 2], [8, 4], [10, 5], [9, 1], [11, 3]
  ];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <svg
          aria-hidden="true"
          width={width * 20}
          height={height * 10}
          viewBox={`0 0 ${width * 20} ${height * 10}`}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        >
          <defs>
            <pattern
              id={patternId}
              width={width}
              height={height}
              patternUnits="userSpaceOnUse"
              x={-12}
              y={4}
            >
              <path d={`M.5 ${height}V.5H${width}`} fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill={`url(#${patternId})`}
          />
          <svg x={-12} y={4} className="overflow-visible">
            {pattern.map(([x, y]) => (
              <rect
                strokeWidth="0"
                key={`${x}-${y}`}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}

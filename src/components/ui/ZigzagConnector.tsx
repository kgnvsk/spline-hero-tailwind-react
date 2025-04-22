
import React from "react";

export const ZigzagConnector: React.FC = () => (
  <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none" style={{overflow: "visible"}}>
    <defs>
      <linearGradient id="zigzagline" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Исправленная линия из 1 -> 2 */}
    <path d="M130,110 C180,160 180,240 240,250" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
    {/* Исправленная линия из 2 -> 3 */}
    <path d="M320,250 C250,280 180,330 130,390" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
    {/* Линия из 3 -> 4 */}
    <path d="M220,390 C400,420 400,500 400,500" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
    {/* Линия из 4 -> 5 */}
    <path d="M520,500 C290,540 290,630 290,630" stroke="url(#zigzagline)" strokeWidth="3" fill="none" />
  </svg>
);

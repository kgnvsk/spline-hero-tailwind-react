'use client';

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Максимально яркий голубой цвет с высокой прозрачностью
        color: `rgba(33, 195, 240, ${0.9 + i * 0.01})`, // Sky Blue с высокой непрозрачностью
        // Уменьшаем толщину, но делаем более яркими
        width: 0.5 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                style={{ 
                    filter: 'brightness(3) contrast(2)', 
                    mixBlendMode: 'screen',
                    opacity: 1
                }}
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={`path-${path.id}-${position}`}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={1}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function SiteBackground() {
    return (
        <div 
            className="fixed inset-0 z-10 w-full h-full pointer-events-none overflow-hidden"
            style={{ 
                mixBlendMode: 'screen', 
                background: 'transparent' 
            }}
        >
            <div className="absolute inset-0 opacity-100">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
}

export default SiteBackground;


import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  variant = "dark",
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button";
  // For light variant use a yellowish/white sparkle, for dark use theme foreground
  const defaultColor =
    color ||
    (variant === "light"
      ? "rgba(255,255,255,0.75)"
      : "hsl(var(--foreground))");

  // Interior button gradient style per variant
  const innerClasses =
    variant === "light"
      ? cn(
          "relative z-1 border text-black text-center text-base py-4 px-6 rounded-[20px]",
          "bg-gradient-to-b from-white to-neutral-100/80 border-zinc-200"
        )
      : cn(
          "relative z-1 border text-foreground text-center text-base py-4 px-6 rounded-[20px]",
          "bg-gradient-to-b from-background/90 to-muted/90 border-border/40"
        );

  return (
    <Component
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px] transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring/80",
        className
      )}
      {...props}
    >
      {/* Bottom sparkle */}
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      {/* Top sparkle */}
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      {/* Button text and inner background */}
      <div className={innerClasses}>{children}</div>
    </Component>
  );
}

// Animations (to be added to tailwind.config.ts if not already present)
// @keyframes star-movement-top/bottom { 0% ... 100% ... }


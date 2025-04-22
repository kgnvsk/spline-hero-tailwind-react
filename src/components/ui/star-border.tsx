
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
  
  // Simple white button styles based on variant
  const buttonClasses =
    variant === "light"
      ? cn(
          "text-black bg-white border border-zinc-200 rounded-full px-6 py-3 transition-transform duration-200 hover:bg-zinc-100"
        )
      : cn(
          "text-black bg-zinc-100 border border-zinc-200 rounded-full px-6 py-3 transition-transform duration-200 hover:bg-white"
        );

  return (
    <Component
      className={cn(
        buttonClasses,
        "flex items-center justify-center gap-2 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

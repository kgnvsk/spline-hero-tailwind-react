
import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
  variant?: "light" | "dark"
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
  const Component = as || "button"
  const defaultColor = color || (variant === "light" ? "#fff" : "#111")

  // Decide button styling based on variant
  const buttonStyle = variant === "light" 
    ? "bg-white text-black" 
    : "bg-black text-white";

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
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
      <div className={cn(
        "relative z-1 text-center text-base py-4 px-6 rounded-[20px] hover:scale-[1.035] transition-transform duration-150",
        buttonStyle
      )}>
        <span className="relative z-20 flex items-center gap-2">{children}</span>
      </div>
    </Component>
  )
}

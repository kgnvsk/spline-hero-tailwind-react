
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
  const borderColor = color
    ? color
    : variant === "light"
      ? "#fff"
      : "#111" // почти чёрный, чтобы выделяться на фоне

  const innerBg =
    variant === "light"
      ? "bg-white text-black"
      : "bg-black text-white";

  const borderShadow =
    variant === "light"
      ? "shadow-[0_2px_24px_2px_rgba(255,255,255,0.25)]"
      : "shadow-[0_2px_24px_2px_rgba(0,0,0,0.24)]";

  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden rounded-[20px] px-7 py-3 font-semibold transition-transform duration-150 hover:scale-[1.035] focus-visible:ring-2 focus-visible:ring-primary",
        innerBg,
        borderShadow,
        className
      )}
      {...props}
    >
      {/* Верхний сияющий border */}
      <span
        className={cn(
          "pointer-events-none absolute left-1/2 top-0 z-10 h-[60%] w-[170%] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-45 blur-sm animate-star-movement-top",
        )}
        style={{
          background: `radial-gradient(circle at center, ${borderColor}, transparent 70%)`,
          animationDuration: speed,
        }}
      />
      {/* Нижний сияющий border */}
      <span
        className={cn(
          "pointer-events-none absolute left-1/2 bottom-0 z-10 h-[60%] w-[170%] -translate-x-1/2 translate-y-1/3 rounded-full opacity-30 blur-lg animate-star-movement-bottom",
        )}
        style={{
          background: `radial-gradient(circle at center, ${borderColor}, transparent 70%)`,
          animationDuration: speed,
        }}
      />
      {/* Контент кнопки */}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </Component>
  )
}

import { cn } from "@/utils/cn";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gold/10 bg-dark-700/60 p-6",
        "shadow-card backdrop-blur-sm",
        hover && "transition-all duration-300 hover:border-gold/25 hover:bg-dark-700 hover:-translate-y-1",
        glow && "hover:shadow-gold",
        className
      )}
    >
      {children}
    </div>
  );
}

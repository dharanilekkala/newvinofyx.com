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
        "rounded-2xl border border-blue-100 bg-white p-6 shadow-sm",
        hover && "transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1",
        glow && "hover:shadow-[0_0_30px_rgba(0,87,255,0.18)]",
        className
      )}
    >
      {children}
    </div>
  );
}

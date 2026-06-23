import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "blue" | "white";
}

export default function Logo({ className, size = "md", variant = "blue" }: LogoProps) {
  const sizes = {
    sm: { mark: 26, text: "text-[14px]", sub: "text-[6.5px]" },
    md: { mark: 34, text: "text-[18px]", sub: "text-[8px]" },
    lg: { mark: 42, text: "text-[22px]", sub: "text-[9.5px]" },
  };
  const s = sizes[size];

  const isWhite = variant === "white";
  const gradientId = `vg-${variant}-${size}`;

  return (
    <span className={cn("inline-flex items-center gap-2 select-none", className)}>
      {/* V-mark */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={isWhite ? "rgba(255,255,255,0.9)" : "#00A3FF"} />
            <stop offset="60%" stopColor={isWhite ? "#FFFFFF" : "#0057FF"} />
            <stop offset="100%" stopColor={isWhite ? "rgba(255,255,255,0.8)" : "#1D4ED8"} />
          </linearGradient>
        </defs>
        {/* Left arm of V */}
        <polygon points="4,6 14,6 20,28 14,28" fill={`url(#${gradientId})`} />
        {/* Right arm of V */}
        <polygon points="36,6 26,6 20,28 26,28" fill={`url(#${gradientId})`} />
        {/* Arrow tip */}
        <polygon points="17,26 23,26 26,34 20,38 14,34" fill={`url(#${gradientId})`} />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(s.text, "font-black tracking-[0.1em] uppercase")}
          style={{
            color: isWhite ? "#FFFFFF" : "#0F172A",
          }}
        >
          VINOFYX
        </span>
        <span
          className={cn(s.sub, "tracking-[0.22em] uppercase font-medium mt-[2px]")}
          style={{ color: isWhite ? "rgba(255,255,255,0.5)" : "rgba(0,87,255,0.4)" }}
        >
          PRIVATE LIMITED
        </span>
      </span>
    </span>
  );
}

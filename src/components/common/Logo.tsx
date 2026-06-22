import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: { mark: 28, text: "text-[15px]", sub: "text-[7px]" },
    md: { mark: 36, text: "text-[19px]", sub: "text-[8.5px]" },
    lg: { mark: 44, text: "text-[23px]", sub: "text-[10px]" },
  };
  const s = sizes[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* Gold V-mark */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="vg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5E6A8" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8960C" />
          </linearGradient>
        </defs>
        {/* V left arm */}
        <polygon points="4,6 14,6 20,28 14,28" fill="url(#vg)" />
        {/* V right arm */}
        <polygon points="36,6 26,6 20,28 26,28" fill="url(#vg)" />
        {/* Arrow tip */}
        <polygon points="17,26 23,26 26,34 20,38 14,34" fill="url(#vg)" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            s.text,
            "font-black tracking-[0.12em] uppercase"
          )}
          style={{
            background: "linear-gradient(135deg, #F5E6A8 0%, #D4AF37 50%, #B8960C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          VINOFYX
        </span>
        <span
          className={cn(s.sub, "tracking-[0.22em] uppercase font-medium mt-[2px]")}
          style={{ color: "rgba(212,175,55,0.55)" }}
        >
          PRIVATE LIMITED
        </span>
      </span>
    </span>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5E6A8",
          dark: "#8B6D0D",
          50: "#FDF8E7",
          100: "#F9EFC0",
          200: "#F5E6A8",
          300: "#EDD56A",
          400: "#E0C03C",
          500: "#D4AF37",
          600: "#B8960A",
          700: "#8B6D0D",
          800: "#6B5208",
          900: "#4A3A06",
        },
        dark: {
          DEFAULT: "#050505",
          900: "#050505",
          800: "#0A0A0A",
          700: "#111111",
          600: "#1A1A1A",
          500: "#222222",
          400: "#2A2A2A",
          300: "#333333",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#F5E6A8 0%,#D4AF37 50%,#8B6D0D 100%)",
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(212,175,55,0.18)",
        "gold-md": "0 0 60px rgba(212,175,55,0.28)",
        card: "0 4px 40px rgba(0,0,0,0.6), 0 0 1px rgba(212,175,55,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

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
        // Primary brand blue palette
        gold: {
          DEFAULT: "#0057FF",
          light: "#2563EB",
          dark: "#1E40AF",
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#0057FF",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        // Light surface palette (was dark)
        dark: {
          DEFAULT: "#FFFFFF",
          900: "#FFFFFF",
          800: "#F8FAFC",
          700: "#F1F5F9",
          600: "#E2E8F0",
          500: "#CBD5E1",
          400: "#94A3B8",
          300: "#64748B",
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
          "50%":     { transform: "translateY(-16px)" },
        },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,87,255,0.3)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(0,87,255,0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#93C5FD 0%,#0057FF 50%,#1E40AF 100%)",
        "hero-radial":   "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,87,255,0.07) 0%, transparent 70%)",
      },
      boxShadow: {
        gold:    "0 0 30px rgba(0,87,255,0.18)",
        "gold-md": "0 0 60px rgba(0,87,255,0.25)",
        card:    "0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,87,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;

"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  inView?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  inView = true,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-3 mb-4 text-blue-600 text-xs font-semibold tracking-[0.22em] uppercase ${centered ? "justify-center" : ""}`}
        >
          <span className="w-8 h-px bg-blue-300" />
          {eyebrow}
          <span className="w-8 h-px bg-blue-300" />
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg text-slate-500 leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

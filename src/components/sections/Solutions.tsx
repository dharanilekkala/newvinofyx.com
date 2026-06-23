"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Code2, Database, TrendingUp, Briefcase, Building2,
  Smartphone, Cloud, ShieldCheck, ShoppingCart, Settings2,
  GraduationCap, Landmark,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { SOLUTIONS } from "@/utils/constants";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Brain, Code2, Database, TrendingUp, Briefcase, Building2,
  Smartphone, Cloud, ShieldCheck, ShoppingCart, Settings2,
  GraduationCap, Landmark,
};

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="solutions"
      ref={ref}
      className="section-pad bg-white scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Capabilities"
          title="Solutions That Scale With You"
          subtitle="Comprehensive services designed to help organizations innovate, scale, and lead in the digital era — across any industry, at any stage."
          inView={inView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICON_MAP[s.icon] ?? Brain;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                className="accent-card group p-5 sm:p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-300 text-blue-600 font-semibold text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Discuss Your Requirements →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

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
    <section id="solutions" ref={ref} className="section-pad bg-dark-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          eyebrow="13 Verticals"
          title="Solutions That Scale With You"
          subtitle="From AI to infrastructure, digital marketing to institutional technology — we cover every dimension of enterprise growth."
          inView={inView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICON_MAP[s.icon] ?? Brain;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                className="group p-6 rounded-2xl border border-gold/10 bg-dark-700/50 hover:border-gold/28 hover:bg-dark-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors mb-5">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/48 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/35 text-gold font-semibold hover:bg-gold hover:text-black transition-all duration-200"
          >
            Discuss Your Requirements →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

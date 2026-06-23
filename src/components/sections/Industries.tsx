"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, Landmark, GraduationCap, Building, ShoppingBag,
  Factory, Home, Truck, Film, Hotel, Leaf, Scale,
  Cpu, Zap, Wifi, Rocket,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { INDUSTRIES } from "@/utils/constants";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Heart, Landmark, GraduationCap, Building, ShoppingBag,
  Factory, Home, Truck, Film, Hotel, Leaf, Scale,
  Cpu, Zap, Wifi, Rocket,
};

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="industries"
      ref={ref}
      className="section-pad bg-white overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Industries We Serve"
          title="Enterprise Solutions Without Boundaries"
          subtitle="We bring domain-specific knowledge and proven methodologies to every sector we serve — and we never stop expanding our reach."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {INDUSTRIES.map(({ name, icon }, i) => {
            const Icon = ICON_MAP[icon] ?? Building;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <Icon size={18} className="text-blue-600" />
                </div>
                <span className="text-slate-600 text-sm font-medium leading-tight group-hover:text-slate-900 transition-colors">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          Don&apos;t see your industry? <a href="#contact" className="text-blue-600 font-medium hover:underline">Get in touch</a> — we build for every sector.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart, Landmark, GraduationCap, Building, ShoppingBag,
  Factory, Home, Truck, Film, Hotel, Leaf, Scale,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { INDUSTRIES } from "@/utils/constants";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Heart, Landmark, GraduationCap, Building, ShoppingBag,
  Factory, Home, Truck, Film, Hotel, Leaf, Scale,
};

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="industries"
      ref={ref}
      className="section-pad bg-dark overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Industries We Serve"
          title="Deep Expertise Across Every Sector"
          subtitle="We bring domain-specific knowledge and proven methodologies to every industry we serve, delivering solutions that understand your business context."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {INDUSTRIES.map(({ name, icon }, i) => {
            const Icon = ICON_MAP[icon] ?? Building;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-gold/8 bg-dark-700/30 hover:border-gold/25 hover:bg-dark-700/70 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="text-white/65 text-sm font-medium leading-tight group-hover:text-white transition-colors">
                  {name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

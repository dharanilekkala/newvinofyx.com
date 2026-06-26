"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Gem, Globe2 } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const VALUES = [
  {
    Icon: Target,
    title: "Mission",
    desc: "To democratize enterprise-grade technology, enabling every organization — from startups to governments — to harness the full power of AI and digital transformation.",
  },
  {
    Icon: Eye,
    title: "Vision",
    desc: "To be the world's most trusted technology partner, recognized by Fortune 500 companies, governments, and institutions for innovation, integrity, and measurable impact.",
  },
  {
    Icon: Gem,
    title: "Values",
    desc: "Excellence, integrity, innovation, and accountability guide every decision we make and every solution we deliver to our clients worldwide.",
  },
  {
    Icon: Globe2,
    title: "Global Reach",
    desc: "Operating across 3 continents with a dedicated team of world-class engineers, strategists, and domain experts serving clients in 10+ countries.",
  },
];

const JOURNEY = [
  { year: "2025",  label: "Founded",    desc: "Born with a vision to democratize AI for enterprises" },
  { year: "2025",  label: "Growth",     desc: "Rapid expansion, first enterprise clients onboarded" },
  { year: "2026",  label: "Innovation", desc: "Launched AI Lab, 100+ automation deployments" },
  { year: "2026+", label: "Global",     desc: "3 continents, 5+ enterprise clients worldwide" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-pad bg-slate-50 scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Foundation"
          title="Built to Transform. Designed to Last."
          subtitle="VINOFYX PRIVATE LIMITED is a full-spectrum technology company delivering intelligent solutions that bridge the gap between innovation and enterprise reality."
          inView={inView}
        />

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-28">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="accent-card group p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                <Icon className="text-blue-600" size={22} />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey timeline */}
        <div>
          <p className="text-center text-slate-400 text-[11px] tracking-[0.3em] uppercase mb-14">
            Our Journey
          </p>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block" />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {JOURNEY.map(({ year, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-xs flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(0,87,255,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <div className="gold-text font-black text-2xl mb-1">{year}</div>
                  <div className="text-slate-900 font-semibold text-sm mb-2">{label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  { year: "2022", label: "Founded", desc: "Born with a vision to democratize AI for enterprises" },
  { year: "2023", label: "Growth", desc: "Expanded to 13 verticals, 30+ clients onboarded" },
  { year: "2024", label: "Innovation", desc: "Launched AI Lab, 100+ automation deployments" },
  { year: "2025", label: "Global", desc: "3 continents, 500+ projects, 50+ enterprise clients" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-pad bg-dark-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Foundation"
          title="Built to Transform. Designed to Last."
          subtitle="VINOFYX PRIVATE LIMITED is a full-spectrum technology company delivering intelligent solutions that bridge the gap between innovation and enterprise reality."
          inView={inView}
        />

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group p-6 rounded-2xl border border-gold/10 bg-dark-700/50 hover:border-gold/28 hover:bg-dark-700 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/18 transition-colors">
                <Icon className="text-gold" size={20} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey timeline */}
        <div>
          <p className="text-center text-white/30 text-[11px] tracking-[0.3em] uppercase mb-14">
            Our Journey
          </p>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent hidden md:block" />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {JOURNEY.map(({ year, label, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-gold text-black font-black text-xs flex items-center justify-center mx-auto mb-4 shadow-gold relative z-10 animate-pulse-gold">
                    {i + 1}
                  </div>
                  <div className="gold-text font-black text-2xl mb-1">{year}</div>
                  <div className="text-white font-semibold text-sm mb-2">{label}</div>
                  <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

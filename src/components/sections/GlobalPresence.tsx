"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { GLOBAL_STATS } from "@/utils/constants";

const REGIONS = [
  { name: "Asia Pacific", countries: ["India", "Singapore", "UAE"], active: true },
  { name: "Europe",       countries: ["United Kingdom", "Germany", "Netherlands"], active: true },
  { name: "Americas",     countries: ["United States", "Canada"], active: true },
];

export default function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="global" ref={ref} className="section-pad bg-slate-50 overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Global Presence"
          title="Local Expertise. Global Scale."
          subtitle="Serving enterprise clients across 3 continents, we combine deep regional knowledge with world-class technology capabilities."
          inView={inView}
        />

        {/* Stats row — glassmorphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-blue rounded-2xl px-4 sm:px-8 py-6 flex flex-wrap sm:flex-nowrap items-center justify-around gap-4 mb-16"
        >
          {GLOBAL_STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`text-center flex-1 px-2 ${i < GLOBAL_STATS.length - 1 ? "sm:border-r border-blue-200/60" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-black gold-text mb-1">{value}</div>
              <div className="text-slate-400 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Globe visualization */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* SVG Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 max-w-[420px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="relative aspect-square">
              <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
                {/* Outer glow ring */}
                <circle cx="100" cy="100" r="92" fill="rgba(0,87,255,0.02)" stroke="rgba(0,87,255,0.06)" strokeWidth="0.5" />
                {/* Concentric rings */}
                <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(0,87,255,0.09)"  strokeWidth="0.7" />
                <circle cx="100" cy="100" r="57" fill="none" stroke="rgba(0,87,255,0.07)" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="38" fill="none" stroke="rgba(0,87,255,0.06)" strokeWidth="0.4" />

                {/* Meridian ellipses */}
                {[0, 45, 90, 135].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="100" cy="100" rx="76" ry="76"
                    fill="none"
                    stroke="rgba(0,87,255,0.05)"
                    strokeWidth="0.4"
                    transform={`rotate(${angle} 100 100)`}
                  />
                ))}

                {/* Latitude arcs */}
                {[-34, 0, 34].map((y) => (
                  <ellipse
                    key={y}
                    cx="100" cy={100 + y}
                    rx={Math.sqrt(Math.max(0, 76 * 76 - y * y))}
                    ry="11"
                    fill="none"
                    stroke="rgba(0,87,255,0.05)"
                    strokeWidth="0.4"
                  />
                ))}

                {/* Location: India */}
                <circle cx="131" cy="100" r="4"   fill="#0057FF" opacity="0.9" />
                <circle cx="131" cy="100" r="8"   fill="none" stroke="#0057FF" strokeWidth="0.7" opacity="0.35" />
                <circle cx="131" cy="100" r="13"  fill="none" stroke="#0057FF" strokeWidth="0.4" opacity="0.15" />

                {/* Location: UK */}
                <circle cx="88"  cy="58" r="3.5" fill="#0057FF" opacity="0.85" />
                <circle cx="88"  cy="58" r="7"   fill="none" stroke="#0057FF" strokeWidth="0.6" opacity="0.3" />

                {/* Location: USA */}
                <circle cx="55"  cy="73" r="3.5" fill="#0057FF" opacity="0.85" />
                <circle cx="55"  cy="73" r="7"   fill="none" stroke="#0057FF" strokeWidth="0.6" opacity="0.3" />

                {/* Location: UAE */}
                <circle cx="120" cy="87" r="2.5" fill="#0057FF" opacity="0.75" />
                <circle cx="120" cy="87" r="5"   fill="none" stroke="#0057FF" strokeWidth="0.5" opacity="0.25" />

                {/* Location: Singapore */}
                <circle cx="143" cy="110" r="2"  fill="#0057FF" opacity="0.7" />

                {/* Connection lines */}
                <line x1="131" y1="100" x2="88"  y2="58"  stroke="rgba(0,87,255,0.22)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="88"  y1="58"  x2="55"  y2="73"  stroke="rgba(0,87,255,0.22)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="131" y1="100" x2="120" y2="87"  stroke="rgba(0,87,255,0.18)" strokeWidth="0.4" strokeDasharray="2,3" />
                <line x1="131" y1="100" x2="143" y2="110" stroke="rgba(0,87,255,0.16)" strokeWidth="0.4" strokeDasharray="2,3" />
                <line x1="120" y1="87"  x2="88"  y2="58"  stroke="rgba(0,87,255,0.12)" strokeWidth="0.3" strokeDasharray="2,4" />

                {/* Center glow */}
                <circle cx="100" cy="100" r="10" fill="rgba(0,87,255,0.04)" />

                {/* VINOFYX label */}
                <text x="100" y="170" textAnchor="middle" fill="rgba(0,87,255,0.3)" fontSize="5" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="3">
                  VINOFYX
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Region cards */}
          <div className="w-full lg:w-1/2 space-y-4">
            {REGIONS.map(({ name, countries }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="accent-card group p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <MapPin size={14} className="text-blue-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold">{name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span
                      key={c}
                      className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-slate-400 text-sm px-2"
            >
              * Expanding to new markets — contact us for partnership opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { GLOBAL_STATS } from "@/utils/constants";

const REGIONS = [
  { name: "Asia Pacific", countries: ["India", "Singapore", "UAE"], active: true },
  { name: "Europe", countries: ["United Kingdom", "Germany", "Netherlands"], active: true },
  { name: "Americas", countries: ["United States", "Canada"], active: true },
];

export default function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="global" ref={ref} className="section-pad bg-dark-800 overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Global Presence"
          title="Local Expertise. Global Scale."
          subtitle="Serving enterprise clients across 3 continents, we combine deep regional knowledge with world-class technology capabilities."
          inView={inView}
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
        >
          {GLOBAL_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="p-5 rounded-2xl border border-gold/12 bg-dark-700/50 text-center"
            >
              <div className="text-2xl md:text-3xl font-black gold-text mb-1">{value}</div>
              <div className="text-white/45 text-xs tracking-wide">{label}</div>
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
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Globe circles */}
                <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="0.8" />
                <circle cx="100" cy="100" r="66" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="0.5" />

                {/* Meridian lines */}
                {[0, 45, 90, 135].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="100" cy="100" rx="88" ry="88"
                    fill="none"
                    stroke="rgba(212,175,55,0.04)"
                    strokeWidth="0.5"
                    transform={`rotate(${angle} 100 100)`}
                  />
                ))}

                {/* Lat lines */}
                {[-40, 0, 40].map((y, i) => (
                  <ellipse
                    key={y}
                    cx="100" cy={100 + y}
                    rx={Math.sqrt(88 * 88 - y * y)}
                    ry="12"
                    fill="none"
                    stroke="rgba(212,175,55,0.04)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Location dots */}
                {/* India */}
                <circle cx="128" cy="98" r="3" fill="#D4AF37" opacity="0.9" />
                <circle cx="128" cy="98" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
                {/* UK */}
                <circle cx="90" cy="60" r="2.5" fill="#D4AF37" opacity="0.8" />
                <circle cx="90" cy="60" r="5" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.35" />
                {/* USA */}
                <circle cx="58" cy="75" r="2.5" fill="#D4AF37" opacity="0.8" />
                <circle cx="58" cy="75" r="5" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.35" />
                {/* UAE */}
                <circle cx="118" cy="85" r="2" fill="#D4AF37" opacity="0.7" />

                {/* Connection lines */}
                <line x1="128" y1="98" x2="90" y2="60" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="90" y1="60" x2="58" y2="75" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="128" y1="98" x2="118" y2="85" stroke="rgba(212,175,55,0.18)" strokeWidth="0.4" strokeDasharray="2,2" />

                {/* Center glow */}
                <circle cx="100" cy="100" r="8" fill="rgba(212,175,55,0.05)" />
                <Globe2 />
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
                className="p-6 rounded-2xl border border-gold/12 bg-dark-700/40 hover:border-gold/25 hover:bg-dark-700/70 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={16} className="text-gold" />
                  <h3 className="text-white font-bold">{name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span
                      key={c}
                      className="text-xs text-white/55 bg-white/5 px-3 py-1 rounded-full border border-white/8"
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
              className="text-white/35 text-sm px-2"
            >
              * Expanding to new markets — contact us for partnership opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

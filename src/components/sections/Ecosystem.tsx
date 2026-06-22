"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { SOLUTIONS } from "@/utils/constants";

const HUB_NODES = SOLUTIONS.slice(0, 8).map((s, i) => {
  const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
  const r = 42;
  return {
    ...s,
    x: 50 + r * Math.cos(angle),
    y: 50 + r * Math.sin(angle),
  };
});

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="section-pad bg-dark overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Business Ecosystem"
          title="One Platform. Every Vertical."
          subtitle="VINOFYX operates as an integrated business ecosystem where 13 specialized verticals work in harmony to deliver complete enterprise transformation."
          inView={inView}
        />

        {/* ── Mobile card grid (hidden on lg+) ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.1 + i * 0.04 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-gold/10 bg-dark-700/40 hover:border-gold/25 hover:bg-dark-700/70 transition-all duration-200"
            >
              <span className="w-8 h-8 rounded-lg bg-gold/12 flex items-center justify-center text-gold text-[11px] font-black flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm truncate">{s.title}</p>
                <p className="text-white/38 text-xs truncate">{s.description.split(".")[0]}.</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: SVG hub + vertical list (hidden on mobile) ── */}
        <div className="hidden lg:flex items-center gap-16">
          {/* SVG Hub-Spoke */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1/2 max-w-[480px] flex-shrink-0"
          >
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
                {HUB_NODES.map((node, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1="50" y1="50" x2={node.x} y2={node.y}
                    stroke="rgba(212,175,55,0.18)" strokeWidth="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  />
                ))}
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.3" />
                <circle cx="50" cy="50" r="10" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
                <text x="50" y="48.5" textAnchor="middle" fill="#D4AF37" fontSize="2.8" fontWeight="bold" fontFamily="Inter">VINO</text>
                <text x="50" y="52.5" textAnchor="middle" fill="#D4AF37" fontSize="2.8" fontWeight="bold" fontFamily="Inter">FYX</text>
                {HUB_NODES.map((node, i) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  >
                    <circle cx={node.x} cy={node.y} r="7" fill="rgba(10,10,10,0.95)" stroke="rgba(212,175,55,0.35)" strokeWidth="0.5" />
                    <text x={node.x} y={node.y + 0.8} textAnchor="middle" fill="#D4AF37" fontSize="2.4" fontFamily="Inter">
                      {node.title.split(" ")[0]}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Vertical list */}
          <div className="w-1/2 space-y-3">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-gold/8 bg-dark-700/30 hover:border-gold/22 hover:bg-dark-700/60 transition-all duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-xs font-black flex-shrink-0 group-hover:bg-gold/18 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">{s.title}</p>
                  <p className="text-white/40 text-xs">{s.description.split(".")[0]}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

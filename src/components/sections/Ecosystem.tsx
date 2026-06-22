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
    <section id="ecosystem" ref={ref} className="section-pad bg-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          eyebrow="Business Ecosystem"
          title="One Platform. Every Vertical."
          subtitle="VINOFYX operates as an integrated business ecosystem where 13 specialized verticals work in harmony to deliver complete enterprise transformation."
          inView={inView}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* SVG Hub-Spoke */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 max-w-[480px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connecting lines */}
                {HUB_NODES.map((node, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1="50" y1="50"
                    x2={node.x} y2={node.y}
                    stroke="rgba(212,175,55,0.18)"
                    strokeWidth="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  />
                ))}

                {/* Outer ring */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.3" />

                {/* Hub center */}
                <circle cx="50" cy="50" r="10" fill="rgba(212,175,55,0.12)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" />
                <text x="50" y="48.5" textAnchor="middle" fill="#D4AF37" fontSize="2.8" fontWeight="bold" fontFamily="Inter">VINO</text>
                <text x="50" y="52.5" textAnchor="middle" fill="#D4AF37" fontSize="2.8" fontWeight="bold" fontFamily="Inter">FYX</text>

                {/* Outer nodes */}
                {HUB_NODES.map((node, i) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  >
                    <circle
                      cx={node.x} cy={node.y} r="7"
                      fill="rgba(10,10,10,0.95)"
                      stroke="rgba(212,175,55,0.35)"
                      strokeWidth="0.5"
                    />
                    <text
                      x={node.x} y={node.y + 0.8}
                      textAnchor="middle"
                      fill="#D4AF37"
                      fontSize="2.4"
                      fontFamily="Inter"
                    >
                      {node.title.split(" ")[0]}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </motion.div>

          {/* Vertical list */}
          <div className="w-full lg:w-1/2 space-y-4">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
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

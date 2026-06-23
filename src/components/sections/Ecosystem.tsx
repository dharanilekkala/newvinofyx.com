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
      className="section-pad bg-slate-50 overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Ecosystem"
          title="Unlimited Possibilities. One Trusted Partner."
          subtitle="From startups to global enterprises, VINOFYX delivers end-to-end solutions across technology, AI, digital transformation, consulting, branding, education, innovation, and emerging industries."
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
              className="flex items-center gap-3 p-4 rounded-xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 text-[11px] font-black flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-slate-900 font-semibold text-sm truncate">{s.title}</p>
                <p className="text-slate-400 text-xs truncate">{s.description.split(".")[0]}.</p>
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
                    stroke="rgba(0,87,255,0.2)" strokeWidth="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
                  />
                ))}
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(0,87,255,0.1)" strokeWidth="0.3" />
                <circle cx="50" cy="50" r="10" fill="rgba(0,87,255,0.08)" stroke="rgba(0,87,255,0.5)" strokeWidth="0.5" />
                <text x="50" y="48.5" textAnchor="middle" fill="#0057FF" fontSize="2.8" fontWeight="bold" fontFamily="Inter">VINO</text>
                <text x="50" y="52.5" textAnchor="middle" fill="#0057FF" fontSize="2.8" fontWeight="bold" fontFamily="Inter">FYX</text>
                {HUB_NODES.map((node, i) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  >
                    <circle cx={node.x} cy={node.y} r="7" fill="rgba(241,245,249,0.98)" stroke="rgba(0,87,255,0.3)" strokeWidth="0.5" />
                    <text x={node.x} y={node.y + 0.8} textAnchor="middle" fill="#0057FF" fontSize="2.4" fontFamily="Inter">
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
                className="flex items-center gap-4 p-4 rounded-xl border border-blue-50 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-black flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{s.title}</p>
                  <p className="text-slate-400 text-xs">{s.description.split(".")[0]}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

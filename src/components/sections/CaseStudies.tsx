"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { CASE_STUDIES } from "@/utils/constants";

const TAG_COLORS: Record<string, string> = {
  AI: "bg-purple-500/15 text-purple-300",
  Healthcare: "bg-green-500/15 text-green-300",
  Automation: "bg-blue-500/15 text-blue-300",
  "Machine Learning": "bg-pink-500/15 text-pink-300",
  FinTech: "bg-yellow-500/15 text-yellow-300",
  "Real-time": "bg-orange-500/15 text-orange-300",
  EdTech: "bg-teal-500/15 text-teal-300",
  Scale: "bg-indigo-500/15 text-indigo-300",
  "E-Commerce": "bg-rose-500/15 text-rose-300",
  ML: "bg-violet-500/15 text-violet-300",
  Personalization: "bg-cyan-500/15 text-cyan-300",
};

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" ref={ref} className="section-pad bg-dark scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Client Success Stories"
          title="Real Results. Real Impact."
          subtitle="From healthcare to fintech, our work speaks through measurable outcomes that transform how our clients operate and compete."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="group flex flex-col p-7 rounded-2xl border border-gold/10 bg-dark-700/50 hover:border-gold/28 hover:bg-dark-700 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-gold/60 text-xs font-semibold tracking-widest uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 leading-tight">{cs.title}</h3>
                  <p className="text-white/40 text-xs mt-0.5">{cs.client}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/18 transition-colors">
                  <TrendingUp size={18} className="text-gold" />
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">{cs.description}</p>

              {/* Results */}
              <div className="space-y-2 mb-5">
                {cs.results.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-white/70 text-sm font-medium">{r}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${TAG_COLORS[tag] ?? "bg-gold/10 text-gold/80"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

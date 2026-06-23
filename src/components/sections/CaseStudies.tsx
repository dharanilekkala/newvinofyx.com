"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { CASE_STUDIES } from "@/utils/constants";

const TAG_COLORS: Record<string, string> = {
  AI:               "bg-purple-50 text-purple-700",
  Healthcare:       "bg-green-50 text-green-700",
  Automation:       "bg-blue-50 text-blue-700",
  "Machine Learning":"bg-pink-50 text-pink-700",
  FinTech:          "bg-yellow-50 text-yellow-700",
  "Real-time":      "bg-orange-50 text-orange-700",
  EdTech:           "bg-teal-50 text-teal-700",
  Scale:            "bg-indigo-50 text-indigo-700",
  "E-Commerce":     "bg-rose-50 text-rose-700",
  ML:               "bg-violet-50 text-violet-700",
  Personalization:  "bg-cyan-50 text-cyan-700",
};

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" ref={ref} className="section-pad bg-white scroll-mt-[80px] md:scroll-mt-[100px]">
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
              className="group flex flex-col p-7 rounded-2xl border border-blue-100 bg-white shadow-md hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="text-slate-900 font-bold text-lg mt-1 leading-tight">{cs.title}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{cs.client}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <TrendingUp size={18} className="text-blue-600" />
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{cs.description}</p>

              {/* Results */}
              <div className="space-y-2 mb-5">
                {cs.results.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{r}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${TAG_COLORS[tag] ?? "bg-blue-50 text-blue-600"}`}
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

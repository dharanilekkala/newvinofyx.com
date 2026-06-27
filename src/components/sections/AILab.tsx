"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, MessageSquare, Eye, BarChart3, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { AI_CAPABILITIES } from "@/utils/constants";

const CAP_ICONS = [Bot, MessageSquare, Eye, BarChart3];

export default function AILab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-lab" ref={ref} className="section-pad bg-slate-50 overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="VINOFYX AI Lab"
          title="Where Artificial Intelligence Meets Enterprise Reality"
          subtitle="Our dedicated AI research and engineering lab designs, builds, and deploys cutting-edge AI systems that solve real business problems at scale."
          inView={inView}
        />

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {AI_CAPABILITIES.map((cap, i) => {
            const Icon = CAP_ICONS[i] ?? Zap;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                className="accent-card group p-7 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg leading-tight mb-1">{cap.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100"
                    >
                      <CheckCircle2 size={10} />
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-center shadow-[0_20px_60px_rgba(0,87,255,0.3)] relative overflow-hidden"
        >
          {/* Background shimmer orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" aria-hidden />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
              Ready to Deploy AI in Your Enterprise?
            </h3>
            <p className="text-blue-100 text-sm md:text-base mb-7 max-w-lg mx-auto leading-relaxed">
              Our AI Lab team works with you from proof-of-concept to full-scale production deployment — with measurable ROI at every step.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Your AI Journey <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

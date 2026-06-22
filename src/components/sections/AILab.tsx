"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, MessageSquare, Eye, BarChart3, CheckCircle2, Zap } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { AI_CAPABILITIES } from "@/utils/constants";

const CAP_ICONS = [Bot, MessageSquare, Eye, BarChart3];

const LAB_STATS = [
  { value: "100+", label: "AI Models Deployed" },
  { value: "10M+", label: "Daily Inferences" },
  { value: "< 100ms", label: "Avg Response Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function AILab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai-lab" ref={ref} className="section-pad bg-dark-800 overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="VINOFYX AI Lab"
          title="Where Artificial Intelligence Meets Enterprise Reality"
          subtitle="Our dedicated AI research and engineering lab designs, builds, and deploys cutting-edge AI systems that solve real business problems at scale."
          inView={inView}
        />

        {/* Lab Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl border border-gold/15 bg-dark-700/40"
        >
          {LAB_STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gold-text mb-1">{value}</div>
              <div className="text-white/45 text-xs tracking-wide">{label}</div>
            </div>
          ))}
        </motion.div>

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
                className="group p-7 rounded-2xl border border-gold/10 bg-dark-700/50 hover:border-gold/28 hover:bg-dark-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{cap.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cap.features.map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-gold/80 bg-gold/8 px-3 py-1 rounded-full"
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

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 p-8 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 via-gold/8 to-gold/5 text-center"
        >
          <Zap className="text-gold mx-auto mb-3" size={28} />
          <h3 className="text-white font-bold text-xl md:text-2xl mb-3">
            Ready to Deploy AI in Your Enterprise?
          </h3>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">
            Our AI Lab team works with you from proof-of-concept to full-scale production deployment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-black font-bold text-sm hover:bg-gold-light transition-all shadow-gold"
          >
            Start Your AI Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

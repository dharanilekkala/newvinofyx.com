"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LETTERS = [
  { letter: "V", title: "Visionary",  desc: "Building forward-thinking solutions for tomorrow's businesses." },
  { letter: "I", title: "Innovation", desc: "Creating cutting-edge digital products powered by creativity and technology." },
  { letter: "N", title: "Network",    desc: "Connecting businesses, technology, and people for sustainable growth." },
  { letter: "O", title: "Optimized",  desc: "Delivering efficient, scalable, and performance-driven solutions." },
  { letter: "F", title: "Future",     desc: "Preparing businesses for the next generation of digital transformation." },
  { letter: "Y", title: "Yield",      desc: "Driving measurable results, business value, and long-term success." },
  { letter: "X", title: "Excellence", desc: "Maintaining the highest standards of quality, innovation, and customer satisfaction." },
];

export default function BrandMeaning() {
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="vinofyx-meaning"
      ref={ref}
      className="section-pad bg-white overflow-hidden relative scroll-mt-[80px] md:scroll-mt-[100px]"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-blue-50/60 rounded-full blur-[170px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 -left-40 w-[420px] h-[420px] bg-sky-50/55 rounded-full blur-[150px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 xl:gap-20 items-start">

          {/* ── Left: Brand identity content ── */}
          <div className="w-full lg:w-[44%] lg:sticky lg:top-28">

            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue text-blue-600 text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
            >
              Our Brand Identity
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              What Does{" "}
              <span className="gold-shimmer">VINOFYX</span>{" "}
              Stand For?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-blue rounded-2xl px-5 py-4 mb-6 border border-blue-100"
            >
              <p className="text-[11px] text-blue-400 font-semibold tracking-[0.2em] uppercase mb-1.5">Full Form</p>
              <p className="text-blue-700 font-semibold text-sm sm:text-base leading-relaxed">
                Visionary Innovation Network for Optimized Future, Yield &amp; Excellence
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8"
            >
              VINOFYX represents our commitment to empowering businesses with visionary thinking,
              innovative technologies, strategic networking, optimized digital solutions, measurable
              business growth, and operational excellence. Every letter reflects our mission to help
              organizations transform, scale, and succeed in the digital era.
            </motion.p>

            {/* Letter pill tags */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {LETTERS.map(({ letter, title }) => (
                <span
                  key={letter}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-xs font-medium"
                >
                  <span className="text-blue-600 font-black text-sm leading-none">{letter}</span>
                  <span className="text-slate-500">{title}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Letter breakdown cards ── */}
          <div ref={cardsRef} className="w-full lg:w-[56%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LETTERS.map(({ letter, title, desc }, i) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: 28 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.07 * i }}
                className={`group accent-card p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-[0_8px_32px_rgba(0,87,255,0.13)] hover:-translate-y-1.5 transition-all duration-300${
                  i === 6 ? " sm:col-span-2" : ""
                }`}
              >
                <div className={`flex items-center gap-4 mb-3${i === 6 ? " sm:gap-6" : ""}`}>
                  {/* Letter orb */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_4px_24px_rgba(0,87,255,0.28)] flex-shrink-0 group-hover:shadow-[0_4px_36px_rgba(0,87,255,0.45)] group-hover:scale-105 transition-all duration-300">
                    <span className="text-white font-black text-2xl leading-none select-none">{letter}</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-400 font-semibold tracking-[0.22em] uppercase mb-0.5">
                      stands for
                    </p>
                    <h3 className="text-slate-900 font-bold text-lg leading-tight">{title}</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

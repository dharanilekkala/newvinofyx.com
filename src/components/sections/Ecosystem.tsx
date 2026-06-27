"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Code2, Database, TrendingUp, Briefcase, Building2,
  Smartphone, Cloud, ShieldCheck, ShoppingCart, Settings2,
  GraduationCap, Landmark,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { SOLUTIONS } from "@/utils/constants";

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Brain, Code2, Database, TrendingUp, Briefcase, Building2,
  Smartphone, Cloud, ShieldCheck, ShoppingCart, Settings2,
  GraduationCap, Landmark,
};

const HUB_COUNT = 8;
const SHORT = ["AI", "Software", "Data", "Digital", "Business", "Institutional", "Mobile", "Cloud"];
const RADIUS = 37;

const STATIC_NODES = Array.from({ length: HUB_COUNT }, (_, i) => {
  const angle = (i / HUB_COUNT) * 2 * Math.PI - Math.PI / 2;
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle) };
});

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGGElement>(null);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);
  const nodeCircleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const particleRefs = useRef<(SVGLineElement | null)[]>([]);
  const rotRef = useRef(0);
  const rafRef = useRef<number>(0);
  const activeRef = useRef<number | null>(null);

  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [spring, setSpring] = useState({ x: 0, y: 0 });

  // Rotation + DOM mutation — zero React re-renders
  useEffect(() => {
    const tick = () => {
      rotRef.current = (rotRef.current + 0.09) % 360;
      const rad = -(rotRef.current * Math.PI) / 180;
      if (ringRef.current) {
        ringRef.current.setAttribute("transform", `rotate(${rotRef.current} 50 50)`);
      }
      // Counter-rotate labels to keep them upright (around each node's own center)
      textRefs.current.forEach((el, i) => {
        if (el) el.setAttribute("transform", `rotate(${-rotRef.current} ${STATIC_NODES[i].x} ${STATIC_NODES[i].y})`);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Keep activeRef in sync for DOM-only hover effects
  useEffect(() => {
    activeRef.current = activeIdx;
    // Update line colors immediately via DOM
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      el.setAttribute("stroke", activeIdx === i ? "rgba(0,87,255,0.55)" : "rgba(0,87,255,0.12)");
      el.setAttribute("stroke-width", activeIdx === i ? "0.7" : "0.3");
    });
    particleRefs.current.forEach((el, i) => {
      if (!el) return;
      el.setAttribute("stroke", activeIdx === i ? "rgba(0,87,255,0.95)" : "rgba(0,87,255,0.5)");
      el.setAttribute("stroke-width", activeIdx === i ? "0.7" : "0.45");
    });
    nodeCircleRefs.current.forEach((el, i) => {
      if (!el) return;
      if (activeIdx === i) {
        el.setAttribute("fill", "rgba(234,244,255,0.98)");
        el.setAttribute("stroke", "#0057FF");
        el.setAttribute("stroke-width", "0.9");
      } else {
        el.setAttribute("fill", "rgba(255,255,255,0.96)");
        el.setAttribute("stroke", "rgba(0,87,255,0.25)");
        el.setAttribute("stroke-width", "0.45");
      }
    });
    textRefs.current.forEach((el, i) => {
      if (!el) return;
      el.setAttribute("fill", activeIdx === i ? "#0057FF" : "#60A5FA");
      el.setAttribute("font-weight", activeIdx === i ? "800" : "600");
    });
  }, [activeIdx]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpring({
      x: ((e.clientX - r.left) / r.width - 0.5) * 18,
      y: ((e.clientY - r.top) / r.height - 0.5) * 14,
    });
  }, []);

  const setActive = useCallback((i: number | null) => setActiveIdx(i), []);

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="section-pad bg-white overflow-hidden scroll-mt-[80px] md:scroll-mt-[100px] relative"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[160px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] bg-sky-50/60 rounded-full blur-[140px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Our Ecosystem"
          title="Unlimited Possibilities. One Trusted Partner."
          subtitle="From startups to global enterprises, VINOFYX delivers end-to-end solutions across AI, technology, digital transformation, and emerging industries."
          inView={inView}
        />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Ecosystem Visualization ── */}
          <motion.div
            className="w-full lg:w-[46%] max-w-[480px] mx-auto lg:mx-0 flex-shrink-0"
            onMouseMove={onMouseMove}
            onMouseLeave={() => setSpring({ x: 0, y: 0 })}
            animate={{ x: spring.x * 0.45, y: spring.y * 0.45 }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
          >
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow behind SVG */}
              <div className="absolute inset-[15%] rounded-full bg-blue-400/10 blur-[40px]" aria-hidden />

              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" aria-hidden focusable="false">
                <defs>
                  <radialGradient id="ecoCenterGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#0057FF" />
                  </radialGradient>
                  <radialGradient id="ecoHaloGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0057FF" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#0057FF" stopOpacity="0" />
                  </radialGradient>
                  <filter id="ecoCenterGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="ecoNodeGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <style>{`
                    @keyframes ecoFlow { from { stroke-dashoffset: 8; } to { stroke-dashoffset: 0; } }
                    @keyframes ecoPulse { 0%,100% { opacity: 0; r: 13; } 50% { opacity: 0.22; r: 10.5; } }
                    @keyframes ecoPulse2 { 0%,100% { opacity: 0; r: 16; } 50% { opacity: 0.10; r: 13; } }
                    .eco-particle { animation: ecoFlow linear infinite; }
                    .eco-pulse1 { animation: ecoPulse 2.8s ease-in-out infinite; }
                    .eco-pulse2 { animation: ecoPulse2 2.8s ease-in-out 0.7s infinite; }
                  `}</style>
                </defs>

                {/* Static outer decorative rings */}
                <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(0,87,255,0.04)" strokeWidth="0.25" />
                <circle cx="50" cy="50" r="43" fill="none" stroke="rgba(0,87,255,0.05)" strokeWidth="0.2" strokeDasharray="0.8,2" />

                {/* Rotating group — direct DOM mutation */}
                <g ref={ringRef}>
                  {/* Orbit ring */}
                  <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(0,87,255,0.09)" strokeWidth="0.25" strokeDasharray="1,2" />

                  {/* Connection lines */}
                  {STATIC_NODES.map((n, i) => (
                    <line
                      key={`line-${i}`}
                      ref={el => { lineRefs.current[i] = el; }}
                      x1="50" y1="50" x2={n.x} y2={n.y}
                      stroke="rgba(0,87,255,0.12)"
                      strokeWidth="0.3"
                    />
                  ))}

                  {/* Flowing particle lines */}
                  {STATIC_NODES.map((n, i) => (
                    <line
                      key={`particle-${i}`}
                      ref={el => { particleRefs.current[i] = el; }}
                      x1="50" y1="50" x2={n.x} y2={n.y}
                      stroke="rgba(0,87,255,0.5)"
                      strokeWidth="0.45"
                      strokeDasharray="1 3.5"
                      strokeLinecap="round"
                      className="eco-particle"
                      style={{
                        animationDuration: `${1.4 + i * 0.18}s`,
                        animationDelay: `${i * 0.22}s`,
                      }}
                    />
                  ))}

                  {/* Outer nodes */}
                  {STATIC_NODES.map((n, i) => (
                    <g
                      key={`node-${i}`}
                      style={{ cursor: "pointer" }}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                    >
                      {/* Hover glow halo */}
                      <circle cx={n.x} cy={n.y} r="10" fill="rgba(0,87,255,0)" className="transition-all duration-200" />
                      {/* Node body */}
                      <circle
                        ref={el => { nodeCircleRefs.current[i] = el; }}
                        cx={n.x} cy={n.y}
                        r="6.8"
                        fill="rgba(255,255,255,0.96)"
                        stroke="rgba(0,87,255,0.25)"
                        strokeWidth="0.45"
                      />
                      {/* Label — counter-rotated via DOM */}
                      <text
                        ref={el => { textRefs.current[i] = el; }}
                        x={n.x} y={n.y + 1}
                        textAnchor="middle"
                        fill="#60A5FA"
                        fontSize="2.2"
                        fontWeight="600"
                        fontFamily="Inter, sans-serif"
                        className="select-none pointer-events-none"
                      >
                        {SHORT[i]}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Center pulse rings (non-rotating) */}
                <circle cx="50" cy="50" r="10.5" fill="none" stroke="rgba(0,87,255,0.25)" strokeWidth="0.4" className="eco-pulse1" />
                <circle cx="50" cy="50" r="13" fill="none" stroke="rgba(0,87,255,0.12)" strokeWidth="0.3" className="eco-pulse2" />

                {/* Center glow halo */}
                <circle cx="50" cy="50" r="12" fill="url(#ecoHaloGrad)" />

                {/* Center outer ring */}
                <circle cx="50" cy="50" r="9.5"
                  fill="rgba(255,255,255,0.15)"
                  stroke="rgba(96,165,250,0.5)"
                  strokeWidth="0.4"
                />

                {/* Center orb */}
                <circle cx="50" cy="50" r="8" fill="url(#ecoCenterGrad)" filter="url(#ecoCenterGlow)" />

                {/* Center text */}
                <text x="50" y="51.2" textAnchor="middle" fill="white" fontSize="2.4" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.15">VINOFYX</text>
              </svg>
            </motion.div>
          </motion.div>

          {/* ── Service Cards ── */}
          <div className="w-full lg:w-[54%]">
            <div
              className="space-y-2 max-h-[520px] overflow-y-auto pr-1"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,87,255,0.2) transparent" }}
            >
              {SOLUTIONS.map((s, i) => {
                const Icon = ICON_MAP[s.icon] ?? Brain;
                const isHub = i < HUB_COUNT;
                const isActive = activeIdx === i;

                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: 28 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.38, delay: 0.06 + i * 0.045 }}
                    onMouseEnter={() => isHub ? setActive(i) : undefined}
                    onMouseLeave={() => setActive(null)}
                    className={`group flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border transition-all duration-250 cursor-default select-none ${
                      isActive
                        ? "border-blue-400 bg-blue-50/90 shadow-[0_4px_28px_rgba(0,87,255,0.13)] -translate-y-px"
                        : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-[0_4px_20px_rgba(0,87,255,0.08)] hover:-translate-y-px"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 shadow-[0_0_14px_rgba(0,87,255,0.35)]"
                          : "bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-white" : "text-blue-600"} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-bold text-sm leading-tight transition-colors duration-200 ${isActive ? "text-blue-700" : "text-slate-900"}`}>
                        {s.title}
                      </p>
                      <p className="text-slate-400 text-[11px] leading-snug mt-0.5 line-clamp-1">
                        {s.description.split(".")[0]}.
                      </p>
                    </div>

                    {/* Active indicator */}
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                        isActive ? "bg-blue-600 shadow-[0_0_6px_rgba(0,87,255,0.6)]" : "bg-transparent"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Footer tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-slate-400 text-xs mt-5 text-right"
            >
              Don&apos;t see what you need?{" "}
              <a href="#contact" className="text-blue-600 font-semibold hover:underline">
                Let&apos;s talk →
              </a>
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}

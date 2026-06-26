"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { HERO_STATS } from "@/utils/constants";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

function scrollSection(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    type P = { x: number; y: number; vx: number; vy: number; size: number; alpha: number };
    let W = 0, H = 0, particles: P[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const count = Math.min(80, Math.floor((W * H) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.22 + 0.05,
      }));
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,87,255,${p.alpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,87,255,${0.065 * (1 - d / 130)})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      aria-label="VINOFYX — Home"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-[15%] w-[640px] h-[640px] bg-blue-100/45 rounded-full blur-[200px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 right-[10%] w-[520px] h-[520px] bg-sky-100/55 rounded-full blur-[160px] pointer-events-none" aria-hidden />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-50/60 rounded-full blur-[130px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-indigo-50/40 rounded-full blur-[110px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center pt-[72px] md:pt-[90px]">
        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-7 md:mb-10 px-5 py-2.5 rounded-full glass-blue text-blue-600 text-xs sm:text-sm font-semibold tracking-wide"
        >
          <Sparkles size={14} className="text-blue-500 flex-shrink-0" aria-hidden />
          Pioneering AI-Powered Enterprise Transformation
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse flex-shrink-0" aria-hidden />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-[clamp(2.2rem,6.5vw,5.5rem)] font-bold leading-[1.06] tracking-tight mb-5 md:mb-8"
        >
          <span className="block text-slate-900">The Future of Business</span>
          <span className="block text-slate-900">
            Runs on <span className="gold-shimmer">Intelligence.</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-12"
        >
          Empowering organizations worldwide through AI, software, data engineering,
          digital transformation, consulting, and innovation — trusted by leaders
          who build the future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-16"
        >
          <div className="cta-wrapper w-full sm:w-auto">
            {[
              { top: "8%",  left: "14%",  animationDelay: "0s",    animationDuration: "3.2s" },
              { top: "5%",  left: "46%",  animationDelay: "0.65s", animationDuration: "2.9s" },
              { top: "8%",  right: "14%", animationDelay: "1.3s",  animationDuration: "3.5s" },
              { bottom: "8%", left: "28%", animationDelay: "0.4s", animationDuration: "3.0s" },
              { bottom: "8%", right: "20%",animationDelay: "1.85s",animationDuration: "2.7s" },
              { top: "48%", left: "3%",   animationDelay: "1.0s",  animationDuration: "3.3s" },
            ].map((style, i) => (
              <span key={i} className="cta-particle" style={style} aria-hidden />
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollSection("contact"); }}
              className="cta-premium-btn w-full sm:w-auto"
            >
              <span className="cta-shine" aria-hidden />
              Schedule a Consultation <ArrowRight size={18} aria-hidden />
            </a>
          </div>
          <a
            href="#solutions"
            onClick={(e) => { e.preventDefault(); scrollSection("solutions"); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-blue-200 text-blue-600 font-semibold text-sm sm:text-base tracking-wide hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Glassmorphic stats bar */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-blue rounded-2xl px-4 sm:px-8 py-5 flex items-center justify-around gap-2">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center flex-1 px-2 ${i < HERO_STATS.length - 1 ? "sm:border-r border-blue-200/60" : ""}`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black gold-text mb-0.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 tracking-[0.18em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Geographic trust strip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center text-slate-300 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase mt-5 select-none"
          >
            Asia Pacific &nbsp;·&nbsp; Europe &nbsp;·&nbsp; Americas
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden
      >
        <ChevronDown className="text-blue-300 animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}

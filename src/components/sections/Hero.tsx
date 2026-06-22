"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
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
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const count = Math.min(80, Math.floor((W * H) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.45 + 0.08,
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
        ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212,175,55,${0.055 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
      aria-label="VINOFYX — Home"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />

      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-gold/6 rounded-full blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center pt-[72px] md:pt-[90px]">
        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs sm:text-sm font-medium tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden />
          Pioneering AI-Powered Enterprise Transformation
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-[clamp(2rem,6vw,5.25rem)] font-bold leading-[1.06] tracking-tight mb-5 md:mb-8"
        >
          <span className="block text-white">The Future of Business</span>
          <span className="block text-white">
            Runs on <span className="gold-shimmer">Intelligence.</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/55 leading-relaxed mb-8 md:mb-12"
        >
          VINOFYX PRIVATE LIMITED is a global technology powerhouse delivering AI,
          software engineering, data innovation, and enterprise transformation
          across 13 verticals — trusted by leaders who build the future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-20"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollSection("contact"); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-black font-bold text-sm sm:text-base tracking-wide hover:bg-[#F5E6A8] transition-all duration-200 shadow-[0_0_30px_rgba(212,175,55,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Schedule a Consultation <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href="#solutions"
            onClick={(e) => { e.preventDefault(); scrollSection("solutions"); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gold/35 text-gold font-semibold text-sm sm:text-base tracking-wide hover:bg-gold/6 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp} initial="initial" animate="animate"
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-xl mx-auto"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black gold-text mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/38 tracking-[0.18em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden
      >
        <ChevronDown className="text-gold/40 animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}

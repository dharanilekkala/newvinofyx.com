"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/utils/constants";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.45 + 0.08,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
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
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-[90px]"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gold/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Pioneering AI-Powered Enterprise Transformation
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-bold leading-[1.04] tracking-tight mb-8"
        >
          <span className="block text-white">The Future of Business</span>
          <span className="block text-white">
            Runs on{" "}
            <span className="gold-shimmer">Intelligence.</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/55 leading-relaxed mb-12"
        >
          VINOFYX PRIVATE LIMITED is a global technology powerhouse delivering AI,
          software engineering, data innovation, digital transformation and enterprise
          business solutions across 13 verticals — trusted by leaders who build the future.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-black font-bold text-base tracking-wide hover:bg-gold-light transition-all duration-200 shadow-gold hover:shadow-gold-md"
          >
            Schedule a Consultation <ArrowRight size={18} />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/35 text-gold font-semibold text-base tracking-wide hover:bg-gold/6 transition-all duration-200"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black gold-text mb-1">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/38 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <ChevronDown className="text-gold/40 animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}

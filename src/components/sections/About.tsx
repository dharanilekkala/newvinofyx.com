"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Eye, Gem, Globe2, ArrowRight,
  TrendingUp, ShoppingCart, Smartphone, Code2,
  Layers, Brain, BarChart3, Cloud, Briefcase,
} from "lucide-react";

/* ─────────────── data ─────────────── */
const PILLARS = [
  { Icon: Brain,      title: "Artificial Intelligence", desc: "Smart AI systems that automate, predict, and transform business operations at scale.", g: "from-blue-500 to-cyan-400" },
  { Icon: Code2,      title: "Software Engineering",    desc: "Scalable, secure enterprise applications built with precision and modern architecture.", g: "from-violet-500 to-purple-400" },
  { Icon: TrendingUp, title: "Digital Growth",          desc: "Data-driven marketing that converts clicks into loyal customers across every channel.", g: "from-indigo-500 to-blue-400" },
  { Icon: Globe2,     title: "Global Solutions",        desc: "Cross-border digital infrastructure serving businesses across 3 continents.", g: "from-cyan-500 to-sky-400" },
];

const MVV = [
  {
    Icon: Target, num: "01", label: "Mission",
    title: "Democratize Enterprise Technology",
    desc: "To democratize enterprise-grade technology, enabling every organization — from startups to governments — to harness the full power of AI and digital transformation.",
  },
  {
    Icon: Eye, num: "02", label: "Vision",
    title: "The World's Most Trusted Tech Partner",
    desc: "To be the world's most trusted technology partner, recognized by Fortune 500 companies, governments, and institutions for innovation, integrity, and measurable impact.",
  },
  {
    Icon: Gem, num: "03", label: "Values",
    title: "Excellence in Every Pixel",
    desc: "Excellence, integrity, innovation, and accountability guide every decision we make and every solution we deliver to our clients worldwide.",
  },
];

const BENTO = [
  { Icon: Brain,        name: "Artificial Intelligence", desc: "ML, NLP, Automation & AI Strategy",  wide: true,  tall: true  },
  { Icon: Code2,        name: "Software Development",    desc: "Web, API & Enterprise Apps",          wide: false, tall: false },
  { Icon: Smartphone,   name: "Mobile Apps",             desc: "iOS & Android Development",           wide: false, tall: false },
  { Icon: TrendingUp,   name: "Digital Marketing",       desc: "SEO, PPC, Social & Content",          wide: true,  tall: false },
  { Icon: ShoppingCart, name: "E-Commerce",              desc: "End-to-End Online Stores",            wide: false, tall: false },
  { Icon: Layers,       name: "UI/UX Design",            desc: "Intuitive Digital Experiences",       wide: false, tall: false },
  { Icon: BarChart3,    name: "Data Analytics",          desc: "Business Intelligence & Insights",    wide: true,  tall: false },
  { Icon: Cloud,        name: "Cloud Solutions",         desc: "Scalable Cloud Infrastructure",       wide: false, tall: false },
  { Icon: Briefcase,    name: "Business Consulting",     desc: "Strategy & Digital Transformation",   wide: false, tall: false },
];

const JOURNEY = [
  { year: "2025",  label: "Founded",    desc: "Born with a vision to democratize AI for enterprises. Assembled a world-class team of engineers, designers, and strategists." },
  { year: "2025",  label: "Growth",     desc: "Rapid expansion phase — first enterprise clients onboarded. Delivered projects across software, AI, and digital marketing." },
  { year: "2026",  label: "Innovation", desc: "Launched our proprietary AI Lab, deploying 100+ automation workflows across 3 continents." },
  { year: "2026+", label: "Global",     desc: "Scaling operations across Asia Pacific, Europe and the Americas with 5+ enterprise clients worldwide." },
];

const HERO_CARDS = [
  { label: "Enterprise Clients", value: "5+",  pos: "top-10 left-2"    },
  { label: "Continents",         value: "3",   pos: "bottom-16 left-6" },
  { label: "Services",           value: "29+", pos: "top-20 right-2"   },
  { label: "Satisfaction",       value: "98%", pos: "bottom-8 right-6" },
];

/* dark section grid helper */
const DarkGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.028) 1px,transparent 1px)",
      backgroundSize: "64px 64px",
    }}
    aria-hidden
  />
);

/* ─────────────── component ─────────────── */
export default function About() {
  const storyRef   = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const mvvRef     = useRef<HTMLDivElement>(null);
  const bentoRef   = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  const storyInView   = useInView(storyRef,   { once: true, margin: "-100px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px"  });
  const mvvInView     = useInView(mvvRef,     { once: true, margin: "-80px"  });
  const bentoInView   = useInView(bentoRef,   { once: true, margin: "-80px"  });
  const journeyInView = useInView(journeyRef, { once: true, margin: "-80px"  });
  const ctaInView     = useInView(ctaRef,     { once: true, margin: "-80px"  });

  return (
    <div id="about" className="scroll-mt-[80px] md:scroll-mt-[100px]">

      {/* ══════════════════════════════════
          §1  HERO  — dark split layout
      ══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg,#020617 0%,#0F172A 60%,#0D1B3E 100%)" }}>
        <DarkGrid />

        {/* blue radial glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%,rgba(59,130,246,0.18) 0%,rgba(59,130,246,0.04) 55%,transparent 75%)" }} aria-hidden />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.09) 0%,transparent 70%)" }} aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* LEFT */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="about-badge-border inline-flex items-center px-4 py-2 rounded-full bg-white/5 text-blue-300 text-[11px] font-bold tracking-[0.3em] uppercase mb-8"
              >
                About Vinofyx Private Limited
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className="font-serif font-extrabold text-white leading-[1.04] mb-7"
                style={{ fontSize: "clamp(38px, 5.2vw, 70px)" }}
              >
                Innovating Businesses Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400">
                  Technology, Creativity
                </span>{" "}
                &amp; Digital Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
                className="text-slate-400 text-base sm:text-lg leading-[1.85] mb-10 max-w-[540px]"
              >
                VINOFYX PRIVATE LIMITED is a technology-driven company dedicated to empowering
                businesses with innovative digital solutions across AI, software, marketing, and
                creative services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.65)] hover:scale-105"
                >
                  Schedule Consultation <ArrowRight size={16} />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-semibold text-sm transition-all duration-200 hover:bg-white/5"
                >
                  Our Solutions <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            {/* RIGHT — orb + floating cards */}
            <div className="relative hidden lg:flex items-center justify-center h-[520px]">

              {/* Pulsing core orb */}
              <motion.div
                animate={{ scale: [1, 1.045, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-60 h-60 rounded-full"
                style={{
                  background: "radial-gradient(circle at 34% 30%,#93C5FD 0%,#2563EB 32%,#1E3A8A 62%,#0F172A 100%)",
                  boxShadow: "0 0 80px rgba(59,130,246,0.50),0 0 160px rgba(59,130,246,0.22),inset 0 0 50px rgba(255,255,255,0.06)",
                }}
              >
                <div className="absolute top-[18%] left-[22%] w-[34%] h-[22%] bg-white/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain size={52} className="text-white/70" />
                </div>
              </motion.div>

              {/* Ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 rounded-full"
                style={{ border: "1px solid rgba(59,130,246,0.18)" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" style={{ boxShadow: "0 0 12px rgba(59,130,246,0.9)" }} />
              </motion.div>

              {/* Ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{ border: "1px dashed rgba(139,92,246,0.14)" }}
              >
                <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-violet-400" style={{ boxShadow: "0 0 8px rgba(139,92,246,0.8)" }} />
              </motion.div>

              {/* Floating stat cards */}
              {HERO_CARDS.map(({ label, value, pos }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.2 }}
                  className={`absolute ${pos} rounded-2xl px-5 py-4`}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.35),inset 0 0 20px rgba(255,255,255,0.02)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <p className="text-blue-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{label}</p>
                  <p className="text-white font-black text-3xl leading-none">{value}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §2  COMPANY STORY  — white, 2-col
      ══════════════════════════════════ */}
      <section ref={storyRef} className="relative bg-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)" }} aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Left: text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-blue-500 text-[11px] font-black tracking-[0.32em] uppercase mb-5"
              >
                Who We Are
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif font-bold text-slate-900 leading-tight mb-8"
                style={{ fontSize: "clamp(30px, 3.8vw, 52px)" }}
              >
                Building Tomorrow's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Digital Infrastructure
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="space-y-5 text-slate-500 text-base leading-[1.9]"
              >
                <p>
                  VINOFYX PRIVATE LIMITED was built on one belief: every organization deserves
                  access to enterprise-grade technology. We bridge the gap between cutting-edge
                  innovation and real-world business outcomes.
                </p>
                <p>
                  Our mission is to help startups, enterprises, educational institutions, and
                  organizations accelerate their growth through cutting-edge technology, strategic
                  marketing, and creative digital experiences.
                </p>
                <p>
                  We deliver scalable, secure, and future-ready solutions to clients across India
                  and international markets while maintaining the highest standards of quality,
                  innovation, and customer satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-10 flex gap-10"
              >
                {[
                  { value: "5+", label: "Enterprise Clients" },
                  { value: "3",  label: "Continents"         },
                  { value: "98%",label: "Satisfaction"       },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="gold-text font-black text-4xl leading-none mb-1">{value}</div>
                    <div className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: dark glass VINOFYX card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="lg:pt-6"
            >
              <div
                className="relative rounded-[28px] p-10 sm:p-14 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#0F172A 0%,#0D1B3E 55%,#0F172A 100%)",
                  border: "1px solid rgba(59,130,246,0.20)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.35),0 0 60px rgba(59,130,246,0.08)",
                }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(59,130,246,0.15) 0%,transparent 70%)" }} aria-hidden />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)" }} aria-hidden />

                <div className="relative z-10">
                  <p className="text-blue-400 text-[10px] font-black tracking-[0.35em] uppercase mb-4">Brand Identity</p>

                  <div className="gold-shimmer font-black mb-4" style={{ fontSize: "clamp(44px, 7vw, 76px)", lineHeight: 1 }}>
                    VINOFYX
                  </div>

                  <div className="w-12 h-0.5 mb-6 rounded-full" style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6)" }} />

                  <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8">
                    Visionary Innovation Network for Optimized Future, Yield &amp; Excellence
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { l: "V", w: "Visionary"  },
                      { l: "I", w: "Innovation" },
                      { l: "N", w: "Network"    },
                      { l: "O", w: "Optimized"  },
                      { l: "F", w: "Future"     },
                      { l: "Y", w: "Yield"      },
                    ].map(({ l, w }) => (
                      <div key={l} className="flex items-center gap-2.5">
                        <span className="text-blue-400 font-black text-base w-4 flex-shrink-0">{l}</span>
                        <span className="text-slate-400 text-sm">{w}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 mt-3">
                    <span className="text-blue-400 font-black text-base w-4">X</span>
                    <span className="text-slate-400 text-sm">Excellence</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §3  BRAND IDENTITY BANNER  — dark
      ══════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg,#020617 0%,#0D1B3E 50%,#020617 100%)" }}>
        <DarkGrid />

        {/* Animated gradient sweep */}
        <motion.div
          animate={{ x: ["-100%", "250%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-y-0 w-60 pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.07),transparent)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="flex-shrink-0">
              <p className="text-blue-400 text-[10px] font-black tracking-[0.35em] uppercase mb-3">The Meaning Behind Our Name</p>
              <h2 className="font-serif font-bold text-white leading-tight" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
                The Meaning Behind{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  VINOFYX
                </span>
              </h2>
            </div>

            <div
              className="lg:max-w-[520px] rounded-2xl px-6 py-6"
              style={{
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.18)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-blue-200 font-semibold text-lg leading-relaxed mb-3">
                Visionary Innovation Network for Optimized Future, Yield &amp; Excellence
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                VINOFYX represents our commitment to visionary thinking, continuous innovation,
                strategic networking, optimized digital transformation, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §4  WHY VINOFYX  — 4 pillars
      ══════════════════════════════════ */}
      <section ref={pillarsRef} className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#F8FAFB" }}>
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-500 text-[11px] font-black tracking-[0.32em] uppercase mb-4">Why Vinofyx</p>
            <h2 className="font-serif font-bold text-slate-900 leading-tight mx-auto max-w-[700px]" style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}>
              Four Pillars of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Our Excellence</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map(({ Icon, title, desc, g }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative rounded-3xl p-8 bg-white border border-slate-200/80 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(0,87,255,0.09)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${g} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 leading-tight">{title}</h3>
                <p className="text-slate-500 text-sm leading-[1.8]">{desc}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${g} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §5  MISSION VISION VALUES  — vertical timeline
      ══════════════════════════════════ */}
      <section ref={mvvRef} className="relative bg-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[360px_1fr] gap-16 xl:gap-28 items-start">

            {/* Sticky heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mvvInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-blue-500 text-[11px] font-black tracking-[0.32em] uppercase mb-5">What Drives Us</p>
              <h2 className="font-serif font-bold text-slate-900 leading-tight mb-6" style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}>
                Our Mission,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Vision &amp; Values
                </span>
              </h2>
              <p className="text-slate-500 text-base leading-[1.8]">
                Every decision at VINOFYX is guided by principles the same principles our clients
                rely on when they choose us as their technology partner.
              </p>
            </motion.div>

            {/* Vertical timeline */}
            <div className="relative">
              <div
                className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
                style={{ background: "linear-gradient(180deg,rgba(59,130,246,0.6) 0%,rgba(139,92,246,0.6) 50%,rgba(59,130,246,0.25) 100%)" }}
              />
              <div className="space-y-10">
                {MVV.map(({ Icon, num, label, title, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={mvvInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
                    className="relative sm:pl-20"
                  >
                    {/* Node */}
                    <div
                      className="absolute left-0 top-1 hidden sm:flex w-12 h-12 rounded-full items-center justify-center text-white font-black text-xs shadow-[0_0_24px_rgba(59,130,246,0.3)]"
                      style={{
                        background: "linear-gradient(135deg,#2563EB 0%,#7C3AED 100%)",
                        border: "3px solid #fff",
                        boxShadow: "0 0 0 4px rgba(59,130,246,0.12),0 8px 24px rgba(59,130,246,0.25)",
                      }}
                    >
                      {i + 1}
                    </div>

                    <div
                      className="group rounded-3xl p-8 bg-white border border-slate-100 hover:border-blue-100 hover:shadow-[0_16px_50px_rgba(0,87,255,0.07)] hover:-translate-y-1 transition-all duration-300"
                      style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.04)" }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-indigo-200 transition-colors">
                          <Icon size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-1">{num} — {label}</p>
                          <h3 className="text-slate-900 font-bold text-xl leading-snug">{title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm leading-[1.85]">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §6  CORE EXPERTISE  — bento grid
      ══════════════════════════════════ */}
      <section ref={bentoRef} className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#EFF6FF" }}>
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(59,130,246,0.07) 0%,transparent 70%)" }} aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bentoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-500 text-[11px] font-black tracking-[0.32em] uppercase mb-4">Core Expertise</p>
            <h2 className="font-serif font-bold text-slate-900 leading-tight mx-auto max-w-[700px]" style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}>
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Build For You</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-md mx-auto">
              29+ services spanning AI, software, design, and creative — all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BENTO.map(({ Icon, name, desc, wide, tall }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={bentoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.06 * i }}
                className={`group relative rounded-2xl overflow-hidden border border-white/90 bg-white hover:border-blue-200 hover:shadow-[0_16px_50px_rgba(0,87,255,0.10)] hover:-translate-y-1.5 transition-all duration-300 cursor-default${wide ? " col-span-2" : " col-span-1"}${tall ? " min-h-[220px]" : " min-h-[160px]"}`}
                style={{ boxShadow: "0 2px 20px rgba(15,23,42,0.05)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "radial-gradient(circle at top right,rgba(59,130,246,0.08) 0%,transparent 70%)" }} aria-hidden />

                <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-5 group-hover:from-blue-100 group-hover:to-indigo-200 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-slate-900 font-bold text-base sm:text-lg mb-2 leading-snug">{name}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                  {tall && (
                    <span className="inline-flex items-center text-blue-500 text-xs font-semibold gap-1 mt-6 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={11} />
                    </span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#3B82F6)" }} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={bentoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-slate-400 text-sm mt-8"
          >
            And{" "}
            <span className="text-blue-600 font-semibold">20+ more services</span>
            {" "}including Publishing, Photography, Video Production, Corporate Training &amp; more.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════
          §7  JOURNEY  — Apple-style timeline
      ══════════════════════════════════ */}
      <section ref={journeyRef} className="relative bg-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-blue-500 text-[11px] font-black tracking-[0.32em] uppercase mb-4">Our Journey</p>
            <h2 className="font-serif font-bold text-slate-900 leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}>
              From{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Vision to Reality</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Animated connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={journeyInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
              className="absolute top-[44px] left-[12%] right-[12%] h-px hidden lg:block origin-left"
              style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
              {JOURNEY.map(({ year, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.15 }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Glass circle node */}
                  <div
                    className="relative z-10 w-[88px] h-[88px] rounded-full mb-6 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      border: "1.5px solid rgba(59,130,246,0.22)",
                      boxShadow: "0 0 0 8px rgba(59,130,246,0.05),0 8px 32px rgba(59,130,246,0.13)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <span className="text-blue-400 font-black text-2xl leading-none gold-text">{i + 1}</span>
                  </div>

                  <div className="gold-text font-black text-2xl mb-1.5">{year}</div>
                  <h3 className="text-slate-900 font-bold text-base mb-3">{label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §8  GLOBAL PRESENCE  — dark stats
      ══════════════════════════════════ */}
      <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A 0%,#0D1B3E 100%)" }}>
        <DarkGrid />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <div>
              <p className="text-blue-400 text-[10px] font-black tracking-[0.35em] uppercase mb-2">Global Presence</p>
              <h2 className="text-white font-bold" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>Operating Across the Globe</h2>
            </div>
            <div className="flex gap-10 sm:gap-16">
              {[
                { value: "3",   label: "Continents"  },
                { value: "10+", label: "Countries"   },
                { value: "5+",  label: "Clients"     },
                { value: "98%", label: "Satisfaction" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-white font-black leading-none mb-1" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>{value}</div>
                  <div className="text-blue-300 text-[10px] font-bold tracking-[0.18em] uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          §9  CTA
      ══════════════════════════════════ */}
      <section ref={ctaRef} className="relative bg-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center,rgba(59,130,246,0.07) 0%,transparent 70%)" }} aria-hidden />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden text-center px-10 py-16 sm:px-16 sm:py-20"
            style={{
              background: "linear-gradient(135deg,#020617 0%,#0F172A 45%,#0D1B3E 100%)",
              border: "1px solid rgba(59,130,246,0.14)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.28),0 0 80px rgba(59,130,246,0.06)",
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(circle at top right,rgba(59,130,246,0.13) 0%,transparent 65%)" }} aria-hidden />
            <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none" style={{ background: "radial-gradient(circle at bottom left,rgba(139,92,246,0.10) 0%,transparent 65%)" }} aria-hidden />

            <div className="relative z-10">
              <p className="text-blue-400 text-[11px] font-black tracking-[0.35em] uppercase mb-5">Ready to Transform?</p>
              <h2
                className="font-serif font-bold text-white leading-tight mb-5 mx-auto max-w-[680px]"
                style={{ fontSize: "clamp(26px, 4vw, 52px)" }}
              >
                Transform Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Vinofyx</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-[1.8] mb-10 max-w-[540px] mx-auto">
                From strategy to execution — our team of world-class engineers, designers, and
                strategists is ready to build the perfect digital solution for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:scale-105"
                >
                  Schedule a Consultation <ArrowRight size={16} />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-bold text-sm transition-all duration-200 hover:bg-white/5"
                >
                  View Our Solutions <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

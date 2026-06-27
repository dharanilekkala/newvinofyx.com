"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Eye, Gem, Globe2, ArrowRight,
  TrendingUp, Search, Share2, BarChart2, MousePointer2,
  Building2, Globe, ShoppingCart, Smartphone, Code2,
  Layers, Brain, Cpu, Settings2, Database, BarChart3,
  Cloud, Briefcase, GraduationCap, BookOpen, Printer,
  Package, Palette, Video, Camera, Zap, Lightbulb,
} from "lucide-react";

const FEATURES = [
  { icon: "🤖", title: "Artificial Intelligence", desc: "Smart solutions for modern businesses." },
  { icon: "💻", title: "Software Engineering",    desc: "Scalable enterprise applications." },
  { icon: "📈", title: "Digital Growth",          desc: "Marketing powered by technology." },
  { icon: "🌍", title: "Global Solutions",        desc: "Helping businesses across industries." },
];

const VALUES = [
  {
    Icon: Target,
    title: "Mission",
    desc: "To democratize enterprise-grade technology, enabling every organization — from startups to governments — to harness the full power of AI and digital transformation.",
  },
  {
    Icon: Eye,
    title: "Vision",
    desc: "To be the world's most trusted technology partner, recognized by Fortune 500 companies, governments, and institutions for innovation, integrity, and measurable impact.",
  },
  {
    Icon: Gem,
    title: "Values",
    desc: "Excellence, integrity, innovation, and accountability guide every decision we make and every solution we deliver to our clients worldwide.",
  },
  {
    Icon: Globe2,
    title: "Global Reach",
    desc: "Operating across 3 continents with a dedicated team of world-class engineers, strategists, and domain experts serving clients in 10+ countries.",
  },
];

const SERVICES = [
  { name: "Digital Marketing",            Icon: TrendingUp },
  { name: "Search Engine Optimization",   Icon: Search },
  { name: "Social Media Marketing",       Icon: Share2 },
  { name: "Performance Marketing",        Icon: BarChart2 },
  { name: "Google Ads",                   Icon: Target },
  { name: "Meta Ads",                     Icon: MousePointer2 },
  { name: "Brand Strategy & Identity",    Icon: Gem },
  { name: "Corporate Branding",           Icon: Building2 },
  { name: "Website Design & Development", Icon: Globe },
  { name: "E-Commerce Development",       Icon: ShoppingCart },
  { name: "Mobile App Development",       Icon: Smartphone },
  { name: "Software Development",         Icon: Code2 },
  { name: "UI/UX Design",                 Icon: Layers },
  { name: "Artificial Intelligence",      Icon: Brain },
  { name: "Machine Learning Solutions",   Icon: Cpu },
  { name: "Business Automation",          Icon: Settings2 },
  { name: "Data Engineering",             Icon: Database },
  { name: "Data Analytics",              Icon: BarChart3 },
  { name: "Cloud Solutions",              Icon: Cloud },
  { name: "Business Consulting",          Icon: Briefcase },
  { name: "Corporate Training",           Icon: GraduationCap },
  { name: "Publishing Services",          Icon: BookOpen },
  { name: "Printing Solutions",           Icon: Printer },
  { name: "Institutional Supply",         Icon: Package },
  { name: "Creative Design",              Icon: Palette },
  { name: "Video Production & Editing",   Icon: Video },
  { name: "Photography & Media",          Icon: Camera },
  { name: "Digital Transformation",       Icon: Zap },
  { name: "Technology Consulting",        Icon: Lightbulb },
];

const JOURNEY = [
  { year: "2025",  label: "Founded",    desc: "Born with a vision to democratize AI for enterprises" },
  { year: "2025",  label: "Growth",     desc: "Rapid expansion, first enterprise clients onboarded" },
  { year: "2026",  label: "Innovation", desc: "Launched AI Lab, 100+ automation deployments" },
  { year: "2026+", label: "Global",     desc: "3 continents, 5+ enterprise clients worldwide" },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left:     `${(i * 5.6 + 3)  % 94}%`,
  top:      `${(i * 10.3 + 8) % 88}%`,
  delay:    `${(i * 0.65) % 7}s`,
  duration: `${5 + (i * 0.85) % 6}s`,
  size:     i % 4 === 0 ? 3 : i % 3 === 0 ? 2.5 : 2,
  color:    i % 3 === 0 ? "rgba(139,92,246,0.28)" : "rgba(59,130,246,0.24)",
}));

export default function About() {
  const ref        = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const inView        = useInView(ref,        { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-white scroll-mt-[80px] md:scroll-mt-[100px] py-20 md:py-28 lg:py-[140px]"
    >

      {/* ══════════════════════════════════════
          BACKGROUND SYSTEM
      ══════════════════════════════════════ */}

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* Blue radial glow — centred behind heading */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "640px",
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0.04) 50%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* Purple gradient — right edge */}
      <div
        className="absolute top-1/4 -right-56 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [-18, 18, -18], x: [-8, 8, -8] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[6%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
        aria-hidden
      />
      <motion.div
        animate={{ y: [22, -22, 22], x: [12, -12, 12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[18%] right-[8%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />
      <motion.div
        animate={{ y: [-12, 24, -12], x: [6, -14, 6] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        className="absolute top-[52%] left-[2%] w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(36px)",
        }}
        aria-hidden
      />

      {/* Floating ambient particles */}
      {PARTICLES.map(({ id, left, top, delay, duration, size, color }) => (
        <span
          key={id}
          className="about-particle"
          style={{
            left,
            top,
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            animationDuration: duration,
            animationDelay: delay,
          }}
          aria-hidden
        />
      ))}

      {/* Globe wireframe watermark */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g opacity="0.038" fill="none" stroke="#0057FF" strokeWidth="0.9">
          <circle cx="700" cy="450" r="380" />
          <ellipse cx="700" cy="450" rx="380" ry="120" />
          <ellipse cx="700" cy="450" rx="380" ry="230" />
          <ellipse cx="700" cy="450" rx="380" ry="320" />
          <ellipse cx="700" cy="450" rx="120" ry="380" />
          <ellipse cx="700" cy="450" rx="230" ry="380" />
          <line x1="700" y1="70"  x2="700" y2="830" />
          <line x1="320" y1="450" x2="1080" y2="450" />
        </g>
      </svg>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="about-badge-border inline-flex items-center px-5 py-2.5 rounded-full bg-white text-slate-600 text-[11px] font-bold tracking-[0.28em] uppercase shadow-sm">
            About Vinofyx Private Limited
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-center font-extrabold text-slate-900 leading-[1.05] mb-7 mx-auto max-w-[900px]"
          style={{ fontSize: "clamp(34px, 5.2vw, 68px)" }}
        >
          Innovating Businesses Through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-blue-600">
            Technology
          </span>
          {", "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-blue-600">
            Creativity
          </span>
          {" & "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-blue-600">
            Digital Excellence
          </span>
        </motion.h2>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-center text-slate-500 mx-auto max-w-[760px] mb-16 leading-[1.8]"
          style={{ fontSize: "clamp(16px, 1.8vw, 21px)" }}
        >
          VINOFYX PRIVATE LIMITED is a technology-driven company dedicated to empowering businesses
          with innovative digital solutions across AI, software, marketing, and creative services.
        </motion.p>

        {/* ── Feature cards — 4 columns ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {FEATURES.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="group rounded-2xl border border-blue-100/80 bg-white/90 backdrop-blur-sm p-6 hover:border-blue-200 hover:shadow-[0_16px_48px_rgba(0,87,255,0.11)] hover:-translate-y-2 transition-all duration-300 shadow-[0_2px_20px_rgba(15,23,42,0.05)] cursor-default"
            >
              <span className="text-3xl mb-4 block leading-none">{icon}</span>
              <h3 className="text-slate-900 font-bold text-sm sm:text-base mb-1.5 leading-snug">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Company glassmorphism card ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.42 }}
          className="mb-20 mx-auto max-w-[1000px]"
        >
          <div
            className="rounded-[28px] px-8 py-12 sm:px-14 sm:py-14"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(59,130,246,0.11)",
              boxShadow: "0 30px 80px rgba(15,23,42,0.08), 0 0 80px rgba(59,130,246,0.06)",
            }}
          >
            {/* Company intro */}
            <p className="text-slate-500 text-base sm:text-lg leading-[1.85] mb-12 text-center max-w-2xl mx-auto">
              Our mission is to help startups, enterprises, educational institutions, and
              organizations accelerate their growth through cutting-edge technology, strategic
              marketing, and creative digital experiences. We deliver scalable, secure, and
              future-ready solutions to clients across India and international markets while
              maintaining the highest standards of quality, innovation, and customer satisfaction.
            </p>

            {/* Gradient divider */}
            <div className="w-24 h-px mx-auto mb-12 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)" }}
            />

            {/* Brand Identity block */}
            <div
              className="rounded-[20px] p-8 sm:p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(239,246,255,0.97) 0%, rgba(224,242,254,0.95) 60%, rgba(245,243,255,0.95) 100%)",
                border: "1px solid rgba(59,130,246,0.14)",
                boxShadow: "0 8px 48px rgba(59,130,246,0.08), inset 0 0 0 1px rgba(255,255,255,0.85)",
              }}
            >
              {/* Animated left accent line */}
              <div
                className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full"
                style={{
                  background: "linear-gradient(180deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)",
                  boxShadow: "0 0 12px rgba(59,130,246,0.45)",
                }}
              />

              {/* Soft ambient glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
                aria-hidden
              />

              <div className="pl-5 sm:pl-7">
                <p className="text-[10px] font-black tracking-[0.32em] uppercase text-blue-400 mb-4">
                  Our Brand Identity
                </p>

                <h3
                  className="font-serif font-bold text-slate-900 mb-2 leading-tight"
                  style={{ fontSize: "clamp(20px, 2.6vw, 30px)" }}
                >
                  The Meaning Behind{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                    VINOFYX
                  </span>
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-xl">
                  Our name reflects the values that define our company and the solutions we deliver
                  to businesses worldwide.
                </p>

                {/* Full form panel */}
                <div
                  className="rounded-2xl px-5 py-4 mb-7 inline-block w-full"
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    border: "1px solid rgba(59,130,246,0.13)",
                    boxShadow: "0 4px 24px rgba(59,130,246,0.07)",
                  }}
                >
                  <p className="text-[10px] font-black tracking-[0.28em] uppercase text-blue-400 mb-2">
                    Full Form
                  </p>
                  <p className="text-blue-700 font-semibold text-base sm:text-lg leading-relaxed">
                    Visionary Innovation Network for Optimized Future, Yield &amp; Excellence
                  </p>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                  VINOFYX represents our commitment to visionary thinking, continuous innovation,
                  strategic networking, optimized digital transformation, measurable business growth,
                  and operational excellence. Every project we deliver is built around these core
                  principles, enabling organizations to grow confidently in the digital era.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Values grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="accent-card group p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                <Icon className="text-blue-600" size={22} />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Services & Capabilities ── */}
        <div ref={servicesRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-blue-500 font-semibold mb-3">
              What We Do
            </p>
            <h2 className="text-slate-900 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Our Services &amp; Capabilities
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
              End-to-end solutions covering every dimension of digital business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {SERVICES.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.04 * i }}
                className="group flex flex-col items-center text-center gap-3 p-4 sm:p-5 rounded-2xl border border-blue-100 bg-white shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 flex-shrink-0">
                  <Icon size={17} className="text-blue-600" />
                </div>
                <span className="text-slate-600 text-[11px] sm:text-xs font-medium leading-snug group-hover:text-slate-900 transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Journey timeline ── */}
        <div className="mb-20">
          <p className="text-center text-slate-400 text-[11px] tracking-[0.3em] uppercase mb-14">
            Our Journey
          </p>
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block" />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
              {JOURNEY.map(({ year, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-xs flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(0,87,255,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <div className="gold-text font-black text-2xl mb-1">{year}</div>
                  <div className="text-slate-900 font-semibold text-sm mb-2">{label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-10 sm:p-14 text-center overflow-hidden shadow-[0_24px_80px_rgba(0,87,255,0.28)]"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-2xl pointer-events-none" aria-hidden />
          <div className="relative z-10">
            <p className="text-blue-200 text-xs font-semibold tracking-[0.28em] uppercase mb-4">
              Ready to Transform?
            </p>
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
              Transform Your Business with Vinofyx
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
              From strategy to execution — our team of experts is ready to build the perfect digital
              solution tailored to your business goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Schedule a Consultation <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

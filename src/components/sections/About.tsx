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
import SectionTitle from "@/components/common/SectionTitle";

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
  { name: "Digital Marketing",             Icon: TrendingUp },
  { name: "Search Engine Optimization",    Icon: Search },
  { name: "Social Media Marketing",        Icon: Share2 },
  { name: "Performance Marketing",         Icon: BarChart2 },
  { name: "Google Ads",                    Icon: Target },
  { name: "Meta Ads",                      Icon: MousePointer2 },
  { name: "Brand Strategy & Identity",     Icon: Gem },
  { name: "Corporate Branding",            Icon: Building2 },
  { name: "Website Design & Development",  Icon: Globe },
  { name: "E-Commerce Development",        Icon: ShoppingCart },
  { name: "Mobile App Development",        Icon: Smartphone },
  { name: "Software Development",          Icon: Code2 },
  { name: "UI/UX Design",                  Icon: Layers },
  { name: "Artificial Intelligence",       Icon: Brain },
  { name: "Machine Learning Solutions",    Icon: Cpu },
  { name: "Business Automation",           Icon: Settings2 },
  { name: "Data Engineering",              Icon: Database },
  { name: "Data Analytics",               Icon: BarChart3 },
  { name: "Cloud Solutions",               Icon: Cloud },
  { name: "Business Consulting",           Icon: Briefcase },
  { name: "Corporate Training",            Icon: GraduationCap },
  { name: "Publishing Services",           Icon: BookOpen },
  { name: "Printing Solutions",            Icon: Printer },
  { name: "Institutional Supply",          Icon: Package },
  { name: "Creative Design",               Icon: Palette },
  { name: "Video Production & Editing",    Icon: Video },
  { name: "Photography & Media",           Icon: Camera },
  { name: "Digital Transformation",        Icon: Zap },
  { name: "Technology Consulting",         Icon: Lightbulb },
];

const JOURNEY = [
  { year: "2025",  label: "Founded",    desc: "Born with a vision to democratize AI for enterprises" },
  { year: "2025",  label: "Growth",     desc: "Rapid expansion, first enterprise clients onboarded" },
  { year: "2026",  label: "Innovation", desc: "Launched AI Lab, 100+ automation deployments" },
  { year: "2026+", label: "Global",     desc: "3 continents, 5+ enterprise clients worldwide" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad bg-slate-50 scroll-mt-[80px] md:scroll-mt-[100px] overflow-hidden relative"
    >
      {/* Floating background accents */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-50/70 rounded-full blur-[180px] pointer-events-none" aria-hidden />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-sky-50/60 rounded-full blur-[160px] pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Header ── */}
        <SectionTitle
          eyebrow="About Vinofyx Private Limited"
          title="Innovating Businesses Through Technology, Creativity & Digital Excellence"
          subtitle="VINOFYX PRIVATE LIMITED is a technology-driven company dedicated to empowering businesses with innovative digital solutions across AI, software, marketing, and creative services."
          inView={inView}
        />

        {/* ── Company description ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Our mission is to help startups, enterprises, educational institutions, and organizations accelerate their growth through cutting-edge technology, strategic marketing, and creative digital experiences. We deliver scalable, secure, and future-ready solutions to clients across India and international markets while maintaining the highest standards of quality, innovation, and customer satisfaction.
          </p>
        </motion.div>

        {/* ── Brand Identity Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-[1000px] mx-auto mb-20"
        >
          <div className="group bg-white rounded-[20px] border border-blue-100/80 shadow-[0_4px_40px_rgba(0,87,255,0.07)] hover:shadow-[0_12px_60px_rgba(0,87,255,0.14)] hover:-translate-y-1 transition-all duration-500 p-10 sm:p-14 text-center">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue text-blue-600 text-[11px] font-semibold tracking-[0.28em] uppercase mb-7 block">
              Our Brand Identity
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              The Meaning Behind{" "}
              <span className="gold-shimmer">VINOFYX</span>
            </h3>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Our name reflects the values that define our company and the solutions we deliver to businesses worldwide.
            </p>

            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-auto mb-8" />

            <div className="glass-blue rounded-2xl px-6 py-5 mb-8 border border-blue-100 max-w-3xl mx-auto">
              <p className="text-[11px] text-blue-400 font-semibold tracking-[0.28em] uppercase mb-2">
                Full Form
              </p>
              <p className="text-blue-700 font-semibold text-lg sm:text-xl leading-relaxed">
                Visionary Innovation Network for Optimized Future, Yield &amp; Excellence
              </p>
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              VINOFYX represents our commitment to visionary thinking, continuous innovation, strategic
              networking, optimized digital transformation, measurable business growth, and operational
              excellence. Every project we deliver is built around these core principles, enabling
              organizations to grow confidently in the digital era.
            </p>
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
            <p className="text-[11px] tracking-[0.3em] uppercase text-blue-500 font-semibold mb-3">What We Do</p>
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
              From strategy to execution — our team of experts is ready to build the perfect digital solution tailored to your business goals.
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

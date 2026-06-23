"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/utils/constants";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = NAV_ITEMS.map((n) => n.href.replace("#", ""));
      const mid = window.scrollY + 120;
      let active = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) active = id;
      }
      setActiveId(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback((href: string) => {
    if (href === "#" || href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (!el) return;
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  const handleLink = useCallback(
    (e: React.MouseEvent, href: string) => {
      e.preventDefault();
      scrollTo(href);
    },
    [scrollTo]
  );

  return (
    <>
      {/* ── Fixed top bar ── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[99999] transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
            : "bg-white/80 backdrop-blur-xl border-b border-white/40"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-[72px] md:h-[90px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center no-underline"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            aria-label="VINOFYX — Back to top"
          >
            <Image
              src="/images/logo.png"
              alt="VINOFYX PRIVATE LIMITED"
              width={210}
              height={82}
              className="h-[38px] md:h-[46px] w-auto object-contain"
              style={{ filter: 'url(#remove-white)' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLink(e, item.href)}
                  aria-current={activeId === id ? "page" : undefined}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
                    activeId === id
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleLink(e, "#contact")}
              className="ml-3 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-[0_0_20px_rgba(0,87,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              Get Started <ArrowRight size={14} aria-hidden />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            <Menu size={24} aria-hidden />
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999998] bg-slate-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[999999] w-full max-w-[320px] bg-white border-l border-slate-200 flex flex-col lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="VINOFYX PRIVATE LIMITED"
                  width={150}
                  height={59}
                  className="h-[30px] w-auto object-contain"
                  style={{ filter: 'url(#remove-white)' }}
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  aria-label="Close navigation menu"
                >
                  <X size={20} aria-hidden />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-5 flex-1 overflow-y-auto" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.22 }}
                      onClick={(e) => handleLink(e, item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60",
                        isActive
                          ? "text-blue-600 bg-blue-50 border border-blue-200"
                          : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="px-4 pb-8 pt-4 border-t border-slate-100 flex-shrink-0">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  onClick={(e) => handleLink(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all duration-200 shadow-[0_0_20px_rgba(0,87,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  Get Started <ArrowRight size={18} aria-hidden />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

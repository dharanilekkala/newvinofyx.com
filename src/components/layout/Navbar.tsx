"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/utils/constants";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = NAV_ITEMS.map((n) => n.href.slice(1));
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

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-gold/20 shadow-[0_4px_40px_rgba(0,0,0,0.8)]"
          : "bg-black/90 backdrop-blur-md border-b border-gold/10"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[90px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="VINOFYX Home"
        >
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={46}
            height={46}
            className="flex-shrink-0"
            priority
            aria-hidden
          />
          <div className="flex flex-col leading-none">
            <span className="font-black text-[17px] tracking-[0.11em] gold-shimmer">
              VINOFYX
            </span>
            <span className="text-[7.5px] font-medium tracking-[0.22em] text-white/40 mt-[3px]">
              PRIVATE LIMITED
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLink(e, item.href)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200",
                activeId === item.href.slice(1)
                  ? "text-gold bg-gold/10"
                  : "text-white/65 hover:text-white hover:bg-white/5"
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLink(e, "#contact")}
            className="ml-3 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gold text-black hover:bg-gold-light transition-all duration-200 shadow-gold"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gold/15 bg-black/98 backdrop-blur-2xl">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLink(e, item.href)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-all",
                  activeId === item.href.slice(1)
                    ? "text-gold bg-gold/8"
                    : "text-white/75 hover:text-gold hover:bg-gold/5"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLink(e, "#contact")}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold bg-gold text-black hover:bg-gold-light transition-all"
            >
              Get Started <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

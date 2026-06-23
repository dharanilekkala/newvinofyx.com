"use client";

import Image from "next/image";
import { Linkedin, Twitter, Instagram, Github, ArrowRight } from "lucide-react";
import { FOOTER_LINKS } from "@/utils/constants";

const SOCIAL = [
  { Icon: Linkedin,  href: "#", label: "LinkedIn" },
  { Icon: Twitter,   href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Github,    href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Premium CTA strip */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 text-center">
          <p className="text-blue-200 text-xs font-semibold tracking-[0.28em] uppercase mb-3">
            Ready to Transform?
          </p>
          <h2 className="text-white font-serif font-bold text-3xl md:text-4xl mb-4 leading-tight">
            Let&apos;s Build Your Future Together
          </h2>
          <p className="text-blue-100 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            From AI strategy to full-scale deployment — VINOFYX delivers end-to-end enterprise technology solutions that drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Get a Free Consultation <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200"
            >
              View Our Solutions
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/images/logo.png"
                alt="VINOFYX PRIVATE LIMITED"
                width={180}
                height={70}
                className="h-[40px] w-auto object-contain"
                style={{ filter: 'url(#remove-white)' }}
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Global technology company delivering AI, software engineering, data innovation, and enterprise transformation across every industry.
            </p>
            <p className="text-blue-600 text-xs italic mb-6 font-light tracking-wide">
              &ldquo;Your Growth, Our Responsibility&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {[
            { heading: "Company",    links: FOOTER_LINKS.company },
            { heading: "Solutions",  links: FOOTER_LINKS.solutions },
            { heading: "Industries", links: FOOTER_LINKS.industries },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-slate-900 font-bold text-sm tracking-wide mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-slate-500 text-sm hover:text-blue-600 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="py-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-900 font-semibold text-sm mb-1">Stay ahead of the curve</p>
              <p className="text-slate-400 text-xs">Get the latest insights on AI, technology, and enterprise transformation.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all flex-shrink-0"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} VINOFYX PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-slate-400 text-xs hover:text-slate-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

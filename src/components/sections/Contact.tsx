"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send, Loader2 } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { CONTACT_INFO } from "@/utils/constants";

const SERVICES = [
  "AI Solutions", "Software Development", "Data Engineering",
  "Digital Marketing", "Business Consulting", "Institutional Solutions",
  "Mobile Development", "Cloud Infrastructure", "Cybersecurity",
  "E-Commerce", "ERP & CRM", "EdTech", "FinTech", "Other",
];

type FormState = {
  name: string; email: string; company: string;
  phone: string; service: string; message: string;
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-pad bg-dark scroll-mt-[80px] md:scroll-mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Build Something Extraordinary"
          subtitle="Ready to transform your business with AI and enterprise technology? Our experts are ready to design the perfect solution for your needs."
          inView={inView}
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-7 rounded-2xl border border-gold/15 bg-dark-700/50">
              <h3 className="text-white font-bold text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { Icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { Icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                  { Icon: MapPin, label: "Address", value: CONTACT_INFO.address, href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm font-medium hover:text-gold transition-colors">{value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/35 transition-all duration-200 group"
            >
              <MessageCircle size={22} className="text-green-400" />
              <div>
                <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-white/40 text-xs">Typically replies within hours</p>
              </div>
            </a>

            <div className="p-5 rounded-2xl border border-gold/12 bg-dark-700/40">
              <p className="text-gold font-bold text-sm mb-1">Free Consultation</p>
              <p className="text-white/50 text-xs leading-relaxed">
                Book a 30-minute strategy session with our enterprise solutions team — no commitment required.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl border border-gold/15 bg-dark-700/50 space-y-5"
            >
              {status === "success" ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/50">We'll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-gold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {([["name", "Full Name", "John Smith"], ["email", "Email Address", "john@company.com"]] as const).map(([k, label, ph]) => (
                      <div key={k}>
                        <label className="block text-white/55 text-xs mb-1.5 font-medium">{label} *</label>
                        <input
                          type={k === "email" ? "email" : "text"}
                          required
                          value={form[k]}
                          onChange={(e) => set(k, e.target.value)}
                          placeholder={ph}
                          className="w-full bg-dark-600 border border-gold/12 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold/45 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {([["company", "Company / Organization", "Acme Corp"], ["phone", "Phone Number", "+91 XXXXX XXXXX"]] as const).map(([k, label, ph]) => (
                      <div key={k}>
                        <label className="block text-white/55 text-xs mb-1.5 font-medium">{label}</label>
                        <input
                          type="text"
                          value={form[k]}
                          onChange={(e) => set(k, e.target.value)}
                          placeholder={ph}
                          className="w-full bg-dark-600 border border-gold/12 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold/45 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-white/55 text-xs mb-1.5 font-medium">Service of Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                      className="w-full bg-dark-600 border border-gold/12 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/45 transition-colors appearance-none"
                    >
                      <option value="" className="bg-dark-700">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-dark-700">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/55 text-xs mb-1.5 font-medium">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Tell us about your project, goals, and challenges..."
                      className="w-full bg-dark-600 border border-gold/12 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-gold/45 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gold text-black font-bold text-sm hover:bg-gold-light transition-all shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

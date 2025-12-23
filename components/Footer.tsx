"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-[2px] w-full bg-gradient-to-r from-slateBlue via-softSkyCyan to-sunsetPeach opacity-60 rounded-full mb-10" />

        {/* Newsletter Section */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 items-center">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-slate-600">
                Get the latest insights on engineering, AI, and digital solutions delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={newsletterStatus === "sending"}
                className="flex-1 px-4 py-2.5 text-sm rounded-full border border-slate-200 focus:border-softSkyCyan focus:ring-2 focus:ring-softSkyCyan/20 outline-none transition-all duration-200 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "sending"}
                className="px-6 py-2.5 rounded-full bg-slateBlue text-white text-sm font-medium hover:bg-slateBlue/90 disabled:opacity-70 transition-all duration-200 whitespace-nowrap"
              >
                {newsletterStatus === "sending" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
          {newsletterStatus === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-xs text-green-600 flex items-center gap-1"
            >
              <span>✓</span> Thanks for subscribing! Check your inbox to confirm.
            </motion.p>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-20 w-24 flex items-center justify-center">
              <Image
                src="/images/ehm-logo.png"
                alt="EHM Tech logo"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
            <div className="max-w-xs text-[12px] leading-relaxed text-slate-600">
              Engineering, estimation, and digital services for teams that need reliable, on‑time deliverables.
            </div>
          </motion.div>

          <div className="flex gap-6 text-sm text-slate-600">
            {[
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="inline-block transition-colors group-hover:text-slate-900"
                >
                  {link.label}
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-slateBlue to-softSkyCyan group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex gap-4 text-slate-500">
            {[
              { href: "https://linkedin.com", Icon: FaLinkedin, color: "hover:text-[#0077B5]" },
              { href: "https://instagram.com", Icon: FaInstagram, color: "hover:text-[#E4405F]" },
              { href: "https://facebook.com", Icon: FaFacebook, color: "hover:text-[#1877F2]" },
              { href: "https://twitter.com", Icon: FaTwitter, color: "hover:text-[#1DA1F2]" },
            ].map(({ href, Icon, color }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className={`transition-colors ${color}`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={18} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} EHM Technology Services — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

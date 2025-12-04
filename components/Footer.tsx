"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-[2px] w-full bg-gradient-to-r from-slateBlue via-softSkyCyan to-sunsetPeach opacity-60 rounded-full mb-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            className="flex items-center gap-3"
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

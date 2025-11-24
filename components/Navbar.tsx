"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceItem = {
  label: string;
  href: string;
  description?: string;
};

const engineeringServices: ServiceItem[] = [
  {
    label: "Engineering Design",
    href: "/services/engineering-design",
    description: "Mechanical, electrical & structural design support.",
  },
  {
    label: "Cost Estimation",
    href: "/services/cost-estimation",
    description: "Detailed BOQs and project cost forecasts.",
  },
  {
    label: "Technical Documentation",
    href: "/services/technical-documentation",
    description: "Drawings, reports and compliance documents.",
  },
];

const digitalServices: ServiceItem[] = [
  {
    label: "AI Automation",
    href: "/services/ai-automation",
    description: "Chatbots, workflows and smart assistants.",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "Modern, performant websites & dashboards.",
  },
  {
    label: "Social Media Marketing",
    href: "/services/social-media",
    description: "Content and campaigns to grow your audience.",
  },
  {
    label: "Email Marketing",
    href: "/services/email-marketing",
    description: "Newsletters and nurture sequences.",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = (href: string, label: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
      <Link
        href={href}
        className={`relative text-sm font-medium transition-colors ${
          active ? "text-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {label}

        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-slateBlue to-softSkyCyan shadow-[0_0_8px_rgba(94,234,212,0.6)]"
          />
        )}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glow behind navbar */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />

      <nav className="max-w-6xl mx-auto px-4 mt-3">
        <div className="relative flex items-center justify-between px-4 py-3 rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-lg shadow-black/40">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="relative h-10 w-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-inner shadow-black/70">
              <Image
                src="/logo.svg"
                alt="EHM Tech logo"
                fill
                className="object-contain p-1"
                sizes="40px"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-white text-sm tracking-wide">
                EHM Tech Services
              </span>
              <span className="text-[11px] text-gray-400">
                Engineering • Estimation • AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 z-10">
            {navLink("/", "Home")}

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition">
                Services <span className="text-xs">▾</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-4 w-[640px] rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-xl p-6 space-y-5"
                  >
                    {/* Two-column categories */}
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      {/* Engineering */}
                      <div>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-softSkyCyan">
                          Engineering & Estimation
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Technical depth for accurate, buildable projects.
                        </p>

                        <div className="mt-3 space-y-2">
                          {engineeringServices.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-3 py-3 rounded-xl bg-white/[0.03] border border-transparent hover:border-softSkyCyan/50 hover:bg-softSkyCyan/10 transition"
                            >
                              <div className="text-sm font-medium text-gray-100">
                                {item.label}
                              </div>
                              <p className="text-xs text-gray-400">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Digital */}
                      <div>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-sunsetPeach">
                          AI & Digital Solutions
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Automation and digital experiences that scale with you.
                        </p>

                        <div className="mt-3 space-y-2">
                          {digitalServices.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-3 py-3 rounded-xl bg-white/[0.03] border border-transparent hover:border-slateBlue/60 hover:bg-slateBlue/10 transition"
                            >
                              <div className="text-sm font-medium text-gray-100">
                                {item.label}
                              </div>
                              <p className="text-xs text-gray-400">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer row */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>Not sure what you need? Let’s talk.</span>
                      <Link
                        href="/contact"
                        className="rounded-full px-4 py-1.5 bg-slateBlue text-white text-sm font-medium hover:bg-slateBlue/90"
                      >
                        Contact Us →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLink("/services", "Services")}
            {navLink("/portfolio", "Portfolio")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-10 flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-100 rounded-full" />
            <span className="w-6 h-0.5 bg-gray-100 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3 text-sm text-gray-100">

              <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span>Services</span>
                  <span className="text-xs text-gray-400 group-open:rotate-180 transition">▾</span>
                </summary>

                <div className="mt-2 pl-3 space-y-4 text-xs">

                  <p className="font-semibold text-softSkyCyan">
                    Engineering & Estimation
                  </p>
                  {engineeringServices.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <p className="font-semibold text-sunsetPeach mt-3">
                    AI & Digital Solutions
                  </p>
                  {digitalServices.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/services" onClick={() => setMobileOpen(false)}>
                All Services
              </Link>
              <Link href="/portfolio" onClick={() => setMobileOpen(false)}>
                Portfolio
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

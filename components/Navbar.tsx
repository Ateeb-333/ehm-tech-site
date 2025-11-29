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

const aiDigitalServices: ServiceItem[] = [
  {
    label: "Development",
    href: "/services/web-development",
    description: "Modern, performant websites & dashboards.",
  },
  {
    label: "Designing",
    href: "/services/designing",
    description: "Creative design solutions for digital experiences.",
  },
  {
    label: "Marketing",
    href: "/services/marketing",
    description: "Social media, email & digital marketing campaigns.",
  },
  {
    label: "AI",
    href: "/services/ai-automation",
    description: "Chatbots, workflows and smart assistants.",
  },
];

const constructionServices: ServiceItem[] = [
  {
    label: "Cost Estimation",
    href: "/services/cost-estimation",
    description: "Detailed BOQs and project cost forecasts.",
  },
  {
    label: "Quantity Takeoff",
    href: "/services/quantity-takeoff",
    description: "Accurate material and quantity calculations.",
  },
  {
    label: "Bid Estimation",
    href: "/services/bid-estimation",
    description: "Competitive bidding and proposal preparation.",
  },
  {
    label: "Drafting Services",
    href: "/services/drafting-services",
    description: "Technical drawings and CAD documentation.",
  },
  {
    label: "Project Management",
    href: "/services/project-management",
    description: "End-to-end construction project oversight.",
  },
];

const engineeringServices: ServiceItem[] = [
  {
    label: "Civil & Structural Engineering",
    href: "/services/civil-structural-engineering",
    description: "Infrastructure and structural design services.",
  },
  {
    label: "MEP Engineering",
    href: "/services/mep-engineering",
    description: "Mechanical, electrical & plumbing systems.",
  },
  {
    label: "Archi & Design",
    href: "/services/architectural-design",
    description: "Architectural planning and design solutions.",
  },
  {
    label: "Industrial & Instrumentation",
    href: "/services/industrial-instrumentation",
    description: "Industrial systems and instrumentation design.",
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
        className={`relative text-sm font-medium transition-colors ${active
          ? "text-slate-900"
          : "text-slate-500 hover:text-slate-900"
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

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glow behind navbar */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />

      <nav className="max-w-6xl mx-auto px-4 mt-3">
        <div className="relative flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_18px_35px_rgba(15,23,42,0.08)]">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <Image
                src="/images/ehm-logo-3d.png"
                alt="EHM Tech logo"
                fill
                className="object-contain"
                sizes="100px"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-[20px] md:text-[22px] font-extrabold tracking-tight
                             block bg-gradient-to-r from-softSkyCyan via-sunsetPeach to-slateBlue bg-clip-text text-transparent"
                >
                  Technology Services
                </span>
              </div>
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
              <button
                className={`relative flex items-center gap-1 text-sm font-medium transition ${servicesActive || servicesOpen
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
                onClick={() => setServicesOpen(false)}
              >
                Services
                <motion.span
                  className="text-xs"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▾
                </motion.span>
                {(servicesActive || servicesOpen) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-slateBlue to-softSkyCyan shadow-[0_0_8px_rgba(94,234,212,0.6)]"
                  />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <div
                    className="fixed left-0 right-0 z-40 pointer-events-none"
                    style={{ top: "80px", paddingLeft: "1rem", paddingRight: "1rem" }}
                  >
                    <div className="w-full max-w-[960px] mx-auto relative">
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.18 }}
                        className="w-full rounded-2xl border border-slate-200 bg-white backdrop-blur-xl shadow-2xl p-6 space-y-5 pointer-events-auto"
                      >
                        {/* Three-column categories */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                          {/* AI & Digital Solutions */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-sunsetPeach">
                              AI & Digital Solutions
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Automation and digital experiences that scale with you.
                            </p>

                            <div className="mt-3 space-y-2">
                              {aiDigitalServices.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block px-3 py-3 rounded-xl bg-slate-50 border border-transparent hover:border-slateBlue/60 hover:bg-slateBlue/10 transition"
                                >
                                  <div className="text-sm font-medium text-slate-900">
                                    {item.label}
                                  </div>
                                  <p className="text-xs text-slate-500">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Construction */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-softSkyCyan">
                              Construction
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Complete construction support from estimation to delivery.
                            </p>

                            <div className="mt-3 space-y-2">
                              {constructionServices.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block px-3 py-3 rounded-xl bg-slate-50 border border-transparent hover:border-softSkyCyan/50 hover:bg-softSkyCyan/10 transition"
                                >
                                  <div className="text-sm font-medium text-slate-900">
                                    {item.label}
                                  </div>
                                  <p className="text-xs text-slate-500">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Engineering */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-softSkyCyan">
                              Engineering
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Technical depth for accurate, buildable projects.
                            </p>

                            <div className="mt-3 space-y-2">
                              {engineeringServices.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block px-3 py-3 rounded-xl bg-slate-50 border border-transparent hover:border-softSkyCyan/50 hover:bg-softSkyCyan/10 transition"
                                >
                                  <div className="text-sm font-medium text-slate-900">
                                    {item.label}
                                  </div>
                                  <p className="text-xs text-slate-500">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer row */}
                        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                          <span>Not sure what you need? Let&apos;s talk.</span>
                          <Link
                            href="/contact"
                            className="rounded-full px-4 py-1.5 bg-slateBlue text-white text-sm font-medium hover:bg-slateBlue/90"
                          >
                            Contact Us →
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {navLink("/portfolio", "Portfolio")}
            {navLink("/careers", "Careers")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-10 flex flex-col gap-1.5"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
            <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[80px] z-40 bg-white/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-6 text-base font-medium text-slate-800 pb-20">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Home
              </Link>

              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between py-2"
                >
                  <span>Services</span>
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-500"
                  >
                    ▾
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-6 text-sm">
                        <div>
                          <p className="font-semibold text-sunsetPeach mb-2 text-xs uppercase tracking-wider">
                            AI & Digital Solutions
                          </p>
                          <div className="space-y-3 border-l-2 border-slate-100 pl-3">
                            {aiDigitalServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-slate-600 hover:text-slate-900 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-softSkyCyan mb-2 text-xs uppercase tracking-wider">
                            Construction
                          </p>
                          <div className="space-y-3 border-l-2 border-slate-100 pl-3">
                            {constructionServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-slate-600 hover:text-slate-900 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-softSkyCyan mb-2 text-xs uppercase tracking-wider">
                            Engineering
                          </p>
                          <div className="space-y-3 border-l-2 border-slate-100 pl-3">
                            {engineeringServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-slate-600 hover:text-slate-900 transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Portfolio
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Careers
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-slate-100"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

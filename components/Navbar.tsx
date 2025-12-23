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
    label: "Architecture & Design",
    href: "/services/architectural-design",
    description: "Architectural planning and design solutions.",
  },
  {
    label: "Industrial & Instrumentation",
    href: "/services/industrial-instrumentation",
    description: "Industrial systems and instrumentation design.",
  },
];
const aiDigitalServices: ServiceItem[] = [
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "Modern, performant websites & dashboards.",
  },
  {
    label: "Design & Branding",
    href: "/services/designing",
    description: "Creative design solutions for digital experiences.",
  },
  {
    label: "Digital Marketing",
    href: "/services/marketing",
    description: "Social media, email & digital marketing campaigns.",
  },
  {
    label: "AI",
    href: "/services/ai-automation",
    description: "Chatbots, workflows and smart assistants.",
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
        className="relative group"
      >
        <motion.span
          whileHover={{ y: -2 }}
          className={`inline-block text-sm font-medium transition-colors ${active
            ? "text-slate-900"
            : "text-slate-500 group-hover:text-slate-900"
            }`}
        >
          {label}
        </motion.span>
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-slateBlue to-softSkyCyan shadow-[0_0_8px_rgba(94,234,212,0.6)]"
          />
        )}
        {!active && (
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-slateBlue to-softSkyCyan group-hover:w-full transition-all duration-300" />
        )}
      </Link>
    );
  };

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glow behind navbar */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />

      <nav className="px-4 mt-5">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 py-3 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_18px_35px_rgba(15,23,42,0.08)]">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="relative h-20 w-32 flex items-center justify-center">
              <Image
                src="/images/ehm-logo.png"
                alt="EHM Tech logo"
                fill
                className="object-contain"
                sizes="500px"
                priority
              />
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
              <Link
                href="/services"
                className={`relative flex items-center gap-1 text-sm font-medium transition ${servicesActive || servicesOpen
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
                  }`}
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
              </Link>

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
                          {/* Construction */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#046BC6]">
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
                                  className="block group"
                                >
                                  <motion.div
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    className="px-3 py-3 rounded-xl bg-slate-50 border border-transparent group-hover:border-softSkyCyan/50 group-hover:bg-softSkyCyan/10 transition-all duration-300 group-hover:shadow-md"
                                  >
                                    <div className="text-sm font-medium text-slate-900">
                                      {item.label}
                                    </div>
                                    <p className="text-xs text-slate-500">
                                      {item.description}
                                    </p>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Engineering */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#046BC6]">
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
                                  className="block group"
                                >
                                  <motion.div
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    className="px-3 py-3 rounded-xl bg-slate-50 border border-transparent group-hover:border-softSkyCyan/50 group-hover:bg-softSkyCyan/10 transition-all duration-300 group-hover:shadow-md"
                                  >
                                    <div className="text-sm font-medium text-slate-900">
                                      {item.label}
                                    </div>
                                    <p className="text-xs text-slate-500">
                                      {item.description}
                                    </p>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* AI & Digital Solutions */}
                          <div>
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#046BC6]">
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
                                  className="block group"
                                >
                                  <motion.div
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    className="px-3 py-3 rounded-xl bg-slate-50 border border-transparent group-hover:border-slateBlue/60 group-hover:bg-slateBlue/10 transition-all duration-300 group-hover:shadow-md"
                                  >
                                    <div className="text-sm font-medium text-slate-900">
                                      {item.label}
                                    </div>
                                    <p className="text-xs text-slate-500">
                                      {item.description}
                                    </p>
                                  </motion.div>
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
            className="md:hidden z-10 flex flex-col gap-1.5 w-10 h-10 items-center justify-center relative group"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-slate-900 rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-slate-900 rounded-full origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-[80px] z-30 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-[80px] bottom-0 z-40 w-[85%] max-w-sm bg-white/98 backdrop-blur-xl shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-1 text-base font-medium text-slate-800">
                {/* Close button */}
                <button
                  onClick={() => setMobileOpen(false)}
                  className="self-end p-2 -mt-2 -mr-2 rounded-full hover:bg-slate-100 transition-colors mb-4"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100"
                >
                  Home
                </Link>

              <div className="border-b border-slate-100 pb-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
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
                      <div className="pl-2 pt-2 space-y-4 text-sm">
                        <div className="bg-slate-50/50 rounded-xl p-3">
                          <p className="font-semibold text-[#046BC6] mb-3 text-xs uppercase tracking-wider">
                            Construction
                          </p>
                          <div className="space-y-2">
                            {constructionServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-3 text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-xl p-3">
                          <p className="font-semibold text-[#046BC6] mb-3 text-xs uppercase tracking-wider">
                            Engineering
                          </p>
                          <div className="space-y-2">
                            {engineeringServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-3 text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-xl p-3">
                          <p className="font-semibold text-[#046BC6] mb-3 text-xs uppercase tracking-wider">
                            AI & Digital Solutions
                          </p>
                          <div className="space-y-2">
                            {aiDigitalServices.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-3 text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg transition-colors"
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
                className="py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100"
              >
                Portfolio
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100"
              >
                Careers
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-100"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl bg-slateBlue text-white hover:bg-slateBlue/90 transition-colors mt-4 text-center font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ServiceItem = {
  label: string;
  href: string;
};

const serviceItems: ServiceItem[] = [
  { label: "Engineering Design", href: "/services/engineering-design" },
  { label: "Cost Estimation", href: "/services/cost-estimation" },
  { label: "Quantity Takeoff", href: "/services/quantity-takeoff" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Marketing", href: "/services/marketing" },
];

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="site-header"
    >
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="EHM Technology Services home">
          <span className="brand-logo-wrap">
            <Image
              src="/images/ehm-logo.png"
              alt="EHM Technology Services logo"
              fill
              className="brand-logo"
              sizes="160px"
              priority
            />
          </span>
          <span className="brand-text">EHM Technology Services</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          {mainNav.slice(0, 1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-item"
            >
              {item.label}
              {isActive(item.href) ? <motion.span layoutId="nav-active-pill" className="nav-active-pill" /> : null}
            </Link>
          ))}

          <div className="nav-dropdown">
            <Link
              href="/services"
              className="nav-item"
            >
              Services
              {isActive("/services") ? <motion.span layoutId="nav-active-pill" className="nav-active-pill" /> : null}
            </Link>
            <div className="dropdown-menu">
              {serviceItems.map((item) => (
                <Link key={item.href} href={item.href} className="dropdown-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {mainNav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-item"
            >
              {item.label}
              {isActive(item.href) ? <motion.span layoutId="nav-active-pill" className="nav-active-pill" /> : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Link href="/" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {serviceItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-sub-link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Portfolio
            </Link>
            <Link href="/careers" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

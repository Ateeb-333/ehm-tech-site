"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type StickyCTAProps = {
  text?: string;
  href?: string;
  showAfter?: number; // pixels scrolled
  className?: string;
};

export function StickyCTA({
  text = "Get a Quote",
  href = "/contact",
  showAfter = 300,
  className = "",
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 0);
      setIsVisible(scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 z-50 ${className}`}
        >
          <Link
            href={href}
            className="group flex items-center gap-3 rounded-full bg-slateBlue px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300"
          >
            <span>{text}</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


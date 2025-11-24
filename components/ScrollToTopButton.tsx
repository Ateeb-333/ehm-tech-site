"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-tr from-slateBlue to-softSkyCyan p-[2px] shadow-soft"
          aria-label="Scroll to top"
        >
          <div className="rounded-full bg-slate-950 px-3 py-2 text-xs font-medium text-gray-100 flex items-center gap-1.5">
            <span>↑</span>
            <span>Top</span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

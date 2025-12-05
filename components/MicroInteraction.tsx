"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MicroInteractionProps = {
  children: ReactNode;
  type?: "hover" | "tap" | "magnetic" | "glow";
  className?: string;
};

export function MicroInteraction({
  children,
  type = "hover",
  className = "",
}: MicroInteractionProps) {
  const variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
    magnetic: {
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
    glow: {
      boxShadow: [
        "0 0 0px rgba(4, 107, 198, 0)",
        "0 0 20px rgba(4, 107, 198, 0.5)",
        "0 0 0px rgba(4, 107, 198, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      whileHover={type === "hover" ? variants.hover : undefined}
      whileTap={type === "tap" ? variants.tap : undefined}
      animate={type === "magnetic" ? variants.magnetic : type === "glow" ? variants.glow : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hover lift effect
export function HoverLift({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Ripple effect on click
export function RippleButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <motion.span
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}


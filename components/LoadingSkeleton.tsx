"use client";

import { motion } from "framer-motion";

type SkeletonProps = {
  className?: string;
  variant?: "text" | "card" | "image" | "circle";
  lines?: number;
  width?: string;
  height?: string;
};

export function Skeleton({
  className = "",
  variant = "text",
  lines = 1,
  width,
  height,
}: SkeletonProps) {
  const baseClasses = "bg-slate-200 rounded animate-pulse";

  if (variant === "circle") {
    return (
      <div
        className={`${baseClasses} rounded-full ${className}`}
        style={{ width: width || "40px", height: height || "40px" }}
      />
    );
  }

  if (variant === "image") {
    return (
      <div
        className={`${baseClasses} ${className}`}
        style={{
          width: width || "100%",
          height: height || "200px",
        }}
      />
    );
  }

  if (variant === "card") {
    return (
      <div className={`${baseClasses} p-6 space-y-4 ${className}`}>
        <div className="h-4 bg-slate-300 rounded w-3/4"></div>
        <div className="h-4 bg-slate-300 rounded w-full"></div>
        <div className="h-4 bg-slate-300 rounded w-5/6"></div>
      </div>
    );
  }

  // Text variant
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${baseClasses} h-4`}
          style={{
            width: i === lines - 1 ? width || "60%" : width || "100%",
          }}
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section-card p-6 space-y-4"
    >
      <Skeleton variant="text" lines={1} width="40%" />
      <Skeleton variant="text" lines={2} />
      <Skeleton variant="text" lines={1} width="60%" />
    </motion.div>
  );
}

export function ImageSkeleton({ aspect = "wide" }: { aspect?: "wide" | "square" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl overflow-hidden"
    >
      <Skeleton
        variant="image"
        height={aspect === "square" ? "400px" : "250px"}
        className="w-full"
      />
    </motion.div>
  );
}


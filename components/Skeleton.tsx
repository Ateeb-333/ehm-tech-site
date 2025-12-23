"use client";

import { motion } from "framer-motion";

type SkeletonProps = {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animate?: boolean;
};

export function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  animate = true,
}: SkeletonProps) {
  const baseClasses = "bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%]";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded",
    rounded: "rounded-xl",
  };

  const style = {
    width: width || "100%",
    height: height || (variant === "text" ? "1rem" : "auto"),
  };

  if (animate) {
    return (
      <motion.div
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={style}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="section-card p-5 space-y-4">
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="text" width="60%" />
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="section-card p-5 space-y-3">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width="70%" height={24} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="85%" />
      <div className="flex gap-2 pt-2">
        <Skeleton variant="rounded" width={60} height={24} />
        <Skeleton variant="rounded" width={80} height={24} />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="section-card p-0 overflow-hidden">
      <Skeleton variant="rectangular" height={200} />
      <div className="p-5 space-y-3">
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="section-card p-6 space-y-4">
      <div className="space-y-2">
        <Skeleton variant="text" width="20%" height={12} />
        <Skeleton variant="rounded" height={40} />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" width="20%" height={12} />
        <Skeleton variant="rounded" height={40} />
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" width="30%" height={12} />
        <Skeleton variant="rounded" height={100} />
      </div>
      <Skeleton variant="rounded" height={44} />
    </div>
  );
}

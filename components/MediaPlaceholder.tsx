"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type MediaPlaceholderProps = {
  label: string;
  caption?: string;
  badge?: string;
  aspect?: "wide" | "square";
  accent?: "cyan" | "peach" | "violet";
  imageSrc?: string;
  imageAlt?: string;
};

const accentMap = {
  cyan: "from-softSkyCyan/35 via-transparent to-slateBlue/40",
  peach: "from-sunsetPeach/40 via-transparent to-slateBlue/30",
  violet: "from-slateBlue/45 via-transparent to-softSkyCyan/30",
};

export const MediaPlaceholder = ({
  label,
  caption = "High-fidelity preview coming soon",
  badge = "In progress",
  aspect = "wide",
  accent = "cyan",
  imageSrc,
  imageAlt,
}: MediaPlaceholderProps) => {
  const gradient = accentMap[accent];
  const aspectClass =
    aspect === "square" ? "aspect-square" : "h-48 md:h-[15.5rem]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft ${aspectClass}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          fill
          sizes="(max-width:768px) 100vw, 480px"
          className="object-cover brightness-105"
          priority={false}
        />
      ) : (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-20">
            <div className="grid h-full grid-cols-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`col-${idx}`}
                  className="border-l border-white/50 first:border-l-0"
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between bg-gradient-to-t from-white via-white/40 to-transparent p-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-900">
            {badge}
          </span>
          <span className="text-slate-500">
            {imageSrc ? "Live capture" : "Placeholder"}
          </span>
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900 drop-shadow">
            {label}
          </p>
          <p className="text-sm text-slate-700 drop-shadow">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
};


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
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-soft ${aspectClass}`}
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
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 blur-[1px]`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-30">
            <div className="grid h-full grid-cols-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={`col-${idx}`}
                  className="border-l border-white/5 first:border-l-0"
                />
              ))}
            </div>
          </div>
        </>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gray-200">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white">
            {badge}
          </span>
          <span className="text-gray-300">
            {imageSrc ? "Live capture" : "Placeholder"}
          </span>
        </div>
        <div>
          <p className="text-lg font-semibold text-white drop-shadow">{label}</p>
          <p className="text-sm text-gray-100 drop-shadow">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
};


import type { ReactNode } from "react";

type GlyphName =
  | "shield"
  | "sync"
  | "automation"
  | "mobile"
  | "docs"
  | "workflow"
  | "engineering"
  | "marketing"
  | "design"
  | "integration"
  | "operations"
  | "governance"
  | "discovery"
  | "roadmap"
  | "delivery"
  | "web"
  | "hq"
  | "global"
  | "response"
  | "lead"
  | "strategy"
  | "estimation"
  | "growth";

const glyphMap: Record<GlyphName, ReactNode> = {
  shield: (
    <path d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3zM9.5 12.4l1.9 1.9 3.6-3.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  sync: (
    <path d="M7 7a7 7 0 0111 1M18 7v3h-3M17 17a7 7 0 01-11-1M6 17v-3h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  automation: (
    <path d="M8 9h8M12 5v4m0 6v4M5 12h4m6 0h4M8.5 15.5l-2.5 2.5M18 6l-2.5 2.5M8.5 8.5L6 6m12 12l-2.5-2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  mobile: (
    <path d="M9 3h6a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2zm2 2h2M11 18h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  docs: (
    <path d="M8 3h6l4 4v14H8a2 2 0 01-2-2V5a2 2 0 012-2zm6 0v4h4M10 12h6M10 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  workflow: (
    <path d="M4 7h6v4H4zM14 7h6v4h-6zM9 13h6v4H9zM10 9h4M17 11v2M12 11v2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  engineering: (
    <path d="M5 15l5-5 3 3 6-6M6 19h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  marketing: (
    <path d="M5 18V9m5 9V6m5 12v-4m5 4V10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  design: (
    <path d="M12 4l7 7-7 9-7-9 7-7zM9 11h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  integration: (
    <path d="M7 7h4v4H7zM13 7h4v4h-4zM10 13h4v4h-4M11 9h2M15 11v2M9 11v2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  operations: (
    <path d="M4 18h16M6 14h3v4H6zM11 10h3v8h-3zM16 6h3v12h-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  governance: (
    <path d="M12 4l8 4-8 4-8-4 8-4zm-5 7v5a5 5 0 0010 0v-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  discovery: (
    <path d="M11 4a7 7 0 105.2 11.7L20 19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  roadmap: (
    <path d="M5 18V8a3 3 0 013-3h8v6h-4v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  delivery: (
    <path d="M3 8h10v8H3zM13 10h4l3 3v3h-7zM7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  web: (
    <path d="M3 6h18v12H3zM3 10h18M8 6v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  hq: (
    <path d="M5 20V8l7-4 7 4v12M9 20v-5h6v5M5 10h14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  global: (
    <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm-7 9h14M12 3c2.2 2.4 2.2 15.6 0 18M12 3c-2.2 2.4-2.2 15.6 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  response: (
    <path d="M12 5v7l4 2M5 12a7 7 0 111.8 4.7L5 19v-2.3A6.9 6.9 0 015 12z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  lead: (
    <path d="M12 13a4 4 0 100-8 4 4 0 000 8zm-6 7a6 6 0 1112 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  strategy: (
    <path d="M4 18l5-5 3 3 7-7M16 9h3v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  estimation: (
    <path d="M7 4h10v16H7zM10 8h4M10 12h4M10 16h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  growth: (
    <path d="M5 19h14M6 15l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

type IconGlyphProps = {
  name: GlyphName;
  className?: string;
};

export function IconGlyph({ name, className = "" }: IconGlyphProps) {
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#2a5979] bg-gradient-to-br from-[#153047] to-[#111b2d] text-[#5ad7ff] ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {glyphMap[name]}
      </svg>
    </span>
  );
}

type SectionDividerProps = {
  label?: string;
};

export function SectionDivider({ label = "" }: SectionDividerProps) {
  return (
    <div className="visual-divider" aria-hidden="true">
      <span className="visual-divider-line" />
      {label ? <span className="visual-divider-chip">{label}</span> : null}
      <span className="visual-divider-line" />
    </div>
  );
}

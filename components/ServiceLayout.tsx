"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { MediaPlaceholder } from "./MediaPlaceholder";

type ServiceStat = { label: string; value: string; detail?: string };
type ApproachStep = { title: string; detail: string };
type FaqItem = { question: string; answer: string };
type PackageItem = { title: string; items: string[]; note?: string };

type ServiceLayoutProps = {
  title: string;
  groupLabel: string;
  accent: "engineering" | "digital";
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sideHeading: string;
  sideItems: string[];
  stats?: ServiceStat[];
  approachTitle?: string;
  approach?: ApproachStep[];
  toolsTitle?: string;
  tools?: string[];
  faqsTitle?: string;
  faqs?: FaqItem[];
  ctaNote?: string;
  heroMedia?: ReactNode;
  heroMediaLabel?: string;
  signalsTitle?: string;
  signals?: string[];
  packagesTitle?: string;
  packages?: PackageItem[];
  children?: ReactNode;
};

const accentClass = (accent: ServiceLayoutProps["accent"]) => {
  if (accent === "engineering") return "text-softSkyCyan";
  return "text-sunsetPeach";
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ServiceLayout({
  title,
  groupLabel,
  accent,
  intro,
  primaryCta,
  secondaryCta,
  sideHeading,
  sideItems,
  stats,
  approachTitle = "How we collaborate",
  approach,
  toolsTitle = "Tools & platforms we tap into",
  tools,
  faqsTitle = "FAQs",
  faqs,
  ctaNote = "Share your context and we’ll respond with the fastest path forward.",
  heroMedia,
  heroMediaLabel,
  signalsTitle = "Signals you might need this",
  signals,
  packagesTitle = "Engagement options",
  packages,
  children,
}: ServiceLayoutProps) {
  return (
    <main className="main-shell space-y-14">
      {/* Hero */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 via-slate-900/50 to-slate-900/80 p-6 md:p-10 shadow-soft"
      >
        <div className="floating-orb floating-orb--cyan -top-16 -right-10 opacity-20" />
        <div className="floating-orb floating-orb--peach -bottom-24 -left-8 opacity-20" />
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-start relative z-10">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${accentClass(
                accent
              )}`}
            >
              {groupLabel}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white leading-snug">
              {title}
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
              {intro}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-slateBlue px-6 py-2.5 font-medium text-white shadow-soft hover:bg-slateBlue/90 transition-colors"
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-medium text-gray-200 hover:border-softSkyCyan/80 transition-colors"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="section-card p-6 backdrop-blur">
              <h3 className="text-sm font-semibold text-gray-200">
                {sideHeading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                {sideItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-softSkyCyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {heroMedia ?? (
                <MediaPlaceholder
                  label={heroMediaLabel ?? `${title} preview`}
                  caption="Visual references will be updated after the next delivery cycle."
                  badge={accent === "engineering" ? "Blueprint" : "Digital"}
                  accent={accent === "engineering" ? "cyan" : "peach"}
                />
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {stats && stats.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel glow-accent p-4 md:p-5 flex flex-col gap-1"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                {stat.label}
              </p>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              {stat.detail && (
                <p className="text-sm text-gray-400">{stat.detail}</p>
              )}
            </div>
          ))}
        </motion.section>
      )}

      {children && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="space-y-12"
        >
          {children}
        </motion.section>
      )}

      {signals && signals.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-card p-6 md:p-7">
            <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
              ALIGNMENT
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              {signalsTitle}
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <span className="mt-1 text-softSkyCyan">▹</span>
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {tools && tools.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-card p-6 md:p-7">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
                  STACK
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {toolsTitle}
                </h2>
              </div>
              <span className="chip">Updated quarterly</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/60 px-4 py-1.5 text-xs font-medium text-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {approach && approach.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white">{approachTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {approach.map((step, idx) => (
              <div key={step.title} className="section-card p-4">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slateBlue text-white text-xs font-semibold">
                  {idx + 1}
                </div>
                <p className="mt-3 font-medium text-gray-100">{step.title}</p>
                <p className="mt-2 text-sm text-gray-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {faqs && faqs.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-card p-6 md:p-7 space-y-4">
            <div>
              <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
                FAQs
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {faqsTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-sm font-semibold text-white">
                    {faq.question}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {packages && packages.length > 0 && (
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-card p-6 md:p-7 space-y-5">
            <div>
              <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
                FORMATS
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {packagesTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{pkg.title}</p>
                    {pkg.note && (
                      <p className="text-xs text-gray-400 mt-1">{pkg.note}</p>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-softSkyCyan">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
            READY WHEN YOU ARE
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Let&apos;s map the next deliverable together
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-xl">{ctaNote}</p>
        </div>
        <a
          href="/contact"
          className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 transition-colors"
        >
          Book a call
        </a>
      </motion.section>
    </main>
  );
}

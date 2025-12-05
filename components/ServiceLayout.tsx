"use client";

import { motion, Variants } from "framer-motion";
import type { ReactNode } from "react";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { FAQAccordion } from "./FAQAccordion";
import { Breadcrumbs } from "./Breadcrumbs";
import { RelatedServices } from "./RelatedServices";

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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
  // Related services data (can be passed as prop or generated)
  const allServices = [
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Modern, performant websites & dashboards.",
      category: "digital",
    },
    {
      title: "Cost Estimation",
      href: "/services/cost-estimation",
      description: "Detailed BOQs and cost breakdowns.",
      category: "construction",
    },
    {
      title: "MEP Engineering",
      href: "/services/mep-engineering",
      description: "Mechanical, electrical & plumbing systems.",
      category: "engineering",
    },
  ];

  return (
    <main className="main-shell space-y-4">
      {/* Breadcrumbs */}
      <Breadcrumbs className="mb-4" />

      {/* Hero */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-r from-white via-white to-slate-50 p-6 md:p-10 shadow-soft"
      >
        <div className="floating-orb floating-orb--cyan -top-16 -right-10 opacity-20" />
        <div className="floating-orb floating-orb--peach -bottom-24 -left-8 opacity-20" />
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-start relative z-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
              {groupLabel}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">
              {title}
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              {intro}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-slateBlue px-6 py-2.5 font-medium text-white shadow-soft hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300"
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 font-medium text-slate-700 hover:border-softSkyCyan/80 hover:bg-slate-50 transition-all duration-300"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}

            <div className="mt-8">
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

          <div className="space-y-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="section-card p-6 backdrop-blur"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {sideHeading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {sideItems.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariant}
                    className="flex gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-softSkyCyan">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats and Content */}
      {(stats && stats.length > 0) || children ? (
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {stats && stats.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariant}
                  whileHover={{ y: -5 }}
                  className="glass-panel glow-accent p-4 md:p-6 flex flex-col gap-1 transition-all duration-300"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  {stat.detail && (
                    <p className="text-sm text-slate-600">{stat.detail}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {children && (
            <motion.div variants={fadeInUp} className="space-y-8">
              {children}
            </motion.div>
          )}
        </motion.section>
      ) : null}

      {/* Signals */}
      {signals && signals.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-card p-6 md:p-7">
            <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
              ALIGNMENT
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {signalsTitle}
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 grid gap-3 text-sm text-slate-600 md:grid-cols-2"
            >
              {signals.map((signal) => (
                <motion.div
                  key={signal}
                  variants={itemVariant}
                  className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3 hover:border-softSkyCyan/50 transition-colors duration-300"
                >
                  <span className="mt-1 text-softSkyCyan">▹</span>
                  <span>{signal}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Tools */}
      {tools && tools.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-card p-6 md:p-7">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
                  STACK
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  {toolsTitle}
                </h2>
              </div>
              <span className="chip">Updated quarterly</span>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 flex flex-wrap gap-3"
            >
              {tools.map((tool) => (
                <motion.span
                  key={tool}
                  variants={itemVariant}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-normal text-slate-700 transition-transform duration-200"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Approach */}
      {approach && approach.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-slate-900">{approachTitle}</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 grid gap-4 md:grid-cols-4"
          >
            {approach.map((step, idx) => (
              <motion.div
                key={step.title}
                variants={itemVariant}
                whileHover={{ y: -5 }}
                className="section-card p-4 transition-all duration-300"
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slateBlue text-white text-xs font-semibold shadow-md">
                  {idx + 1}
                </div>
                <p className="mt-3 font-medium text-slate-900">{step.title}</p>
                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-card p-6 md:p-7 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
                FAQs
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {faqsTitle}
              </h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </motion.section>
      )}

      {/* Packages */}
      {packages && packages.length > 0 && (
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-card p-6 md:p-7 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
                FORMATS
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {packagesTitle}
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 md:grid-cols-3"
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.title}
                  variants={itemVariant}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-white p-3 md:p-4 flex flex-col gap-3 transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{pkg.title}</p>
                    {pkg.note && (
                      <p className="text-xs text-slate-500 mt-1">{pkg.note}</p>
                    )}
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-softSkyCyan">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Related Services */}
      <RelatedServices
        currentService={title}
        services={allServices}
      />

      {/* CTA */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
            READY WHEN YOU ARE
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Let&apos;s map the next deliverable together
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl">{ctaNote}</p>
        </div>
        <a
          href="/contact"
          className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300"
        >
          Book a call
        </a>
      </motion.section>
    </main>
  );
}

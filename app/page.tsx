"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

const serviceCards = [
  {
    title: "Engineering Design",
    text: "Civil, structural, MEP and architecture support.",
    href: "/services/engineering-design",
    image: "/images/engineering-design.jpg",
    glyph: "engineering" as const,
  },
  {
    title: "Cost Estimation",
    text: "BOQs, quantity takeoffs, and bid estimation workflows.",
    href: "/services/cost-estimation",
    image: "/images/cost-estimation.jpg",
    glyph: "estimation" as const,
  },
  {
    title: "Drafting Services",
    text: "2D and 3D drawings with technical documentation.",
    href: "/services/drafting-services",
    image: "/images/drafting-blueprint-preview.jpg",
    glyph: "docs" as const,
  },
  {
    title: "Project Management",
    text: "Coordination and reporting across project phases.",
    href: "/services/project-management",
    image: "/images/project-planning.jpg",
    glyph: "workflow" as const,
  },
  {
    title: "AI Automation",
    text: "Assistants, automation and smart operations tools.",
    href: "/services/ai-automation",
    image: "/images/ai-futuristic-ui.jpg",
    glyph: "automation" as const,
  },
  {
    title: "Web Development",
    text: "Modern websites and internal business tools.",
    href: "/services/web-development",
    image: "/images/coding-keyboard.jpg",
    glyph: "web" as const,
  },
];

const brandMarquee = [
  "Web Design",
  "UI/UX Design",
  "Developer",
  "ISO Developer",
  "Digital Agency",
  "IT Services",
  "Engineering",
  "Automation",
];

const caseStudies = [
  {
    title: "Enterprise PMO Digitization",
    text: "Reporting automation and document governance across multi-site delivery teams.",
    image: "/images/project-workflow.jpg",
    glyph: "workflow" as const,
  },
  {
    title: "MEP Coordination Delivery",
    text: "High-clarity drawing and calculation packs delivered on strict turnaround timelines.",
    image: "/images/mep-engineering.jpg",
    glyph: "engineering" as const,
  },
  {
    title: "Marketing Stack Enablement",
    text: "Campaign execution model with CRM-linked email and social media operations.",
    image: "/images/social-media-dashboard.jpg",
    glyph: "marketing" as const,
  },
];

export default function HomePage() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  return (
    <main className="main-shell space-y-12">
      <motion.section
        className="section-card p-7 md:p-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Creative solutions real results</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-slate-900">
              EHM Technology Services
            </h1>
            <p className="mt-5 text-meta max-w-2xl text-base md:text-lg">
              Your experience is everything to us. We combine engineering, estimation, and digital systems to deliver outcomes that are clear, practical, and scalable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Engineering", "Automation", "Digital Ops"].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Get A Quote
              </Link>
              <Link href="/about" className="btn-secondary">
                About Us
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <motion.article
              className="section-card image-frame overflow-hidden p-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-[260px] md:h-[320px]">
                <Image
                  src="/images/hero-workflow.png"
                  alt="Integrated engineering and digital workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </motion.article>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="kpi-inline">
                <IconGlyph name="delivery" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">240+</p>
                  <p className="kpi-inline-label">Projects</p>
                </div>
              </div>
              <div className="kpi-inline">
                <IconGlyph name="global" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">100%</p>
                  <p className="kpi-inline-label">Client Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="open-band p-4 md:p-5 overflow-hidden"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="marquee-track">
          {[...brandMarquee, ...brandMarquee].map((item, idx) => (
            <span key={`${item}-${idx}`} className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Our Services</p>
            <h2 className="mt-2 text-3xl text-slate-900">Our Services in the world of IT</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#3663D8] hover:text-[#77BEFF]">
            View all services {">"}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <motion.article
              key={service.title}
              className="section-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="image-frame relative mb-4 h-36 overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mb-3 flex items-center justify-between">
                <IconGlyph name={service.glyph} />
              </div>
              <h2 className="text-xl text-slate-900">{service.title}</h2>
              <p className="mt-3 text-meta">{service.text}</p>
              <Link href={service.href} className="mt-4 inline-block text-sm font-semibold text-[#3663D8] hover:text-[#77BEFF]">
                View details {">"}
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <SectionDivider label="Proof" />

      <motion.section
        className="open-section p-8 md:p-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Case Studies</p>
        <h2 className="mt-3 text-3xl text-slate-900">Having clarity of purpose</h2>
        <p className="mt-4 max-w-4xl text-meta text-base">
          Explore how our team solves real project challenges across engineering, estimation, and digital transformation.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.title}
              className="soft-tile p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="image-frame relative mb-4 h-32 overflow-hidden rounded-lg border border-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="mb-3">
                <IconGlyph name={item.glyph} />
              </div>
              <h3 className="text-lg text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-meta">{item.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/portfolio" className="btn-primary">
            Browse Case Studies
          </Link>
          <Link href="/contact" className="btn-secondary">
            Start a Project
          </Link>
        </div>
      </motion.section>

      <section className="open-section p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Delivery Model</p>
        <h2 className="mt-3 text-3xl text-slate-900">How we keep delivery predictable</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[260px] md:h-[320px]">
              <Image
                src="/images/graphics/flow-lines.svg"
                alt="Flow-based delivery model graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Structured kickoff</p>
              <p className="mt-2 text-sm text-meta">Scope, owners, and acceptance criteria are confirmed before execution starts.</p>
            </article>
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Weekly visibility</p>
              <p className="mt-2 text-sm text-meta">Progress snapshots, blockers, and next milestones are shared in a clear format.</p>
            </article>
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Outcome review</p>
              <p className="mt-2 text-sm text-meta">Every phase ends with QA, handover notes, and performance checks.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="open-section p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Trust Signals</p>
        <h2 className="mt-3 text-3xl text-slate-900">Built with accountability, not guesswork</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-meta">Delivery reliability</p>
            <p className="mt-2 text-sm text-meta">Milestone tracking, QA checkpoints, and documented handovers on every engagement.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-meta">Transparent reporting</p>
            <p className="mt-2 text-sm text-meta">Weekly progress snapshots covering outcomes, blockers, and next commitments.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-meta">Cross-domain execution</p>
            <p className="mt-2 text-sm text-meta">Engineering, automation, and digital teams aligned under one practical workflow.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Client Confidence"
        subheading="Teams that rely on our delivery model"
        tone="delivery"
        audienceLine="Trusted by program teams that need predictable outcomes"
        partnerLabels={["Enterprise PMO", "MEP Delivery Team", "Ops Automation Unit", "Digital Growth Squad"]}
        metrics={[
          { label: "Projects", value: "240+" },
          { label: "Client Focus", value: "100%" },
          { label: "Avg Reply", value: "24h" },
        ]}
        testimonial={{
          quote: "The weekly visibility and clear ownership structure helped us move faster with fewer surprises.",
          byline: "Program Coordinator, Regional Infrastructure Team",
        }}
      />
    </main>
  );
}


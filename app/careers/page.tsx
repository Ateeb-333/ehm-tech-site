"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

const roles = [
  {
    title: "Senior Automation Engineer",
    type: "Full-time",
    location: "Remote",
    summary: "Design and ship practical AI automation for client operations.",
    glyph: "automation" as const,
  },
  {
    title: "Technical Project Lead",
    type: "Contract",
    location: "Hybrid",
    summary: "Manage engineering packages, reviews, and stakeholder reporting.",
    glyph: "lead" as const,
  },
  {
    title: "Digital Experience Strategist",
    type: "Part-time",
    location: "Remote",
    summary: "Plan and optimize digital touchpoints across web and campaigns.",
    glyph: "strategy" as const,
  },
  {
    title: "Estimation and Planning Engineer",
    type: "Full-time",
    location: "On-site",
    summary: "Prepare BOQs, costing logic, and project estimation documentation.",
    glyph: "estimation" as const,
  },
];

const stats = [
  { label: "Years of Excellence", value: 8, symbol: "+" },
  { label: "Projects Delivered", value: 240, symbol: "+" },
  { label: "Team Members", value: 45, symbol: "+" },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

function JobCard({ role, index }: { role: (typeof roles)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(79, 125, 255, 0.14)",
      }}
      className="section-card group relative overflow-hidden p-6 cursor-pointer transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-indigo-50/0 group-hover:from-cyan-50/55 group-hover:to-indigo-50/45 transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gradient-label">{role.type}</p>
            <h2 className="mt-2 text-xl text-slate-900 group-hover:text-[#4f7dff] transition-colors">{role.title}</h2>
          </div>
          <IconGlyph name={role.glyph} className="h-12 w-12" />
        </div>

        <p className="mt-3 text-sm text-meta">{role.summary}</p>

        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="my-4 h-1 bg-gradient-to-r from-[#5ad7ff] to-[#4f7dff] rounded-full"
        />

        <p className="mt-4 text-xs text-slate-500 flex items-center gap-2">
          <IconGlyph name="hq" className="h-7 w-7 rounded-lg" /> {role.location}
        </p>

        <motion.a
          href="mailto:info@ehmtechservices.com"
          whileHover={{ x: 5 }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4f7dff] hover:text-[#3663d8] transition-colors group/link"
        >
          Apply via Email
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function CareersPage() {
  return (
    <main className="main-shell space-y-12">
      <Breadcrumbs className="mb-2" />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
        className="section-card p-7 md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label"
            >
              Careers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900"
            >
              Build the systems behind measurable outcomes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-5 text-meta max-w-3xl text-base md:text-lg"
            >
              Join a multidisciplinary team where engineering, digital operations, and accountability come together to deliver high-impact client programs.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Remote-first", "High ownership", "Cross-functional"].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-0">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/images/careers-hiring.jpg"
                  alt="Team collaboration and hiring"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="kpi-inline">
                  <IconGlyph name="growth" className="h-8 w-8 rounded-lg" />
                  <div>
                    <p className="kpi-inline-value">
                      <AnimatedCounter target={stat.value} />{stat.symbol}
                    </p>
                    <p className="kpi-inline-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="open-section p-8 md:p-9"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label"
        >
          Open Positions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 text-3xl text-slate-900"
        >
          Find Your Job Here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 max-w-3xl text-meta"
        >
          Explore active roles built for people who enjoy clarity, ownership, and measurable impact.
        </motion.p>
      </motion.section>

      <SectionDivider label="Opportunities" />

      <section className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
        <article className="section-card overflow-hidden p-0">
          <div className="image-frame relative h-[280px] w-full md:h-[360px]">
            <Image
              src="/images/careers-hiring.jpg"
              alt="Hiring and collaboration environment"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </div>
        </article>
        <div className="grid gap-5">
          <article className="section-card overflow-hidden p-0">
            <div className="image-frame relative h-[168px] w-full">
              <Image
                src="/images/careers-opportunity.png"
                alt="Career opportunity spotlight"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </article>
          <article className="soft-tile p-5">
            <div className="mb-3">
              <IconGlyph name="growth" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Work Culture</p>
            <p className="mt-3 text-sm text-meta">
              Visual-first project reviews, clear communication loops, and high ownership are part of everyday work at EHM.
            </p>
          </article>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role, index) => (
          <JobCard key={role.title} role={role} index={index} />
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="open-section p-8 md:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Why Join EHM</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            "Ownership with clarity on outcomes and timelines.",
            "Cross-domain collaboration between engineering and digital teams.",
            "Growth through high-impact, real client delivery programs.",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "#EFF6FF",
                borderColor: "#3663D8",
              }}
              className="soft-tile px-5 py-5 text-sm text-meta transition-all duration-300 cursor-pointer"
            >
              {benefit}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Hiring Flow</p>
        <h2 className="mt-3 text-2xl text-slate-900">What the recruitment process looks like</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-3">
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Step 1:</span> Portfolio and role-fit review.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Step 2:</span> Technical or case-based interview.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Step 3:</span> Team conversation and expectations alignment.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Step 4:</span> Offer and onboarding plan.</p></article>
          </div>
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[250px] md:h-[320px]">
              <Image
                src="/images/graphics/signal-network.svg"
                alt="Hiring process network graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Candidate Promise</p>
        <h2 className="mt-3 text-2xl text-slate-900">What applicants can expect from us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Respectful process</p>
            <p className="mt-2 text-sm text-meta">Clear communication and practical timelines throughout the hiring flow.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Role clarity</p>
            <p className="mt-2 text-sm text-meta">Expectations, ownership, and growth paths are discussed transparently.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Feedback culture</p>
            <p className="mt-2 text-sm text-meta">We value constructive dialogue and continuous improvement from both sides.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Culture Signals"
        subheading="What current teammates value most"
        tone="talent"
        audienceLine="Designed for builders who want ownership, growth, and practical impact"
        partnerLabels={["Automation Team", "Project Delivery Team", "Design and Engineering Team", "Operations and PMO"]}
        metrics={[
          { label: "Team Members", value: "45+" },
          { label: "Projects", value: "240+" },
          { label: "Work Mode", value: "Hybrid" },
        ]}
        testimonial={{
          quote: "Ownership is real here. You can see your work move from idea to measurable impact.",
          byline: "Team Member, Cross-Functional Delivery",
        }}
      />
    </main>
  );
}


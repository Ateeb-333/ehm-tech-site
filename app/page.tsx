"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.35 },
  }),
};

const marqueeItems = [
  "Industrial design support",
  "AI copilots",
  "Bespoke dashboards",
  "Project documentation",
  "Automation sprints",
  "Marketing systems",
];

const capabilityGroups = [
  {
    label: "Engineering Ops",
    pillars: [
      "MEP & structural coordination",
      "Clash detection & markups",
      "Tender and IFC support",
    ],
  },
  {
    label: "Automation",
    pillars: [
      "Internal knowledge bots",
      "Workflow orchestration",
      "Document understanding",
    ],
  },
  {
    label: "Digital Experience",
    pillars: [
      "Experience-led websites",
      "Multi-channel campaigns",
      "Data-informed UX iterations",
    ],
  },
];

const partnerLogos = [
  { name: "Apex Build", tag: "Industrial" },
  { name: "Fluxbyte", tag: "Automation" },
  { name: "Northwind Ops", tag: "Logistics" },
  { name: "Kairo Studio", tag: "Creative" },
  { name: "Linea Developers", tag: "Real estate" },
];

const engagementTracks = [
  {
    title: "Sprint",
    duration: "2-4 weeks",
    bestFor: "Defined deliverable with tight scope",
    includes: ["Daily async updates", "Single milestone review", "Lightweight QA"],
  },
  {
    title: "Embedded",
    duration: "6-12 weeks",
    bestFor: "Multiple streams that need one integrated team",
    includes: ["Shared rituals & tooling", "Rolling backlog", "Flexible priorities"],
  },
  {
    title: "Advisory",
    duration: "Quarterly",
    bestFor: "Leadership enablement & ongoing QA",
    includes: ["Executive reviews", "Playbooks & audits", "Office hours"],
  },
];

const resources = [
  {
    title: "Engineering handover checklist",
    desc: "A simple Notion framework to keep authorities and clients aligned.",
    type: "Template",
  },
  {
    title: "Automation readiness audit",
    desc: "Questions we use to judge if a workflow is automation-ready.",
    type: "Guide",
  },
  {
    title: "Website performance playbook",
    desc: "Checklist for shipping fast, accessible Next.js frontends.",
    type: "Playbook",
  },
];

const testimonials = [
  {
    quote:
      "EHM plugged into our engineering team like they’d been here for years. Iterations were quick and documentation spotless.",
    author: "Farah Siddiqui",
    role: "Project Director, Apex Build",
  },
  {
    quote:
      "Their automation sprint eliminated two full days of manual updates every week. The team finally focuses on high-leverage work.",
    author: "Liam Ortega",
    role: "Head of Ops, Fluxbyte",
  },
  {
    quote:
      "From strategy to shipping the site, everything felt intentional. We launched in record time without sacrificing polish.",
    author: "Nadia Alvi",
    role: "Managing Partner, Kairo Studio",
  },
];

const faqs = [
  {
    question: "Do you handle standalone engagements or long-term retainers?",
    answer:
      "Both. We can ship a focused project in 3-6 weeks, embed alongside your team for a longer stretch, or set up a monthly retainer for ongoing tweaks.",
  },
  {
    question: "Where are you based and how do collaborations happen?",
    answer:
      "We are remote-first with coverage across GCC, EU and APAC time zones. Collaboration happens via Notion, Loom, weekly calls and structured updates.",
  },
  {
    question: "What if we only need part of the stack?",
    answer:
      "Totally fine. You can engage us just for estimation, docs cleanup, an automation sprint, or a website refresh—everything is modular.",
  },
];

export default function HomePage() {
  return (
    <main className="main-shell">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-center"
      >
        <div>
          <span className="chip mb-4">
            <span className="mr-2 text-xs">●</span> Engineering • Estimation •
            AI Automation
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Technical projects,
            <span className="block bg-gradient-to-r from-softSkyCyan via-sunsetPeach to-slateBlue bg-clip-text text-transparent">
              delivered with modern tools.
            </span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-sm md:text-base">
            EHM Tech Services combines classic engineering discipline with
            modern automation and web technologies. From design and estimation to
            AI-powered digital workflows, we help you move faster with more
            control.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90"
            >
              Book a project call
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-200 hover:border-softSkyCyan/80"
            >
              Explore services
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-gray-400">
            <span>• Engineering & estimation support</span>
            <span>• AI automation & digital ops</span>
            <span>• Web & marketing execution</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="space-y-4">
          <MediaPlaceholder
            label="EHM control room"
            caption="Snapshots of dashboards, playbooks and automations we’re currently refining."
            badge="Live build"
            aspect="wide"
            accent="violet"
            imageSrc="/images/hero-workflow.svg"
            imageAlt="EHM workflow canvas mock"
          />
          <div className="section-card p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.24em]">
              QUICK GLANCE
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-gray-300">
              {[
                { label: "Weekly ship cadence", value: "3-5 drops" },
                { label: "Disciplines synced", value: "Engineering · AI · Web" },
                { label: "Avg. response", value: "< 12 hrs" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Marquee */}
      <motion.section
        className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="marquee-track py-4 text-xs md:text-sm uppercase tracking-[0.3em] text-gray-300">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={`${item}-${idx}`} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="text-slateBlue">✺</span>
            </span>
          ))}
        </div>
      </motion.section>

      {/* Partners */}
      <motion.section
        className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
              TRUSTED BY OPS & DIGITAL TEAMS
            </p>
            <p className="mt-1 text-sm text-gray-400">
              We embed quietly across industries that need both rigor and speed.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-200">
            {partnerLogos.map((partner) => (
              <span
                key={partner.name}
                className="rounded-full border border-white/15 px-3 py-1 text-nowrap"
              >
                {partner.name} • {partner.tag}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick service overview */}
      <motion.section
        className="mt-16 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            title: "Engineering & Estimation",
            body: "Design, BOQs, documentation and technical support for complex projects.",
            accent: "Engineering focus with digital speed.",
          },
          {
            title: "AI Automation",
            body: "Chatbots, workflows and smart integrations tailored to your stack.",
            accent: "Start small, automate the boring work.",
          },
          {
            title: "Web & Growth",
            body: "Websites, landing pages, social media and email that actually support sales.",
            accent: "Clear messaging, measurable impact.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            variants={sectionVariant}
            custom={i}
            className="section-card p-5"
          >
            <p className="text-xs font-semibold text-softSkyCyan">
              0{i + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">{card.body}</p>
            <p className="mt-3 text-xs text-gray-400">{card.accent}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Capability matrix */}
      <motion.section
        className="mt-16 grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {capabilityGroups.map((group, idx) => (
          <motion.div
            key={group.label}
            variants={sectionVariant}
            custom={idx}
            className="section-card p-5 flex flex-col gap-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Capability area
            </p>
            <h3 className="text-xl font-semibold text-white">{group.label}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {group.pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-2">
                  <span className="text-softSkyCyan mt-1">▹</span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Ops snapshots */}
      <motion.section
        className="mt-16 grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            label: "Blueprint workspace",
            caption: "Realtime markups, RFIs and approvals for mechanical systems.",
            badge: "Engineering",
            accent: "cyan",
            imageSrc: "/images/ops-canvas.svg",
          },
          {
            label: "Automation cockpit",
            caption: "Chain-of-thought logs and guardrails for AI copilots.",
            badge: "AI Ops",
            accent: "peach",
            imageSrc: "/images/automation-lab.svg",
          },
          {
            label: "Experience gallery",
            caption: "Component library previews for upcoming launches.",
            badge: "Digital",
            accent: "violet",
            imageSrc: "/images/hero-workflow.svg",
          },
        ].map((item) => (
          <MediaPlaceholder
            key={item.label}
            label={item.label}
            caption={item.caption}
            badge={item.badge}
            accent={item.accent as "cyan" | "peach" | "violet"}
            aspect="square"
            imageSrc={item.imageSrc}
            imageAlt={item.label}
          />
        ))}
      </motion.section>

      {/* Engagement tracks */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={sectionVariant} custom={0} className="mb-6">
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
            CHOOSE YOUR MODE
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Engagement options tuned to your bandwidth.
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-2xl">
            Start with a sprint, scale into embedded support, or keep us on retainer as fractional leadership.
          </p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {engagementTracks.map((track, idx) => (
            <motion.div
              key={track.title}
              variants={sectionVariant}
              custom={idx + 1}
              className="section-card p-5 flex flex-col gap-3"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  {track.duration}
                </p>
                <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                <p className="text-sm text-gray-300">{track.bestFor}</p>
              </div>
              <ul className="text-sm text-gray-200 space-y-2">
                {track.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-softSkyCyan">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={sectionVariant} custom={0}>
          <h2 className="text-2xl font-semibold text-white">
            A simple, structured way of working
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-xl">
            Whether we&apos;re helping with engineering design or AI automation,
            we follow a predictable, low-friction flow.
          </p>
        </motion.div>
        <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            "Discovery & scoping",
            "Design / automation blueprint",
            "Execution & iteration",
            "Handover & ongoing support",
          ].map((step, idx) => (
            <motion.div
              key={step}
              variants={sectionVariant}
              custom={idx + 1}
              className="section-card p-4"
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slateBlue text-white text-xs font-semibold">
                {idx + 1}
              </div>
              <p className="mt-3 font-medium text-gray-100">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Case highlight */}
      <motion.section
        className="mt-16 grid gap-6 md:grid-cols-[1.2fr,1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={sectionVariant}
          custom={0}
          className="section-card p-6 md:p-7"
        >
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
            RECENT HIGHLIGHT
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Automated design-review assistant
          </h3>
          <p className="mt-3 text-sm text-gray-300">
            Built a custom AI assistant that ingests drawings, RFIs and specs,
            then answers coordination questions for a manufacturing client. The
            workflow shaved 18 hours per week from the engineering team.
          </p>
          <div className="mt-5 grid md:grid-cols-3 gap-3 text-xs">
            {[
              { label: "Timeline", value: "4 weeks" },
              { label: "Stack", value: "Next.js + LangChain + Notion" },
              { label: "Impact", value: "35% faster approvals" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px]">
                  {item.label}
                </p>
                <p className="mt-1 text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={sectionVariant}
          custom={1}
          className="section-card p-6 flex flex-col gap-4"
        >
          <p className="text-sm font-semibold text-white">Snapshot timeline</p>
          {[
            "Week 01 – Discovery, KPI alignment, data intake",
            "Week 02 – Prototype & feedback loop with SMEs",
            "Week 03 – Integrations, guardrails, testing",
            "Week 04 – Launch, training, adoption playbook",
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-gray-300">
              <span className="text-softSkyCyan">●</span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Resource highlights */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={sectionVariant} custom={0}>
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
            TOOLKIT
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            A few resources we share with partners.
          </h2>
        </motion.div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {resources.map((resource, idx) => (
            <motion.div
              key={resource.title}
              variants={sectionVariant}
              custom={idx + 1}
              className="section-card p-5 flex flex-col gap-3"
            >
              <span className="chip w-fit">{resource.type}</span>
              <p className="text-lg font-semibold text-white">{resource.title}</p>
              <p className="text-sm text-gray-300">{resource.desc}</p>
              <a
                href="/contact"
                className="text-sm text-softSkyCyan underline underline-offset-4 hover:text-softSkyCyan/80"
              >
                Request access →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={sectionVariant}
          custom={0}
          className="mb-6 max-w-2xl"
        >
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
            PROOF
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Teams trust us with the critical bits of their stack.
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.author}
              variants={sectionVariant}
              custom={idx + 1}
              className="section-card p-5 flex flex-col gap-4"
            >
              <p className="text-sm text-gray-300">{item.quote}</p>
              <div>
                <p className="text-sm font-semibold text-white">
                  {item.author}
                </p>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="mt-16 section-card p-6 md:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={sectionVariant} custom={0}>
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.2em]">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            A few things clients ask before we kick off
          </h2>
        </motion.div>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              variants={sectionVariant}
              custom={idx + 1}
              className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
            >
              <p className="text-sm font-semibold text-white">{faq.question}</p>
              <p className="mt-1 text-sm text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="mt-16 section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <p className="text-xs font-semibold text-softSkyCyan uppercase tracking-[0.18em]">
            NEXT STEP
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Have a project or workflow in mind?
          </h2>
          <p className="mt-2 text-sm text-gray-300 max-w-xl">
            Share a bit about your current situation and we&apos;ll respond with
            possible approaches, timelines and ways we can help.
          </p>
        </div>
        <a
          href="/contact"
          className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90"
        >
          Start the conversation →
        </a>
      </motion.section>
    </main>
  );
}

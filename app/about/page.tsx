"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";

const stats = [
  {
    value: "12+ years",
    label: "Engineering & delivery experience",
  },
  {
    value: "4-6 hrs",
    label: "Daily overlap with client time zones",
  },
  {
    value: "30+",
    label: "Systems & tools we embed into",
  },
];

const principles = [
  "Start from real constraints and site realities.",
  "Communicate with clean diagrams, not jargon.",
  "Automate only what boosts throughput.",
  "Ship tangible progress every single week.",
];

const timeline = [
  {
    year: "2016-2019",
    title: "On-site engineering support",
    detail:
      "We embedded with contractors to produce drawings, estimates and documentation under tight deadlines.",
  },
  {
    year: "2020-2022",
    title: "Digital & automation expansion",
    detail:
      "Introduced AI workflows, web builds and marketing systems to complement engineering scopes.",
  },
  {
    year: "2023+",
    title: "Integrated delivery partner",
    detail:
      "Became a single team for design, automation and digital rollouts with retained relationships worldwide.",
  },
];

const values = [
  {
    title: "Clarity over noise",
    detail: "Every deliverable includes context, assumptions and next steps.",
  },
  {
    title: "Partnership mindset",
    detail:
      "We plug into your rituals, tools and Slack so it feels like one team.",
  },
  {
    title: "Bias for action",
    detail:
      "We prefer prototypes, markups and dashboards to long opinionated decks.",
  },
];

const leadership = [
  {
    name: "Eman Haddad",
    role: "Founder, Engineering Lead",
    focus: "MEP coordination, authority approvals, partner success",
  },
  {
    name: "Hassan Malik",
    role: "Automation & AI Director",
    focus: "Workflow orchestration, AI copilots, data architecture",
  },
  {
    name: "Mira Torres",
    role: "Digital Experience Lead",
    focus: "Web experience, growth experiments, content systems",
  },
];

const certifications = [
  "PMP + PMI-RMP certified leadership",
  "Certified Autodesk Professional (Revit, Navisworks)",
  "AWS + Azure solution partners for automation workloads",
  "HubSpot & Mailchimp partner status for lifecycle builds",
];

export default function AboutPage() {
  return (
    <main className="main-shell space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-card p-6 md:p-8 space-y-6"
      >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
          ABOUT EHM
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          Engineering roots with a modern tech mindset.
        </h1>
        <p className="mt-4 text-meta md:text-base max-w-3xl">
          EHM Tech Services exists at the intersection of classic engineering
          discipline and the fast-moving world of AI and web technology. We help
          project teams stay grounded in reality while still leveraging modern
          tools to move faster.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <MediaPlaceholder
            label="Studio snapshot"
            caption="A peek at the collaborative boards and documentation libraries we maintain for partners."
            badge="Workspace"
            accent="violet"
            aspect="wide"
            imageSrc="/images/ops-canvas.svg"
            imageAlt="Studio workspace preview"
          />
          <div className="section-card p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              HOW WE STAY ALIGNED
            </p>
            <ul className="mt-3 space-y-2 text-sm text-meta">
              <li>▹ Dedicated Notion HQ for every engagement</li>
              <li>▹ Shared dashboards for risks, blockers and wins</li>
              <li>▹ Weekly Looms to keep async stakeholders current</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {leadership.map((leader) => (
          <div key={leader.name} className="section-card p-5 space-y-2">
            <p className="text-sm font-semibold text-slate-900">{leader.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {leader.role}
            </p>
            <p className="text-meta">{leader.focus}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            How we approach work
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-meta">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-2">
                <span className="text-softSkyCyan">▹</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-card p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            What it&apos;s like to work with us
          </h2>
          <p className="text-meta">
            We treat every collaboration like an ongoing partnership. Expect
            structured updates, asynchronous Loom walkthroughs, fast responses
            and total transparency on trade-offs.
          </p>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-meta">
            <p className="font-semibold text-softSkyCyan">Weekly rhythm</p>
            <p className="mt-1">
              - Status updates every Friday{" "}
              <br />- Live working session mid-week{" "}
              <br />- Shared task board for real-time visibility
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="grid gap-8 md:grid-cols-[1fr,1.2fr]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            COVERAGE
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Distributed, but tightly aligned.
          </h2>
          <p className="text-meta">
            Our core team spans GCC, EU and APAC. That means there is always
            someone available for urgent markups, during-site clarifications or
            campaign tweaks.
          </p>
          <div className="grid gap-3 text-sm text-meta">
            {[
              "Dubai • Riyadh – Engineering & client success",
              "Lisbon – Automation & data design",
              "Singapore – Web, growth & support",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3">
                <span className="text-softSkyCyan text-lg">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Timeline</h2>
          <div className="mt-6 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="text-softSkyCyan font-semibold text-sm">{item.year}</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-meta">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <MediaPlaceholder
            label="Playbook wall"
            caption="Snapshots from our internal knowledge base that keeps best practices evolving."
            badge="In-house"
            accent="peach"
            aspect="wide"
            imageSrc="/images/hero-workflow.svg"
            imageAlt="Playbook wall preview"
          />
        </div>
      </motion.section>

      <motion.section
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {values.map((value) => (
          <div key={value.title} className="section-card p-5 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              VALUE
            </p>
            <p className="text-lg font-semibold text-slate-900">{value.title}</p>
            <p className="text-meta">{value.detail}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            NEXT CHAPTER
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Need a partner that thinks in systems?
          </h2>
          <p className="mt-2 text-meta max-w-xl">
            Let&apos;s talk through your workload and see how we can plug gaps—
            whether that&apos;s design production, documentation clean-up or a
            new automation sprint.
          </p>
        </div>
        <a
          href="/contact"
          className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90"
        >
          Say hello
        </a>
      </motion.section>

      <motion.section
        className="section-card p-6 md:p-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
          CREDENTIALS & PARTNERSHIPS
        </p>
        <ul className="text-sm text-meta space-y-2">
          {certifications.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-softSkyCyan">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}

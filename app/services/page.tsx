"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";
import Link from "next/link";

const groups = [
  {
    label: "Engineering & Estimation",
    color: "from-softSkyCyan/30 to-slateBlue/40",
    services: [
      {
        title: "Engineering Design",
        href: "/services/engineering-design",
        desc: "Mechanical, electrical and structural design support.",
      },
      {
        title: "Cost Estimation",
        href: "/services/cost-estimation",
        desc: "Detailed BOQs and cost breakdowns.",
      },
      {
        title: "Technical Documentation",
        href: "/services/technical-documentation",
        desc: "Drawings, reports and compliance records.",
      },
    ],
  },
  {
    label: "AI & Digital Solutions",
    color: "from-sunsetPeach/30 to-slateBlue/40",
    services: [
      {
        title: "AI Automation",
        href: "/services/ai-automation",
        desc: "Assistants, workflows and document intelligence.",
      },
      {
        title: "Web Development",
        href: "/services/web-development",
        desc: "Websites and dashboards built with modern tools.",
      },
      {
        title: "Social Media Marketing",
        href: "/services/social-media",
        desc: "Content, planning and basic reporting.",
      },
      {
        title: "Email Marketing",
        href: "/services/email-marketing",
        desc: "Newsletters and nurture flows.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="main-shell">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label" aria-label="Services section">
          <span className="sr-only">Services section: </span>SERVICES
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          From first sketch to digital launch.
        </h1>
        <p className="mt-3 text-meta max-w-2xl">
          Traditional engineering meets modern digital work. We bridge both sides so you don't have to choose.
        </p>
      </motion.section>

      <motion.section
        className="mt-10 section-card p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label" aria-label="Why EHM section">
          <span className="sr-only">Why EHM section: </span>WHY EHM
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          One team. Complete context.
        </h2>
        <p className="mt-3 text-meta font-normal max-w-2xl">
          We combine engineering rigor with automation and web tech. No multiple vendors. No lost context. Just one team getting it done.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Engineering + Digital",
              desc: "Design, estimation, and automation in one flow. No handoffs.",
            },
            {
              title: "Modern tools, classic discipline",
              desc: "We use Notion, LangChain, and Revit with the same high standards.",
            },
            {
              title: "Flexible engagement",
              desc: "Sprints, quarters, or retainers. We scale with you.",
            },
            {
              title: "Remote-first",
              desc: "Async-first collaboration that respects your time.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600 font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="mt-10 space-y-10">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: gi * 0.1 }}
            className="section-card p-6 md:p-7"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                {group.label}
              </h2>
              <span className="chip">
                {group.services.length} services in this group
              </span>
            </div>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.services.map((svc) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="relative rounded-2xl border border-slate-200 bg-white p-4 group overflow-hidden"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${group.color} transition-opacity`}
                  />
                  <div className="relative">
                    <p className="text-sm font-semibold text-slate-900">
                      {svc.title}
                    </p>
                    <p className="mt-1 text-xs text-meta">{svc.desc}</p>
                    <p className="mt-3 text-[11px] text-slateBlue group-hover:translate-x-1 transition-transform">
                      View details →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="mt-12 grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { label: "Avg. overlap", value: "4-6 hrs / day", desc: "We align with your timezone so collaboration stays async-first." },
          { label: "Parallel tracks", value: "3 streams", desc: "Engineering, automation and digital can move together." },
          { label: "Satisfaction", value: "9.6 / 10", desc: "Rolling feedback score from retained partners." },
        ].map((stat) => (
          <div key={stat.label} className="section-card p-4 md:p-6 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              {stat.label}
            </p>
            <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
            <p className="text-meta font-normal">{stat.desc}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="mt-12 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            title: "Embedded partner",
            desc: "We join your channels and PM tools, acting as an extension of your team.",
          },
          {
            title: "Project-based sprints",
            desc: "Perfect for a discrete automation, estimation package or website launch.",
          },
          {
            title: "Advisory retainers",
            desc: "Monthly access to senior leads for reviews, QA and strategic direction.",
          },
        ].map((item) => (
          <div key={item.title} className="section-card p-4 md:p-6">
            <p className="text-lg font-semibold text-slate-900">{item.title}</p>
            <p className="mt-2 text-meta font-normal">{item.desc}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="mt-12 section-card p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label" aria-label="How we engage section">
              <span className="sr-only">How we engage section: </span>HOW WE ENGAGE
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Mix-and-match the pieces you need.
            </h2>
            <p className="mt-2 text-meta">
              Start with one service, then extend into adjacent support without
              spinning up a new vendor.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-slate-900 shadow-soft hover:bg-slateBlue/90"
          >
            Plan your stack →
          </a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-meta">
          {[
            "Engineering design ↔ Cost estimation ↔ Documentation cleanup",
            "Automation pilot ↔ Web refresh ↔ Email nurture",
            "Estimation retainer ↔ AI workflows ↔ Ongoing reporting",
          ].map((combo) => (
            <div key={combo} className="rounded-xl border border-slate-200 bg-white p-3 md:p-4">
              {combo}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12 grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MediaPlaceholder className="mt-12"
          label="Services storyboard"
          caption="Each stream gets a dedicated canvas showing flowcharts, owners and delivery beats."
          badge="Process"
          accent="violet"
          aspect="wide"
          imageSrc="/images/ops-canvas.png"
          imageAlt="Services storyboard canvas"
        />
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-slate-900">Frequently asked</h2>
          <div className="mt-4 space-y-4 text-sm text-meta">
            {[
              {
                q: "Can we engage you for just one phase?",
                a: "Yes. Every service is modular—kick off with a single sprint and extend as needed.",
              },
              {
                q: "How do you handle tooling access?",
                a: "We use client-provided accounts whenever possible. Otherwise, we spin up isolated workspaces and share credentials securely.",
              },
              {
                q: "What if we need ongoing support?",
                a: "We can set up quarterly or annual retainers that flex up/down based on workload.",
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-slate-200 pt-4 first:border-t-0 first:pt-0">
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-1 text-meta">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

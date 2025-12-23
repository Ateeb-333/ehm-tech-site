"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      <Breadcrumbs className="mb-6" />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label" aria-label="Services section">
          <span className="sr-only">Services section: </span>OUR SERVICES
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          Engineering to Digital Solutions
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
          Comprehensive services spanning engineering design, cost estimation, AI automation, and web development. One team, complete solutions.
        </p>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label" aria-label="Why EHM section">
            <span className="sr-only">Why EHM section: </span>WHY CHOOSE US
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
            One Team, Complete Solutions
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Engineering expertise combined with digital innovation. No handoffs, no lost context.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.services.map((svc) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="relative rounded-2xl border border-slate-200 bg-white p-4 group overflow-hidden transition-all hover:shadow-lg flex flex-col min-h-[120px]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${group.color} transition-opacity duration-300`}
                  />
                  <div className="relative flex flex-col h-full">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                      {svc.title}
                    </p>
                    <p className="text-xs text-slate-600 flex-1">{svc.desc}</p>
                    <span className="text-xs text-slateBlue font-medium mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Operating stats */}
      <motion.section
        className="mt-12 grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { label: "Avg. overlap", value: "4–6 hrs / day", desc: "We align with your timezone so collaboration stays async‑first.", icon: "⏱" },
          { label: "Parallel tracks", value: "3 streams", desc: "Engineering, automation and digital can move together.", icon: "▱" },
          { label: "Satisfaction", value: "9.6 / 10", desc: "Rolling feedback score from retained partners.", icon: "★" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="section-card p-5 md:p-6 flex flex-col gap-3 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slateBlue via-softSkyCyan to-slateBlue" />
            <div className="flex items-center gap-3 pt-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slateBlue/10 text-slateBlue text-base">
                {stat.icon}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {stat.label}
              </p>
            </div>
            <p className="text-2xl font-semibold text-[#046BC6]">{stat.value}</p>
            <p className="text-meta font-normal">{stat.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* Engagement formats */}
      <motion.section
        className="mt-10 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            title: "Embedded partner",
            desc: "We join your channels and PM tools, acting as an extension of your team.",
            tag: "Most collaborative",
          },
          {
            title: "Project-based sprints",
            desc: "Perfect for a discrete automation, estimation package or website launch.",
            tag: "Scoped delivery",
          },
          {
            title: "Advisory retainers",
            desc: "Monthly access to senior leads for reviews, QA and strategic direction.",
            tag: "Ongoing support",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="section-card p-5 md:p-6 flex flex-col gap-3 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 border-l-4 border-l-slateBlue"
          >
            <span className="inline-flex items-center rounded-full bg-slateBlue/10 px-3 py-1 text-[11px] font-medium text-slateBlue w-fit">
              {item.tag}
            </span>
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="text-meta font-normal">{item.desc}</p>
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

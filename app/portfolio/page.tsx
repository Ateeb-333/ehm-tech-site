"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: "Engineering" | "AI Automation" | "Web" | "Marketing";
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Plant Design Support",
    category: "Engineering",
    description: "Design coordination and documentation for a multi-discipline plant.",
  },
  {
    id: 2,
    title: "AI Support Assistant",
    category: "AI Automation",
    description: "Internal chatbot answering project and technical queries.",
  },
  {
    id: 3,
    title: "Corporate Services Website",
    category: "Web",
    description: "Next.js website with service pages and case studies.",
  },
  {
    id: 4,
    title: "Lead Nurture Email Funnel",
    category: "Marketing",
    description: "Simple automated flow for educating new leads.",
  },
  {
    id: 5,
    title: "MEP Design Package",
    category: "Engineering",
    description: "Mechanical, electrical and plumbing documentation.",
  },
  {
    id: 6,
    title: "AI Document Classifier",
    category: "AI Automation",
    description: "Automatic tagging and sorting of project documents.",
  },
];

const categories = ["All", "Engineering", "AI Automation", "Web", "Marketing"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="main-shell">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
          PORTFOLIO
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          A sample of work across engineering and digital.
        </h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl">
          Some projects are purely engineering, some purely digital – many sit
          somewhere in the middle. These examples give a sense of the kind of
          outcomes we support.
        </p>
      </motion.section>

      {/* Filter */}
      <section className="mt-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm border transition-colors ${
                  isActive
                    ? "bg-slateBlue text-white border-slateBlue"
                    : "bg-white text-slate-600 border-slate-200 hover:border-softSkyCyan/70"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Cards */}
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft group"
            >
              <div className="h-28 bg-gradient-to-tr from-slateBlue via-softSkyCyan to-sunsetPeach group-hover:scale-[1.02] transition-transform" />
              <div className="p-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gradient-label">
                  {p.category}
                </span>
                <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-600">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <motion.section
        className="mt-12 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            label: "Disciplines bridged",
            value: "Engineering ↔ Automation ↔ Web",
          },
          {
            label: "Average engagement",
            value: "5-8 weeks per project",
          },
          {
            label: "Collaboration mode",
            value: "Client Slack, Notion & weekly reviews",
          },
        ].map((metric) => (
          <div key={metric.label} className="section-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              {metric.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {metric.value}
            </p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="mt-12 grid gap-6 md:grid-cols-[1.1fr,0.9fr]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MediaPlaceholder
          label="Case study gallery"
          caption="Placeholders for renders and dashboards we’ll showcase publicly soon."
          badge="Preview"
          accent="peach"
          imageSrc="/images/hero-workflow.svg"
          imageAlt="Case study gallery preview"
        />
        <div className="section-card p-6 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              HOW WE CAPTURE RESULTS
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>▹ Before/after metrics for every workflow or page</li>
              <li>▹ Loom walkthroughs so teams can see deliverables in action</li>
              <li>▹ Templates and documentation ready for reuse</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              WANT TO DIVE DEEPER?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Ask for private case studies covering your industry. We redact
              sensitive data, but keep enough context to evaluate fit.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white hover:bg-slateBlue/90"
            >
              Request specific samples →
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 section-card p-6 md:p-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
          HOW TO GET STARTED
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4 text-sm text-slate-600">
          {[
            "Share drawings, assets or current tooling.",
            "We highlight opportunities + risks within 48h.",
            "Kick off a sprint or embed us with your team.",
            "Capture outcomes and add them to this gallery.",
          ].map((step, idx) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-slateBlue text-white text-xs font-semibold">
                {idx + 1}
              </div>
              <p className="mt-3">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

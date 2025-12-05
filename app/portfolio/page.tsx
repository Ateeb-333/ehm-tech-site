"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  category: "Engineering" | "AI Automation" | "Web" | "Marketing";
  description: string;
  image: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Plant Design Support",
    category: "Engineering",
    description: "Design coordination and documentation for a multi-discipline plant.",
    image: "/images/portfolio-industrial-plant.png",
    tags: ["Revit", "AutoCAD", "Plant Design", "Multi-discipline"],
  },
  {
    id: 2,
    title: "AI Support Assistant",
    category: "AI Automation",
    description: "Internal chatbot answering project and technical queries.",
    image: "/images/portfolio-ai-assistant.png",
    tags: ["Chatbot", "LLM", "Python", "LangChain"],
  },
  {
    id: 3,
    title: "Corporate Services Website",
    category: "Web",
    description: "Next.js website with service pages and case studies.",
    image: "/images/portfolio-corporate-website.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "Lead Nurture Email Funnel",
    category: "Marketing",
    description: "Simple automated flow for educating new leads.",
    image: "/images/portfolio-email-funnel.png",
    tags: ["Email Marketing", "Automation", "CRM Integration"],
  },
  {
    id: 5,
    title: "MEP Design Package",
    category: "Engineering",
    description: "Mechanical, electrical and plumbing documentation.",
    image: "/images/portfolio-mep-design.png",
    tags: ["MEP", "Revit", "Load Calculations", "Design"],
  },
  {
    id: 6,
    title: "AI Document Classifier",
    category: "AI Automation",
    description: "Automatic tagging and sorting of project documents.",
    image: "/images/portfolio-ai-classifier.png",
    tags: ["Machine Learning", "Document Processing", "Python"],
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
      <Breadcrumbs className="mb-6" />
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
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm border transition-colors ${isActive
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

      {/* Portfolio Showcase */}
      <section className="mt-6">
        <div className="relative aspect-[4/1] w-full rounded-2xl overflow-hidden shadow-soft group">
          <Image
            src="/images/portfolio-showcase.png"
            alt="Professional portfolio showcase of engineering and digital projects"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 text-slate-700 rounded-full">
              Featured Work
            </span>
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              Portfolio
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white">Project Showcase</h3>
            <p className="text-sm text-white/80 mt-1">A glimpse of our diverse portfolio across multiple disciplines.</p>
          </div>
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
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
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
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
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
          caption="Placeholders for renders and dashboards we'll showcase publicly soon."
          badge="Preview"
          accent="peach"
          imageSrc="/images/case-study-gallery.png"
          imageAlt="Project results and success metrics visualization"
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

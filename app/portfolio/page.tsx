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
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
          OUR WORK
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          Projects That Deliver Results
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From engineering designs to AI automation and web development, explore our diverse portfolio of successful projects.
        </p>
        </div>
      </motion.section>

      {/* Filter */}
      <section className="mt-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm border transition-all duration-200 inline-flex items-center gap-2 ${
                    isActive
                      ? "bg-slateBlue text-white border-slateBlue shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-softSkyCyan/70 hover:shadow-sm"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-xs ${
                    isActive ? "bg-white/20" : "bg-slate-100"
                  } px-2 py-0.5 rounded-full`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-slateBlue">{filtered.length}</span> {filtered.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="mt-6 max-w-7xl mx-auto">
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
      <section className="mt-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-sm text-slate-600">Try selecting a different category</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-slate-700 rounded-full backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-slateBlue transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 flex-1">
                      {p.description}
                    </p>
                    {p.tags && p.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-slate-50 text-slate-600 border border-slate-200 hover:border-slateBlue/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <motion.section
        className="mt-12 max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
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
        className="mt-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          {/* Left: Case Study Gallery with Enhanced Design */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white group border border-slate-200/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-study-gallery.png"
                alt="Project results and success metrics visualization"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#046BC6] via-[#5EEAD4] to-[#046BC6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Badges with improved styling */}
              <div className="absolute top-6 left-6 flex gap-3">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 shadow-lg border border-slate-200/50 hover:border-slate-300 transition-all"
                >
                  Preview
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-[#046BC6]/90 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#035aa0] transition-all"
                >
                  Live Capture
                </motion.span>
              </div>
              
              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-slate-200/50 hidden md:block"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#046BC6] to-[#5EEAD4] bg-clip-text text-transparent">
                    6+
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Projects
                  </div>
                </div>
              </motion.div>
              
              {/* Bottom Content Card with enhanced design */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-200/50 group-hover:bg-white transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#046BC6] transition-colors">
                        Case study gallery
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Placeholders for renders and dashboards we'll showcase publicly soon.
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#046BC6] to-[#5EEAD4] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: How We Capture Results with Enhanced Design */}
          <div className="section-card p-8 bg-gradient-to-br from-white via-slate-50 to-white flex flex-col justify-between shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#046BC6] to-[#5EEAD4] flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6]">
                  HOW WE CAPTURE RESULTS
                </p>
              </div>
              
              <ul className="space-y-5">
                {[
                  { text: "Before/after metrics for every workflow or page", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                  { text: "Loom walkthroughs so teams can see deliverables in action", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Templates and documentation ready for reuse", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#046BC6]/10 to-[#5EEAD4]/10 border border-[#046BC6]/20 flex items-center justify-center group-hover:from-[#046BC6] group-hover:to-[#5EEAD4] group-hover:border-transparent group-hover:shadow-lg transition-all duration-300">
                        <svg className="w-4 h-4 text-[#046BC6] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <span className="text-sm md:text-base text-slate-700 leading-relaxed flex-1 group-hover:text-slate-900 transition-colors">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Enhanced Divider */}
            <div className="my-8 relative">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#046BC6] to-[#5EEAD4]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#046BC6]/10 to-[#5EEAD4]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#046BC6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6]">
                  WANT TO DIVE DEEPER?
                </p>
              </div>
              
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Ask for private case studies covering your industry. We redact
                sensitive data, but keep enough context to evaluate fit.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#046BC6] to-[#035aa0] px-8 py-4 text-sm font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#5EEAD4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Request specific samples</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6 md:p-7">
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
        </div>
      </motion.section>
    </main>
  );
}

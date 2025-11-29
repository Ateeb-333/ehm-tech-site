"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

const openings = [
  {
    title: "Senior Automation Engineer",
    dept: "AI & Automation",
    type: "Full-time",
    location: "Remote • GCC/EU overlap",
    summary: "Own discovery-to-deployment for AI copilots and workflow orchestration.",
    tags: ["LangChain", "TypeScript", "Notion", "LLM Ops"],
  },
  {
    title: "Technical Project Lead",
    dept: "Engineering Ops",
    type: "Contract",
    location: "Hybrid • Dubai",
    summary: "Guide multi-discipline engineering packages and keep stakeholders aligned.",
    tags: ["MEP", "Revit", "Stakeholder comms", "QA"],
  },
  {
    title: "Digital Experience Strategist",
    dept: "Web & Growth",
    type: "Part-time",
    location: "Remote • APAC",
    summary: "Ship data-informed experiments across websites, email and social.",
    tags: ["Next.js", "Analytics", "Figma", "Lifecycle"],
  },
];

const perks = [
  "Remote-first with purposeful on-sites across GCC/EU/APAC",
  "Quarterly learning budget & dedicated R&D sprint",
  "Async-friendly rituals — Looms, Notion HQ, light meetings",
  "Flexible Fridays for deep work, research or community projects",
];

const process = [
  "Share your work samples or portfolio with context.",
  "30-min chemistry call with the hiring lead.",
  "Paid working session or case walkthrough.",
  "Reference chat + offer with clear onboarding plan.",
];

const testimonials = [
  {
    quote:
      "EHM plugged into our engineering team like they'd been here for years. Iterations were quick and documentation spotless.",
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

export default function CareersPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => {
        setShowForm(false);
        setFormStatus("idle");
        setSelectedRole(null);
      }, 2000);
    }, 800);
  };
  return (
    <main className="main-shell space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-card p-6 md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Careers section">
          <span className="sr-only">Careers section: </span>Careers
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
          Build modern delivery systems for engineering, automation & digital.
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          We’re a remote-first team shipping high-trust work for technical organizations.
          If you obsess over clarity, documentation and momentum, you’ll feel at home here.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {perks.map((perk) => (
            <div key={perk} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 flex gap-3">
              <span className="text-softSkyCyan text-lg">✺</span>
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Open roles section">
                <span className="sr-only">Open roles section: </span>Open roles
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Current opportunities</h2>
            </div>
            <span className="chip">{openings.length} roles</span>
          </div>

          <div className="space-y-4">
            {openings.map((role) => (
              <div key={role.title} className="section-card p-5 space-y-3">
                <div className="flex flex-wrap items-center gap-3 justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{role.title}</p>
                    <p className="text-sm text-slate-600">{role.dept}</p>
                  </div>
                  <span className="chip">{role.type}</span>
                </div>
                <p className="text-sm text-slate-600">{role.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    {role.location}
                  </span>
                  {role.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleApplyClick(role.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slateBlue hover:text-slateBlue/80 transition-colors"
                >
                  Apply via email →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <MediaPlaceholder
            label="Join Our Team"
            caption="Work with talented professionals on exciting projects worldwide."
            badge="Team Culture"
            accent="violet"
            aspect="wide"
            imageSrc="/images/careers-hiring.jpg"
            imageAlt="Join our team - career opportunities"
          />
          <div className="section-card p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Interview flow section">
              <span className="sr-only">Interview flow section: </span>Interview flow
            </p>
            <h3 className="text-lg font-semibold text-slate-900">What to expect</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600">
              {process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-xs text-slate-500">
              We keep feedback loops tight — expect updates within 48 hours of each touchpoint.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Don't see your role section">
            <span className="sr-only">Don't see your role section: </span>Don't see your role?
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Pitch us a role or collaboration.
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">
            Tell us what you’d like to own, the systems you improve, and the kind of outcomes you’ve delivered.
            We often craft bespoke roles for people who think in systems.
          </p>
        </div>
        <button
          onClick={() => handleApplyClick("General Application")}
          className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 transition-colors"
        >
          Send your profile →
        </button>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mb-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Team testimonials section">
            <span className="sr-only">Team testimonials section: </span>TEAM VOICES
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            What it's like working with us.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="section-card p-5 flex flex-col gap-4"
            >
              <p className="text-meta font-normal">{item.quote}</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.author}
                </p>
                <p className="text-xs text-slate-500 font-normal">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setShowForm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="section-card p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-slate-900">Apply to EHM Tech</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-slate-500 hover:text-slate-900 text-xl leading-none"
                    aria-label="Close form"
                  >
                    ×
                  </button>
                </div>
                {selectedRole && (
                  <p className="text-sm text-slate-600 mb-4">
                    Applying for: <span className="font-semibold text-slate-900">{selectedRole}</span>
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Portfolio / Work samples (URL)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1">
                      Why EHM? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan resize-none"
                      placeholder="Tell us what interests you about this role and EHM Tech..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full rounded-full bg-slateBlue px-4 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-70 transition-colors"
                  >
                    {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Sent!" : "Submit application"}
                  </button>
                  {formStatus === "sent" && (
                    <p className="text-xs text-softSkyCyan">
                      Thank you! We'll review your application and get back to you within 48 hours.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}



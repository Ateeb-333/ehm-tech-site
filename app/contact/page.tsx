"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <main className="main-shell">
      <motion.section
        className="grid md:grid-cols-[1.1fr,1fr] gap-10 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Left text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Contact section">
            <span className="sr-only">Contact section: </span>CONTACT
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Let&apos;s talk about your next project or workflow.
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-xl">
            A short message is enough to get started. Share where you are today,
            the kind of outcome you&apos;re aiming for, and we&apos;ll suggest
            ways we can help.
          </p>

          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>Typical topics we discuss:</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-slate-600">
              <li>Upcoming engineering design or estimation work.</li>
              <li>Ideas for automating internal tasks with AI.</li>
              <li>Plans for a new website or digital refresh.</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="section-card p-5 md:p-6 space-y-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <label className="block text-xs text-slate-500 mb-1">
              Name
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
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">
              Company / Organization (optional)
            </label>
            <input
              name="company"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan"
              placeholder="Where you work"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1">
              What would you like help with?
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-softSkyCyan resize-none"
              placeholder="Briefly describe your project, current tools and target timeline..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 w-full rounded-full bg-slateBlue px-4 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-xs text-softSkyCyan">
              Thank you! Your message has been received — we&apos;ll get back to
              you shortly.
            </p>
          )}
        </motion.form>
      </motion.section>

      <motion.section
        className="mt-12 grid gap-6 md:grid-cols-[1.1fr,0.9fr]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MediaPlaceholder
          label="Collaboration rooms"
          caption="A rolling feed of workshops, walkthroughs and implementation calls."
          badge="Live notes"
          accent="cyan"
          aspect="wide"
          imageSrc="/images/automation-lab.png"
          imageAlt="Collaboration workspace preview"
        />
        <div className="section-card p-5 space-y-3 text-sm text-slate-600">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            HOW WE PREP FOR CALLS
          </p>
          <ul className="space-y-2">
            <li>▹ Review your materials & tools in advance</li>
            <li>▹ Draft opportunities board with quick wins</li>
            <li>▹ Share collaborative notes immediately after</li>
          </ul>
          <p className="text-xs text-slate-500">
            Include any relevant files/links above so we can show up ready.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            title: "Email",
            value: "hello@ehmtechservices.com",
            caption: "Best for briefs & sharing files",
          },
          {
            title: "Response time",
            value: "< 1 business day",
            caption: "Urgent work? Mention it in the subject line",
          },
          {
            title: "Timezone coverage",
            value: "GMT+4 ↔ GMT+8",
            caption: "We overlap with EU + APAC teams daily",
          },
        ].map((item) => (
          <div key={item.title} className="section-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              {item.title}
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
            <p className="mt-1 text-sm text-slate-600">{item.caption}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        className="mt-12 grid gap-6 md:grid-cols-[1.2fr,1fr]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Common questions
          </h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            {[
              {
                q: "Do you sign NDAs?",
                a: "Yes—feel free to send yours along with the brief or request ours.",
              },
              {
                q: "What info helps you respond faster?",
                a: "Project stage, target timelines, current tooling and any reference files or URLs.",
              },
              {
                q: "Can we schedule a workshop instead of a form?",
                a: "Absolutely. Mention it above and we’ll send a booking link for a 30-min alignment call.",
              },
            ].map((item) => (
              <div key={item.q} className="border-t border-slate-200 pt-3 first:border-t-0 first:pt-0">
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-1 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Typical flow</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Day 0 – You submit the form (or send an email)</li>
            <li>• Day 1 – We reply with clarifying questions or a call invite</li>
            <li>• Day 3 – You receive a plan with scope, timeline & commercials</li>
          </ul>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-500">
            Need to move faster? Mention your deadline and we’ll prioritize.
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 section-card p-6 md:p-7"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-5 text-sm text-meta">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              DIRECT CONTACTS
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="text-slate-900 font-medium">Projects:</span> eman@ehmtechservices.com
              </li>
              <li>
                <span className="text-slate-900 font-medium">Automation:</span> hassan@ehmtechservices.com
              </li>
              <li>
                <span className="text-slate-900 font-medium">Web & Growth:</span> mira@ehmtechservices.com
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              FASTEST WAY TO ALIGN
            </p>
            <p className="mt-3">
              Mention your timezone plus two preferred slots and we’ll drop a calendar invite within a few hours.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Share availability →
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

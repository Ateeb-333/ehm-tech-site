"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookMeeting } from "@/components/BookMeeting";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("sent");
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="main-shell">
      <Breadcrumbs className="mb-6" />
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
            <p className="text-xs text-green-600">
              Thank you! Your message has been received — we&apos;ll get back to
              you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-xs text-red-600">
              {errorMessage || "Something went wrong. Please try again."}
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
          imageSrc="/images/contact-communication.png"
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
            title: "Email :",
            value: "info@ehmtechservices.com",

          },
          {
            title: "Phone :",
            value: "+92 322 628 3848",

          },
          {
            title: "Address :",
            value: "Office#205, 2nd floor, Regency Plaza Opposite PIA Office",
            caption: "Faisalabad, Pakistan",
          },
        ].map((item) => (
          <div key={item.title} className="section-card p-5 flex flex-col min-h-[160px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              {item.title}
            </p>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              {item.caption && <p className="mt-1 text-sm text-slate-600">{item.caption}</p>}
            </div>
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
              EMAIL US FOR QUERIES :
            </p>
            <ul className="mt-3 space-y-3">
              <li>
                <span className="text-slate-900 font-medium">Email:</span> info@ehmtechservices.com
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              HAVE A QUESTION ?
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Contact us →
            </a>
            <div className="mt-4">
              <BookMeeting />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

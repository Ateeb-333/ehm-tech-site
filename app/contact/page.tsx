"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookMeeting } from "@/components/BookMeeting";
import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";

type FieldError = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Please provide more details (at least 10 characters)";
        break;
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

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

    // Validate all fields
    const errors: FieldError = {};
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "company") {
        const error = validateField(key, value);
        if (error) errors[key as keyof FieldError] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

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
        setFieldErrors({});
        setTouched({});
        // Reset after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
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
        className="grid lg:grid-cols-[1fr,1fr] gap-8 lg:gap-12 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Left text */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label" aria-label="Contact section">
            <span className="sr-only">Contact section: </span>GET IN TOUCH
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
            Let's Discuss Your Project
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
            Share your project details and goals. We'll respond within 24 hours with next steps and how we can help.
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
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                fieldErrors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-softSkyCyan"
              } bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-offset-0 ${
                fieldErrors.name ? "focus:ring-red-200" : "focus:ring-softSkyCyan/20"
              } transition-all duration-200`}
              placeholder="Your name"
            />
            <AnimatePresence>
              {fieldErrors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                >
                  <span>⚠</span> {fieldErrors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                fieldErrors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-softSkyCyan"
              } bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-offset-0 ${
                fieldErrors.email ? "focus:ring-red-200" : "focus:ring-softSkyCyan/20"
              } transition-all duration-200`}
              placeholder="you@company.com"
            />
            <AnimatePresence>
              {fieldErrors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                >
                  <span>⚠</span> {fieldErrors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Company / Organization <span className="text-slate-400 text-xs">(optional)</span>
            </label>
            <input
              name="company"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-softSkyCyan focus:ring-2 focus:ring-softSkyCyan/20 transition-all duration-200"
              placeholder="Where you work"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              What would you like help with? <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                fieldErrors.message ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-softSkyCyan"
              } bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-offset-0 ${
                fieldErrors.message ? "focus:ring-red-200" : "focus:ring-softSkyCyan/20"
              } resize-none transition-all duration-200`}
              placeholder="Briefly describe your project, current tools and target timeline..."
            />
            <AnimatePresence>
              {fieldErrors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
                >
                  <span>⚠</span> {fieldErrors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 w-full rounded-full bg-slateBlue px-4 py-3 text-sm font-medium text-white shadow-soft disabled:opacity-70 disabled:cursor-not-allowed hover:bg-slateBlue/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            {status === "sending" && (
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="rounded-xl bg-green-50 border border-green-200 p-4 flex items-start gap-3"
              >
                <span className="text-green-600 text-xl">✓</span>
                <div>
                  <p className="text-sm font-medium text-green-900">Message sent successfully!</p>
                  <p className="text-xs text-green-700 mt-1">
                    Thank you! Your message has been received — we&apos;ll get back to you shortly.
                  </p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3"
              >
                <span className="text-red-600 text-xl">✕</span>
                <div>
                  <p className="text-sm font-medium text-red-900">Failed to send message</p>
                  <p className="text-xs text-red-700 mt-1">
                    {errorMessage || "Something went wrong. Please try again or contact us directly."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.section>

      <motion.section
        className="mt-12 grid gap-6 md:grid-cols-2 md:items-stretch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="h-full">
          <MediaPlaceholder
            label="Collaboration rooms"
            caption="A rolling feed of workshops, walkthroughs and implementation calls."
            badge="Live notes"
            accent="cyan"
            aspect="wide"
            imageSrc="/images/contact-communication.png"
            imageAlt="Collaboration workspace preview"
          />
        </div>
        <div className="section-card p-6 space-y-4 text-sm text-slate-600 flex flex-col justify-center h-full">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            HOW WE PREP FOR CALLS
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#046BC6] mt-0.5">▹</span>
              <span>Review your materials & tools in advance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#046BC6] mt-0.5">▹</span>
              <span>Draft opportunities board with quick wins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#046BC6] mt-0.5">▹</span>
              <span>Share collaborative notes immediately after</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
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
            value: "info@ehmtechservices.com",
            icon: "✉",
            href: "mailto:info@ehmtechservices.com",
          },
          {
            title: "Phone",
            value: "+92 322 628 3848",
            icon: "📞",
            href: "tel:+923226283848",
          },
          {
            title: "Address",
            value: "Office#205, 2nd floor, Regency Plaza Opposite PIA Office",
            caption: "Faisalabad, Pakistan",
            icon: "📍",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -3 }}
            className="section-card p-6 flex flex-col min-h-[180px] group hover:border-[#046BC6]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#046BC6]/10 to-[#046BC6]/5 flex items-center justify-center text-2xl group-hover:from-[#046BC6]/20 group-hover:to-[#046BC6]/10 transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                  {item.title}
                </p>
                <div className="flex-1 flex flex-col justify-center">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-semibold hover:text-[#046BC6] transition-colors duration-300 break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold break-words">{item.value}</p>
                  )}
                  {item.caption && (
                    <p className="mt-2 text-sm text-slate-600">{item.caption}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
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

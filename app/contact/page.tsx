"use client";

import { FormEvent, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message.");
        return;
      }

      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="main-shell space-y-12">
      <Breadcrumbs className="mb-2" />

      <section className="section-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Contact</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900">Let’s scope your next milestone.</h1>
            <p className="mt-5 text-meta max-w-3xl text-base md:text-lg">
              We love talking about digital strategy, engineering delivery, and business execution plans.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "1 business day response",
                "Remote-first collaboration",
                "Clear execution plans",
              ].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-0">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/images/contact-communication.png"
                  alt="Contact and communication workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="kpi-inline">
                <IconGlyph name="response" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">24h</p>
                  <p className="kpi-inline-label">Typical Reply</p>
                </div>
              </div>
              <div className="kpi-inline">
                <IconGlyph name="global" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">Global</p>
                  <p className="kpi-inline-label">Delivery Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Talk To Us" />

      <section className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] items-start">
        <form onSubmit={handleSubmit} className="section-card p-7 md:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company (optional)</label>
            <input id="company" name="company" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" name="message" rows={6} required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5" />
          </div>

          <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-70">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && <p className="text-sm text-green-700">Message sent successfully.</p>}
          {status === "error" && <p className="text-sm text-red-700">{errorMessage}</p>}
        </form>

        <aside className="section-card p-7 lg:sticky lg:top-28">
          <div className="mb-4">
            <IconGlyph name="workflow" />
          </div>
          <h2 className="text-2xl text-slate-900">Our Direction</h2>
          <ul className="mt-4 space-y-2 text-meta">
            <li>Faisalabad Office: Regency Plaza, Pakistan</li>
            <li>Global Remote Collaboration: GCC, EU, APAC</li>
            <li>Email: info@ehmtechservices.com</li>
            <li>Phone: +92 322 628 3848</li>
          </ul>
          <p className="mt-5 text-sm text-meta">Typical reply time is within one business day.</p>
        </aside>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="soft-tile p-6">
          <div className="image-frame relative mb-4 h-24 overflow-hidden rounded-lg border border-slate-200">
            <Image
              src="/images/project-management.png"
              alt="Project hub"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="mb-3">
            <IconGlyph name="hq" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">Pakistan</p>
          <h2 className="mt-2 text-lg text-slate-900">Faisalabad HQ</h2>
          <p className="mt-2 text-sm text-meta">Regency Plaza, Pakistan</p>
        </article>
        <article className="soft-tile p-6">
          <div className="image-frame relative mb-4 h-24 overflow-hidden rounded-lg border border-slate-200">
            <Image
              src="/images/services-workflow.jpg"
              alt="Remote operations"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="mb-3">
            <IconGlyph name="global" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">Global</p>
          <h2 className="mt-2 text-lg text-slate-900">Remote Operations</h2>
          <p className="mt-2 text-sm text-meta">Distributed delivery support for GCC, EU, and APAC clients.</p>
        </article>
        <article className="soft-tile p-6">
          <div className="image-frame relative mb-4 h-24 overflow-hidden rounded-lg border border-slate-200">
            <Image
              src="/images/ops-canvas.png"
              alt="Response management"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="mb-3">
            <IconGlyph name="response" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">Response</p>
          <h2 className="mt-2 text-lg text-slate-900">Within 1 Business Day</h2>
          <p className="mt-2 text-sm text-meta">Project scoping calls and estimate requests are prioritized.</p>
        </article>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Before We Start</p>
        <h2 className="mt-3 text-2xl text-slate-900">Quick answers before you contact us</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-3">
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Do you work internationally?</span> Yes, our workflow is remote-first with global client support.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">How soon can you start?</span> Usually within a few business days after scope alignment.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">Can we begin with a small phase?</span> Yes, we can start with discovery or pilot execution.</p></article>
          </div>
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[250px] md:h-[320px]">
              <Image
                src="/images/graphics/grid-orbit.svg"
                alt="Contact and onboarding process graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Client Assurance</p>
        <h2 className="mt-3 text-2xl text-slate-900">What happens after you reach out</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Initial response in 1 day</p>
            <p className="mt-2 text-sm text-meta">You receive a clear reply with next steps and information requests.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Scope alignment</p>
            <p className="mt-2 text-sm text-meta">We confirm objectives, deliverables, and timeline expectations before kickoff.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Transparent engagement</p>
            <p className="mt-2 text-sm text-meta">Communication cadence and ownership are shared at the start.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Contact Trust"
        subheading="Teams that start projects with us"
        tone="partnership"
        audienceLine="A practical first step for teams planning engineering and digital initiatives"
        partnerLabels={["Program Management Office", "Engineering Consultants", "Founders and SMEs", "Remote Delivery Teams"]}
        metrics={[
          { label: "Typical Reply", value: "24h" },
          { label: "Delivery", value: "Global" },
          { label: "Consult Mode", value: "Remote" },
        ]}
        testimonial={{
          quote: "The first call was structured and useful. We left with a clear plan, not vague promises.",
          byline: "Client Representative, Technical Services",
        }}
      />
    </main>
  );
}


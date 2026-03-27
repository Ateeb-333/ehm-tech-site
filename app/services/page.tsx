import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

const serviceCards = [
  { title: "Engineering Design", href: "/services/engineering-design", desc: "Civil, structural, MEP and architecture support.", image: "/images/engineering-design.jpg", glyph: "engineering" as const },
  { title: "Cost Estimation", href: "/services/cost-estimation", desc: "BOQs, quantity takeoffs, and bid estimation workflows.", image: "/images/cost-estimation.jpg", glyph: "estimation" as const },
  { title: "Drafting Services", href: "/services/drafting-services", desc: "2D and 3D drawings with technical documentation.", image: "/images/drafting-blueprint-preview.jpg", glyph: "docs" as const },
  { title: "Project Management", href: "/services/project-management", desc: "Coordination and reporting across project phases.", image: "/images/project-planning.jpg", glyph: "workflow" as const },
  { title: "AI Automation", href: "/services/ai-automation", desc: "Assistants, automation and smart operations tools.", image: "/images/ai-futuristic-ui.jpg", glyph: "automation" as const },
  { title: "Web Development", href: "/services/web-development", desc: "Modern websites and internal business tools.", image: "/images/coding-keyboard.jpg", glyph: "web" as const },
  { title: "Marketing", href: "/services/marketing", desc: "Digital campaigns, social media and email support.", image: "/images/social-media-dashboard.jpg", glyph: "marketing" as const },
  { title: "Technical Documentation", href: "/services/technical-documentation", desc: "Structured documents, reports and compliance files.", image: "/images/technical-docs-checklist.jpg", glyph: "docs" as const },
];

const steps = [
  { label: "Discovery and requirements review", glyph: "discovery" as const },
  { label: "Execution roadmap and milestones", glyph: "roadmap" as const },
  { label: "Delivery, QA, and iteration", glyph: "delivery" as const },
];

export default function ServicesPage() {
  return (
    <main className="main-shell space-y-10">
      <Breadcrumbs className="mb-2" />

      <section className="section-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Services</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900">Modular services, one delivery engine.</h1>
            <p className="mt-5 text-meta max-w-3xl text-base md:text-lg">
              Award-winning website design and technical digital agency service workflows adapted for your project goals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Discovery",
                "Execution",
                "Optimization",
              ].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-0">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/images/services-workflow.jpg"
                  alt="Services workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="kpi-inline">
                <IconGlyph name="workflow" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">8+</p>
                  <p className="kpi-inline-label">Core Tracks</p>
                </div>
              </div>
              <div className="kpi-inline">
                <IconGlyph name="delivery" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">Fast</p>
                  <p className="kpi-inline-label">Delivery Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((item) => (
          <article key={item.href} className="soft-tile p-5">
            <div className="image-frame relative mb-3 h-28 overflow-hidden rounded-lg border border-slate-200">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="mb-3">
              <IconGlyph name={item.glyph} />
            </div>
            <h2 className="text-lg text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-meta">{item.desc}</p>
            <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-[#3663D8] hover:text-[#77BEFF]">
              Open service {">"}
            </Link>
          </article>
        ))}
      </section>

      <section className="open-section p-8">
        <div className="image-frame relative mb-6 h-52 overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/images/service-delivery.jpg"
            alt="Service delivery workflow"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Service Process</p>
        <h2 className="mt-3 text-2xl text-slate-900">How we deliver</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.label} className="soft-tile px-4 py-4">
              <div className="mb-2">
                <IconGlyph name={step.glyph} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77BEFF]">Step {index + 1}</p>
              <p className="mt-2 text-sm text-meta">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>

      <section className="open-section p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Engagement Models</p>
        <h2 className="mt-3 text-2xl text-slate-900">Ways to work with our team</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="grid gap-4">
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Project-based</p>
              <p className="mt-2 text-sm text-meta">Best for clear-scope implementation and fixed milestone delivery.</p>
            </article>
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Retainer support</p>
              <p className="mt-2 text-sm text-meta">Best for continuous optimization, updates, and team extension.</p>
            </article>
            <article className="soft-tile p-5">
              <p className="text-sm font-semibold text-slate-100">Hybrid execution</p>
              <p className="mt-2 text-sm text-meta">Best for evolving roadmaps where priorities shift every sprint.</p>
            </article>
          </div>
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[260px] md:h-[320px]">
              <Image
                src="/images/graphics/signal-network.svg"
                alt="Service engagement model graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="open-section p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Proof Layer</p>
        <h2 className="mt-3 text-2xl text-slate-900">What clients can expect from delivery</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Scope clarity first</p>
            <p className="mt-2 text-sm text-meta">Work breakdown, milestones, and measurable acceptance are defined early.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Technical QA built in</p>
            <p className="mt-2 text-sm text-meta">Each output is reviewed before handoff to reduce rework and delays.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Operational continuity</p>
            <p className="mt-2 text-sm text-meta">Knowledge transfer and documentation are included for long-term usability.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Service Trust"
        subheading="Where this model is already working"
        tone="delivery"
        audienceLine="Used by delivery units that need repeatable execution quality"
        partnerLabels={["Estimation Unit", "Engineering Design Desk", "Automation Pipeline Team", "Client Reporting Office"]}
        metrics={[
          { label: "Service Tracks", value: "8+" },
          { label: "Delivery Mode", value: "Fast" },
          { label: "Coverage", value: "Global" },
        ]}
        testimonial={{
          quote: "We appreciated the modular structure. It let us start small and scale without losing control.",
          byline: "Operations Manager, Delivery and Planning",
        }}
      />
    </main>
  );
}


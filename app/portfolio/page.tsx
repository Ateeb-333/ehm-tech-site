import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

const projects = [
  {
    title: "Industrial Plant Design Support",
    category: "Engineering",
    summary: "Multi-discipline design coordination and technical package delivery.",
    image: "/images/portfolio-industrial-plant.png",
    glyph: "engineering" as const,
  },
  {
    title: "AI Support Assistant",
    category: "AI Automation",
    summary: "Internal knowledge assistant for faster technical responses.",
    image: "/images/portfolio-ai-assistant.png",
    glyph: "automation" as const,
  },
  {
    title: "Corporate Services Website",
    category: "Web Development",
    summary: "Modern marketing website with service architecture and SEO setup.",
    image: "/images/portfolio-corporate-website.png",
    glyph: "web" as const,
  },
  {
    title: "Lead Nurture Email Funnel",
    category: "Marketing",
    summary: "Automated lead communication flow integrated with CRM tools.",
    image: "/images/portfolio-email-funnel.png",
    glyph: "marketing" as const,
  },
  {
    title: "MEP Documentation Package",
    category: "Engineering",
    summary: "End-to-end MEP drawings and coordinated calculation sheets.",
    image: "/images/portfolio-mep-design.png",
    glyph: "estimation" as const,
  },
  {
    title: "Document Classification Workflow",
    category: "AI Automation",
    summary: "Automated file tagging and sorting for project document control.",
    image: "/images/portfolio-ai-classifier.png",
    glyph: "workflow" as const,
  },
];

const filters = ["All", "Engineering", "AI Automation", "Web Development", "Marketing"];

export default function PortfolioPage() {
  return (
    <main className="main-shell space-y-12">
      <Breadcrumbs className="mb-2" />

      <section className="section-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Case Studies</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900">Proof over promises.</h1>
            <p className="mt-5 text-meta max-w-3xl text-base md:text-lg">
              Review selected case studies that show how EHM executes across technical disciplines and digital workflows.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Engineering",
                "Automation",
                "Digital Growth",
              ].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-0">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/images/portfolio-showcase.png"
                  alt="Portfolio showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="kpi-inline">
                <IconGlyph name="delivery" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">50+</p>
                  <p className="kpi-inline-label">Delivered</p>
                </div>
              </div>
              <div className="kpi-inline">
                <IconGlyph name="global" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">18</p>
                  <p className="kpi-inline-label">Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Selected Projects" />

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="soft-tile p-6">
            <div className="image-frame relative mb-4 h-36 overflow-hidden rounded-xl border border-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mb-3">
              <IconGlyph name={project.glyph} />
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-gradient-label">{project.category}</p>
            <h2 className="mt-2 text-xl text-slate-900">{project.title}</h2>
            <p className="mt-3 text-sm text-meta">{project.summary}</p>
          </article>
        ))}
      </section>

      <section className="open-section p-7 md:p-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <span key={item} className="chip px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3 text-center">
          <div className="soft-tile px-5 py-5">
            <div className="mb-3 flex justify-center">
              <IconGlyph name="delivery" />
            </div>
            <p className="text-2xl text-slate-900">50+</p>
            <p className="text-xs uppercase tracking-[0.16em] text-meta">Delivered Projects</p>
          </div>
          <div className="soft-tile px-5 py-5">
            <div className="mb-3 flex justify-center">
              <IconGlyph name="global" />
            </div>
            <p className="text-2xl text-slate-900">18</p>
            <p className="text-xs uppercase tracking-[0.16em] text-meta">Active Industries</p>
          </div>
          <div className="soft-tile px-5 py-5">
            <div className="mb-3 flex justify-center">
              <IconGlyph name="growth" />
            </div>
            <p className="text-2xl text-slate-900">100%</p>
            <p className="text-xs uppercase tracking-[0.16em] text-meta">Client Focus</p>
          </div>
        </div>
      </section>

      <section className="open-section p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Execution Framework</p>
        <h2 className="mt-3 text-2xl text-slate-900">How each case study is built</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[250px] md:h-[320px]">
              <Image
                src="/images/graphics/flow-lines.svg"
                alt="Portfolio execution flow"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-3">
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">1. Discovery:</span> Goal clarity, risk identification, and success metrics.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">2. Build:</span> Multidisciplinary production and QA-led checkpoints.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">3. Measure:</span> Outcome reporting and optimization planning.</p></article>
          </div>
        </div>
      </section>

      <section className="open-section p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Outcome Confidence</p>
        <h2 className="mt-3 text-2xl text-slate-900">What these case studies represent</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Complex execution handled</p>
            <p className="mt-2 text-sm text-meta">Cross-discipline coordination delivered under practical timelines.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Measured performance</p>
            <p className="mt-2 text-sm text-meta">Results are tied to reporting, process quality, and business outcomes.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Repeatable model</p>
            <p className="mt-2 text-sm text-meta">The same delivery structure scales across industries and project sizes.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Portfolio Trust"
        subheading="Proof from real delivery environments"
        tone="partnership"
        audienceLine="Signals taken from programs where measurable outcomes mattered most"
        partnerLabels={["Industrial Program Team", "Digital Transformation Cell", "Marketing Operations Desk", "Technical QA Group"]}
        metrics={[
          { label: "Delivered", value: "50+" },
          { label: "Industries", value: "18" },
          { label: "Focus", value: "100%" },
        ]}
        testimonial={{
          quote: "The outcome summaries were clear and practical, which helped stakeholders align quickly.",
          byline: "Project Controls Lead, Enterprise Portfolio",
        }}
      />
    </main>
  );
}

import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import { IconGlyph, SectionDivider } from "@/components/VisualLanguage";
import { ProofStrip } from "@/components/ProofStrip";

const values = [
  "Accuracy in every output",
  "Transparent communication",
  "Reliable timelines",
  "Practical innovation",
  "Long-term client partnerships",
];

const pillars = [
  { label: "Experience Design", glyph: "design" as const },
  { label: "Integrated Engineering", glyph: "integration" as const },
  { label: "Digital Operations", glyph: "operations" as const },
  { label: "Delivery Governance", glyph: "governance" as const },
];

export default function AboutPage() {
  return (
    <main className="main-shell space-y-12">
      <Breadcrumbs className="mb-2" />

      <section className="section-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">About Us</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900">Systems thinking, practical delivery.</h1>
            <p className="mt-5 max-w-3xl text-meta text-base md:text-lg">
              We enable constant enterprise transformation at speed and scale through engineering discipline, construction insight, and digital execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Engineering-led",
                "Digital-native",
                "Outcome-focused",
              ].map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-0">
              <div className="relative h-[260px] md:h-[300px]">
                <Image
                  src="/images/about-team.png"
                  alt="EHM team"
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
                  <p className="kpi-inline-value">240+</p>
                  <p className="kpi-inline-label">Programs</p>
                </div>
              </div>
              <div className="kpi-inline">
                <IconGlyph name="growth" className="h-8 w-8 rounded-lg" />
                <div>
                  <p className="kpi-inline-value">100%</p>
                  <p className="kpi-inline-label">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="soft-tile p-6">
          <IconGlyph name="workflow" />
          <h2 className="text-2xl text-slate-900">Business Peoples</h2>
          <p className="mt-3 text-meta">240+ projects and collaborations across engineering, estimation, and technology service lines.</p>
        </article>
        <article className="soft-tile p-6">
          <IconGlyph name="growth" />
          <h2 className="text-2xl text-slate-900">Customer Satisfaction</h2>
          <p className="mt-3 text-meta">100% focus on responsiveness, quality control, and practical delivery accountability.</p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.25fr,0.75fr]">
        <article className="section-card overflow-hidden p-0">
          <div className="image-frame relative h-[320px] w-full md:h-[380px]">
            <Image
              src="/images/team-collaboration-v2.png"
              alt="EHM team collaborating across engineering and digital workflows"
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          </div>
        </article>
        <div className="grid gap-5">
          <article className="section-card overflow-hidden p-0">
            <div className="image-frame relative h-[180px] w-full">
              <Image
                src="/images/values-in-action.jpg"
                alt="Values in action during project delivery"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </article>
          <article className="section-card overflow-hidden p-0">
            <div className="image-frame relative h-[180px] w-full">
              <Image
                src="/images/professional-team.png"
                alt="Professional team support"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <SectionDivider label="Operating Model" />

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Our Direction</p>
        <h2 className="mt-3 text-2xl text-slate-900">Building practical value in every engagement</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="soft-tile px-5 py-5 text-sm font-medium text-slate-700">
              <div className="mb-3">
                <IconGlyph name={pillar.glyph} />
              </div>
              {pillar.label}
            </div>
          ))}
        </div>
      </section>

      <section className="open-section p-8 md:p-9">
        <h2 className="text-2xl text-slate-900">How We Work</h2>
        <p className="mt-3 text-meta max-w-4xl">
          Success requires clarity, ownership, and execution. We run integrated workflows so our clients can move from concept to delivery without unnecessary delays.
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-meta">
          {values.map((value) => (
            <li key={value} className="soft-tile px-5 py-4">{value}</li>
          ))}
        </ul>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Open to Collaboration</p>
        <h2 className="mt-3 text-2xl text-slate-900">Looking for a multidisciplinary execution partner?</h2>
        <p className="mt-4 text-meta max-w-3xl">Our team supports long-term programs and focused short-term initiatives with the same quality standards.</p>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Timeline</p>
        <h2 className="mt-3 text-2xl text-slate-900">How EHM has evolved</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr,1fr]">
          <div className="image-frame soft-tile relative overflow-hidden p-0">
            <div className="relative h-[250px] md:h-[320px]">
              <Image
                src="/images/graphics/grid-orbit.svg"
                alt="EHM growth timeline visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-3">
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">2018-2020:</span> Core engineering and estimation delivery setup.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">2021-2023:</span> Expanded into digital operations and technical automation workflows.</p></article>
            <article className="soft-tile p-4"><p className="text-sm text-meta"><span className="font-semibold text-slate-100">2024-now:</span> Unified engineering, documentation, and growth systems under one model.</p></article>
          </div>
        </div>
      </section>

      <section className="open-section p-8 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">Assurance</p>
        <h2 className="mt-3 text-2xl text-slate-900">Why teams continue to work with us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Consistent quality reviews</p>
            <p className="mt-2 text-sm text-meta">Internal verification across technical outputs before client submission.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Clear accountability</p>
            <p className="mt-2 text-sm text-meta">Defined owners and response windows for each phase and workstream.</p>
          </article>
          <article className="soft-tile p-5">
            <p className="text-sm font-semibold text-slate-100">Long-term partnerships</p>
            <p className="mt-2 text-sm text-meta">Many projects grow into multi-phase collaboration with repeat delivery cycles.</p>
          </article>
        </div>
      </section>

      <ProofStrip
        heading="Partnership Signals"
        subheading="How clients describe working with EHM"
        tone="partnership"
        audienceLine="Built for long-term collaboration across technical and business teams"
        partnerLabels={["Construction Program Office", "Design Coordination Cell", "Procurement Controls Team", "Site Operations Desk"]}
        metrics={[
          { label: "Programs", value: "240+" },
          { label: "Satisfaction", value: "100%" },
          { label: "Core Domains", value: "8+" },
        ]}
        testimonial={{
          quote: "The team combines technical depth with practical communication, which made coordination much easier.",
          byline: "Lead Engineer, Multi-Site Project Team",
        }}
      />
    </main>
  );
}

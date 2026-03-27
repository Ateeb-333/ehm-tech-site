import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedServices } from "./RelatedServices";
import { IconGlyph, SectionDivider } from "./VisualLanguage";

type ServiceStat = { label: string; value: string; detail?: string };
type ApproachStep = { title: string; detail: string };
type FaqItem = { question: string; answer: string };
type PackageItem = { title: string; items: string[]; note?: string };

type ServiceLayoutProps = {
  title: string;
  groupLabel: string;
  accent: "engineering" | "digital";
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  sideHeading: string;
  sideItems: string[];
  stats?: ServiceStat[];
  approachTitle?: string;
  approach?: ApproachStep[];
  toolsTitle?: string;
  tools?: string[];
  faqsTitle?: string;
  faqs?: FaqItem[];
  ctaNote?: string;
  heroMedia?: ReactNode;
  heroMediaLabel?: string;
  signalsTitle?: string;
  signals?: string[];
  packagesTitle?: string;
  packages?: PackageItem[];
  children?: ReactNode;
};

export function ServiceLayout({
  title,
  groupLabel,
  accent,
  intro,
  primaryCta,
  secondaryCta,
  sideHeading,
  sideItems,
  stats,
  approachTitle = "How we collaborate",
  approach,
  toolsTitle = "Tools and platforms",
  tools,
  faqsTitle = "FAQs",
  faqs,
  ctaNote = "Share your context and we will respond with a practical next step.",
  heroMedia,
  heroMediaLabel,
  signalsTitle = "Signals you might need this",
  signals,
  packagesTitle = "Engagement options",
  packages,
  children,
}: ServiceLayoutProps) {
  const allServices = [
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Modern, performant websites and internal tools.",
    },
    {
      title: "Cost Estimation",
      href: "/services/cost-estimation",
      description: "Detailed BOQs and quantity takeoff workflows.",
    },
    {
      title: "MEP Engineering",
      href: "/services/mep-engineering",
      description: "Mechanical, electrical and plumbing design support.",
    },
  ];

  const accentClass = accent === "engineering" ? "text-[#3663D8]" : "text-[#77BEFF]";

  return (
    <main className="main-shell space-y-12">
      <Breadcrumbs className="mb-2" />

      <section className="section-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-start">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentClass}`}>{groupLabel}</p>
            <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl lg:text-7xl leading-[0.96] text-slate-900">{title}</h1>
            <p className="mt-5 max-w-3xl text-meta text-base md:text-lg">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {sideItems.slice(0, 3).map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>

            {(primaryCta || secondaryCta) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-secondary">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="grid gap-4">
            <article className="section-card image-frame overflow-hidden p-2">
              {heroMedia || (
                <MediaPlaceholder
                  label={heroMediaLabel || `${title} preview`}
                  caption="Theme-converted service preview"
                  badge={accent === "engineering" ? "Engineering" : "Digital"}
                  accent={accent === "engineering" ? "cyan" : "peach"}
                />
              )}
            </article>
            <div className="grid gap-4 sm:grid-cols-3">
              {(stats && stats.length > 0
                ? stats.slice(0, 3).map((stat) => ({ label: stat.label, value: stat.value }))
                : [
                    { label: "Focus", value: "Precision" },
                    { label: "Mode", value: "Collaborative" },
                    { label: "Delivery", value: "Outcome-first" },
                  ]
              ).map((item) => (
                <article key={item.label} className="section-card p-4 text-center">
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-meta">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Scope" />

      <section className="grid gap-6 lg:grid-cols-[0.95fr,1.45fr] items-start">
          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="section-card p-5">
              <h2 className="text-lg text-slate-900">Categories</h2>
              <ul className="mt-3 space-y-2 text-sm text-meta">
                {sideItems.map((item) => (
                  <li key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 flex items-center gap-2">
                    <IconGlyph name="integration" className="h-7 w-7 rounded-lg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-card p-5">
              <div className="mb-3">
                <IconGlyph name="workflow" />
              </div>
              <h2 className="text-lg text-slate-900">{sideHeading}</h2>
              <p className="mt-3 text-sm text-meta">For those of you who are serious about having more, let us plan the fastest path to delivery.</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-700">+92 322 628 3848</p>
                <p className="text-slate-700">info@ehmtechservices.com</p>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="open-section p-6 md:p-7">
              <div className="image-frame rounded-2xl overflow-hidden border border-slate-200 bg-white p-2">
                {heroMedia || (
                  <MediaPlaceholder
                    label={heroMediaLabel || `${title} preview`}
                    caption="Theme-converted service preview"
                    badge={accent === "engineering" ? "Engineering" : "Digital"}
                    accent={accent === "engineering" ? "cyan" : "peach"}
                  />
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-2xl text-slate-900">Service Overview</h2>
                <p className="mt-3 text-meta">{intro}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {primaryCta && (
                    <Link href={primaryCta.href} className="btn-primary">
                      {primaryCta.label}
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link href={secondaryCta.href} className="btn-secondary">
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </div>
            </section>

            {stats && stats.length > 0 && (
              <section className="grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <article key={stat.label} className="soft-tile p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-gradient-label">{stat.label}</p>
                    <p className="mt-2 text-xl text-slate-900">{stat.value}</p>
                    {stat.detail && <p className="mt-2 text-sm text-meta">{stat.detail}</p>}
                  </article>
                ))}
              </section>
            )}

            {children && <section className="space-y-6">{children}</section>}

            {signals && signals.length > 0 && (
              <section className="open-section p-6">
                <h2 className="text-2xl text-slate-900">{signalsTitle}</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {signals.map((signal) => (
                    <div key={signal} className="soft-tile px-4 py-3 text-sm text-meta flex items-start gap-2">
                      <IconGlyph name="strategy" className="h-7 w-7 rounded-lg" />
                      <p>{signal}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {tools && tools.length > 0 && (
              <section className="open-section p-6">
                <h2 className="text-2xl text-slate-900">{toolsTitle}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="chip">{tool}</span>
                  ))}
                </div>
              </section>
            )}

            {approach && approach.length > 0 && (
              <section className="open-section p-6">
                <h2 className="text-2xl text-slate-900">{approachTitle}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-4">
                  {approach.map((step, index) => (
                    <article key={step.title} className="soft-tile p-4">
                      <div className="mb-2">
                        <IconGlyph
                          name={index % 3 === 0 ? "discovery" : index % 3 === 1 ? "roadmap" : "delivery"}
                        />
                      </div>
                      <h3 className="text-base text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-meta">{step.detail}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {packages && packages.length > 0 && (
              <section className="open-section p-6">
                <h2 className="text-2xl text-slate-900">{packagesTitle}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {packages.map((pkg) => (
                    <article key={pkg.title} className="soft-tile p-4">
                      <div className="mb-2">
                        <IconGlyph name="operations" />
                      </div>
                      <h3 className="text-base text-slate-900">{pkg.title}</h3>
                      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-meta">
                        {pkg.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {pkg.note && <p className="mt-3 text-xs text-slate-500">{pkg.note}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {faqs && faqs.length > 0 && (
              <section className="open-section p-6">
                <h2 className="text-2xl text-slate-900">{faqsTitle}</h2>
                <FAQAccordion faqs={faqs} className="mt-4" />
              </section>
            )}

            <section className="open-section p-6 md:p-7">
              <h2 className="text-2xl text-slate-900">Need a custom plan?</h2>
              <p className="mt-3 text-meta">{ctaNote}</p>
              <Link href="/contact" className="btn-primary mt-5 inline-flex">
                Contact Us
              </Link>
            </section>

            <RelatedServices currentService={title} services={allServices} />
          </div>
        </section>
    </main>
  );
}


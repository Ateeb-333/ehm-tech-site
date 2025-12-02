import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Email Marketing | EHM Tech Services",
  description:
    "Simple, effective newsletters and nurture sequences that keep you in touch with leads and customers.",
};

export default function EmailMarketingPage() {
  return (
    <ServiceLayout
      title="Email Marketing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="Stay in touch with leads and customers using simple, effective email marketing. We help you structure newsletters, nurture sequences and campaigns that actually get read."
      primaryCta={{ label: "Design a basic funnel", href: "/contact" }}
      sideHeading="Email use-cases"
      sideItems={[
        "Welcome flows for new leads",
        "Regular company or product updates",
        "Educational content sequences",
        "Launch / promotion campaigns",
      ]}
      stats={[
        {
          label: "Average open uplift",
          value: "+17%",
          detail: "After refreshing strategy & copy",
        },
        {
          label: "Sequence length",
          value: "3-8 emails",
          detail: "Per nurture journey, tailored per segment",
        },
        {
          label: "Setup timeline",
          value: "2-4 weeks",
          detail: "From brief to first automated send",
        },
      ]}
      tools={[
        "MailerLite",
        "Mailchimp",
        "HubSpot",
        "Klaviyo",
        "ConvertKit",
        "Zapier",
      ]}
      approach={[
        {
          title: "List & segment audit",
          detail:
            "We analyze current contacts, engagement and tagging to decide where to start.",
        },
        {
          title: "Messaging architecture",
          detail:
            "Each sequence gets a clear narrative arc, value props and CTAs aligned with your funnel.",
        },
        {
          title: "Build & QA",
          detail:
            "Copy, design, automations and conditional logic are built directly in your ESP.",
        },
        {
          title: "Launch & optimize",
          detail:
            "We monitor metrics, run subject line tests and suggest ongoing improvements.",
        },
      ]}
      faqs={[
        {
          question: "Do you provide ongoing newsletter support?",
          answer:
            "Yes. We can operate as an extension of your team—planning topics, drafting copy and sending campaigns every week or month.",
        },
        {
          question: "Can you integrate with our CRM or product usage data?",
          answer:
            "We connect ESPs to CRMs, payment tools or product databases so messaging reflects real customer behavior.",
        },
        {
          question: "What about deliverability?",
          answer:
            "We implement best practices like custom domains, warmed IPs, list hygiene and spam testing to keep inbox placement solid.",
        },
      ]}
      ctaNote="Send us a recent campaign or sequence— we’ll show you how to simplify, automate and improve results."
      signals={[
        "Open/click rates are slipping and no one knows why.",
        "Segments are outdated so everyone receives the same message.",
        "Sales can’t see how email activity influences pipeline.",
        "Automation logic is brittle or lives in spreadsheets.",
      ]}
      packages={[
        {
          title: "Audit & revive",
          note: "1 week",
          items: ["ESP health check", "Segmentation fixes", "Subject line tests"],
        },
        {
          title: "Lifecycle build",
          note: "3 weeks",
          items: ["Journey strategy", "Copy + design", "Automation setup"],
        },
        {
          title: "Optimization pod",
          note: "Monthly",
          items: ["A/B roadmap", "Revenue tracking", "Quarterly insights"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Email Marketing"
          caption="Simple, effective newsletters and nurture sequences."
          badge="Email Strategy"
          accent="peach"
          imageSrc="/images/email-marketing.png"
          imageAlt="Email marketing dashboard with campaign analytics"
          className="h-full min-h-[300px]"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          How we support your email marketing
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Strategy & Structure
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Define who you&apos;re emailing, how often and with what type of
              content for each segment.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Copy & Templates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Simple, branded templates and copy that feel human and easy to
              scan on any device.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Basic Automation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Set up sequences and triggers inside your chosen email platform so
              messages send automatically.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Optimization levers
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Lifecycle mapping",
              desc: "Define the exact triggers that move a lead from awareness to purchase and beyond.",
            },
            {
              title: "Personalization",
              desc: "Conditional content blocks speak directly to audience segments without duplicating work.",
            },
            {
              title: "Reporting dashboards",
              desc: "We surface cohort, revenue and content insights so you know what’s working.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}

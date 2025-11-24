import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Social Media Marketing | EHM Tech Services",
  description:
    "Content planning, basic creatives and reporting to keep your brand visible and consistent.",
};

export default function SocialMediaPage() {
  return (
    <ServiceLayout
      title="Social Media Marketing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="Build a consistent, professional presence across the platforms your customers actually use. We help with content planning, creatives and reporting so you can focus on running the business."
      primaryCta={{ label: "Plan a content calendar", href: "/contact" }}
      sideHeading="Platforms we support"
      sideItems={[
        "LinkedIn for B2B visibility",
        "Instagram & Facebook for brand presence",
        "X / Twitter for announcements",
        "Others depending on your audience",
      ]}
      stats={[
        {
          label: "Content cadence",
          value: "8-16 posts",
          detail: "Per month across core platforms",
        },
        {
          label: "Approval loops",
          value: "<24h",
          detail: "Feedback is incorporated within a day",
        },
        {
          label: "Asset formats",
          value: "Static, carousels, video",
          detail: "Templates built for each platform",
        },
      ]}
      tools={[
        "Notion",
        "Figma",
        "Canva",
        "Buffer / Later",
        "Google Workspace",
        "Typefully",
      ]}
      approach={[
        {
          title: "Strategic foundation",
          detail:
            "We define goals, voice, visual direction and KPIs so every post has a purpose.",
        },
        {
          title: "Calendar build",
          detail:
            "Monthly or quarterly calendars map topics, hooks and asset formats before production starts.",
        },
        {
          title: "Production & approvals",
          detail:
            "Copy, design and repurposed content are created in collaborative tools with version control.",
        },
        {
          title: "Launch & learn",
          detail:
            "We schedule posts, monitor performance and adjust the next batch based on real numbers.",
        },
      ]}
      faqs={[
        {
          question: "Do you handle community management?",
          answer:
            "We provide suggested responses, escalate critical comments and keep a log of FAQs so in-house teams can reply faster.",
        },
        {
          question: "Can you work with our brand team?",
          answer:
            "Yes. We sync with brand or comms leads weekly to ensure tone, visuals and campaigns stay on-message.",
        },
        {
          question: "How do you report results?",
          answer:
            "A concise dashboard tracks reach, engagement, top posts and recommendations so you can iterate with confidence.",
        },
      ]}
      ctaNote="Share your handles and goals—we’ll craft a calendar, creative system and reporting loop that fits."
      signals={[
        "Publishing cadence is inconsistent and relies on a single person.",
        "Sales asks for proof of social ROI but nothing is tracked properly.",
        "Brand voice looks different on every platform or asset.",
        "You have plenty of raw ideas but no system to package them.",
      ]}
      packages={[
        {
          title: "Strategy intensive",
          note: "1 week",
          items: ["Voice + pillars", "Audience mapping", "30-day action plan"],
        },
        {
          title: "Managed calendar",
          note: "Monthly",
          items: ["Content production", "Approval workflow", "Scheduling"],
        },
        {
          title: "Insights pulse",
          note: "Quarterly",
          items: ["Performance deep-dive", "Experiments", "Enablement guides"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Social media services
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Strategy & Positioning
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We define content pillars, tone of voice and posting rhythm that
              fits your goals and industry.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Content & Creatives
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Post copy, simple graphics and repurposed content that stays
              on-brand and consistent.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Reporting & Iteration
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Basic performance reporting so you know which content works and
              where to double down.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white">Content pillars we lean on</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Authority & insights",
              desc: "Explain your POV on industry trends, break down case studies and highlight internal expertise.",
            },
            {
              title: "Proof & personality",
              desc: "Share wins, culture snippets and behind-the-scenes to keep things human.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}

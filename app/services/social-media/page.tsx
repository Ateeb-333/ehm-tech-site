import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

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
      intro="Build a consistent presence on the platforms your customers use. We handle planning, creatives, and reporting so you can focus on your business."
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
            "We define goals, voice, and KPIs so every post has a purpose.",
        },
        {
          title: "Calendar build",
          detail:
            "Calendars map topics, hooks and formats before production starts.",
        },
        {
          title: "Production & approvals",
          detail:
            "Copy, design and content are created in collaborative tools.",
        },
        {
          title: "Launch & learn",
          detail:
            "We schedule posts, monitor performance and adjust based on numbers.",
        },
      ]}
      faqs={[
        {
          question: "Do you handle community management?",
          answer:
            "We provide suggested responses and escalate critical comments so your team can reply faster.",
        },
        {
          question: "Can you work with our brand team?",
          answer:
            "Yes. We sync with brand leads to ensure tone and visuals stay on-message.",
        },
        {
          question: "How do you report results?",
          answer:
            "A concise dashboard tracks reach, engagement, and top posts so you can iterate with confidence.",
        },
      ]}
      ctaNote="Share your handles and goals—we’ll craft a calendar and creative system that fits."
      signals={[
        "Publishing cadence is inconsistent.",
        "Sales asks for proof of social ROI.",
        "Brand voice looks different on every platform.",
        "You have ideas but no system to package them.",
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
        <h2 className="text-2xl font-semibold text-slate-900">
          Social media services
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Strategy & Positioning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We define content pillars, tone, and rhythm that fits your goals.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Content & Creatives
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Post copy, simple graphics and repurposed content that stays on-brand.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Reporting & Iteration
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Basic performance reporting so you know what works.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Social Media Strategy"
        caption="Build a consistent presence across all your social platforms."
        badge="Social Marketing"
        aspect="wide"
        accent="peach"
        imageSrc="/images/social-media-dashboard.jpg"
        imageAlt="Social media analytics dashboard"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Content pillars we lean on</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Authority & insights",
              desc: "Explain your POV on industry trends and highlight internal expertise.",
            },
            {
              title: "Proof & personality",
              desc: "Share wins, culture snippets and behind-the-scenes to keep things human.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div >
    </ServiceLayout >
  );
}

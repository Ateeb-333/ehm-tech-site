import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Marketing | EHM Tech Services",
  description:
    "Social media, email, and digital marketing campaigns to grow your audience and drive conversions.",
};

export default function MarketingPage() {
  return (
    <ServiceLayout
      title="Marketing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="We create and execute digital marketing strategies that grow your audience, engage customers, and drive measurable results. From social media to email campaigns, we handle the full marketing funnel."
      primaryCta={{ label: "Start a marketing campaign", href: "/contact" }}
      sideHeading="Marketing services"
      sideItems={[
        "Social media strategy & content",
        "Email marketing campaigns",
        "Content marketing & blogs",
        "Paid advertising (Google, Meta)",
        "Marketing automation setup",
      ]}
      stats={[
        {
          label: "Campaign setup",
          value: "1-2 weeks",
          detail: "From strategy to first posts",
        },
        {
          label: "Reporting frequency",
          value: "Weekly/Monthly",
          detail: "Performance dashboards and insights",
        },
        {
          label: "Content volume",
          value: "Custom",
          detail: "Tailored to your goals and budget",
        },
      ]}
      tools={[
        "Mailchimp",
        "HubSpot",
        "Hootsuite",
        "Buffer",
        "Google Analytics",
        "Meta Business Suite",
        "Canva",
      ]}
      approach={[
        {
          title: "Strategy & goals",
          detail:
            "We define target audiences, KPIs, and channel mix based on your business objectives.",
        },
        {
          title: "Content creation",
          detail:
            "We produce engaging content calendars, visuals, and copy that resonates with your audience.",
        },
        {
          title: "Execution & optimization",
          detail:
            "Content goes live with scheduling, automation, and A/B testing to improve performance.",
        },
        {
          title: "Analysis & iteration",
          detail:
            "Regular reporting shows what's working, and we adjust strategy based on data insights.",
        },
      ]}
      faqs={[
        {
          question: "Do you manage social media accounts?",
          answer:
            "Yes. We can handle full social media management including content creation, posting, community engagement, and response management across platforms.",
        },
        {
          question: "Can you work with our existing marketing tools?",
          answer:
            "Absolutely. We integrate with your current CRM, email platform, and analytics tools, or recommend and set up new ones if needed.",
        },
        {
          question: "How do you measure marketing success?",
          answer:
            "We track metrics like engagement rates, click-through rates, conversions, and ROI. We provide monthly reports with insights and recommendations.",
        },
      ]}
      ctaNote="Tell us about your marketing goals and we'll create a strategy that drives results."
      signals={[
        "Social media presence is inconsistent or non-existent.",
        "Email campaigns aren't generating the expected engagement.",
        "Marketing efforts aren't tracking toward clear business goals.",
        "You need professional content but lack in-house marketing resources.",
      ]}
      packages={[
        {
          title: "Marketing audit",
          note: "1 week",
          items: ["Current state review", "Competitor analysis", "Strategy recommendations"],
        },
        {
          title: "Full campaign",
          note: "3-6 months",
          items: ["Multi-channel strategy", "Content creation", "Performance tracking"],
        },
        {
          title: "Ongoing support",
          note: "Retainer",
          items: ["Monthly content", "Campaign management", "Performance optimization"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Marketing capabilities
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Multi-channel strategy
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Coordinated campaigns across social media, email, and paid advertising.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Data-driven decisions
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Analytics and reporting to optimize campaigns and maximize ROI.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Content that converts
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Engaging content tailored to your audience that drives action.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


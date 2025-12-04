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
      intro="Email is the direct line to your customers. No algorithms. No noise. Just you and them. EHM Technology Services helps you send emails that people actually want to open. We build campaigns that nurture relationships, drive sales, and keep your brand top of mind. From welcome sequences to weekly newsletters, we make sure your message lands in the right inbox at the right time."
      primaryCta={{ label: "Start your campaign", href: "/contact" }}
      heroMedia={
        <MediaPlaceholder
          label="Email Marketing"
          caption="Direct connection with your audience"
          badge="Digital"
          accent="violet"
          imageSrc="/images/email-marketing-hero.jpg"
          imageAlt="Email marketing campaign dashboard on laptop"
        />
      }
      sideHeading="What we cover"
      sideItems={[
        "Newsletter strategy",
        "Automated flows",
        "List building",
        "Campaign management",
        "Copywriting & design",
        "A/B testing",
        "Analytics & reporting",
      ]}
      stats={[
        {
          label: "Open rates",
          value: "High",
          detail: "Strategies to boost engagement",
        },
        {
          label: "Setup time",
          value: "Fast",
          detail: "Quick launch for new campaigns",
        },
        {
          label: "ROI",
          value: "Proven",
          detail: "Email remains the highest ROI channel",
        },
      ]}
      tools={[
        "Mailchimp",
        "Klaviyo",
        "HubSpot",
        "ActiveCampaign",
        "Custom HTML templates",
      ]}
      approach={[
        {
          title: "Audit & Strategy",
          detail:
            "We look at what you have and plan where you need to go.",
        },
        {
          title: "Build & Design",
          detail:
            "We create templates and write copy that fits your voice.",
        },
        {
          title: "Launch & Monitor",
          detail:
            "We send the campaigns and watch the results roll in.",
        },
        {
          title: "Optimize",
          detail:
            "We tweak and improve to get better results every time.",
        },
      ]}
      faqs={[
        {
          question: "Do I need a big list to start?",
          answer:
            "No. We help you build your list from scratch or grow the one you have. Quality matters more than quantity.",
        },
        {
          question: "How often should I email my list?",
          answer:
            "It depends on your audience. We help you find the sweet spot—enough to stay relevant, but not enough to be annoying.",
        },
        {
          question: "Can you automate my emails?",
          answer:
            "Yes. We set up welcome series, abandoned cart flows, and nurture sequences that run on autopilot.",
        },
      ]}
      ctaNote="Don't let your leads go cold. Warm them up with email marketing that works. Let's start the conversation."
      signals={[
        "You have a list but never email them.",
        "Your open rates are dropping.",
        "You don't have time to write newsletters.",
        "You want to own your audience, not rent it from social media.",
      ]}
      packages={[
        {
          title: "Starter",
          note: "Monthly",
          items: ["1 Newsletter/month", "List management", "Basic reporting"],
        },
        {
          title: "Growth",
          note: "Monthly",
          items: ["4 Newsletters/month", "Automated flows", "Advanced segmentation"],
        },
        {
          title: "Pro",
          note: "Custom",
          items: ["Full management", "Daily emails", "Dedicated copywriter"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Email Marketing Matters
        </h2>
        <p className="mt-4 text-slate-600">
          Social media is rented land. Email is your home. It is the most reliable way to reach your audience without fighting an algorithm.
        </p>
        <p className="mt-4 text-slate-600">
          Good email marketing:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Builds trust over time</li>
          <li>Drives repeat sales</li>
          <li>Keeps your brand top of mind</li>
          <li>Delivers high ROI</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          We don't just send emails. We build relationships. We write like humans, not robots. We design for clarity, not clutter.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Human Touch
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Copy that sounds like you. Designs that look like you.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Data Driven
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We watch the numbers. If it works, we do more of it. If it doesn't, we fix it.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

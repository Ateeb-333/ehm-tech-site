import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Web Development | EHM Tech Services",
  description:
    "Modern, fast websites and web apps built with frameworks like Next.js and Tailwind.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Web Development"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="We design and build fast, modern websites and web apps using technologies like Next.js and Tailwind. Aligned with your brand and optimized for performance, SEO and conversion."
      primaryCta={{ label: "Start a web project", href: "/contact" }}
      sideHeading="Typical web work"
      sideItems={[
        "Marketing sites and landing pages",
        "Service / portfolio websites",
        "Internal dashboards and tools",
        "Integration with forms, CRM and analytics",
      ]}
      stats={[
        {
          label: "Page speed targets",
          value: "<1.5s",
          detail: "Largest Contentful Paint on modern devices",
        },
        {
          label: "Launch timeframe",
          value: "3-6 weeks",
          detail: "Depending on scope & number of pages",
        },
        {
          label: "Design systems",
          value: "Custom",
          detail: "Reusable tokens & components documented",
        },
      ]}
      tools={[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Contentful / Sanity",
        "Framer",
        "Vercel",
      ]}
      approach={[
        {
          title: "Narrative & structure",
          detail:
            "We map user journeys, IA and content priorities before touching pixels.",
        },
        {
          title: "Design system & components",
          detail:
            "Reusable tokens, typography and components ensure consistency at scale.",
        },
        {
          title: "Build & integrations",
          detail:
            "Pages are developed with accessibility, SEO and integrations baked in.",
        },
        {
          title: "Launch & handoff",
          detail:
            "We host on Vercel or your preferred stack and deliver documentation plus training calls.",
        },
      ]}
      faqs={[
        {
          question: "Can you work with our existing CMS?",
          answer:
            "Yes. We can integrate with headless CMS platforms like Contentful, Sanity and Strapi or set up a lightweight CMS if you’re starting fresh.",
        },
        {
          question: "Do you provide copywriting and visuals?",
          answer:
            "We handle core messaging, light copywriting and art direction. For more involved brand work, we partner with specialists while remaining your single point of contact.",
        },
        {
          question: "How do you keep things maintainable?",
          answer:
            "Every build ships with a component library, README documentation, and optional Loom walkthroughs so internal teams can extend the site without guesswork.",
        },
      ]}
      ctaNote="Show us a sitemap, Figma file or even a notion doc—we’ll turn it into a fast, responsive experience."
      signals={[
        "Existing site takes forever to load or doesn’t pass Core Web Vitals.",
        "Design system lives in Figma but isn’t implemented consistently.",
        "Marketing can’t ship pages without a developer every single time.",
        "Leadership lacks visibility into analytics or conversions.",
      ]}
      packages={[
        {
          title: "Experience refresh",
          note: "2-3 weeks",
          items: ["Messaging realign", "Visual polish sprint", "Performance pass"],
        },
        {
          title: "Net-new build",
          note: "4-6 weeks",
          items: ["UX + UI", "Next.js implementation", "Integrations & QA"],
        },
        {
          title: "Growth lab",
          note: "Retainer",
          items: ["Component updates", "Experiment support", "Analytics reviews"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-white">
          What you get with EHM web builds
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Modern stack
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Built using modern frameworks and best practices for speed,
              security and maintainability.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Responsive & Accessible
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Looks great on desktop, tablet and mobile with accessibility
              taken into account.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Analytics-Ready
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Setup for analytics and event tracking so you can improve over
              time.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Experience enhancers
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Micro-interactions",
              desc: "Thoughtful motion, hover states and scroll-triggered reveals keep users engaged.",
            },
            {
              title: "Analytics hooks",
              desc: "We wire up events for GA4, Plausible or Segment so you can measure real impact.",
            },
            {
              title: "Component documentation",
              desc: "Editable Storybook- style pages or Notion docs explain how to reuse each block.",
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

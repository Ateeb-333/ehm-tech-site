import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Designing | EHM Tech Services",
  description:
    "Creative design solutions for digital experiences, UI/UX design, and brand identity.",
};

export default function DesigningPage() {
  return (
    <ServiceLayout
      title="Designing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="We create beautiful, functional design solutions for digital experiences. From UI/UX design to brand identity, we craft visual experiences that engage users and drive results."
      primaryCta={{ label: "Start a design project", href: "/contact" }}
      sideHeading="Design services"
      sideItems={[
        "UI/UX design for web & mobile",
        "Brand identity & visual systems",
        "Design systems & component libraries",
        "Wireframing & prototyping",
        "User research & testing",
      ]}
      stats={[
        {
          label: "Design delivery",
          value: "2-4 weeks",
          detail: "Depending on scope and revisions",
        },
        {
          label: "Design tools",
          value: "Figma, Adobe XD",
          detail: "Industry-standard design software",
        },
        {
          label: "Collaboration",
          value: "Real-time",
          detail: "Shared design files and feedback loops",
        },
      ]}
      tools={[
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "Principle",
        "Framer",
        "Miro",
        "Notion",
      ]}
      approach={[
        {
          title: "Discovery & research",
          detail:
            "We understand your users, goals, and constraints before sketching solutions.",
        },
        {
          title: "Concept & wireframes",
          detail:
            "Low-fidelity layouts help us test structure and flow before visual polish.",
        },
        {
          title: "Visual design & system",
          detail:
            "We design screens, establish design tokens, and create reusable components.",
        },
        {
          title: "Prototyping & handoff",
          detail:
            "Interactive prototypes and detailed specs ensure smooth implementation.",
        },
      ]}
      faqs={[
        {
          question: "Do you provide design assets for development?",
          answer:
            "Yes. We deliver design files in Figma with detailed specs, export assets, and provide component documentation for seamless handoff to developers.",
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer:
            "Absolutely. We adapt and extend your existing brand system, or create new guidelines that align with your brand values and objectives.",
        },
        {
          question: "How do you ensure designs are accessible?",
          answer:
            "We follow WCAG guidelines, check color contrast ratios, consider keyboard navigation, and test with screen readers to ensure inclusive design.",
        },
      ]}
      ctaNote="Share your project goals and we'll craft a design solution that meets your needs."
      signals={[
        "Current design doesn't reflect your brand or industry standards.",
        "User feedback indicates confusion or friction in the experience.",
        "Designs exist in scattered files without a cohesive system.",
        "You need a design partner to scale visual work efficiently.",
      ]}
      packages={[
        {
          title: "Design audit",
          note: "1-2 weeks",
          items: ["Current state analysis", "Usability review", "Recommendations"],
        },
        {
          title: "Full design system",
          note: "4-6 weeks",
          items: ["Complete UI/UX redesign", "Design system documentation", "Component library"],
        },
        {
          title: "Design support",
          note: "Retainer",
          items: ["Ongoing design updates", "New feature designs", "Design QA"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Design capabilities
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              User-centered design
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Designs that prioritize user needs, accessibility, and intuitive interactions.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Visual excellence
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Polished interfaces with attention to typography, spacing, and visual hierarchy.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Scalable systems
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Design systems that grow with your product and maintain consistency.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


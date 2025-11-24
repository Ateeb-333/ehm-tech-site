import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Engineering Design | EHM Tech Services",
  description:
    "Mechanical, electrical and structural engineering design support with clear, build-ready documentation.",
};

export default function EngineeringDesignPage() {
  return (
    <ServiceLayout
      title="Engineering Design"
      groupLabel="ENGINEERING & ESTIMATION"
      accent="engineering"
      intro="We support your projects with clear, build-ready engineering design for mechanical, electrical and structural systems. From concept sketches to detailed drawings, our team helps you reduce risk and speed up approvals."
      primaryCta={{
        label: "Discuss an upcoming project",
        href: "/contact",
      }}
      secondaryCta={{
        label: "View related work",
        href: "/portfolio",
      }}
      sideHeading="Snapshot of this service"
      sideItems={[
        "Mechanical, electrical & structural design",
        "Coordination with architects & contractors",
        "Standards-compliant documentation",
        "Value engineering for cost & efficiency",
      ]}
      stats={[
        {
          label: "Disciplines covered",
          value: "5+",
          detail: "MEP, structural, architectural support & more",
        },
        {
          label: "Average turnaround",
          value: "5-7 days",
          detail: "Concept packages & initial markups",
        },
        {
          label: "Collaboration models",
          value: "Flexible",
          detail: "Project-based or embedded with your team",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "Navisworks",
        "Bluebeam",
        "Solibri",
        "Notion",
      ]}
      approach={[
        {
          title: "Discover & benchmark",
          detail:
            "We gather constraints, standards and previous assets so we start aligned with reality.",
        },
        {
          title: "Options & concept routes",
          detail:
            "Quick sketches or markups help you compare alternatives before investing heavily.",
        },
        {
          title: "Detailed design production",
          detail:
            "Coordinated drawings, schedules and calculations are developed with live feedback loops.",
        },
        {
          title: "Technical review & handover",
          detail:
            "We facilitate reviews, compile documentation and stay available for site queries.",
        },
      ]}
      faqs={[
        {
          question: "Can you slot into an existing BIM workflow?",
          answer:
            "Yes. We work inside client environments (Revit, Navisworks, ACC, Notion) or provide exports that match your template so there’s no rework on your side.",
        },
        {
          question: "How do you ensure code compliance?",
          answer:
            "We reference project-specific standards, local regulations and client specs from day one. Every package ships with a brief checklist outlining the compliance path.",
        },
        {
          question: "What if the scope evolves mid-project?",
          answer:
            "We expect iteration. Change requests are logged, impact is highlighted the same day, and we adapt the schedule without derailing the rest of the workstream.",
        },
      ]}
      ctaNote="Send us your latest markups or sketches—we’ll turn them into clear, coordinated design packages."
      signals={[
        "You’re juggling markups across email, WhatsApp and manual PDFs.",
        "Internal teams need quick options before committing to detailed design.",
        "Authority approval timelines are slipping due to unclear documentation.",
        "Contractors keep raising RFIs because intent isn’t obvious on drawings.",
      ]}
      packages={[
        {
          title: "Concept sprint",
          note: "1-2 weeks",
          items: ["Design intent sketches", "Coordination workshop", "Quick markups"],
        },
        {
          title: "Full design package",
          note: "4-6 weeks",
          items: ["Discipline drawings", "Schedules & calculations", "Review support"],
        },
        {
          title: "Embedded reviewer",
          note: "Monthly",
          items: ["On-call clash checks", "Authority coordination", "Site change log"],
        },
      ]}
    >
      {/* Deliverables */}
      <div>
        <h2 className="text-2xl font-semibold text-white">What we deliver</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Design Packages
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Complete design packages including drawings, schedules and
              calculations to support tendering and execution.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Coordination & Reviews
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Coordinated layouts and clash checks across disciplines to reduce
              site changes and rework.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Compliance & Standards
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Designs aligned with relevant codes, client standards and local
              authority requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="text-2xl font-semibold text-white">
          How our design process works
        </h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4 text-sm">
          {[
            "Requirement gathering",
            "Concept & options",
            "Detailed design",
            "Review & handover",
          ].map((step, idx) => (
            <div key={step} className="section-card p-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slateBlue text-white text-xs font-semibold">
                {idx + 1}
              </div>
              <p className="mt-3 font-medium text-gray-100">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality guardrails */}
      <div>
        <h2 className="text-2xl font-semibold text-white">Quality guardrails</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Design review rituals",
              desc: "Internal peer reviews before every submission ensure drawings and models are build-ready.",
            },
            {
              title: "Issue tracking & context",
              desc: "We log every open item with screenshots, markups and decisions so you always see the latest status.",
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

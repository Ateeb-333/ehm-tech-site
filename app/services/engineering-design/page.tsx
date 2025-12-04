import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

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
      intro="We support your projects with clear, build-ready engineering design. From concept sketches to detailed drawings, our team helps you reduce risk and speed up approvals."
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
            "We gather constraints and standards to start aligned with reality.",
        },
        {
          title: "Options & concept routes",
          detail:
            "Quick sketches help you compare alternatives before investing heavily.",
        },
        {
          title: "Detailed design production",
          detail:
            "Coordinated drawings and schedules developed with live feedback.",
        },
        {
          title: "Technical review & handover",
          detail:
            "We facilitate reviews and stay available for site queries.",
        },
      ]}
      faqs={[
        {
          question: "Can you slot into an existing BIM workflow?",
          answer:
            "Yes. We work inside client environments (Revit, ACC) or provide exports that match your template.",
        },
        {
          question: "How do you ensure code compliance?",
          answer:
            "We reference project-specific standards and local regulations. Every package includes a compliance checklist.",
        },
        {
          question: "What if the scope evolves mid-project?",
          answer:
            "We expect iteration. Change requests are logged and we adapt the schedule immediately.",
        },
      ]}
      ctaNote="Send us your latest markups or sketches—we’ll turn them into clear, coordinated design packages."
      signals={[
        "You’re juggling markups across email and manual PDFs.",
        "Internal teams need quick options before detailed design.",
        "Approval timelines are slipping due to unclear docs.",
        "Contractors raise RFIs because intent isn’t obvious.",
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
      heroMedia={
        <MediaPlaceholder
          label="Engineering Design"
          caption="Professional engineering design support for your projects."
          badge="Engineering"
          accent="cyan"
          imageSrc="/images/engineering-design.jpg"
          imageAlt="Engineering design workspace with technical drawings"
          className="h-full min-h-[300px]"
        />
      }
    >
      {/* Deliverables */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">What we deliver</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Design Packages
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Complete packages including drawings, schedules and calculations.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Coordination & Reviews
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Coordinated layouts and clash checks to reduce site changes.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Compliance & Standards
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Designs aligned with relevant codes and client standards.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Engineering Design"
        caption="Precision-engineered solutions for complex projects."
        badge="Engineering"
        accent="cyan"
        imageSrc="/images/engineering-design.jpg"
        imageAlt="Industrial engineering equipment and pumps"
      />

      {/* Process */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
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
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-slateBlue text-slate-900 text-xs font-semibold">
                {idx + 1}
              </div>
              <p className="mt-3 font-medium text-gray-100">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quality guardrails */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Quality guardrails</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Design review rituals",
              desc: "Internal peer reviews ensure drawings are build-ready.",
            },
            {
              title: "Issue tracking & context",
              desc: "We log every item with screenshots and decisions for full visibility.",
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

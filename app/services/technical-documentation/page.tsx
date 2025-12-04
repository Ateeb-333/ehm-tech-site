import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Technical Documentation | EHM Tech Services",
  description:
    "Design reports, drawings, specifications and handover records that keep your projects moving.",
};

export default function TechnicalDocumentationPage() {
  return (
    <ServiceLayout
      title="Technical Documentation"
      groupLabel="ENGINEERING & ESTIMATION"
      accent="engineering"
      intro="Clear documentation keeps projects moving. We prepare drawings, specifications, reports and handover records that make life easier for everyone."
      primaryCta={{
        label: "Talk about your documentation needs",
        href: "/contact",
      }}
      sideHeading="Types of documentation"
      sideItems={[
        "Design reports & calculations",
        "Specifications & datasheets",
        "As-built drawings & O&M manuals",
        "Compliance & inspection records",
      ]}
      stats={[
        {
          label: "Documents shipped",
          value: "400+",
          detail: "Reports, manuals, registers & handover packs",
        },
        {
          label: "Authority approvals",
          value: "98%",
          detail: "Accepted on first submission",
        },
        {
          label: "File formats",
          value: "12",
          detail: "AutoCAD, Revit, PDF, Excel, Word & more",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "Bluebeam",
        "Notion",
        "Google Workspace",
        "SharePoint",
      ]}
      approach={[
        {
          title: "Gather & organize inputs",
          detail:
            "We align on templates and requirements before drafting begins.",
        },
        {
          title: "Draft & structure",
          detail:
            "Content is compiled with clear labeling and traceable references.",
        },
        {
          title: "Review & polish",
          detail:
            "Built-in QA ensures formatting consistency and accuracy.",
        },
        {
          title: "Package & deliver",
          detail:
            "Files are delivered in your folder structure with trackers.",
        },
      ]}
      faqs={[
        {
          question: "Can you turn messy folders into clean handover packs?",
          answer:
            "Yes. We audit what exists, map missing items, and rebuild the structure with intuitive naming.",
        },
        {
          question: "Do you support bilingual documentation?",
          answer:
            "We can produce English primary documentation and coordinate translation-ready files.",
        },
        {
          question: "How do you manage revisions?",
          answer:
            "Every document gets a change log, version number and reviewer sign-off.",
        },
      ]}
      ctaNote="Need help closing out a project? We’ll whip scattered files into a clean, review-proof documentation set."
      signals={[
        "Handovers keep slipping because files live in random folders.",
        "Authorities request re-submissions due to inconsistent formatting.",
        "Site teams rely on outdated markups.",
        "Clients demand structured as-built records.",
      ]}
      packages={[
        {
          title: "Doc audit",
          note: "1 week",
          items: ["Inventory check", "Gap report", "File structure proposal"],
        },
        {
          title: "Build-ready pack",
          note: "2-4 weeks",
          items: ["Templates & styles", "Drawing + spec updates", "Compliance checklist"],
        },
        {
          title: "Handover concierge",
          note: "Retainer",
          items: ["Stakeholder reviews", "Digital archive", "Training + Loom tours"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Documentation services
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Design Documentation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean, consistent documentation that captures design intent and supports reviews.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction & As-Built
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Site-verified as-built drawings and O&amp;M records for smooth handover.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Compliance & Handover
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Checklists, certificates and files arranged in a clear structure.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Documentation Standards"
        caption="Structured, compliant, and clear technical documentation."
        badge="Quality"
        aspect="wide"
        accent="cyan"
        imageSrc="/images/technical-docs-checklist.jpg"
        imageAlt="Technical documentation checklist"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Compliance-ready add-ons</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Traceable registers",
              desc: "Registers linked directly to source documents.",
            },
            {
              title: "Review dashboards",
              desc: "Living dashboards outlining review status and ownership.",
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

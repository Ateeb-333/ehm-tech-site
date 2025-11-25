import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

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
      intro="Clear documentation keeps projects moving. We prepare drawings, specifications, reports and handover records that make life easier for consultants, contractors and authorities."
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
            "We align on templates, authority requirements and version control before drafting begins.",
        },
        {
          title: "Draft & structure",
          detail:
            "Content is written or compiled with clear labeling, hyperlinks and traceable references.",
        },
        {
          title: "Review & polish",
          detail:
            "Built-in QA ensures formatting consistency, data accuracy and cross-referencing.",
        },
        {
          title: "Package & deliver",
          detail:
            "Files are delivered in your folder structure with trackers so everyone knows what’s final.",
        },
      ]}
      faqs={[
        {
          question: "Can you turn messy folders into clean handover packs?",
          answer:
            "Yes. We audit what exists, map missing items, then rebuild the structure with intuitive naming so anyone can find what they need.",
        },
        {
          question: "Do you support bilingual documentation?",
          answer:
            "We can produce English primary documentation and coordinate translation-ready files or partner translators as required.",
        },
        {
          question: "How do you manage revisions?",
          answer:
            "Every document gets a change log, version number and reviewer sign-off so there’s a single source of truth.",
        },
      ]}
      ctaNote="Need help closing out a project? We’ll whip scattered files into a clean, review-proof documentation set."
      signals={[
        "Handovers keep slipping because files live in random folders.",
        "Authorities request re-submissions due to inconsistent formatting.",
        "Site teams rely on outdated markups and don’t trust the latest sets.",
        "Clients demand structured as-built records before releasing retention.",
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
            <p className="mt-2 text-sm text-gray-300">
              Clean, consistent documentation that captures the design intent
              and supports technical reviews.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction & As-Built
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Site-verified as-built drawings and O&amp;M records for smooth
              handover and facilities management.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Compliance & Handover
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Checklists, certificates and files arranged in a clear structure
              for clients and authorities.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Compliance-ready add-ons</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Traceable registers",
              desc: "We build equipment, drawing and inspection registers linked directly to source documents.",
            },
            {
              title: "Review dashboards",
              desc: "Living dashboards outlining review status, outstanding comments and ownership.",
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

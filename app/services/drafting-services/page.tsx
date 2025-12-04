import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Drafting Services | EHM Tech Services",
  description:
    "Professional, accurate, and easy-to-understand drawings that help you plan, design, and build without confusion. Every great build starts with a great drawing.",
};

export default function DraftingServicesPage() {
  return (
    <ServiceLayout
      title="Drafting Services"
      groupLabel="CONSTRUCTION"
      accent="engineering"
      intro="Every great build starts with a great drawing. Clear plans keep your project steady and your vision clear. EHM Technology Services provides professional, accurate drawings that help you plan, design, and build without confusion. Good drafting is the language your project speaks. We save you from the mess. No matter the size, we deliver drafting solutions that make your work smoother from day one."
      primaryCta={{ label: "Start a drafting project", href: "/contact" }}
      heroMedia={
        <MediaPlaceholder
          label="Drafting Services"
          caption="Professional architectural blueprints and planning"
          badge="Blueprint"
          imageSrc="/images/drafting-blueprint-preview.jpg"
          imageAlt="Architectural blueprint floor plan with wooden models"
        />
      }
      sideHeading="What we cover"
      sideItems={[
        "Architectural drafting",
        "Structural drafting",
        "MEP drafting",
        "Construction documents",
        "As built drawings",
        "Shop drawings",
        "2D drafting",
        "3D drafting",
        "Residential drafting",
        "Commercial drafting",
        "Industrial drafting",
      ]}
      stats={[
        {
          label: "Project coverage",
          value: "All types",
          detail: "Residential, commercial, industrial, and civil projects",
        },
        {
          label: "Turnaround time",
          value: "Fast",
          detail: "Fast turnaround with quick revisions",
        },
        {
          label: "Support",
          value: "Complete",
          detail: "Support from start to finish",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "SketchUp",
        "Bluebeam",
        "Advanced modeling software",
      ]}
      approach={[
        {
          title: "Share project details or ideas",
          detail:
            "Send sketches, markups, or ideas. We work with what you have.",
        },
        {
          title: "Review needs & confirm scope",
          detail:
            "We review requirements and confirm exactly what drawings you need.",
        },
        {
          title: "Prepare clean & accurate drawings",
          detail:
            "Using professional tools, we create precise, industry-standard drawings.",
        },
        {
          title: "Deliver organized & easy plans",
          detail:
            "You get clear, organized drawing sets ready for construction or bidding.",
        },
      ]}
      faqs={[
        {
          question: "What types of drafting services do you provide?",
          answer:
            "We draft everything from concept to completion: architectural, structural, MEP, construction documents, as-builts, and shop drawings. If you need it drawn, we can draw it.",
        },
        {
          question: "What tools do you use for drafting?",
          answer:
            "We use AutoCAD, Revit, SketchUp, Bluebeam, and advanced modeling software for sharp, accurate drawings.",
        },
        {
          question: "Who can benefit from your drafting services?",
          answer:
            "Contractors, architects, homebuilders, developers, designers, engineers, and homeowners. We have your back.",
        },
      ]}
      ctaNote="Clear drawings build clear results. Start strong and stay organized with drafting that feels clean, professional, and effortless."
      signals={[
        "Building without clear drawings is like building blind.",
        "Clear drawings prevent messy projects.",
        "You need drawings that communicate clearly.",
        "Good drafting is the language your project speaks.",
      ]}
      packages={[
        {
          title: "2D drafting",
          note: "Clean & simple",
          items: ["Clean linework", "Exact measurements", "Clear design intent"],
        },
        {
          title: "3D drafting",
          note: "Visual models",
          items: ["3D visualization", "See before you build", "Enhanced understanding"],
        },
        {
          title: "Complete drafting package",
          note: "Full service",
          items: ["Architectural, structural, MEP", "Construction documents", "Shop drawings"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Drafting Services Matter
        </h2>
        <p className="mt-4 text-slate-600">
          Building without proper drafting is risky. Clear drawings remove guesswork, reduce mistakes, and keep everyone in sync.
        </p>
        <p className="mt-4 text-slate-600">
          Strong drafting helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Communicate the design clearly</li>
          <li>Avoid misinterpretation on site</li>
          <li>Speed up approval and permitting</li>
          <li>Plan materials and budgets accurately</li>
          <li>Present a professional impression</li>
          <li>Prevent rework and costly delays</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When your drawings are clear, your project runs smoothly.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Trusted Drafting Partner
        </h2>
        <p className="mt-4 text-slate-600">
          You get friendly communication, fast results, and crisp drawings. We treat your project with the same care we would give our own.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clean & Accurate
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean drawings. Fast turnaround. Unlimited project types. Support from start to finish.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Easy Revisions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Easy revisions. A team that listens. We keep the process simple and stress-free.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Drafting Services
        </h2>
        <p className="mt-4 text-slate-600">
          We draft everything needed to guide your project from concept to completion.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Architectural Drafting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Floor plans, elevations, sections, and room layouts. Every detail needed.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Drafting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beams, columns, foundations, and reinforcements. Safe and stable builds.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Drafting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Mechanical, electrical, and plumbing plans. Clean diagrams for efficient work.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction Documents
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Full sets ready for contractors, permitting, bidding, and approvals.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              As Built Drawings
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Updated drawings matching final built conditions for accurate records.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Shop Drawings
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Custom fabrications, millwork, steel, and fixtures for suppliers and installers.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              2D Drafting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean, simple linework for exact clarity on measurements and design.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              3D Drafting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Visual models to see the project before you build it.
            </p>
          </div>
        </div>
      </div>
      <MediaPlaceholder className="mt-12"
        label="Drafting Services"
        caption="Clear, accurate drawings for seamless construction."
        badge="Drafting"
        imageSrc="/images/drafting-services-hero.png"
        imageAlt="Architectural drafting workspace with blueprints and tablet"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Project Type Drafting
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Homes, additions, remodels, and multi-family units. Any style.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Retail, offices, restaurants, hotels, and warehouses.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Plants, factories, and complex layouts made easy to follow.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers every discipline and industry.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Drafting Services
        </h2>
        <p className="mt-4 text-slate-600">
          If your project needs drawings, we have your back.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Clear drawings that guide construction and prevent mistakes.",
            },
            {
              title: "Architects",
              desc: "Professional drafting support for design development.",
            },
            {
              title: "Homebuilders",
              desc: "Accurate plans for residential construction projects.",
            },
            {
              title: "Developers",
              desc: "Complete drawing sets for planning and approvals.",
            },
            {
              title: "Designers",
              desc: "Technical drawings that bring concepts to life.",
            },
            {
              title: "Engineers",
              desc: "Precise structural, MEP, and engineering drawings.",
            },
            {
              title: "Real Estate Investors",
              desc: "Professional drawings for development and renovations.",
            },
            {
              title: "Homeowners",
              desc: "Clear plans for home projects and remodels.",
            },
            {
              title: "Commercial Owners",
              desc: "Accurate drawings for commercial projects.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Projects We Work On
        </h2>
        <p className="mt-4 text-slate-600">
          We provide drafting for:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential properties",
            "Commercial buildings",
            "Industrial facilities",
            "Civil layouts",
            "Retail and hospitality",
            "Educational buildings",
            "Renovations and expansions",
            "Custom design concepts",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Nothing too big, small, or complex.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients stick with us because our drafting makes their work easier.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Accurate & Quick
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Accurate drawings. Quick delivery. Friendly support. Fair pricing. Simple process.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Committed to Your Success
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We give you drawings that help everyone on your project breathe easier.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


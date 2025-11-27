import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

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
      intro="Every great build starts with a great drawing. A clean set of plans keeps your project steady, your team aligned, and your vision crystal clear. At EHM Technology Services, our Drafting Services give you professional, accurate, and easy-to-understand drawings that help you plan, design, and build without confusion. Good drafting is more than lines on paper. It is the language your project speaks. When the drawings are clear, the project feels easy. When they are not, things get messy fast. We save you from the messy part. No matter the project size or type, EHM Technology Services delivers drafting solutions that make your work smoother from day one."
      primaryCta={{ label: "Start a drafting project", href: "/contact" }}
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
            "Send us your sketches, markups, ideas, or existing drawings. We work with whatever you have to get started.",
        },
        {
          title: "Review needs & confirm scope",
          detail:
            "We review your requirements, understand your goals, and confirm exactly what drawings and details you need.",
        },
        {
          title: "Prepare clean & accurate drawings",
          detail:
            "Using AutoCAD, Revit, SketchUp, and other professional tools, we create precise, industry-standard drawings.",
        },
        {
          title: "Deliver organized & easy plans",
          detail:
            "You get well-organized drawing sets that are clear, accurate, and ready for construction, permitting, or bidding.",
        },
      ]}
      faqs={[
        {
          question: "What types of drafting services do you provide?",
          answer:
            "We draft everything needed to guide your project from concept to completion including architectural drafting (floor plans, elevations, sections), structural drafting (beams, columns, foundations), MEP drafting (mechanical, electrical, plumbing), construction documents, as built drawings, shop drawings, 2D and 3D drafting. EHM Technology Services covers every discipline and every industry. If you need it drawn, we can draw it.",
        },
        {
          question: "What tools do you use for drafting?",
          answer:
            "We use modern drafting tools including AutoCAD, Revit, SketchUp, Bluebeam, and advanced modeling software. These tools help us deliver drawings that look sharp and perform even sharper on site.",
        },
        {
          question: "Who can benefit from your drafting services?",
          answer:
            "Our services support contractors, architects, homebuilders, developers, designers, engineers, real estate investors, homeowners, and commercial owners. If your project needs drawings, we have your back.",
        },
      ]}
      ctaNote="Clear drawings build clear results. With EHM Technology Services, your project starts strong, stays organized, and moves forward without confusion. Let us bring your design to life with drafting that feels clean, professional, and effortless."
      signals={[
        "Imagine building a piece of furniture with instructions written by someone half asleep.",
        "When the drawings are clear, the project feels easy. When they are not, things get messy fast.",
        "You need drawings that communicate the design clearly and avoid misinterpretation on site.",
        "Good drafting is more than lines on paper. It is the language your project speaks.",
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
          Imagine building a piece of furniture with instructions written by someone half asleep. That is how a project feels without proper drafting. Clear drawings remove the guesswork, reduce mistakes, and keep everyone in sync.
        </p>
        <p className="mt-4 text-slate-600">
          Strong drafting helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Communicate the design clearly</li>
          <li>Avoid misinterpretation on site</li>
          <li>Speed up approval and permitting</li>
          <li>Plan materials and budgets accurately</li>
          <li>Present a professional impression to clients</li>
          <li>Prevent rework and costly delays</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When your drawings are clear, your project runs smoothly as warm butter on toast.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Trusted Drafting Partner
        </h2>
        <p className="mt-4 text-slate-600">
          At EHM Technology Services, you get friendly communication, fast results, and crisp drawings that make everyone's job easier. We treat your project with the same care we would give our own.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clean & Accurate
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clean and accurate drawings. Fast turnaround. Unlimited project types. Support from start to finish.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Easy Revisions
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Easy revisions. A team that listens and understands your goals. We keep the process simple so you stay stress free.
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
            <p className="mt-2 text-sm text-gray-300">
              Floor plans. Elevations. Sections. Room layouts. Door and window schedules. Every detail your design needs to feel complete.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Beams. Columns. Foundations. Reinforcements. Load layouts. Everything needed for a safe and stable build.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Mechanical layouts. Electrical drawings. Plumbing plans. Clean diagrams that help every trade work efficiently.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction Documents
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Full drawing sets ready for contractors, permitting, bidding, and approvals.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              As Built Drawings
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We update your drawings to match the final built conditions, so you always have accurate project records.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Shop Drawings
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Custom fabrications. Millwork. Steel. Cabinets. Fixtures. Everything your suppliers and installers need.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              2D Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clean and simple linework that gives you exact clarity on measurements and design intent.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              3D Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We create visual models that help you see the project before you build it. A little like giving your imagination superpowers.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Project Type Drafting
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Homes. Additions. Remodels. Multi family units. Custom homes. Any style. Any scale.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Retail spaces. Offices. Restaurants. Clinics. Hotels. Educational spaces. Warehouses.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Drafting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Plants. Factories. Processing facilities. Power buildings. Complex layouts made easy to follow.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers every discipline and every industry. If you need it drawn, we can draw it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Drafting Services
        </h2>
        <p className="mt-4 text-slate-600">
          Our services support everyone who needs professional drawings. If your project needs drawings, we have your back.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Clear drawings that guide construction and prevent mistakes.",
            },
            {
              title: "Architects",
              desc: "Professional drafting support for design development and documentation.",
            },
            {
              title: "Homebuilders",
              desc: "Accurate plans for residential construction projects of all sizes.",
            },
            {
              title: "Developers",
              desc: "Complete drawing sets for project planning and approvals.",
            },
            {
              title: "Designers",
              desc: "Technical drawings that bring design concepts to life.",
            },
            {
              title: "Engineers",
              desc: "Precise structural, MEP, and engineering drawings.",
            },
            {
              title: "Real Estate Investors",
              desc: "Professional drawings for property development and renovations.",
            },
            {
              title: "Homeowners",
              desc: "Clear plans for home projects, additions, and remodels.",
            },
            {
              title: "Commercial Owners",
              desc: "Accurate drawings for commercial building projects and tenant improvements.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
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
              <p className="text-white font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Nothing too big. Nothing too small. Nothing too complex.
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
            <p className="mt-2 text-sm text-gray-300">
              Accurate drawings. Quick delivery. Friendly support. Fair pricing. A simple process.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Committed to Your Success
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              A team committed to your success. We give you drawings that help everyone on your project breathe a little easier.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


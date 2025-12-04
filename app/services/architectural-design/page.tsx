import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Architectural and Design Engineering Services | EHM Tech Services",
  description:
    "Turn your vision into a clear plan that builders can follow with confidence. Architectural and design engineering services that blend creativity with practical planning.",
};

export default function ArchitecturalDesignPage() {
  return (
    <ServiceLayout
      title="Architectural and Design Engineering Services"
      groupLabel="ENGINEERING"
      accent="engineering"
      intro="Every beautiful building starts as an idea. EHM Technology Services helps you shape your vision into a clear plan that builders can follow with confidence. We ensure your design looks great, works well, and supports the people who use it."
      primaryCta={{ label: "Start design project", href: "/contact" }}
      heroMedia={
        <MediaPlaceholder
          label="Architectural & Design Engineering"
          caption="Digital workflow and documentation automation"
          badge="Architecture"
          imageSrc="/images/architectural-design-preview.jpg"
          imageAlt="Digital document workflow automation"
        />
      }
      sideHeading="What we cover"
      sideItems={[
        "Conceptual design",
        "Space planning",
        "Architectural layouts",
        "3D visualization and renderings",
        "Interior and exterior design",
        "Structural coordination",
        "Code compliance preparation",
        "Remodel and renovation planning",
        "Custom design solutions",
        "Full construction document sets",
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
          detail: "Fast turnaround that matches your schedule",
        },
        {
          label: "Support",
          value: "Complete",
          detail: "Support from concept to final plans",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "SketchUp",
        "Rendering software",
        "Blueprint review tools",
      ]}
      approach={[
        {
          title: "Discuss vision & goals",
          detail:
            "We discuss your vision and goals to inform our design approach.",
        },
        {
          title: "Create concepts & layouts",
          detail:
            "We create concepts and layouts to help you visualize the project.",
        },
        {
          title: "Refine design with feedback",
          detail:
            "We refine the design with your feedback to match your vision.",
        },
        {
          title: "Prepare full drawings & documents",
          detail:
            "We prepare full drawings ready for permitting and construction.",
        },
      ]}
      faqs={[
        {
          question: "What types of architectural and design services do you provide?",
          answer:
            "We provide conceptual design, space planning, architectural layouts, 3D visualization, interior/exterior design, and construction documents. EHM Technology Services delivers thoughtful, practical designs.",
        },
        {
          question: "What tools do you use for architectural design?",
          answer:
            "We use AutoCAD, Revit, SketchUp, and rendering software to create visually appealing and technically sound designs.",
        },
        {
          question: "Who can benefit from your architectural and design services?",
          answer:
            "Homeowners, contractors, developers, architects, and investors. Anyone who wants a functional and beautiful space can rely on us.",
        },
      ]}
      ctaNote="Your building deserves a design that feels thoughtful and inspiring. Let us help you shape your next project with confidence and creativity."
      signals={[
        "Every beautiful building starts as an idea.",
        "A project without proper design is like a trip without a map.",
        "Great design is about how a space feels and works.",
        "Your building deserves a thoughtful and functional design.",
      ]}
      packages={[
        {
          title: "Concept design package",
          note: "Visualization",
          items: ["Initial design concepts", "3D visualizations", "Early layouts"],
        },
        {
          title: "Full design service",
          note: "Complete",
          items: ["Complete design development", "Construction documents", "Permit drawings"],
        },
        {
          title: "Ongoing design support",
          note: "Revisions",
          items: ["Quick updates", "Design revisions", "Construction support"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Architectural and Design Engineering Matters
        </h2>
        <p className="mt-4 text-slate-600">
          A project without proper design is like a road trip without a map. Strong architectural and design engineering keeps your project on the right path.
        </p>
        <p className="mt-4 text-slate-600">
          Good design helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Build spaces that function well</li>
          <li>Improve comfort, flow, and safety</li>
          <li>Meet codes and permitting requirements</li>
          <li>Avoid expensive changes during construction</li>
          <li>Bring your creative vision to life</li>
          <li>Impress clients and decision makers</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When your design is right, everything else becomes easier.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Perfect Fit
        </h2>
        <p className="mt-4 text-slate-600">
          We combine creativity with engineering logic. Our team listens to your ideas and develops designs that look good, feel right, and meet every technical requirement.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Beautiful & Practical
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beautiful designs, fast communication, and friendly guidance.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Smart Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Smart solutions for all projects. We make design simple and stress-free.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Architectural Design"
        caption="Creative designs that combine beauty with practical engineering."
        badge="Architecture"
        accent="cyan"
        imageSrc="/images/architectural-design-hero.png"
        imageAlt="Architectural blueprints and technical drawings"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Architectural and Design Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support your project with full service design from the first sketch to the final blueprint.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Conceptual Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We turn your ideas into early visuals that help you see your project. Simple. Clear. Exciting.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Space Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We plan every room and pathway so the space flows naturally and feels comfortable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Architectural Layouts
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Floor plans, elevations, and sections. Designs that blend beauty with functionality.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              3D Visualization and Renderings
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Visual models that help you experience the project before construction starts.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Interior and Exterior Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Materials, colors, lighting. We make sure your building looks stunning inside and out.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Coordination
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We align architectural ideas with engineering reality so your project stays safe.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Code Compliance Preparation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We design with codes and zoning in mind so approval feels smooth.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Remodel and Renovation Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We redesign your layout to improve flow, comfort, and function.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Custom Design Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Unique homes, commercial spaces, or specialty buildings. If you imagine it, we design it.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services delivers design that feels thoughtful, practical, and visually appealing.
        </p>
        <MediaPlaceholder className="mt-12"
          label="Architectural Design"
          caption="Visualizing spaces before they are built."
          badge="Design"
          accent="violet"
          imageSrc="/images/architectural-design-preview.jpg"
          imageAlt="Digital document workflow automation"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Architectural and Design Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support everyone who wants to create functional and beautiful spaces.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Homeowners",
              desc: "Turn your vision into a clear plan for your dream home.",
            },
            {
              title: "Contractors",
              desc: "Clear, buildable designs for smooth construction.",
            },
            {
              title: "Developers",
              desc: "Complete architectural design support for all phases.",
            },
            {
              title: "Architects",
              desc: "Professional design support and coordination services.",
            },
            {
              title: "Designers",
              desc: "Technical design services that bring concepts to life.",
            },
            {
              title: "Commercial Property Owners",
              desc: "Protect your investment with functional designs.",
            },
            {
              title: "Investors",
              desc: "Ensure projects have designs that add value.",
            },
            {
              title: "Builders",
              desc: "Professional design support for all builds.",
            },
            {
              title: "Government and Public Projects",
              desc: "Meet compliance requirements with professional services.",
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
          Projects We Design
        </h2>
        <p className="mt-4 text-slate-600">
          We design all project types:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential homes",
            "Commercial buildings",
            "Retail spaces",
            "Office layouts",
            "Restaurants and hospitality",
            "Industrial facilities",
            "Educational spaces",
            "Healthcare buildings",
            "Renovations and expansions",
            "Custom architectural concepts",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          No idea is too big or too unique for our team.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients love working with us because we blend creativity with practical engineering.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Beautiful & Technical
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beautiful designs, strong technical planning, and easy communication.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Committed Team
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing and a team committed to your project. We make design exciting.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


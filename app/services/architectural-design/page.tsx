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
      intro="Every beautiful building starts as an idea. But turning that idea into something real takes the right mix of creativity, planning, and engineering. At EHM Technology Services, our Architectural and Design Engineering Services help you shape your vision into a clear plan that builders can follow with confidence. Great design is more than good looks. It is how a space feels, how it works, and how well it supports the people who use it. When design and engineering work together, everything falls into place. That is exactly what we deliver. Whether your project is brand new or a renovation with big dreams, we guide you through every step with clarity and care."
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
            "We talk about your vision and understand your style and project goals to inform our design approach.",
        },
        {
          title: "Create concepts & layouts",
          detail:
            "We create concepts and early layouts that bring your ideas to life and help you visualize the project.",
        },
        {
          title: "Refine design with feedback",
          detail:
            "We refine the design with your feedback and finalize the details to match your vision perfectly.",
        },
        {
          title: "Prepare full drawings & documents",
          detail:
            "Our team prepares full drawings ready for permitting and construction, ensuring everything is build ready.",
        },
      ]}
      faqs={[
        {
          question: "What types of architectural and design services do you provide?",
          answer:
            "We provide full service design from the first sketch to the final blueprint including conceptual design, space planning, architectural layouts (floor plans, elevations, sections, room details), 3D visualization and renderings, interior and exterior design, structural coordination, code compliance preparation, remodel and renovation planning, custom design solutions, and full construction document sets. EHM Technology Services delivers design that feels thoughtful, practical, and visually appealing.",
        },
        {
          question: "What tools do you use for architectural design?",
          answer:
            "We use modern design and drafting tools that help us bring your ideas to life including AutoCAD, Revit, SketchUp, rendering software, and blueprint review tools. These tools help us create designs that are visually appealing and technically sound.",
        },
        {
          question: "Who can benefit from your architectural and design services?",
          answer:
            "We support homeowners, contractors, developers, architects, designers, commercial property owners, investors, builders, and government and public projects. Anyone who wants to create a functional and beautiful space can rely on us.",
        },
      ]}
      ctaNote="Your building deserves a design that feels thoughtful, functional, and inspiring. With EHM Technology Services, you get architectural and design engineering that turns ideas into something real and buildable. Let us help you shape your next project with confidence and creativity."
      signals={[
        "Every beautiful building starts as an idea that needs to become real.",
        "A project without proper design is like a road trip without a map.",
        "Great design is more than good looks. It is how a space feels, how it works, and how well it supports the people who use it.",
        "Your building deserves a design that feels thoughtful, functional, and inspiring.",
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
          A project without proper design is like a road trip without a map. You might move forward, but where you end up is anyone's guess. Strong architectural and design engineering keeps your project on the right path.
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
          At EHM Technology Services, we combine creativity with engineering logic. Our team listens to your ideas, understands your goals, and develops designs that look good, feel right, and meet every technical requirement.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Beautiful & Practical
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beautiful and practical designs. Fast communication. Friendly guidance at every step. Complete support from concept to final plans.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Smart Solutions & Enjoyable Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Smart solutions for all project types. A team that makes the process enjoyable. We make design simple and stress free.
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
              We turn your ideas into early visuals that help you see your project before any work begins. Simple. Clear. Exciting.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Space Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We plan every room, area, and pathway so the space flows naturally and feels comfortable for real people.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Architectural Layouts
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Floor plans. Elevations. Sections. Room details. Designs that blend beauty with functionality.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              3D Visualization and Renderings
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We create visual models that help you experience the project before construction even starts. It feels like walking through your future space.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Interior and Exterior Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Material choices. Colors. Lighting. Finishes. Exterior features. We make sure your building looks stunning inside and out.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Coordination
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We align architectural ideas with engineering reality so your project stays safe and buildable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Code Compliance Preparation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We design with local codes, zoning rules, and permitting needs in mind so approval feels smooth instead of stressful.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Remodel and Renovation Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Old spaces need fresh ideas. We redesign your layout to improve flow, comfort, and function.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Custom Design Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Unique homes. Creative commercial spaces. Specialty buildings. If you imagine it, we design it.
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
          We support everyone who wants to create functional and beautiful spaces. Anyone who wants to create a functional and beautiful space can rely on us.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Homeowners",
              desc: "Turn your vision into a clear plan for your dream home or renovation.",
            },
            {
              title: "Contractors",
              desc: "Clear, buildable designs that make construction smooth and efficient.",
            },
            {
              title: "Developers",
              desc: "Complete architectural design support for all phases of development.",
            },
            {
              title: "Architects",
              desc: "Professional design support and coordination services.",
            },
            {
              title: "Designers",
              desc: "Technical design services that bring your creative concepts to life.",
            },
            {
              title: "Commercial Property Owners",
              desc: "Protect your investment with thoughtful and functional designs.",
            },
            {
              title: "Investors",
              desc: "Ensure projects have designs that add value and appeal.",
            },
            {
              title: "Builders",
              desc: "Professional design support for residential and commercial builds.",
            },
            {
              title: "Government and Public Projects",
              desc: "Meet compliance requirements with professional architectural design services.",
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
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Beautiful & Technical
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beautiful designs. Strong technical planning. Easy communication. Quick delivery.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Committed Team
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing. Friendly, human support. A team committed to your project. We make design feel exciting instead of overwhelming.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


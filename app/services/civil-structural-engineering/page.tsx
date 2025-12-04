import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Civil and Structural Engineering Services | EHM Tech Services",
  description:
    "Engineering solutions that keep your project safe, stable, and built to last. Smart planning, precise calculations, and designs that stand tall.",
};

export default function CivilStructuralEngineeringPage() {
  return (
    <ServiceLayout
      title="Civil and Structural Engineering Services"
      groupLabel="ENGINEERING"
      accent="engineering"
      intro="Every strong building begins with a strong design. EHM Technology Services provides engineering solutions that keep your project safe, stable, and built to last. We are the quiet superheroes behind your project—ensuring every beam and footing stands firm."
      primaryCta={{ label: "Discuss your project", href: "/contact" }}
      heroMedia={
        <MediaPlaceholder
          label="Civil & Structural Engineering"
          caption="3D structural blueprints and engineering plans"
          badge="Engineering"
          imageSrc="/images/civil-structural-preview.jpg"
          imageAlt="3D isometric structural engineering blueprint"
        />
      }
      sideHeading="What we cover"
      sideItems={[
        "Structural design",
        "Civil site engineering",
        "Foundation engineering",
        "Structural analysis",
        "Retaining wall and support systems",
        "Steel and concrete design",
        "Seismic and wind calculations",
        "Residential engineering",
        "Commercial engineering",
        "Industrial engineering",
        "Construction support engineering",
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
          detail: "Support at every stage of your build",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "Civil engineering software",
        "Structural analysis software",
        "Blueprint review tools",
      ]}
      approach={[
        {
          title: "Share project details & ideas",
          detail:
            "Share your project details and ideas to start the process.",
        },
        {
          title: "Study goals & requirements",
          detail:
            "We study your goals and requirements to inform our solutions.",
        },
        {
          title: "Prepare calculations & designs",
          detail:
            "Our engineers prepare precise calculations and detailed designs.",
        },
        {
          title: "Deliver clear drawings & documents",
          detail:
            "You receive clear drawings ready for construction and permitting.",
        },
      ]}
      faqs={[
        {
          question: "What types of engineering services do you provide?",
          answer:
            "We provide structural design, civil site engineering, foundation engineering, analysis, retaining walls, and construction support. EHM Technology Services covers every engineering need.",
        },
        {
          question: "What tools do you use for engineering?",
          answer:
            "We use AutoCAD, Revit, and advanced analysis software to deliver safe, efficient, and code-compliant designs.",
        },
        {
          question: "Who can benefit from your engineering services?",
          answer:
            "Contractors, developers, architects, homeowners, and investors. If your project needs strength, we are here to help.",
        },
      ]}
      ctaNote="Your structure deserves smart engineering and strong support. Let us make your next project safe, stable, and built to last."
      signals={[
        "A project without proper engineering is risky.",
        "Good engineering gives your project the backbone it needs.",
        "You need reliable engineering from experienced professionals.",
        "Your structure deserves smart planning and strong support.",
      ]}
      packages={[
        {
          title: "Structural design",
          note: "Complete",
          items: ["Beams, columns, slabs, foundations", "Load analysis", "Safety standards compliance"],
        },
        {
          title: "Full engineering package",
          note: "Comprehensive",
          items: ["Civil site engineering", "Foundation design", "Structural analysis"],
        },
        {
          title: "Construction support",
          note: "Ongoing",
          items: ["On site guidance", "Change reviews", "Compliance assurance"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Civil and Structural Engineering Matters
        </h2>
        <p className="mt-4 text-slate-600">
          A project without proper engineering is like a bridge without support. Good engineering prevents risks and gives your project the backbone it needs to stay safe and strong.
        </p>
        <p className="mt-4 text-slate-600">
          Proper engineering helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Avoid costly failures</li>
          <li>Meet all safety requirements</li>
          <li>Reduce construction risks</li>
          <li>Improve long term durability</li>
          <li>Build trust with clients and inspectors</li>
          <li>Keep your project running smoothly</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Strong engineering protects your project and your reputation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Ideal Engineering Partner
        </h2>
        <p className="mt-4 text-slate-600">
          We combine experience, advanced tools, and friendly communication to make engineering easy. We study your project and design solutions that fit your goals.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Reliable Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reliable engineering, clear explanations, and fast turnaround.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Complete Support
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Support at every stage. We make engineering feel simple and stress-free.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Civil & Structural Engineering"
        caption="Solid engineering foundations for safe, stable structures."
        badge="Engineering"
        accent="cyan"
        imageSrc="/images/civil-structural-hero.png"
        imageAlt="Civil engineering structural drawings and infrastructure plans"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Civil and Structural Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          We provide full support for every part of your project.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Beams, columns, slabs, foundations. We design structures that stand strong.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Civil Site Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Grading, drainage, utilities. We prepare your site for smooth construction.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Foundation Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Foundations that protect against settlement and shifting soil.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Analysis
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Calculations to confirm your structure handles loads and weather.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Retaining Wall and Support Systems
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Walls and shoring to keep your site secure and slopes stable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Steel and Concrete Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Balanced, safe, and efficient designs for steel or concrete projects.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Seismic and Wind Calculations
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Preparing your structure for wind, storms, and seismic activity.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction Support Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              On-site guidance and compliance checks as construction progresses.
            </p>
          </div>
        </div>
      </div>
      <MediaPlaceholder className="mt-12"
        label="Structural Engineering"
        caption="Ensuring safety and stability for every structure."
        badge="Engineering"
        accent="cyan"
        imageSrc="/images/civil-structural-preview.jpg"
        imageAlt="3D isometric structural engineering blueprint"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Project Type Engineering
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Safe designs for homes, remodels, and additions.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Support for retail, offices, warehouses, and more.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Strength and safety for plants and heavy equipment areas.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers every engineering need under one roof.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          If your project needs strength and stability, we are here to help.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Reliable structural designs for safe projects.",
            },
            {
              title: "Developers",
              desc: "Complete engineering support for all phases.",
            },
            {
              title: "Architects",
              desc: "Engineering that brings designs to life safely.",
            },
            {
              title: "Designers",
              desc: "Solutions that support your design vision.",
            },
            {
              title: "Homeowners",
              desc: "Safe engineering for homes and additions.",
            },
            {
              title: "Builders",
              desc: "Professional support for all builds.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with sound engineering.",
            },
            {
              title: "Investors",
              desc: "Ensure projects are built safely and to code.",
            },
            {
              title: "Government Projects",
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
          Projects We Engineer
        </h2>
        <p className="mt-4 text-slate-600">
          We support all project types:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential structures",
            "Commercial buildings",
            "Industrial facilities",
            "Civil infrastructure",
            "Retaining walls",
            "Foundations",
            "Renovations and additions",
            "New construction and expansions",
            "Multi phase developments",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          No project is too large or too detailed for our engineering team.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients trust us because our engineering keeps their projects safe and predictable.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Reliable & Clear
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reliable structural design. Smooth communication. Quick delivery. Friendly guidance. Clear documents.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Care
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing. A team that truly cares about results. We help you build with confidence and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

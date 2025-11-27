import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

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
      intro="Every strong building begins with a strong design. And every strong design begins with solid civil and structural engineering. At EHM Technology Services, we provide engineering solutions that keep your project safe, stable, and built to last. Think of us as the quiet superheroes behind your project. You do not see us swinging from cranes or lifting steel, but you feel our work in every beam, every footing, and every structure that stands firm for decades. No matter what you are building, our engineering team supports you with smart planning, precise calculations, and designs that stand tall."
      primaryCta={{ label: "Discuss your project", href: "/contact" }}
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
            "You share your project details, drawings, or ideas with us to begin the engineering process.",
        },
        {
          title: "Study goals & requirements",
          detail:
            "We study your project goals, challenges, and specific requirements to inform our engineering solutions.",
        },
        {
          title: "Prepare calculations & designs",
          detail:
            "Our engineers prepare precise calculations, detailed designs, and plans tailored to your project's needs.",
        },
        {
          title: "Deliver clear drawings & documents",
          detail:
            "You receive clear, organized drawings and documents ready for construction, permitting, and approvals.",
        },
      ]}
      faqs={[
        {
          question: "What types of engineering services do you provide?",
          answer:
            "We provide full support for every part of your project including structural design (beams, columns, slabs, foundations), civil site engineering (grading, drainage, utilities), foundation engineering, structural analysis, retaining walls, steel and concrete design, seismic and wind calculations, and construction support. EHM Technology Services covers every engineering need under one roof.",
        },
        {
          question: "What tools do you use for engineering?",
          answer:
            "We use modern engineering and drafting tools including AutoCAD, Revit, civil engineering software, structural analysis software, and blueprint review tools. These tools help us deliver designs that are safe, efficient, and code compliant.",
        },
        {
          question: "Who can benefit from your engineering services?",
          answer:
            "Our services support contractors, developers, architects, designers, homeowners, builders, commercial owners, investors, and government projects. If your project needs strength and stability, we are here to help.",
        },
      ]}
      ctaNote="Your structure deserves more than a rough guess. It deserves smart engineering, careful planning, and strong support. That is exactly what EHM Technology Services delivers. Let us make your next project safe, stable, and built to last."
      signals={[
        "A project without proper engineering is like a bridge without support.",
        "Good engineering prevents risks and gives your project the backbone it needs.",
        "You need reliable engineering from experienced professionals.",
        "Your structure deserves smart engineering, careful planning, and strong support.",
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
          A project without proper engineering is like a bridge without support. It might look fine at first, but one little shake and things get risky. Good engineering prevents those risks. It gives your project the backbone it needs to stay safe and strong.
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
          Strong engineering does not just protect your project. It protects your reputation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Ideal Engineering Partner
        </h2>
        <p className="mt-4 text-slate-600">
          At EHM Technology Services, we combine experience, advanced tools, and friendly communication to make engineering easy for you. Our team studies your project carefully, explains everything clearly, and designs solutions that fit your goals.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Reliable Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Reliable engineering from experienced professionals. Clear explanations without confusing jargon. Fast turnaround that matches your schedule.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Complete Support
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Support at every stage of your build. A team that treats your project as if it were our own. We make engineering feel simple and stress free.
            </p>
          </div>
        </div>
      </div>

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
            <p className="mt-2 text-sm text-gray-300">
              Beams. Columns. Slabs. Foundations. Load analysis. Reinforcements. We design structures that stand strong and meet all safety standards.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Civil Site Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Site grading. Drainage planning. Utility layouts. Roadway design. Stormwater management. We prepare your site so construction goes smoothly.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Foundation Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We design foundations that protect your structure from settlement, shifting soil, water pressure, and other ground level challenges.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Structural Analysis
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We run calculations and simulations to confirm your structure can handle loads, weather, movement, and everything the real world throws at it.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Retaining Wall and Support Systems
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We design retaining walls, shoring, and reinforcement systems that keep your site secure and your slopes stable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Steel and Concrete Design
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Whether your project is steel framed or concrete heavy, our designs keep everything balanced, safe, and efficient.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Seismic and Wind Calculations
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We prepare your structure to handle wind loads, storms, and seismic activity based on local requirements.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Construction Support Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We provide on site guidance, review changes, and ensure your structure stays compliant as construction progresses.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Project Type Engineering
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              New homes. Remodels. Additions. Decks. Multi family units. Safe and reliable designs for all residential construction.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Retail buildings. Offices. Warehouses. Restaurants. Schools. Medical spaces. We support all commercial project types.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Plants. Factories. Heavy equipment areas. High load facilities. We design for strength, safety, and precision.
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
          Our services support everyone who needs reliable engineering. If your project needs strength and stability, we are here to help.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Reliable structural designs that keep projects safe and compliant.",
            },
            {
              title: "Developers",
              desc: "Complete engineering support for all phases of development.",
            },
            {
              title: "Architects",
              desc: "Structural engineering that brings your designs to life safely.",
            },
            {
              title: "Designers",
              desc: "Engineering solutions that support your design vision.",
            },
            {
              title: "Homeowners",
              desc: "Safe and reliable engineering for home projects and additions.",
            },
            {
              title: "Builders",
              desc: "Professional engineering support for residential and commercial builds.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with sound structural engineering.",
            },
            {
              title: "Investors",
              desc: "Ensure projects are built safely and to code standards.",
            },
            {
              title: "Government Projects",
              desc: "Meet compliance requirements with professional engineering services.",
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
              <p className="text-white font-medium">{project}</p>
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
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Reliable & Clear
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Reliable structural design. Smooth communication. Quick delivery. Friendly guidance. Clear documents.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Care
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Fair pricing. A team that truly cares about results. We help you build with confidence and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "MEP Engineering Services | EHM Tech Services",
  description:
    "Mechanical, electrical, and plumbing engineering services that keep your building running smoothly from the inside out. Smart designs that save money and make your project shine.",
};

export default function MEPEngineeringPage() {
  return (
    <ServiceLayout
      title="MEP Engineering Services"
      groupLabel="ENGINEERING"
      accent="engineering"
      intro="A building only feels complete when everything inside works the way it should. Lights that turn on. Air that flows right. Water that runs where it belongs. That comfort, safety, and efficiency all come from proper MEP engineering. At EHM Technology Services, we deliver MEP Engineering Services that keep your building running smoothly from the inside out. MEP stands for Mechanical, Electrical, and Plumbing. In simple words, it is everything that makes a building livable. Without it, even the nicest structure feels like an empty shell. We make sure every system works together like a well rehearsed orchestra. Whatever you are building, our MEP engineers give you smart designs that save money, reduce problems, and make your project shine."
      primaryCta={{ label: "Start MEP design", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Mechanical engineering",
        "Electrical engineering",
        "Plumbing engineering",
        "Fire protection planning",
        "MEP coordination",
        "Energy efficient designs",
        "HVAC system design",
        "Load calculations and sizing",
        "MEP renovations and retrofits",
        "MEP support through construction",
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
        "MEP modeling software",
        "Load calculation software",
        "Blueprint review tools",
      ]}
      approach={[
        {
          title: "Share project details & drawings",
          detail:
            "You share your project details and drawings with us to begin the MEP engineering process.",
        },
        {
          title: "Review & confirm scope",
          detail:
            "We review everything and confirm the full scope of MEP systems needed for your project.",
        },
        {
          title: "Prepare coordinated MEP designs",
          detail:
            "Our team prepares coordinated MEP designs based on your needs, ensuring all systems work together smoothly.",
        },
        {
          title: "Receive clear drawings & documents",
          detail:
            "You receive easy to read drawings and documents ready for permitting or installation.",
        },
      ]}
      faqs={[
        {
          question: "What types of MEP services do you provide?",
          answer:
            "We provide full MEP engineering services including mechanical engineering (heating, cooling, ventilation, air quality, duct layouts, equipment sizing), electrical engineering (power distribution, lighting layouts, emergency systems, panels, circuits, load calculations), plumbing engineering (water supply, drainage, gas lines, pumps, fixtures, sanitary layouts), fire protection planning, MEP coordination, energy efficient designs, HVAC system design, load calculations and sizing, MEP renovations and retrofits, and MEP support through construction. EHM Technology Services handles all MEP scopes under one roof.",
        },
        {
          question: "What tools do you use for MEP design?",
          answer:
            "We use modern tools that help us design systems accurately including AutoCAD, Revit, MEP modeling software, load calculation software, and blueprint review tools. These help us design systems that are efficient, compliant, and installation friendly.",
        },
        {
          question: "Who can benefit from your MEP services?",
          answer:
            "Our services support general contractors, subcontractors, developers, architects, homeowners, engineers, commercial owners, investors, and government projects. If your building needs air, power, or water, you need us.",
        },
      ]}
      ctaNote="Your building deserves systems that work flawlessly. With EHM Technology Services, you get MEP engineering that keeps your project safe, comfortable, and efficient from day one. Let us bring your building to life with clean and smart MEP design."
      signals={[
        "A building only feels complete when everything inside works the way it should.",
        "Without proper MEP, even the nicest structure feels like an empty shell.",
        "You need systems that work together like a well rehearsed orchestra.",
        "Your building deserves systems that work flawlessly.",
      ]}
      packages={[
        {
          title: "Single MEP discipline",
          note: "Focused",
          items: ["Mechanical, Electrical, or Plumbing only", "Design & calculations", "Construction documents"],
        },
        {
          title: "Full MEP design package",
          note: "Comprehensive",
          items: ["All MEP disciplines", "System coordination", "Energy efficient solutions"],
        },
        {
          title: "Ongoing MEP support",
          note: "Construction support",
          items: ["Installation reviews", "Contractor questions", "Design adjustments"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="MEP Engineering"
          caption="Complete mechanical, electrical, and plumbing engineering services."
          badge="MEP"
          accent="cyan"
          imageSrc="/images/mep-engineering.jpg"
          imageAlt="MEP engineering systems and technical plans"
          className="h-full min-h-[300px]"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why MEP Engineering Matters
        </h2>
        <p className="mt-4 text-slate-600">
          Imagine a building with poor airflow, flickering lights, or plumbing that decides to misbehave at the worst moment. Not fun. Good MEP engineering keeps your project safe, comfortable, and efficient.
        </p>
        <p className="mt-4 text-slate-600">
          Proper MEP planning helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Keep the building safe and up to code</li>
          <li>Reduce energy use</li>
          <li>Lower long term costs</li>
          <li>Improve comfort for everyone inside</li>
          <li>Avoid mechanical or electrical failures</li>
          <li>Prevent expensive rework</li>
          <li>Run your project more smoothly</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When MEP works well, everything feels effortless.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Partner You Need
        </h2>
        <p className="mt-4 text-slate-600">
          At EHM Technology Services, we take the complexity out of MEP engineering. You get clear communication, friendly support, and designs that make sense without confusing technical talk.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clean & Coordinated
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean and coordinated MEP drawings. Fast turnaround. Energy efficient solutions. Support for all project types.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Practical & Adaptable
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical designs that installers love. A team that listens and adapts to your needs. We make MEP engineering feel simple, even when the systems behind it are not.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our MEP Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          We handle all three major systems that keep your building alive and functioning.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Mechanical Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Heating. Cooling. Ventilation. Air quality. Duct layouts. Equipment sizing. Our mechanical designs keep your building comfortable in every season.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Electrical Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Power distribution. Lighting layouts. Emergency systems. Panels. Circuits. Load calculations. Clean electrical designs that keep the lights on and everyone safe.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Plumbing Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Water supply. Drainage. Gas lines. Pumps. Fixtures. Sanitary layouts. We make plumbing systems run smooth and reliable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fire Protection Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sprinkler layouts. Fire pump rooms. Safe routing. Detection systems. We help your building stay compliant and prepared.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Coordination
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We align all systems so nothing clashes. No ducts fighting pipes. No wires crossing beams. Smooth coordination for easy installation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Energy Efficient Designs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We help reduce long term utility costs with smart equipment choices and efficient layouts.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              HVAC System Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fan systems. Air handlers. Package units. VAVs. VRV systems. Chillers. Anything your building needs for proper airflow.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Load Calculations and Sizing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We use data and software to size equipment correctly so your systems run efficiently without breaking the budget.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Renovations and Retrofits
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Old buildings need updates. We modernize systems to improve comfort, safety, and performance.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services handles all MEP scopes under one roof.
        </p>
      </div>

      <MediaPlaceholder className="mt-12"
        label="MEP Engineering"
        caption="Modern systems designed for efficiency and longevity."
        badge="Engineering"
        accent="cyan"
        imageSrc="/images/mep-engineering.jpg"
        imageAlt="Industrial MEP piping systems"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our MEP Services
        </h2>
        <p className="mt-4 text-slate-600">
          Our services support everyone who needs reliable MEP engineering. If your building needs air, power, or water, you need us.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "General Contractors",
              desc: "Complete MEP coordination and design support for all project phases.",
            },
            {
              title: "Subcontractors",
              desc: "Specialized MEP design for mechanical, electrical, or plumbing trades.",
            },
            {
              title: "Developers",
              desc: "Full MEP engineering support for all phases of development projects.",
            },
            {
              title: "Architects",
              desc: "MEP engineering that brings your designs to life with working systems.",
            },
            {
              title: "Homeowners",
              desc: "Safe and reliable MEP systems for home projects and renovations.",
            },
            {
              title: "Engineers",
              desc: "Professional MEP design support and coordination services.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with efficient and compliant MEP systems.",
            },
            {
              title: "Investors",
              desc: "Ensure projects have reliable MEP systems that add value.",
            },
            {
              title: "Government Projects",
              desc: "Meet compliance requirements with professional MEP engineering services.",
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
          We provide MEP engineering for:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential buildings",
            "Commercial spaces",
            "Industrial facilities",
            "Retail shops",
            "Restaurants",
            "Hotels",
            "Mixed use properties",
            "Healthcare facilities",
            "Educational buildings",
            "Renovation and retrofit projects",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Every project type. Every system. Every scale.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients choose us because our MEP designs make construction easier and building operations smoother.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Accurate & Efficient
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Accurate designs. Efficient layouts. Easy communication. Quick turnaround. Friendly team support.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Real Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing. Real world solutions. We help you build safer, smarter, and more comfortable spaces.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


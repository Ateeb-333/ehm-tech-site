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
      intro="A building only feels complete when everything inside works. Lights on. Air flowing. Water running. EHM Technology Services delivers MEP Engineering Services that keep your building running smoothly. We make sure every system works together like a well-rehearsed orchestra."
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
            "Share your project details and drawings to begin the process.",
        },
        {
          title: "Review & confirm scope",
          detail:
            "We review everything and confirm the full scope of MEP systems needed.",
        },
        {
          title: "Prepare coordinated MEP designs",
          detail:
            "Our team prepares coordinated MEP designs, ensuring all systems work together.",
        },
        {
          title: "Receive clear drawings & documents",
          detail:
            "You receive easy-to-read drawings ready for permitting or installation.",
        },
      ]}
      faqs={[
        {
          question: "What types of MEP services do you provide?",
          answer:
            "We provide mechanical, electrical, and plumbing engineering, fire protection, coordination, energy-efficient designs, and HVAC design. EHM Technology Services handles all MEP scopes.",
        },
        {
          question: "What tools do you use for MEP design?",
          answer:
            "We use AutoCAD, Revit, and load calculation software to design efficient, compliant, and installation-friendly systems.",
        },
        {
          question: "Who can benefit from your MEP services?",
          answer:
            "Contractors, developers, architects, homeowners, and investors. If your building needs air, power, or water, you need us.",
        },
      ]}
      ctaNote="Your building deserves systems that work flawlessly. Let us bring your building to life with clean and smart MEP design."
      signals={[
        "A building only feels complete when everything inside works.",
        "Without proper MEP, a structure feels like an empty shell.",
        "You need systems that work together perfectly.",
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
          Imagine a building with poor airflow or flickering lights. Not fun. Good MEP engineering keeps your project safe, comfortable, and efficient.
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
          We take the complexity out of MEP engineering. You get clear communication, friendly support, and designs that make sense without confusing technical talk.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clean & Coordinated
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean, coordinated drawings. Fast turnaround. Energy efficient solutions.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Practical & Adaptable
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical designs installers love. We make MEP engineering feel simple.
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
              Heating, cooling, ventilation. Our designs keep your building comfortable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Electrical Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Power, lighting, emergency systems. Clean designs that keep the lights on.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Plumbing Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Water, drainage, gas. We make plumbing systems run smooth and reliable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fire Protection Planning
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sprinklers, pumps, detection. We help your building stay compliant and safe.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Coordination
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We align all systems so nothing clashes. Smooth coordination for easy installation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Energy Efficient Designs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reduce utility costs with smart equipment choices and efficient layouts.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              HVAC System Design
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fans, air handlers, chillers. Anything your building needs for proper airflow.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Load Calculations and Sizing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Correct sizing for efficient operation without breaking the budget.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              MEP Renovations and Retrofits
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Modernize systems to improve comfort, safety, and performance.
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
          If your building needs air, power, or water, you need us.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "General Contractors",
              desc: "Complete MEP coordination and design support.",
            },
            {
              title: "Subcontractors",
              desc: "Specialized MEP design for trades.",
            },
            {
              title: "Developers",
              desc: "Full MEP engineering support for all phases.",
            },
            {
              title: "Architects",
              desc: "MEP engineering that brings designs to life.",
            },
            {
              title: "Homeowners",
              desc: "Safe and reliable MEP systems for homes.",
            },
            {
              title: "Engineers",
              desc: "Professional MEP design support.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with efficient systems.",
            },
            {
              title: "Investors",
              desc: "Ensure projects have reliable MEP systems.",
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
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Accurate & Efficient
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Accurate designs, efficient layouts, and quick turnaround.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Real Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing and real-world solutions. We help you build safer, smarter spaces.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


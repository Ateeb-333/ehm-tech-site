import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Industrial and Instrumentation Engineering Services | EHM Tech Services",
  description:
    "Industrial and instrumentation engineering services that keep your systems sharp, stable, and ready for real-world performance. Precision engineering for industrial facilities.",
};

export default function IndustrialInstrumentationPage() {
  return (
    <ServiceLayout
      title="Industrial and Instrumentation Engineering Services"
      groupLabel="ENGINEERING"
      accent="engineering"
      intro="Industrial projects run on precision. One small error can slow production or damage equipment. EHM Technology Services provides Industrial and Instrumentation Engineering that keeps your systems sharp, stable, and ready for the real world. We make sure the machines behave. Your plant runs safely. Your controls respond correctly. Whether it is a new build or an upgrade, our team keeps your operation running like a fine-tuned machine."
      primaryCta={{ label: "Discuss industrial design", href: "/contact" }}
      heroMedia={
        <MediaPlaceholder
          label="Industrial & Instrumentation Engineering"
          caption="Precision engineering for industrial facilities"
          badge="Industrial"
          imageSrc="/images/industrial-instrumentation-hero.jpg"
          imageAlt="Industrial facility with processing towers at sunset"
        />
      }
      sideHeading="What we cover"
      sideItems={[
        "Industrial engineering",
        "Instrumentation engineering",
        "Control systems engineering",
        "Process optimization",
        "Industrial safety systems",
        "Electrical and power systems",
        "Equipment integration",
        "Calibration and testing",
        "Upgrades and retrofits",
        "Industrial documentation",
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
          detail: "Fast response and easy collaboration",
        },
        {
          label: "Support",
          value: "Complete",
          detail: "Support through the entire process",
        },
      ]}
      tools={[
        "AutoCAD",
        "Revit",
        "Instrumentation design software",
        "PLC and control programming tools",
        "SCADA development tools",
        "Electrical and industrial modeling systems",
      ]}
      approach={[
        {
          title: "Discuss facility & goals",
          detail:
            "We talk about your facility, goals, and challenges to understand what you need.",
        },
        {
          title: "Review systems & plans",
          detail:
            "We review existing systems or new plans to identify all requirements.",
        },
        {
          title: "Design smart solutions",
          detail:
            "Our team designs smart engineering solutions built for reliability and efficiency.",
        },
        {
          title: "Receive clear drawings & documents",
          detail:
            "You receive clean drawings and documents ready for installation.",
        },
      ]}
      faqs={[
        {
          question: "What types of industrial and instrumentation services do you provide?",
          answer:
            "We provide full support including industrial engineering, instrumentation (sensors, meters), control systems (PLC, SCADA), process optimization, safety systems, electrical power systems, and documentation. EHM Technology Services covers all industrial fields under one roof.",
        },
        {
          question: "What tools do you use for industrial engineering?",
          answer:
            "We use AutoCAD, Revit, instrumentation design software, PLC tools, and SCADA development tools. These help us deliver safe, precise, and efficient designs.",
        },
        {
          question: "Who can benefit from your industrial and instrumentation services?",
          answer:
            "Manufacturing plants, oil and gas facilities, power generation units, processing plants, chemical facilities, and warehouses. If you have complex systems, we can help.",
        },
      ]}
      ctaNote="Your plant deserves engineering that keeps everything operating at its best. With EHM Technology Services, you get solutions that are dependable, efficient, and built to last."
      signals={[
        "Industrial projects run on precision.",
        "One small error can slow production.",
        "Industrial systems do not forgive mistakes.",
        "Your plant deserves engineering that keeps everything operating at its best.",
      ]}
      packages={[
        {
          title: "Design & documentation",
          note: "Complete",
          items: ["P&ID development", "Control system design", "Instrumentation specs"],
        },
        {
          title: "Full implementation package",
          note: "Comprehensive",
          items: ["Complete system design", "Programming & configuration", "Commissioning support"],
        },
        {
          title: "Ongoing system support",
          note: "Maintenance",
          items: ["Troubleshooting", "System updates", "Quick changes"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Industrial and Instrumentation Engineering Matters
        </h2>
        <p className="mt-4 text-slate-600">
          Industrial systems do not forgive mistakes. Proper engineering gives your facility the stability it needs to operate safely and efficiently.
        </p>
        <p className="mt-4 text-slate-600">
          Strong engineering helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Reduce downtime</li>
          <li>Improve production quality</li>
          <li>Increase equipment life</li>
          <li>Prevent dangerous failures</li>
          <li>Reduce maintenance issues</li>
          <li>Meet strict industrial standards</li>
          <li>Keep operators safe</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When your systems are engineered right, your operation becomes smooth and predictable.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Choice
        </h2>
        <p className="mt-4 text-slate-600">
          We mix technical expertise with a friendly approach. We make complex industrial systems simple to manage and easy to trust.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Reliable & Clear
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reliable engineering. Clear communication. Fast response.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Practical & Committed
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical solutions built for real life. Designs that keep your plant running safely.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Industrial and Instrumentation Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support every part of your industrial operation with smart engineering.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Safe and efficient systems. Mechanical layouts, equipment placement, and process flow.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Instrumentation Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Sensors, transmitters, meters, and controllers. Every device that gathers data.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Control Systems Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              PLC programming, SCADA integration, and automated sequences. Smooth control.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Process Optimization
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Streamlined workflows. Reduced waste. Better performance.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Safety Systems
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fire suppression, emergency shutdowns, pressure monitoring, and alarms.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Electrical and Power Systems
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Electrical layouts that support heavy equipment and continuous operation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Integration
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ensuring machinery communicates properly with controls and instrumentation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Calibration and Testing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Ensuring every device reads accurately for reliable safety.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Upgrades and Retrofits
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Modernizing outdated systems to keep up with today's demands.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers all industrial fields and systems.
        </p>
        <MediaPlaceholder className="mt-12"
          label="Industrial Instrumentation"
          caption="Precision control for complex industrial systems."
          badge="Industrial"
          accent="cyan"
          imageSrc="/images/industrial-instrumentation-preview.jpg"
          imageAlt="Industrial processing facility at night with illuminated equipment"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support everyone who needs reliable industrial engineering.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Manufacturing Plants",
              desc: "Reliable control systems for smooth production.",
            },
            {
              title: "Oil and Gas Facilities",
              desc: "Safe instrumentation for critical operations.",
            },
            {
              title: "Power Generation Units",
              desc: "Complete engineering support for power systems.",
            },
            {
              title: "Processing Plants",
              desc: "Process optimization for efficient operations.",
            },
            {
              title: "Chemical Facilities",
              desc: "Safe and compliant engineering for processing.",
            },
            {
              title: "Food and Beverage Production",
              desc: "Precise control systems meeting quality standards.",
            },
            {
              title: "Industrial Warehouses",
              desc: "Automation for efficient material handling.",
            },
            {
              title: "Automation Driven Operations",
              desc: "Solutions that improve efficiency and reliability.",
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
          We handle:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "New industrial installations",
            "Facility expansions",
            "System upgrades",
            "Automation and control setups",
            "Instrumentation layouts",
            "Industrial safety improvements",
            "Equipment integrations",
            "Production line enhancements",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Big jobs. Small jobs. Complex jobs. We take care of them all.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Trust EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients rely on us because we deliver engineering that protects their operations.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Precise & Clear
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Precise engineering. Clear documentation. Friendly support. Safe designs.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fair Pricing & Commitment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing. Quick turnaround. We help your facility run safer, smarter, and smoother.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


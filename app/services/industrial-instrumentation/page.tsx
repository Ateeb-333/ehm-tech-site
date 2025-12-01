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
      intro="Industrial projects run on precision. One small error can slow production, damage equipment, or turn a smooth day into a headache no one asked for. That is where EHM Technology Services comes in with Industrial and Instrumentation Engineering Services that keep your systems sharp, stable, and ready for real-world performance. Think of us as the people who make sure the machines actually behave. Your plant runs safely. Your controls respond correctly. Your systems communicate without drama. When everything works together, your entire operation feels effortless. Whether your project is a new build, an upgrade, or a full-scale industrial facility, our engineering team keeps your processes running like a fine-tuned machine."
      primaryCta={{ label: "Discuss industrial design", href: "/contact" }}
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
            "We talk about your facility, goals, and challenges to understand what you need for your industrial systems.",
        },
        {
          title: "Review systems & plans",
          detail:
            "We review your existing systems or new project plans to identify all requirements and constraints.",
        },
        {
          title: "Design smart solutions",
          detail:
            "Our team designs smart engineering solutions built around your needs, ensuring reliability and efficiency.",
        },
        {
          title: "Receive clear drawings & documents",
          detail:
            "You receive clean drawings and documents ready for installation, with full documentation for your team.",
        },
      ]}
      faqs={[
        {
          question: "What types of industrial and instrumentation services do you provide?",
          answer:
            "We provide full support for every part of your industrial operation including industrial engineering (mechanical layouts, equipment placement, process flow), instrumentation engineering (sensors, transmitters, meters, controllers), control systems engineering (PLC programming, SCADA integration, automated sequences), process optimization, industrial safety systems (fire suppression, emergency shutdown, pressure monitoring, alarms), electrical and power systems, equipment integration, calibration and testing, upgrades and retrofits, and industrial documentation (diagrams, wiring details, P&ID drawings, instrument lists, load summaries). EHM Technology Services covers all industrial fields and systems under one roof.",
        },
        {
          question: "What tools do you use for industrial engineering?",
          answer:
            "We use modern engineering tools such as AutoCAD, Revit, instrumentation design software, PLC and control programming tools, SCADA development tools, and electrical and industrial modeling systems. These tools help us deliver safe, precise, and efficient designs.",
        },
        {
          question: "Who can benefit from your industrial and instrumentation services?",
          answer:
            "We support manufacturing plants, oil and gas facilities, power generation units, processing plants, chemical facilities, food and beverage production, industrial warehouses, and automation driven operations. If your facility has complex systems that must work together, we are the team you need.",
        },
      ]}
      ctaNote="Your plant deserves engineering that keeps everything operating at its best. With EHM Technology Services, you get industrial and instrumentation solutions that are dependable, efficient, and built to last. Let us support your next industrial project with engineering that delivers real results."
      signals={[
        "Industrial projects run on precision. One small error can slow production, damage equipment, or turn a smooth day into a headache.",
        "Industrial systems do not forgive mistakes. When something goes wrong, it goes wrong fast.",
        "Your facility has complex systems that must work together seamlessly.",
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
          Industrial systems do not forgive mistakes. When something goes wrong, it goes wrong fast. Proper engineering gives your facility the stability it needs to operate safely and efficiently.
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
          <li>Keep operators safe and confident</li>
        </ul>
        <p className="mt-4 text-slate-600">
          When your systems are engineered right, your entire operation becomes smoother and more predictable.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Choice
        </h2>
        <p className="mt-4 text-slate-600">
          At EHM Technology Services, we mix technical expertise with a friendly and easy to understand approach. We make complex industrial systems simple to manage and even easier to trust.
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
              Reliable industrial engineering. Clear communication with no confusing technical talk. Fast response and easy collaboration.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Practical & Committed
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical solutions built for real life conditions. Designs that keep your plant running safely and efficiently. A team that cares about your success.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Industrial and Instrumentation Engineering Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support every part of your industrial operation with smart engineering and precise instrumentation.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We design safe and efficient systems that help your facility operate smoothly. Mechanical layouts. Equipment placement. Process flow. Reliable engineering for every step.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Instrumentation Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We handle sensors, transmitters, meters, controllers, and every device that gathers data or controls your equipment.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Control Systems Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We design systems that manage processes automatically. PLC programming. SCADA integration. Automated sequences. Smooth and stable control.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Process Optimization
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We help your facility run cleaner, faster, and more efficiently. Streamlined workflows. Reduced waste. Better performance.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Safety Systems
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fire suppression integration. Emergency shutdown systems. Pressure monitoring. Alarms. Safe shutdown sequences.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Electrical and Power Systems
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We design industrial electrical layouts that support heavy equipment, high loads, and continuous operation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Integration
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We make sure your machinery communicates properly with your controls and instrumentation.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Calibration and Testing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We ensure every device reads accurately so your process stays reliable and safe.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Upgrades and Retrofits
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Older facilities need modernization. We redesign outdated systems so they keep up with today's demands.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers all industrial fields and systems under one roof.
        </p>
        <MediaPlaceholder className="mt-12"
          label="Industrial Instrumentation"
          caption="Precision control for complex industrial systems."
          badge="Industrial"
          accent="cyan"
          imageSrc="/images/industrial-inspection.jpg"
          imageAlt="Industrial equipment inspection"
        />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support everyone who needs reliable industrial and instrumentation engineering. If your facility has complex systems that must work together, we are the team you need.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Manufacturing Plants",
              desc: "Reliable control systems that keep production running smoothly and efficiently.",
            },
            {
              title: "Oil and Gas Facilities",
              desc: "Safe and precise instrumentation for critical industrial operations.",
            },
            {
              title: "Power Generation Units",
              desc: "Complete engineering support for power generation and distribution systems.",
            },
            {
              title: "Processing Plants",
              desc: "Process optimization and control systems for efficient operations.",
            },
            {
              title: "Chemical Facilities",
              desc: "Safe and compliant engineering for chemical processing operations.",
            },
            {
              title: "Food and Beverage Production",
              desc: "Precise control systems that meet strict quality and safety standards.",
            },
            {
              title: "Industrial Warehouses",
              desc: "Automation and control systems for efficient material handling.",
            },
            {
              title: "Automation Driven Operations",
              desc: "Complete automation solutions that improve efficiency and reliability.",
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
          Big jobs. Small jobs. Complex jobs. Emergency jobs. We take care of all of them.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Trust EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients rely on us because we deliver engineering that protects their operations and boosts performance.
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
              Fair pricing. Quick turnaround. Strong commitment to your success. We help your facility run safer, smarter, and smoother.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


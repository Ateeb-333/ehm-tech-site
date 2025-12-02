import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Quantity Takeoff Services | EHM Tech Services",
  description:
    "Professional Quantity Takeoff Services that keep your project steady from the very first step. Accurate counts for all construction types.",
};

export default function QuantityTakeoffPage() {
  return (
    <ServiceLayout
      title="Quantity Takeoff Services"
      groupLabel="CONSTRUCTION"
      accent="engineering"
      intro="Every project begins with one simple truth. You cannot build it if you cannot count it. And you definitely cannot price it if the quantities are wrong. That is where EHM Technology Services steps in with professional Quantity Takeoff Services that keep your project steady from the very first step. Quantity takeoffs are the heartbeat of any estimate. If the counts are off by even a little, your budget starts wobbling like a wobbly table at a diner. We keep things firm, balanced, and accurate so you can bid smart, buy right, and build confidently. EHM Technology Services handles takeoffs for all construction types. Small projects. Mega projects. Complex projects. Fast-track projects. Whatever you build, we count it perfectly."
      primaryCta={{ label: "Request a takeoff", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Material quantity takeoffs",
        "Labor quantity inputs",
        "Equipment related quantities",
        "Residential quantity takeoffs",
        "Commercial quantity takeoffs",
        "Industrial quantity takeoffs",
        "Civil quantity takeoffs",
        "Renovation and retrofit takeoffs",
        "Blueprint measurement and plan reading",
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
          detail: "Fast delivery that beats your deadlines",
        },
        {
          label: "Accuracy",
          value: "Market accurate",
          detail: "Measurements that keep your budget predictable",
        },
      ]}
      tools={[
        "PlanSwift",
        "Bluebeam",
        "STACK",
        "AutoCAD linked measurements",
        "RSMeans informed databases",
        "Advanced spreadsheets for clarity",
      ]}
      approach={[
        {
          title: "Send project drawings",
          detail:
            "Share your project drawings with us. We review everything and confirm exactly what you need for your takeoff.",
        },
        {
          title: "Review plans & confirm scope",
          detail:
            "Our team studies your drawings, identifies all required quantities, and confirms the complete scope before we begin.",
        },
        {
          title: "Perform detailed digital takeoff",
          detail:
            "Using industry-trusted tools like PlanSwift, Bluebeam, and STACK, we perform precise digital measurements and counts.",
        },
        {
          title: "Receive clear takeoff sheet",
          detail:
            "We deliver clean, organized takeoff sheets with accurate quantities ready for estimating, bidding, or procurement.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you handle?",
          answer:
            "We handle all construction types including residential homes, commercial buildings, industrial facilities, civil and infrastructure projects, institutional buildings, retail and hospitality structures, mixed use and large developments, and renovations and expansions. Small projects. Mega projects. Complex projects. Fast-track projects. Whatever you build, we count it perfectly.",
        },
        {
          question: "How do you ensure accuracy?",
          answer:
            "We use industry trusted digital systems like PlanSwift, Bluebeam, STACK, AutoCAD linked measurements, and RSMeans informed databases. We give you counts that are clean, exact, and so easy to read that even your future self will say thank you.",
        },
        {
          question: "Who can benefit from your services?",
          answer:
            "Our services help everyone in the construction world including contractors, subcontractors, developers, homebuilders, architects, engineers, investors, and project owners. If your project has drawings, we can support you.",
        },
      ]}
      ctaNote="Your takeoff sets the tone for your entire estimate. When the numbers are right, everything else falls into place. EHM Technology Services is ready to handle your Quantity Takeoff needs with care, speed, and accuracy. Reach out today and experience how easy your estimating can feel."
      signals={[
        "You cannot build it if you cannot count it.",
        "Quantity takeoffs are the heartbeat of any estimate.",
        "If the counts are off by even a little, your budget starts wobbling.",
        "You need counts that are clean, exact, and easy to read.",
      ]}
      packages={[
        {
          title: "Material quantity takeoffs",
          note: "Complete",
          items: ["Every brick, pipe, cable, tile, panel counted", "Precision measurements", "Clear takeoff sheets"],
        },
        {
          title: "Full project takeoff",
          note: "Comprehensive",
          items: ["Material, labor, and equipment quantities", "All construction disciplines", "Blueprint measurement"],
        },
        {
          title: "Ongoing support",
          note: "Fast updates",
          items: ["Revision updates", "Change order takeoffs", "Quick turnaround"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Quantity Takeoff"
          caption="Precision measurements for every construction detail."
          badge="Construction"
          accent="cyan"
          imageSrc="/images/quantity-takeoff-hero.png"
          imageAlt="Digital quantity takeoff workspace"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What Quantity Takeoff Services Really Mean For You
        </h2>
        <p className="mt-4 text-slate-600">
          Think of your project as a giant puzzle. Every piece matters. If even one piece goes missing, the whole picture looks wrong.
        </p>
        <p className="mt-4 text-slate-600">
          Quantity takeoffs help you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Know exactly what materials you need</li>
          <li>Avoid overbuying or rushing last minute</li>
          <li>Plan labor and schedules clearly</li>
          <li>Build accurate estimates and bids</li>
          <li>Keep the budget predictable and fair</li>
        </ul>
        <p className="mt-4 text-slate-600">
          We give you counts that are clean, exact, and so easy to read that even your future self will say thank you.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Right Fit
        </h2>
        <p className="mt-4 text-slate-600">
          Your drawings come to us. Your stress leaves you. Your takeoff comes back clean and perfect.
        </p>
        <p className="mt-4 text-slate-600">
          With EHM Technology Services, you get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Friendly Guidance
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Friendly guidance at every step. We do not make things complicated. We keep it human and simple. You talk. We listen. We deliver.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fast & Accurate
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fast delivery that beats your deadlines. Market accurate measurements. Clear, organized takeoff sheets.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Complete Coverage
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Support for every construction category. A team that treats your project like gold.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Simple Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              You stay focused on winning work. We handle the numbers. A process that feels simple and smooth.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Quantity Takeoff Services
        </h2>
        <p className="mt-4 text-slate-600">
          If it is shown on your plans, we count it. Completely. Carefully. Correctly.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Material Quantity Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Every brick. Every pipe. Every cable. Every tile. Every panel. Every little piece that makes your project possible. Counted with precision.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Labor Quantity Inputs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We break down the quantities that help you build realistic labor assumptions. Clear scopes. Clear hours. Clear expectations.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Related Quantities
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Concrete volumes. Excavation quantities. Structural steel lengths. Anything that determines equipment usage and planning.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Quantity Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              New builds. Remodels. Additions. Custom homes. Multi family. Single family. We handle every style and every scale.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Quantity Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Retail units. Office buildings. Hospitality projects. Medical facilities. Warehouses. Schools. Anything your crew can build, we can measure.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Quantity Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Plants. Factories. Refineries. Processing facilities. High complexity projects with tight accuracy needs.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Civil Quantity Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Earthwork. Utilities. Roads. Bridges. Drainage. Pavements. Concrete structures. Heavy civil projects welcome.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Renovation and Retrofit Takeoffs
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Old buildings hide surprises. Our takeoffs reveal the full picture so you avoid shock costs later.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Blueprint Measurement and Plan Reading
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Send us your drawings and we take care of the rest. No tricky software. No guessing. Just clean measurements.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers every construction discipline. Every scope. Every detail.
        </p>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Quantity Takeoff"
        caption="Detailed material counts for accurate project planning."
        badge="Estimation"
        accent="cyan"
        imageSrc="/images/quantity-takeoff.jpg"
        imageAlt="Project management dashboard and planning tools"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Quantity Takeoffs
        </h2>
        <p className="mt-4 text-slate-600">
          Our services help everyone in the construction world. If your project has drawings, we can support you.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Get accurate counts for bidding and procurement.",
            },
            {
              title: "Subcontractors",
              desc: "Precise quantities for specialized work scopes.",
            },
            {
              title: "Developers",
              desc: "Clear material counts for project planning and budgeting.",
            },
            {
              title: "Homebuilders",
              desc: "Accurate takeoffs for residential projects of all sizes.",
            },
            {
              title: "Architects",
              desc: "Quantity verification to validate design assumptions.",
            },
            {
              title: "Engineers",
              desc: "Precise measurements for structural and MEP systems.",
            },
            {
              title: "Investors",
              desc: "Reliable quantities for investment analysis and budgeting.",
            },
            {
              title: "Project Owners",
              desc: "Accurate counts to avoid cost surprises and overruns.",
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
          Projects We Handle
        </h2>
        <p className="mt-4 text-slate-600">
          You can count on us for:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential homes",
            "Commercial buildings",
            "Industrial facilities",
            "Civil and infrastructure projects",
            "Institutional buildings",
            "Retail and hospitality structures",
            "Mixed use and large developments",
            "Renovations and expansions",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          We do it all with accuracy that feels refreshing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Thousands Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients stick with us because we make estimating easier.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Accurate & Fast
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Accurate counts. Fast reports. Fair pricing. Clean formatting. Zero headaches.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Friendly Support
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Friendly support. Easy communication. We treat quantity takeoff as the backbone of your project. Because it is.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


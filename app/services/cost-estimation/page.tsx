import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Construction Estimating Services | EHM Tech Services",
  description:
    "Accurate construction cost estimates that win bids and protect profits. We cover all project types with clear, reliable numbers you can trust.",
};

export default function CostEstimationPage() {
  return (
    <ServiceLayout
      title="Construction Estimating Services"
      groupLabel="CONSTRUCTION"
      accent="engineering"
      intro="A construction project runs smoothly when the numbers behave. EHM Technology Services provides accurate Construction Estimating Services to give you steady ground and clear figures. We turn guesswork into confidence."
      primaryCta={{ label: "Request an estimate", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Material takeoff services",
        "Labor cost estimating",
        "Equipment cost estimating",
        "Residential project estimating",
        "Commercial project estimating",
        "Industrial project estimating",
        "Civil and infrastructure estimating",
        "Renovation and remodeling estimates",
        "Change order estimating",
        "Blueprint review",
        "Value engineering options",
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
          detail: "Quick estimates when you need them most",
        },
        {
          label: "Market pricing",
          value: "Up to date",
          detail: "Real-world data and current market rates",
        },
      ]}
      tools={[
        "PlanSwift",
        "Bluebeam",
        "RSMeans cost data",
        "Advanced spreadsheets",
        "Industry linked databases",
      ]}
      approach={[
        {
          title: "Send project details",
          detail:
            "Send us your drawings and details. We review everything to confirm your needs.",
        },
        {
          title: "Team creates estimate",
          detail:
            "Our team creates a complete estimate using advanced tools and real world data.",
        },
        {
          title: "Receive clean estimate",
          detail:
            "You receive a clean, easy-to-read estimate ready for bidding or budgeting.",
        },
        {
          title: "Fast updates",
          detail:
            "Need changes? We update fast so you always stay on track.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you estimate?",
          answer:
            "We estimate residential, commercial, industrial, civil, institutional, and retail projects. No matter the size or complexity, we have you covered.",
        },
        {
          question: "How do you ensure accuracy?",
          answer:
            "We use trusted tools like PlanSwift and RSMeans data. We factor in labor hours, skill levels, and current market pricing so your numbers stay grounded.",
        },
        {
          question: "Who can benefit from your services?",
          answer:
            "General contractors, subcontractors, homebuilders, developers, architects, and investors. If your work touches construction, we support you.",
        },
      ]}
      ctaNote="If you want accurate estimates and strong profit protection, we are ready. Reach out today."
      signals={[
        "You need estimates that win bids and protect profits.",
        "Labor costs need to be kept in line.",
        "Hidden costs are breaking your budgets.",
        "You need numbers that make sense.",
      ]}
      packages={[
        {
          title: "Quick estimate",
          note: "Fast turnaround",
          items: ["Review of drawings and details", "Complete estimate with breakdown", "Easy to read reports"],
        },
        {
          title: "Full estimating package",
          note: "Comprehensive",
          items: ["Material takeoff", "Labor and equipment costs", "Market pricing alignment", "Value engineering options"],
        },
        {
          title: "Ongoing support",
          note: "Retainer",
          items: ["Change order estimating", "Blueprint reviews", "Fast updates when plans change"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Cost Estimation"
          caption="Accurate budget planning for construction projects."
          badge="Construction"
          accent="cyan"
          imageSrc="/images/cost-estimation-hero.png"
          imageAlt="Construction cost estimation workspace"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What Construction Estimating Services Mean For Your Project
        </h2>
        <p className="mt-4 text-slate-600">
          Estimating is the blueprint for your budget. Accurate estimating keeps you steady. We break down every material, labor hour, and hidden cost so you stay prepared and in control.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Partner You Want
        </h2>
        <p className="mt-4 text-slate-600">
          Your project becomes our mission. You get a team that treats your estimate like our own investment. Working with us is easy—like having an expert at your table.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clear Communication
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Simple communication, easy reports, and friendly support.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fast & Reliable
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fast turnaround and up-to-date pricing. No fluff, no confusion.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover in Our Construction Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          We cover everything in the construction world. All project types, all industries.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Material Takeoff Services
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We calculate every piece—bricks, studs, panels. No missed quantities.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Labor Cost Estimating
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We factor hours, skill levels, and productivity to keep labor costs in line.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Cost Estimating
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Rentals, fuel, maintenance. If it works on site, we include it.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Projects
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              From remodels to luxury builds. Kitchens, additions, roofing, and more.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Projects
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Offices, retail, hotels, and more. We help you bid confidently.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial & Civil Projects
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Factories, roads, bridges, utilities. Big projects, trusted numbers.
            </p>
          </div>
        </div>
      </div>
      <MediaPlaceholder className="mt-12"
        label="Cost Estimation"
        caption="Precise budget planning for every project phase."
        badge="Finance"
        imageSrc="/images/cost-estimation.jpg"
        imageAlt="Construction cost estimation calculator"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Services
        </h2>
        <p className="mt-4 text-slate-600">
          If your work touches construction, we support you.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "General Contractors",
              desc: "Win more bids and protect profits.",
            },
            {
              title: "Subcontractors",
              desc: "Reliable numbers for competitive bidding.",
            },
            {
              title: "Developers & Investors",
              desc: "Confident decisions with clear cost breakdowns.",
            },
            {
              title: "Architects & Designers",
              desc: "Understand costs early to guide design.",
            },
            {
              title: "Project Owners",
              desc: "Budget accurately and avoid surprises.",
            },
            {
              title: "Government Projects",
              desc: "Meet requirements with transparent estimates.",
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
          Why Businesses Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          We help clients win bids, avoid surprises, and build profits. We treat estimating as the backbone of your project.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Professional Service
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Quick estimates, honest communication, and a team that cares.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Working Made Simple
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              No complications. Just smooth, steady, and confident progress.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

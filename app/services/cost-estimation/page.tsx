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
      intro="A construction project runs smoothly when the numbers behave. When they do not, everything feels like walking on a tightrope with no safety net. At EHM Technology Services, our Construction Estimating Services give you steady ground, accurate figures, and a clear understanding of what your project truly costs. Your project deserves more than guesswork. It deserves clarity. It deserves confidence. It deserves numbers that make sense."
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
            "Send us your drawings and project details. We review everything and confirm exactly what you need.",
        },
        {
          title: "Team creates estimate",
          detail:
            "Our team creates a complete estimate using advanced tools and real world data.",
        },
        {
          title: "Receive clean estimate",
          detail:
            "You receive a clean and easy to understand estimate ready for bidding, planning, or budgeting.",
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
            "We estimate every kind of construction project including residential homes and remodels, commercial buildings, industrial structures, civil works, institutional buildings, retail and hospitality, and mixed use developments. No matter the size or complexity, EHM Technology Services has you covered.",
        },
        {
          question: "How do you ensure accuracy?",
          answer:
            "We use trusted digital estimating tools like PlanSwift, Bluebeam, and RSMeans cost data. We factor in hours, skill levels, shifts, labor productivity, current market pricing, and real-world conditions so your numbers stay grounded and accurate.",
        },
        {
          question: "Who can benefit from your services?",
          answer:
            "Our Construction Estimating Services support general contractors, subcontractors, homebuilders, developers, architects, designers, investors, project owners, and government projects. If your work touches construction in any way, we support you.",
        },
      ]}
      ctaNote="If you want accurate estimates, faster bidding, and strong profit protection, we are here and ready. Reach out today and let EHM Technology Services handle your construction estimating needs."
      signals={[
        "You need estimates that win bids and protect profits.",
        "Labor costs are moving around and need to be kept in line.",
        "Hidden costs show up when projects get real and break budgets.",
        "You need numbers that make sense and give you confidence.",
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
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What Construction Estimating Services Mean For Your Project
        </h2>
        <p className="mt-4 text-slate-600">
          Think of estimating like the blueprint for your budget. If the numbers are wrong, the whole project leans like a crooked ladder. Accurate estimating keeps you steady. Our estimating services break down every material, every hour of labor, every piece of equipment, and every hidden cost that shows up when projects get real. You stay prepared, in control, and ahead of costly surprises. With our help, you make choices with confidence and bid with power.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Partner You Want
        </h2>
        <p className="mt-4 text-slate-600">
          Your project becomes our mission the moment you reach out. You get a team that treats your estimate like it is our own investment. Working with us feels easy. Like having an estimating expert sitting across the table, answering every question with patience and a smile.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clear Communication
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clear and simple communication, easy to read reports, and friendly support any time you need help.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fast & Reliable
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Fast turnaround, up to date market pricing, and zero fluff and zero confusion. We help you win more bids and avoid cost surprises.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover in Our Construction Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          We cover everything in the construction world. If it needs materials, labor, time, equipment, or a coffee break, we estimate it. EHM Technology Services covers all project types. All industries. All scopes. No exceptions.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Material Takeoff Services
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We calculate every piece that goes into your build. Every brick. Every stud. Every panel. Every inch counted accurately. No missed quantities. No overspending.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Labor Cost Estimating
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Labor costs can move around like a toddler on sugar. Our estimates keep them in line. We factor hours, skill levels, shifts, and labor productivity so your numbers stay grounded.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Cost Estimating
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Cranes, lifts, saws, drills, rentals, fuel, maintenance. If it buzzes, rolls, lifts, or cuts, we include it.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Projects
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              From small home remodels to luxury builds. Kitchens, additions, basements, decks, roofing, flooring, framing, and every other residential project.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Projects
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Offices, retail shops, hotels, clinics, educational facilities, restaurants, multi story buildings, warehouses, and more. We help you plan and bid confidently.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial & Civil Projects
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Factories, plants, oil and gas facilities, roads, bridges, pipelines, utilities, drainage, earthwork. Big projects with big stakes. We give you numbers you can trust.
            </p>
          </div>
        </div>
      </div>
      <MediaPlaceholder
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
          Our Construction Estimating Services support everyone in the industry. If your work touches construction in any way, we support you.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "General Contractors",
              desc: "Win more bids with accurate estimates and protect profits.",
            },
            {
              title: "Subcontractors",
              desc: "Get reliable numbers for competitive bidding on specialized work.",
            },
            {
              title: "Developers & Investors",
              desc: "Make confident decisions with clear cost breakdowns and market pricing.",
            },
            {
              title: "Architects & Designers",
              desc: "Understand project costs early to guide design decisions.",
            },
            {
              title: "Project Owners",
              desc: "Budget accurately and avoid costly surprises during construction.",
            },
            {
              title: "Government Projects",
              desc: "Meet procurement requirements with detailed, transparent estimates.",
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
          Why Businesses Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients pick us because we help them win more bids, avoid cost surprises, and build stronger profits. We do not treat estimating like numbers on a screen. We treat it like the backbone of your project. Because it is.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Professional Service
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Quick estimates, professional service, honest communication, and market driven pricing. A team that cares about your success.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Working Made Simple
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Working with us is simple. No complications. No headaches. Our goal is to keep you moving. Smooth. Steady. Confident.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Cost Estimation | EHM Tech Services",
  description:
    "Detailed BOQs, material take-offs and cost breakdowns to support confident project decisions.",
};

export default function CostEstimationPage() {
  return (
    <ServiceLayout
      title="Cost Estimation"
      groupLabel="ENGINEERING & ESTIMATION"
      accent="engineering"
      intro="Make confident decisions with clear, structured cost estimates. We prepare BOQs, material take-offs and cost breakdowns that align with real market rates and project risks."
      primaryCta={{ label: "Request an estimate", href: "/contact" }}
      secondaryCta={{
        label: "See projects we priced",
        href: "/portfolio",
      }}
      sideHeading="Typical outcomes"
      sideItems={[
        "Detailed BOQs with quantities and units",
        "Cost build-ups by activity or system",
        "Clear assumptions & exclusions",
        "Comparison between options or vendors",
      ]}
      stats={[
        {
          label: "Bid support delivered",
          value: "120+",
          detail: "Packages for contractors & consultants",
        },
        {
          label: "Accuracy window",
          value: "±3-5%",
          detail: "When paired with current supplier rates",
        },
        {
          label: "Reporting formats",
          value: "6 templates",
          detail: "Aligned with your PM or finance stack",
        },
      ]}
      tools={[
        "Excel / Google Sheets",
        "CostX",
        "Bluebeam Revu",
        "Power BI",
        "Notion",
        "Smartsheet",
      ]}
      approach={[
        {
          title: "Scope & data intake",
          detail:
            "We gather drawings, specs and vendor quotes, then flag gaps before numbers are committed.",
        },
        {
          title: "Take-off & validation",
          detail:
            "Quantities are measured, peer-reviewed and linked back to sheet references for transparency.",
        },
        {
          title: "Rate build-up",
          detail:
            "We combine supplier input, market intel and historical data so your rates reflect current reality.",
        },
        {
          title: "Scenario reporting",
          detail:
            "Alternatives, sensitivities and clear assumptions let stakeholders decide quickly.",
        },
      ]}
      faqs={[
        {
          question: "Can you work with partial design information?",
          answer:
            "Yes. We highlight missing data, suggest allowances and keep a live assumptions log so stakeholders know what’s provisional.",
        },
        {
          question: "Do you plug into our estimating templates?",
          answer:
            "Absolutely. We can work inside your spreadsheets, CostX libraries or PM tools to keep everything in one place.",
        },
        {
          question: "How fast can you turn around an estimate?",
          answer:
            "Simple BOQs can be ready within 3 working days; complex multi-discipline packages are usually 1-2 weeks depending on data quality.",
        },
      ]}
      ctaNote="Send drawings, specs or even napkin numbers—we’ll map the gaps and return a structured cost package."
      signals={[
        "You’re comparing supplier quotes without a single aligned BOQ.",
        "The client is asking for value engineering proof before sign-off.",
        "Bid deadlines are tight and quantities change multiple times a week.",
        "Finance needs dependable cash flow projections tied to real assumptions.",
      ]}
      packages={[
        {
          title: "Benchmark pulse",
          note: "3-5 days",
          items: ["High-level take-off", "Market rate alignment", "Risk/opportunity notes"],
        },
        {
          title: "Detailed tender pack",
          note: "1-2 weeks",
          items: ["Full BOQ + rates", "Assumptions register", "Scenario comparisons"],
        },
        {
          title: "Embedded estimator",
          note: "Retainer",
          items: ["Live updates", "Vendor negotiations", "Executive dashboards"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-white">
          Estimation capabilities
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Pre-Tender Estimates
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Early stage estimates to check project feasibility and budget
              alignment before you go to market.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Detailed BOQs & Take-Offs
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Accurate quantity take-offs structured for tender and
              procurement.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Value Engineering Support
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Cost impact analysis of alternative materials, systems or methods
              to optimize value.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white">
          Why accurate estimation matters
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
          <div className="section-card p-5">
            <p className="font-medium text-gray-100">
              Reduce surprises on site
            </p>
            <p className="mt-2 text-gray-300">
              Good estimates help avoid scope gaps, claims and rushed
              variations later in the project.
            </p>
          </div>
          <div className="section-card p-5">
            <p className="font-medium text-gray-100">
              Win more competitive bids
            </p>
            <p className="mt-2 text-gray-300">
              Contractors can bid confidently with clear cost breakdowns and
              competitive margins.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white">Reporting add-ons</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Cash flow curves",
              desc: "Translate estimates into phased cash flow projections for finance review.",
            },
            {
              title: "Risk & opportunity logs",
              desc: "Surface potential savings or exposure so decision makers see more than the base number.",
            },
            {
              title: "Executive-ready decks",
              desc: "Summaries with charts and insights tailored for leadership approvals.",
            },
          ].map((item) => (
            <div key={item.title} className="section-card p-5">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}

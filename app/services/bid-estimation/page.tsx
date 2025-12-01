import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Bid Estimating Services | EHM Tech Services",
  description:
    "Winning bid estimates that give you the competitive edge. Smart numbers that work in your favor to stand out, win projects, and protect your profit.",
};

export default function BidEstimationPage() {
  return (
    <ServiceLayout
      title="Bid Estimating Services"
      groupLabel="CONSTRUCTION"
      accent="engineering"
      intro="Winning a bid is not about luck. It is about smart numbers that work in your favor. At EHM Technology Services, our Bid Estimating Services give you the competitive edge you need to stand out, win projects, and protect your profit. Submitting a bid without a proper estimate feels like taking a test with one eye closed. You might get close, but you will not get the score you want. We make sure your bid is backed by clear numbers, strong strategy, and a deep understanding of the project you are chasing. Whether you are bidding on residential, commercial, industrial, or civil jobs, our team prepares accurate and easy to understand bid estimates that help you win more work with confidence."
      primaryCta={{ label: "Get a bid estimate", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Complete bid estimates",
        "Scope review and clarification",
        "Material pricing",
        "Labor costing",
        "Equipment estimating",
        "Trade specific bid support",
        "Residential bid estimates",
        "Commercial bid estimates",
        "Industrial bid estimates",
        "Civil bid estimates",
        "Value engineering suggestions",
      ]}
      stats={[
        {
          label: "Project coverage",
          value: "All types",
          detail: "Residential, commercial, industrial, and civil projects",
        },
        {
          label: "Turnaround time",
          value: "Quick",
          detail: "Fast delivery so you never miss a deadline",
        },
        {
          label: "Market pricing",
          value: "Updated",
          detail: "Current market data and vendor inputs",
        },
      ]}
      tools={[
        "PlanSwift",
        "Bluebeam",
        "STACK",
        "RSMeans cost data",
        "Advanced spreadsheets",
      ]}
      approach={[
        {
          title: "Send drawings & project info",
          detail:
            "Share your project drawings, specifications, and any relevant details. We review everything to understand your bidding requirements.",
        },
        {
          title: "Study project & confirm scope",
          detail:
            "Our team analyzes the project thoroughly, identifies all scopes, spots potential gaps, and confirms everything needed for a winning bid.",
        },
        {
          title: "Build comprehensive bid estimate",
          detail:
            "We create a comprehensive bid estimate using current market pricing, accurate quantities, and competitive labor rates that help you win.",
        },
        {
          title: "Receive polished bid package",
          detail:
            "You get a professional, organized bid package with clear breakdowns that's ready to submit and impress clients.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you prepare bid estimates for?",
          answer:
            "We prepare winning bid estimates for every construction trade and every project type including residential construction, commercial buildings, industrial facilities, heavy civil projects, retail and hospitality, institutional buildings, renovations and expansions, and mixed use developments. Big jobs. Small jobs. Tricky jobs. Urgent jobs. We handle them all.",
        },
        {
          question: "How do you ensure competitive pricing?",
          answer:
            "We pull accurate prices using current market data and vendor inputs so your number feels real and reliable. We calculate hours, crew size, productivity, and workload to give you labor rates that keep your bid competitive and safe. We also help you find ways to price smarter without lowering quality through value engineering suggestions.",
        },
        {
          question: "Who can benefit from your bid estimating services?",
          answer:
            "Our services support general contractors, subcontractors, builders, developers, homeowners, architects, investors, project managers, and government projects. If you submit bids, we can help you win more of them.",
        },
      ]}
      ctaNote="Your next project might be one bid away. With EHM Technology Services, your bid stands tall, sharp, and confident. If you are tired of losing bids by guessing or rushing, let us help you create estimates that impress clients and beat competitors. Reach out today and let EHM Technology Services prepare your next winning bid."
      signals={[
        "Submitting a bid without a proper estimate feels like taking a test with one eye closed.",
        "A small mistake can send you too low or too high.",
        "You need numbers that help you submit bids with full confidence instead of crossed fingers.",
        "Winning bids becomes easier when your estimate is strong.",
      ]}
      packages={[
        {
          title: "Complete bid estimates",
          note: "Comprehensive",
          items: ["Materials, labor, equipment breakdown", "Overhead and profit included", "Clear and organized format"],
        },
        {
          title: "Full bid package",
          note: "Ready to submit",
          items: ["Scope review and clarification", "Market pricing", "Value engineering suggestions"],
        },
        {
          title: "Ongoing bid support",
          note: "Fast updates",
          items: ["Quick adjustments", "Multiple bid preparation", "Deadline support"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Bid Estimating Matters
        </h2>
        <p className="mt-4 text-slate-600">
          A bid can make or break your project pipeline. A small mistake can send you too low or too high. Too low means lost profit. Too high means lost opportunity.
        </p>
        <p className="mt-4 text-slate-600">
          A solid bid estimate helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Price your project confidently</li>
          <li>Stand out from competitors</li>
          <li>Avoid underbidding and overbidding</li>
          <li>Plan your resources better</li>
          <li>Build trust with clients</li>
          <li>Increase your bid hit rate</li>
        </ul>
        <p className="mt-4 text-slate-600">
          We give you numbers that help you submit bids with full confidence instead of crossed fingers.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Partner
        </h2>
        <p className="mt-4 text-slate-600">
          At EHM Technology Services, you get more than an estimate. You get a team that understands pressure, deadlines, and the reality of construction bidding.
        </p>
        <p className="mt-4 text-slate-600">
          We keep things simple, friendly, and fast. You bring the drawings. We bring the strategy. Together, we build bids that actually win.
        </p>
        <p className="mt-4 text-slate-600">
          With us, you get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Quick Turnaround
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Quick turnaround. Clear and organized bid estimates. Updated market pricing. Support for all construction scopes.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Team That Listens
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A team that listens and guides you. Zero confusion and zero surprises. Clients feel like they have their own in house estimator.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              No Heavy Payroll
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              No heavy payroll. No stress. Just results. Your bid arrives strong, organized, and ready to win.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Simple Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We designed a process that keeps you moving fast. With EHM Technology Services, bidding becomes easy.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Bid Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          We prepare winning bid estimates for every construction trade and every project type.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Complete Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We break down materials, labor, equipment, overhead, profit, and every other cost that shapes your bid.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Scope Review and Clarification
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We study your drawings and spot missing items, unclear notes, risky areas, and potential gaps that could hurt your bid.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Material Pricing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We pull accurate prices using current market data and vendor inputs so your number feels real and reliable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Labor Costing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We calculate hours, crew size, productivity, and workload to give you labor rates that keep your bid competitive and safe.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Estimating
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Rental costs, operating hours, fuel, transportation, and all equipment needs included.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Value Engineering Suggestions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We help you find ways to price smarter without lowering quality.
            </p>
          </div>
        </div>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Bid Estimation"
        caption="Competitive and accurate estimates for winning bids."
        badge="Estimation"
        accent="cyan"
        imageSrc="/images/bid-estimation.jpg"
        imageAlt="Construction blueprints and cost estimation tools"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Trade Specific Bid Support
        </h2>
        <p className="mt-4 text-slate-600">
          We provide specialized bid support for every trade in the industry:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Electrical",
            "Plumbing",
            "HVAC",
            "Concrete",
            "Masonry",
            "Drywall",
            "Roofing",
            "Carpentry",
            "Steel",
            "Mechanical",
          ].map((trade) => (
            <div key={trade} className="section-card p-5">
              <p className="text-slate-900 font-medium">{trade}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          And every other trade in the industry.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Project Type Bid Estimates
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Residential Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Additions. New builds. Remodels. Multi family. Custom homes. Everything homeowners and builders need.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Offices. Retail. Hospitality. Schools. Medical facilities. Restaurants. Malls. Warehouses. All covered.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Factories. Processing units. Plants. Oil and gas. High complexity projects with tight deadlines.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Civil Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Earthwork. Utilities. Roads. Bridges. Concrete. Sitework. You name it.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers all trades and all project types, no matter the size or complexity.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Uses Our Bid Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          Our services support everyone who submits bids. If you submit bids, we can help you win more of them.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "General Contractors",
              desc: "Win more projects with competitive, accurate bids.",
            },
            {
              title: "Subcontractors",
              desc: "Get reliable bid estimates for specialized trades.",
            },
            {
              title: "Builders",
              desc: "Accurate bids for residential and commercial projects.",
            },
            {
              title: "Developers",
              desc: "Clear cost breakdowns for project planning and budgeting.",
            },
            {
              title: "Homeowners",
              desc: "Professional bid estimates for home projects.",
            },
            {
              title: "Architects",
              desc: "Cost validation to guide design decisions.",
            },
            {
              title: "Investors",
              desc: "Reliable estimates for investment analysis.",
            },
            {
              title: "Project Managers",
              desc: "Accurate bids to manage project budgets effectively.",
            },
            {
              title: "Government Projects",
              desc: "Compliant bid packages meeting procurement requirements.",
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
          Types of Projects We Handle
        </h2>
        <p className="mt-4 text-slate-600">
          We prepare bid estimates for:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential construction",
            "Commercial buildings",
            "Industrial facilities",
            "Heavy civil projects",
            "Retail and hospitality",
            "Institutional buildings",
            "Renovations and expansions",
            "Mixed use developments",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Big jobs. Small jobs. Tricky jobs. Urgent jobs. We handle them all.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Contractors Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Winning bids becomes easier when your estimate is strong. That is why contractors trust us.
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
              Accurate bid numbers. Fast delivery. Easy communication. Friendly support. Competitive pricing.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Committed to Your Success
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A team committed to your success. We treat every bid like it is our own. Because your win is our win too.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


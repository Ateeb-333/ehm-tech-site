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
      intro="Winning a bid isn't luck. It's smart numbers. EHM Technology Services gives you the competitive edge to stand out and protect your profit. Submitting a bid without a proper estimate is risky. We ensure your bid is backed by clear numbers and strategy. Whether residential, commercial, or industrial, we prepare accurate estimates that help you win with confidence."
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
            "Share your drawings and specs. We review everything to understand your needs.",
        },
        {
          title: "Study project & confirm scope",
          detail:
            "We analyze the project, identify scopes, and confirm everything needed for a winning bid.",
        },
        {
          title: "Build comprehensive bid estimate",
          detail:
            "We create a detailed estimate using current market pricing and competitive labor rates.",
        },
        {
          title: "Receive polished bid package",
          detail:
            "You get a professional, organized bid package ready to submit and impress.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you prepare bid estimates for?",
          answer:
            "We handle all trades and project types: residential, commercial, industrial, civil, retail, and mixed-use. Big or small, we do it all.",
        },
        {
          question: "How do you ensure competitive pricing?",
          answer:
            "We use current market data for materials and calculate precise labor rates based on productivity. We also offer value engineering to price smarter.",
        },
        {
          question: "Who can benefit from your bid estimating services?",
          answer:
            "Contractors, subcontractors, builders, developers, architects, and homeowners. If you bid, we can help you win.",
        },
      ]}
      ctaNote="Your next project might be one bid away. Get estimates that impress clients and beat competitors. Reach out today."
      signals={[
        "Submitting a bid without a proper estimate is risky.",
        "A small mistake can send you too low or too high.",
        "You need numbers that help you submit bids with confidence.",
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
      heroMedia={
        <MediaPlaceholder
          label="Bid Estimation"
          caption="Winning bid strategies backed by accurate data."
          badge="Construction"
          accent="cyan"
          imageSrc="/images/bid-estimation-hero.png"
          imageAlt="Construction bid estimation proposal"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Bid Estimating Matters
        </h2>
        <p className="mt-4 text-slate-600">
          A bid can make or break your pipeline. Too low means lost profit. Too high means lost opportunity.
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
          We give you numbers that help you submit bids with full confidence.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Partner
        </h2>
        <p className="mt-4 text-slate-600">
          You get a team that understands pressure and deadlines. We keep things simple and fast. You bring the drawings, we bring the strategy.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Quick Turnaround
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fast delivery. Clear estimates. Updated pricing. Support for all scopes.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Team That Listens
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We listen and guide you. Zero confusion. Like having an in-house estimator.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              No Heavy Payroll
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              No payroll stress. Just results. Your bid arrives strong and ready to win.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Simple Process
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We keep you moving fast. Bidding becomes easy with us.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Bid Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          We prepare winning bid estimates for every trade and project type.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Complete Bid Estimates
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Materials, labor, equipment, overhead, and profit. Every cost covered.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Scope Review
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We spot missing items, unclear notes, and gaps that could hurt your bid.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Material Pricing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Accurate prices using current market data so your number is reliable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Labor Costing
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              precise labor rates based on productivity to keep you competitive.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Equipment Estimating
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Rentals, fuel, and operating costs included.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Value Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Smart pricing strategies without lowering quality.
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
          We provide specialized bid support for every trade:
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
              Residential
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Additions, new builds, remodels, and custom homes.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Commercial
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Offices, retail, hospitality, schools, and medical facilities.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Industrial
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Factories, plants, and complex projects with tight deadlines.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Civil
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Earthwork, utilities, roads, and bridges.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services covers all trades and project types.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Uses Our Bid Estimating Services
        </h2>
        <p className="mt-4 text-slate-600">
          If you submit bids, we can help you win more of them.
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
              desc: "Clear cost breakdowns for planning and budgeting.",
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
              desc: "Accurate bids to manage project budgets.",
            },
            {
              title: "Government Projects",
              desc: "Compliant bid packages meeting requirements.",
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
          Big jobs. Small jobs. Tricky jobs. We handle them all.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Contractors Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Winning bids becomes easier when your estimate is strong.
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
              Accurate numbers. Fast delivery. Easy communication. Competitive pricing.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Committed to Your Success
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We treat every bid like it is our own. Your win is our win.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}


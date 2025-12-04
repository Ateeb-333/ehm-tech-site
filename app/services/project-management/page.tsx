import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Project Management Services | EHM Tech Services",
  description:
    "Professional Project Management Services that keep everything steady, organized, and running smoothly from day one. Turn chaos into calm.",
};

export default function ProjectManagementPage() {
  return (
    <ServiceLayout
      title="Project Management Services"
      groupLabel="CONSTRUCTION"
      accent="engineering"
      intro="Every project looks simple on paper until it starts. EHM Technology Services provides professional Project Management to keep your build steady, organized, and on track. We handle the chaos so you don't have to."
      primaryCta={{ label: "Discuss project management", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Planning and scheduling",
        "Cost and budget management",
        "Resource coordination",
        "Quality control",
        "Risk management",
        "Communication management",
        "On site oversight",
        "Documentation and reporting",
        "Change management",
        "Project closeout",
      ]}
      stats={[
        {
          label: "Project coverage",
          value: "All types",
          detail: "Residential, commercial, industrial, and civil projects",
        },
        {
          label: "Communication",
          value: "Clear",
          detail: "Clear communication all the way through",
        },
        {
          label: "Support",
          value: "Personal",
          detail: "Support that feels personal and reliable",
        },
      ]}
      tools={[
        "Project scheduling platforms",
        "Digital communication systems",
        "Blueprint review tools",
        "Budget tracking tools",
        "Daily progress monitoring systems",
      ]}
      approach={[
        {
          title: "Understand your project goals",
          detail:
            "We start by understanding your timeline, budget, and success criteria.",
        },
        {
          title: "Build a tailored management plan",
          detail:
            "We create a plan with clear schedules, budgets, and communication protocols.",
        },
        {
          title: "Manage daily flow & communication",
          detail:
            "We handle coordination, track progress, and solve problems daily.",
        },
        {
          title: "Deliver updates & ensure handover",
          detail:
            "You get regular updates and a smooth final handover.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you manage?",
          answer:
            "We manage residential, commercial, industrial, civil, retail, and institutional projects. No project is too big or detailed for us.",
        },
        {
          question: "How do you keep projects on track?",
          answer:
            "We set realistic timelines and milestones, watch the budget closely, and coordinate all resources. We spot problems early to prevent delays.",
        },
        {
          question: "Who can benefit from your project management services?",
          answer:
            "Contractors, developers, homeowners, architects, and business owners. If your project has moving parts, we keep them moving together.",
        },
      ]}
      ctaNote="Get a team that brings clarity and control to your project. Let us guide your next build."
      signals={[
        "Deadlines shift and problems pop up unexpectedly.",
        "Budgets drift and schedules slip.",
        "Managing the project feels overwhelming.",
        "You need better coordination and control.",
      ]}
      packages={[
        {
          title: "Planning and scheduling",
          note: "Foundation",
          items: ["Timeline setup", "Major milestones", "Daily tasks", "Realistic deadlines"],
        },
        {
          title: "Full project management",
          note: "Complete",
          items: ["Budget management", "Resource coordination", "Quality control", "Risk management"],
        },
        {
          title: "Ongoing oversight",
          note: "Support",
          items: ["On site monitoring", "Communication management", "Documentation", "Change management"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Project Management"
          caption="Professional project management that keeps everything on track."
          badge="Management"
          accent="cyan"
          imageSrc="/images/project-management.png"
          imageAlt="Project management dashboard and planning tools"
          className="h-full min-h-[300px]"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Project Management Services Matter
        </h2>
        <p className="mt-4 text-slate-600">
          A construction job needs coordination. Without it, budgets drift and schedules slip. Strong project management keeps you on schedule, controls costs, and prevents mistakes.
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Stay on schedule</li>
          <li>Control costs</li>
          <li>Keep crews aligned</li>
          <li>Prevent mistakes</li>
          <li>Reduce rework</li>
          <li>Improve communication</li>
          <li>Deliver results your clients trust</li>
        </ul >
        <p className="mt-4 text-slate-600">
          We turn chaos into calm.
        </p>
      </div>

      <MediaPlaceholder className="mt-12"
        label="Project Oversight"
        caption="Professional management ensuring your project stays on track and on budget."
        badge="Management"
        imageSrc="/images/project-management.png"
        imageAlt="Construction project manager reviewing plans on site"
      />

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Team You Want
        </h2>
        <p className="mt-4 text-slate-600">
          Managing a project shouldn't feel like a juggling act. We bring the expertise to handle it smoothly.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clear Communication
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Friendly support and smooth coordination between all parties.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fast Problem Solving
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Upfront planning and clean execution to keep things moving.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Same Care As Our Own
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We manage your project with the same care as if it were our own investment.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Stay In Control
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We handle the heavy lifting so you stay in control without the stress.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Project Management Services
        </h2>
        <p className="mt-4 text-slate-600">
          We manage everything from start to finish.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Planning and Scheduling
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We set timelines, milestones, and daily tasks to keep everyone on track.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Cost and Budget Management
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We watch your budget closely to prevent surprise expenses.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Resource Coordination
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We ensure labor, materials, and equipment arrive when needed.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Quality Control
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We maintain high standards so your work stays professional.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Risk Management
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We spot and fix problems early to save you stress.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Communication Management
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We keep clients, contractors, and designers in the loop.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              On Site Oversight
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We monitor progress and handle issues on site.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Documentation and Reporting
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean reports and organized files so nothing gets lost.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Change Management
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We handle changes smoothly to keep the project flexible yet stable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Project Closeout
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We wrap up every detail for a clean finish.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services handles all project types in all industries.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Keep projects on schedule and within budget.",
            },
            {
              title: "Developers",
              desc: "Smooth coordination across all phases.",
            },
            {
              title: "Homeowners",
              desc: "Professional management for home projects.",
            },
            {
              title: "Architects",
              desc: "Ensure design intent is maintained.",
            },
            {
              title: "Designers",
              desc: "Coordinate design plans with construction.",
            },
            {
              title: "Builders",
              desc: "Oversight for residential and commercial builds.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with comprehensive management.",
            },
            {
              title: "Investors",
              desc: "Ensure projects deliver on time and budget.",
            },
            {
              title: "Government Projects",
              desc: "Meet compliance requirements with professional oversight.",
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
          Projects We Manage
        </h2>
        <p className="mt-4 text-slate-600">
          We manage all kinds of work:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Residential construction",
            "Commercial buildings",
            "Industrial facilities",
            "Civil and infrastructure",
            "Retail and hospitality",
            "Institutional projects",
            "Renovations and expansions",
            "Multi phase developments",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients trust us because their projects run smoother with us involved.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Less Stress, Better Results
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fewer delays, clear planning, and accurate budgeting.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Strong Teamwork
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              A partner who cares about making your project easier and safer.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout >
  );
}


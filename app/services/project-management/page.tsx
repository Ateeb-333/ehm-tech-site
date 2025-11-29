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
      intro="Every project looks simple on paper. Until it starts. Suddenly things move fast, people need answers, deadlines shift, materials run late, and problems pop up like popcorn. That is where EHM Technology Services steps in with professional Project Management Services that keep everything steady, organized, and running smoothly from day one. Project management is the heartbeat of a successful build. When it is done right, the whole team moves like a well-tuned machine. When it is not, well, let's just say things can fall apart faster than a cheap folding chair. We prevent that. We guide your project with clarity, communication, and hands on oversight that keeps you in control every step of the way."
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
            "We start with a conversation to understand your project, timeline, budget, and what success looks like for you.",
        },
        {
          title: "Build a tailored management plan",
          detail:
            "We create a customized management plan with schedules, budgets, communication protocols, and clear milestones.",
        },
        {
          title: "Manage daily flow & communication",
          detail:
            "We handle day-to-day coordination, track progress, manage resources, solve problems, and keep everyone informed.",
        },
        {
          title: "Deliver updates & ensure handover",
          detail:
            "You get regular updates, detailed reports, and full visibility into project status, ensuring a smooth handover.",
        },
      ]}
      faqs={[
        {
          question: "What types of projects do you manage?",
          answer:
            "We manage all kinds of work including residential construction, commercial buildings, industrial facilities, civil and infrastructure, retail and hospitality, institutional projects, renovations and expansions, and multi phase developments. Nothing is too big or too detailed for our team. EHM Technology Services handles all project types in all industries.",
        },
        {
          question: "How do you keep projects on track?",
          answer:
            "We set up the timeline, major milestones, daily tasks, and realistic deadlines so your team stays on track without confusion. We watch your budget closely and keep costs steady. We coordinate labor, materials, equipment, and deliveries. We spot problems early and fix them before they grow teeth. A little prevention saves a lot of stress.",
        },
        {
          question: "Who can benefit from your project management services?",
          answer:
            "We support contractors, developers, homeowners, architects, designers, builders, commercial owners, investors, and government projects. If your project has moving pieces, we keep them moving together.",
        },
      ]}
      ctaNote="A successful project needs the right management. With EHM Technology Services, you get a team that brings clarity, control, and calm to every step of your project. Let us guide your next build with project management that feels reliable and painless."
      signals={[
        "Things move fast, people need answers, deadlines shift, and problems pop up like popcorn.",
        "Your budget drifts, schedules slip, and people scramble.",
        "Managing a project can feel like juggling chainsaws on a moving ladder.",
        "You need coordination, planning, timing, and control.",
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
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Project Management Services Matter
        </h2>
        <p className="mt-4 text-slate-600">
          A construction job needs more than workers and materials. It needs coordination. Planning. Timing. Control. Without that, your budget drifts, schedules slip, and people scramble.
        </p>
        <p className="mt-4 text-slate-600">
          Strong project management helps you:
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
          Good management turns chaos into calm. That is exactly what we do.
        </p>
      </div >

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is The Team You Want
        </h2>
        <p className="mt-4 text-slate-600">
          Managing a project can feel like juggling chainsaws on a moving ladder. We make it feel more like handing the ladder to someone who actually knows what they are doing.
        </p>
        <p className="mt-4 text-slate-600">
          With EHM Technology Services, you get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Clear Communication
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clear communication all the way through. A friendly team that guides and supports you. Smooth coordination between all parties.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Fast Problem Solving
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Fast problem solving. Upfront planning and clean execution. Support that feels personal and reliable.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Same Care As Our Own
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We run your project with the same care as if it were our own investment. No stress. No guesswork.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Stay In Control
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              You stay in control without drowning in the details. We handle the heavy lifting.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Project Management Services
        </h2>
        <p className="mt-4 text-slate-600">
          We manage everything your project needs from start to finish.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Planning and Scheduling
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We set up the timeline, major milestones, daily tasks, and realistic deadlines so your team stays on track without confusion.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Cost and Budget Management
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We watch your budget closely and keep costs steady. No surprise expenses. No silent leaks.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Resource Coordination
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Labor. Materials. Equipment. Deliveries. We make sure everything arrives when it should and everyone knows what to do.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Quality Control
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We maintain high standards at every step so your work stays sharp and professional.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Risk Management
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We spot problems early and fix them before they grow teeth. A little prevention saves a lot of stress.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Communication Management
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We keep everyone updated. Clients. Contractors. Crews. Designers. No one gets left out of the loop.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              On Site Oversight
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We monitor progress, handle issues, and keep things moving without delays.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Documentation and Reporting
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clean reports. Organized files. Everything documented so nothing gets lost or forgotten.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Change Management
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Changes happen. We handle them smoothly so your project stays flexible and stable at the same time.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Project Closeout
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We wrap up every detail professionally, leaving you with a clean finish and a satisfied client.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          EHM Technology Services handles all project types in all industries.
        </p>
        <p className="mt-4 text-slate-600">
          We support everyone who needs professional project management. If your project has moving pieces, we keep them moving together.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Contractors",
              desc: "Keep projects on schedule and within budget with professional oversight.",
            },
            {
              title: "Developers",
              desc: "Smooth coordination across all phases of development projects.",
            },
            {
              title: "Homeowners",
              desc: "Professional management for home construction and renovation projects.",
            },
            {
              title: "Architects",
              desc: "Ensure design intent is maintained throughout construction.",
            },
            {
              title: "Designers",
              desc: "Coordinate implementation of design plans with construction teams.",
            },
            {
              title: "Builders",
              desc: "Professional oversight for residential and commercial building projects.",
            },
            {
              title: "Commercial Owners",
              desc: "Protect your investment with comprehensive project management.",
            },
            {
              title: "Investors",
              desc: "Ensure projects deliver on time and on budget for maximum ROI.",
            },
            {
              title: "Government Projects",
              desc: "Meet compliance requirements with professional project oversight.",
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
              <p className="text-white font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Nothing is too big or too detailed for our team.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients trust us because their projects run smoother with us involved.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Less Stress, Better Results
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Less stress. Fewer delays. Better communication. Clear planning. Accurate budgeting.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-softSkyCyan">
              Strong Teamwork
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Strong teamwork. A partner who truly cares. We take pride in making your project feel easier, safer, and more organized.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout >
  );
}


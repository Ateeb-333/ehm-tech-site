import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "AI Automation | EHM Tech Services",
  description:
    "AI assistants, workflows and integrations that remove repetitive work from your team.",
};

export default function AiAutomationPage() {
  return (
    <ServiceLayout
      title="AI Automation"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="Turn repetitive workflows into smart, automated processes. We build AI assistants, automations and integrations that help your team focus on high-value work instead of manual tasks."
      primaryCta={{
        label: "Explore automation opportunities",
        href: "/contact",
      }}
      sideHeading="Where we apply AI"
      sideItems={[
        "Customer support & enquiry handling",
        "Internal knowledge Q&A & documentation",
        "Data entry, tagging and reporting",
        "Workflow automation across tools",
      ]}
      stats={[
        {
          label: "Hours freed monthly",
          value: "250+",
          detail: "Average per client after 6 weeks",
        },
        {
          label: "Integrations",
          value: "30+",
          detail: "CRMs, project tools, databases & APIs",
        },
        {
          label: "Pilot timeline",
          value: "2-3 weeks",
          detail: "From discovery to first usable agent",
        },
      ]}
      tools={[
        "OpenAI / Azure OpenAI",
        "Claude",
        "LangChain",
        "Make / Zapier",
        "Supabase",
        "Next.js",
        "Retool",
      ]}
      approach={[
        {
          title: "Identify automation targets",
          detail:
            "Workshops surface repetitive tasks, inputs and success criteria so we focus on valuable wins.",
        },
        {
          title: "Prototype fast",
          detail:
            "We build lightweight proof-of-concepts that plug into your stack to validate quality early.",
        },
        {
          title: "Production hardening",
          detail:
            "Security reviews, logging and fallbacks make sure the solution is reliable in the wild.",
        },
        {
          title: "Launch & iterate",
          detail:
            "We monitor usage, collect operator feedback and ship weekly improvements.",
        },
      ]}
      faqs={[
        {
          question: "Do you use off-the-shelf tools or custom code?",
          answer:
            "Both. We combine platforms like Make/Zapier with custom scripts or microservices so you get the best mix of speed and control.",
        },
        {
          question: "How do you handle data privacy?",
          answer:
            "We isolate credentials, use SOC 2 compliant vendors where possible, redact sensitive data before LLM calls, and document every integration touchpoint.",
        },
        {
          question: "What happens if the AI gets something wrong?",
          answer:
            "Every automation ships with guardrails—confidence thresholds, human review queues or fallbacks—so your team stays in control.",
        },
      ]}
      ctaNote="Describe the repetitive task that drains your week—we’ll show how to delegate it to an assistant or workflow."
      signals={[
        "Teams rely on tribal knowledge and ping each other for the same answers.",
        "Customers wait hours for status updates or document requests.",
        "Ops depends on spreadsheets to glue tools together manually.",
        "Leads drop because data isn’t flowing between CRM, email and support.",
      ]}
      packages={[
        {
          title: "Opportunity sprint",
          note: "1-2 weeks",
          items: ["Workflow mapping", "Tool stack audit", "Automation roadmap"],
        },
        {
          title: "MVP assistant",
          note: "3-4 weeks",
          items: ["Knowledge ingestion", "LLM guardrails", "Launch playbook"],
        },
        {
          title: "Automation pod",
          note: "Retainer",
          items: ["Backlog delivery", "Monitoring & analytics", "Continuous improvements"],
        },
      ]}
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Example automations we build
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              AI Support Agents
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Chatbots that answer common questions using your own knowledge
              base, documentation and policies.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Workflow Automation
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Triggered actions across email, CRM, project management and file
              storage tools.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Document Intelligence
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Automatically extract data from reports, forms and documents to
              speed up decisions and data entry.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Automation playbooks</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Knowledge copilots",
              desc: "Sync documentation, tickets and SOPs into a secure knowledge base that answers team questions instantly.",
            },
            {
              title: "Back-office orchestration",
              desc: "Connect CRMs, spreadsheets and project tools so updates cascade without anyone copy/pasting.",
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

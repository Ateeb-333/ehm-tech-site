import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

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
      intro="Artificial Intelligence is no longer the future. It is the right now. Businesses using AI are moving faster, saving more time, and getting ahead while everyone else plays catch up. At EHM Technology Services, our AI Services help you automate tasks, improve decision making, and build smart systems that do the heavy lifting for you. Think of AI as your new digital teammate. It works nonstop. It never gets tired. It learns as it goes. And with the right setup, it makes your business run smoother than ever. We help you use AI the smart way so your business grows with less effort and more results."
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
        "Machine learning frameworks",
        "Data analysis tools",
        "AI automation platforms",
        "Chatbot builders",
        "Deep learning systems",
      ]}
      approach={[
        {
          title: "Step One",
          detail: "We learn your business and understand where AI can help the most.",
        },
        {
          title: "Step Two",
          detail: "We create a simple plan and show you exactly what AI will do for you.",
        },
        {
          title: "Step Three",
          detail: "Our team builds and trains your AI systems.",
        },
        {
          title: "Step Four",
          detail: "You start using your AI tools with full support from us.",
        },
        {
          title: "Step Five",
          detail: "We improve and update your system as your business grows.",
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
      ctaNote="AI does not replace people. It helps people do their best work. With EHM Technology Services, you get AI solutions that make your business faster, smarter, and more competitive. Let us help you step into the future with confidence."
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
      heroMedia={
        <MediaPlaceholder
          label="AI Automation"
          caption="Intelligent systems that work for you 24/7."
          badge="Digital"
          accent="cyan"
          imageSrc="/images/ai-automation-hero.png"
          imageAlt="Futuristic AI automation concept"
        />
      }
    >
      <div className="space-y-12">
        {/* Why AI Services Matter */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="section-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              BENEFITS
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Why AI Services Matter
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              AI is not magic. It is simply a powerful tool that helps your business
              work better. When used correctly, it boosts productivity and opens the
              door to possibilities you did not even know you had.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-softSkyCyan via-sunsetPeach to-slateBlue bg-clip-text text-transparent">
                AI helps you:
              </h3>
              <ul className="mt-4 grid gap-3">
                {[
                  "Save time on repetitive tasks",
                  "Reduce human errors",
                  "Automate workflows",
                  "Improve customer experience",
                  "Make faster and smarter decisions",
                  "Increase revenue and performance",
                  "Stay ahead of competitors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-600">
                    <span className="text-sunsetPeach mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 font-medium text-slate-900">
              When AI works for you, everything in your business becomes easier.
            </p>
          </div>
          <MediaPlaceholder
            label="Future Ready"
            caption="Accelerate your business with intelligent automation."
            badge="Productivity"
            accent="violet"
            imageSrc="/images/ai-automation-3.jpg"
            imageAlt="AI productivity and workflow visualization"
            className="h-full min-h-[300px]"
          />
        </div>

        {/* Why EHM Technology Services Is The Right AI Partner */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              OUR APPROACH
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Why EHM Technology Services Is The Right AI Partner
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              At EHM Technology Services, we make AI feel simple. No confusing
              tech talk. No complicated explanations. Just clear communication and
              real solutions.
            </p>
            <p className="mt-4 text-slate-600">
              We make AI useful, not overwhelming.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder className="mt-12"
              label="AI Solutions"
              caption="Smart automation that works for you."
              badge="Our Technology"
              aspect="wide"
              accent="cyan"
              imageSrc="/images/ai-automation-1.jpg"
              imageAlt="AI brain circuit visualization"
            />
            <div className="section-card p-6 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                You get:
              </h3>
              <ul className="space-y-3">
                {[
                  "Custom AI solutions",
                  "Friendly support",
                  "Fast delivery",
                  "Practical tools you can use right away",
                  "Secure and reliable systems",
                  "A team that guides you step by step",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sunsetPeach" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What We Cover In Our AI Services */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            OUR SERVICES
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 mb-6">
            What We Cover In Our AI Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Automation",
                desc: "We build systems that handle repetitive tasks for you. Data entry. Scheduling. Reporting. Customer responses. All automated.",
              },
              {
                title: "AI Chatbots",
                desc: "We create smart chatbots that answer customers instantly, support your team, and improve service without needing extra staff.",
              },
              {
                title: "Machine Learning Solutions",
                desc: "We design systems that learn from your data so your business gets smarter over time.",
              },
              {
                title: "Predictive Analytics",
                desc: "We help you predict sales, trends, customer behavior, and risks so you make better decisions.",
              },
              {
                title: "AI For Content Creation",
                desc: "Social media posts. Emails. Scripts. Captions. Ideas. AI helps you create content faster while keeping your brand voice consistent.",
              },
              {
                title: "Data Processing And Analysis",
                desc: "We use AI to organize, clean, study, and visualize your data so it is actually useful.",
              },
              {
                title: "AI Assistants For Business Operations",
                desc: "Custom tools that help with planning, reporting, onboarding, and communication.",
              },
              {
                title: "Image And Document Recognition",
                desc: "We use AI to scan documents, read data, detect patterns, and process information automatically.",
              },
              {
                title: "AI For Websites And Apps",
                desc: "We integrate AI into your platforms for smarter search tools, recommendations, automation, and user personalization.",
              },
              {
                title: "Custom AI Development",
                desc: "If you can imagine it, we can build it. Tools. Systems. Features. Workflows. Everything tailored to your business.",
              },
            ].map((service) => (
              <div key={service.title} className="section-card p-6 hover:border-sunsetPeach/30 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <MediaPlaceholder className="mt-12"
            label="AI Innovation"
            caption="Cutting-edge AI solutions that transform your business operations."
            badge="Technology"
            aspect="wide"
            accent="cyan"
            imageSrc="/images/ai-automation-2.jpg"
            imageAlt="AI services showcase"
          />
          <p className="mt-6 text-center text-slate-600 italic">
            EHM Technology Services covers every step of AI development from strategy to execution.
          </p>
        </div>

        {/* Who Benefits & Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Who Benefits From Our AI Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Small businesses",
                "Startups",
                "E commerce stores",
                "Service providers",
                "Contractors",
                "Agencies",
                "Creators and influencers",
                "Enterprise companies",
                "Anyone who wants to work smarter",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              If your business has tasks that take time, AI can help.
            </p>
          </div>

          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Projects And Solutions We Work On
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                "Automated workflows",
                "AI chatbots",
                "Smart dashboards",
                "Predictive tools",
                "Personalized website experiences",
                "Recommendation systems",
                "AI powered marketing tools",
                "Data analysis systems",
              ].map((item) => (
                <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="text-sunsetPeach">▪</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Every industry. Every need. Every level of complexity.
            </p>
          </div>
        </div>

        {/* Why Clients Choose EHM */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
          <h2 className="text-2xl font-semibold">
            Why Clients Choose EHM Technology Services
          </h2>
          <p className="mt-2 text-slate-300">
            Clients love working with us because we make AI easy to understand and
            easy to use.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Clear results",
              "Friendly support",
              "Practical solutions",
              "Quick turnaround",
              "Fair pricing",
              "A team focused on your growth",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sunsetPeach">
                  ★
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-300 font-medium">
            We do not just build AI. We make sure it actually helps your business grow.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}

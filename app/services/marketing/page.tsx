import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Marketing | EHM Tech Services",
  description:
    "Social media, email, and digital marketing campaigns to grow your audience and drive conversions.",
};

export default function MarketingPage() {
  return (
    <ServiceLayout
      title="Marketing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="In the online world, attention is currency. If your brand does not catch eyes, it disappears. EHM Technology Services helps you get noticed, get clicks, and get results. We reach the right people with the right message. No guesswork. Just smart marketing that builds momentum."
      primaryCta={{ label: "Start a marketing campaign", href: "/contact" }}
      sideHeading="Marketing services"
      sideItems={[
        "Social media strategy & content",
        "Email marketing campaigns",
        "Content marketing & blogs",
        "Paid advertising (Google, Meta)",
        "Marketing automation setup",
      ]}
      stats={[
        {
          label: "Campaign setup",
          value: "1-2 weeks",
          detail: "From strategy to first posts",
        },
        {
          label: "Reporting frequency",
          value: "Weekly/Monthly",
          detail: "Performance dashboards and insights",
        },
        {
          label: "Content volume",
          value: "Custom",
          detail: "Tailored to your goals and budget",
        },
      ]}
      tools={[
        "Social media platforms",
        "Ad managers",
        "Content creation tools",
        "Analytics dashboards",
        "SEO platforms",
      ]}
      approach={[
        {
          title: "Step One",
          detail: "We learn your goals and audience.",
        },
        {
          title: "Step Two",
          detail: "We build a custom marketing plan.",
        },
        {
          title: "Step Three",
          detail: "We create content and launch strategies.",
        },
        {
          title: "Step Four",
          detail: "You get clear updates and results.",
        },
        {
          title: "Step Five",
          detail: "We adjust and improve as you grow.",
        },
      ]}
      faqs={[
        {
          question: "Do you manage social media accounts?",
          answer:
            "Yes. We handle content creation, posting, and engagement across all major platforms.",
        },
        {
          question: "Can you work with our existing marketing tools?",
          answer:
            "Absolutely. We integrate with your current CRM and tools, or recommend new ones if needed.",
        },
        {
          question: "How do you measure marketing success?",
          answer:
            "We track engagement, clicks, conversions, and ROI. You get monthly reports with clear insights.",
        },
      ]}
      ctaNote="Your business deserves marketing that gets results. Let us help you reach more people and grow your brand with confidence."
      signals={[
        "Social media presence is inconsistent.",
        "Email campaigns aren't generating engagement.",
        "Marketing efforts aren't tracking toward goals.",
        "You need professional content but lack resources.",
      ]}
      packages={[
        {
          title: "Marketing audit",
          note: "1 week",
          items: ["Current state review", "Competitor analysis", "Strategy recommendations"],
        },
        {
          title: "Full campaign",
          note: "3-6 months",
          items: ["Multi-channel strategy", "Content creation", "Performance tracking"],
        },
        {
          title: "Ongoing support",
          note: "Retainer",
          items: ["Monthly content", "Campaign management", "Performance optimization"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Marketing Services"
          caption="Data-driven strategies to grow your brand."
          badge="Digital"
          accent="peach"
          imageSrc="/images/marketing-hero.png"
          imageAlt="Digital marketing dashboard and analytics"
        />
      }
    >
      <div className="space-y-12">
        {/* Why Marketing Services Matter */}
        <div className="section-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            BENEFITS
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Why Marketing Services Matter
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            You can have the best product, but if no one hears about it, it stays hidden. Marketing brings your brand to the spotlight.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#046BC6]">
              Strong marketing helps you:
            </h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Grow your audience",
                "Increase leads and sales",
                "Build trust and recognition",
                "Stay ahead of competitors",
                "Create loyal customers",
                "Boost your online presence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600">
                  <span className="text-sunsetPeach mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 font-medium text-slate-900">
            When your marketing is strong, your business grows stronger.
          </p>
        </div>

        {/* Why EHM Technology Services Is The Team You Want */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              OUR APPROACH
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Why EHM Technology Services Is The Team You Want
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We mix creativity, strategy, and simple communication. You tell us your goals. We build the path to reach them.
            </p>
            <p className="mt-4 text-slate-600">
              We make marketing feel easy.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder className="mt-12"
              label="Marketing Strategy"
              caption="Creative campaigns that drive results."
              badge="Our Approach"
              aspect="wide"
              accent="peach"
              imageSrc="/images/ai-hand-interface.jpg"
              imageAlt="Digital marketing interface interaction"
            />
            <div className="section-card p-6 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                You get:
              </h3>
              <ul className="space-y-3">
                {[
                  "Friendly support",
                  "Clear strategies",
                  "Fast delivery",
                  "Modern methods",
                  "Consistent communication",
                  "A team focused on real results",
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

        {/* What We Cover In Our Marketing Services */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            OUR SERVICES
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 mb-6">
            What We Cover In Our Marketing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Social Media Marketing",
                desc: "Content that grabs attention and grows your audience across all platforms.",
              },
              {
                title: "Content Creation",
                desc: "Posts, captions, graphics, and ads that people actually want to read.",
              },
              {
                title: "Paid Advertising",
                desc: "Facebook, Google, and Instagram ads that bring you leads and sales.",
              },
              {
                title: "SEO and Website Visibility",
                desc: "We help people find your business on search engines naturally.",
              },
              {
                title: "Email Marketing",
                desc: "Newsletters and automated sequences that get opened and get results.",
              },
              {
                title: "Branding and Messaging",
                desc: "We develop your tone and visual identity for consistency everywhere.",
              },
              {
                title: "Campaign Planning",
                desc: "We plan campaigns from start to finish so you always know what is happening.",
              },
              {
                title: "Influencer Marketing",
                desc: "Connect with influencers who put your business in front of the right audience.",
              },
              {
                title: "Market Analysis",
                desc: "We study competitors and trends so your strategy stays sharp.",
              },
              {
                title: "Funnel Building",
                desc: "Systems that take people from interest to action smoothly.",
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
          <p className="mt-6 text-center text-slate-600 italic">
            EHM Technology Services covers every marketing angle.
          </p>
        </div>

        {/* Who Benefits & Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Who Benefits From Our Marketing Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Small businesses",
                "Startups",
                "Service providers",
                "Online stores",
                "Creators and influencers",
                "Real estate professionals",
                "Restaurants and local shops",
                "Contractors",
                "Anyone who wants more leads",
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
              If you want customers, we help you get them.
            </p>
          </div>

          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Projects And Campaigns We Work On
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                "Social media campaigns",
                "Brand awareness",
                "Product launches",
                "E-commerce promotions",
                "Lead generation",
                "Monthly content plans",
                "Paid ad campaigns",
                "Local marketing",
              ].map((item) => (
                <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="text-sunsetPeach">▪</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Every platform. Every industry. Every goal.
            </p>
          </div>
        </div>

        {/* Why Clients Choose EHM */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
          <h2 className="text-2xl font-semibold">
            Why Clients Choose EHM Technology Services
          </h2>
          <p className="mt-2 text-slate-300">
            Clients love working with us because we make marketing feel simple, fun, and effective.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Consistent results",
              "Clear communication",
              "Fast turnaround",
              "Affordable packages",
              "Creative ideas",
              "Real strategies",
              "A team that cares",
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
            We do not just market your business. We help it grow.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}


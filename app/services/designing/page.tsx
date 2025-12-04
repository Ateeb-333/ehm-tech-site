import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Designing | EHM Tech Services",
  description:
    "Creative design solutions for digital experiences, UI/UX design, and brand identity.",
};

export default function DesigningPage() {
  return (
    <ServiceLayout
      title="Designing"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="First impressions matter. A messy design scares people away; a clean one pulls them in. EHM Technology Services helps you look sharp and professional across every platform. Whether you need UI/UX, social media graphics, or brand visuals, we create designs that feel modern and easy to love. We make visuals that speak for you."
      primaryCta={{ label: "Start a design project", href: "/contact" }}
      sideHeading="Design services"
      sideItems={[
        "UI/UX design for web & mobile",
        "Brand identity & visual systems",
        "Design systems & component libraries",
        "Wireframing & prototyping",
        "User research & testing",
      ]}
      stats={[
        {
          label: "Design delivery",
          value: "2-4 weeks",
          detail: "Depending on scope and revisions",
        },
        {
          label: "Design tools",
          value: "Figma, Adobe XD",
          detail: "Industry-standard design software",
        },
        {
          label: "Collaboration",
          value: "Real-time",
          detail: "Shared design files and feedback loops",
        },
      ]}
      tools={[
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Canva Pro",
        "UI and UX prototyping tools",
      ]}
      approach={[
        {
          title: "Step One",
          detail: "Share your ideas, goals, and style preferences.",
        },
        {
          title: "Step Two",
          detail:
            "We sketch concepts and send early drafts for your feedback.",
        },
        {
          title: "Step Three",
          detail:
            "Our team designs the complete UI, UX, or graphics.",
        },
        {
          title: "Step Four",
          detail: "You receive polished designs with organized files.",
        },
        {
          title: "Step Five",
          detail: "We tweak until it feels perfect.",
        },
      ]}
      faqs={[
        {
          question: "Do you provide design assets for development?",
          answer:
            "Yes. We deliver Figma files with specs, assets, and documentation for seamless developer handoff.",
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer:
            "Absolutely. We adapt to your existing system or create new guidelines aligned with your brand.",
        },
        {
          question: "How do you ensure designs are accessible?",
          answer:
            "We follow WCAG guidelines, check contrast, and consider navigation to ensure inclusive design.",
        },
      ]}
      ctaNote="Your brand deserves visuals that stand out. Get designs that feel clean, modern, and built for results. Let us bring your ideas to life."
      signals={[
        "Current design doesn't reflect your brand.",
        "User feedback indicates confusion.",
        "Designs are scattered without a system.",
        "You need a partner to scale visual work.",
      ]}
      packages={[
        {
          title: "Design audit",
          note: "1-2 weeks",
          items: ["Current state analysis", "Usability review", "Recommendations"],
        },
        {
          title: "Full design system",
          note: "4-6 weeks",
          items: [
            "Complete UI/UX redesign",
            "Design system documentation",
            "Component library",
          ],
        },
        {
          title: "Design support",
          note: "Retainer",
          items: ["Ongoing design updates", "New feature designs", "Design QA"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Designing Services"
          caption="Creative design solutions for digital experiences."
          badge="Digital"
          accent="peach"
          imageSrc="/images/designing-hero.png"
          imageAlt="Creative design workspace with UI/UX interface"
        />
      }
    >
      <div className="space-y-12">
        {/* Why Good Design Matters */}
        <div className="section-card p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            BENEFITS
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Why Good Design Matters
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Design is the first thing people notice. It makes them stay, trust, or buy. Good design invites; bad design repels.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Strong design helps you:
            </h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Look professional and credible",
                "Capture attention everywhere",
                "Improve user experience",
                "Increase engagement and conversions",
                "Keep viewers scrolling",
                "Strengthen your identity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600">
                  <span className="text-sunsetPeach mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 font-medium text-slate-900">
            Great design sells, communicates, and creates trust.
          </p>
        </div>

        {/* Why EHM Technology Services Is The Right Choice */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Why EHM Technology Services Is The Right Choice
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We mix creativity and strategy to deliver clean, modern designs. You explain your vision; we turn it into visuals that match what you imagined.
            </p>
            <p className="mt-4 text-slate-600">
              We keep the process simple so you stay excited about your brand.
            </p>
          </div>
          <div className="space-y-4">
            <MediaPlaceholder className="mt-12"
              label="Design Excellence"
              caption="Beautiful, functional designs that elevate your brand."
              badge="Our Designs"
              aspect="wide"
              accent="violet"
              imageSrc="/images/ai-futuristic-ui.jpg"
              imageAlt="Futuristic UI design interface"
            />
            <div className="section-card p-6 bg-slate-50/50">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                You get:
              </h3>
              <ul className="space-y-3">
                {[
                  "Clean, modern designs",
                  "Friendly communication",
                  "Fast turnaround",
                  "Unlimited styles",
                  "Easy revisions",
                  "User-focused approach",
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

        {/* What We Cover In Our Designing Services */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-8">
            What We Cover In Our Designing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "UI Design",
                desc: "Clean, intuitive interfaces for apps and websites. Buttons that make sense. Layouts that feel natural.",
              },
              {
                title: "UX Design",
                desc: "User journeys, flows, and wireframes that make using your platform a joy.",
              },
              {
                title: "Figma Design",
                desc: "Modern layouts, prototypes, and design systems. Organized and ready to share.",
              },
              {
                title: "Website Layout Design",
                desc: "Home pages, landing pages, and service pages designed to keep visitors clicking.",
              },
              {
                title: "Social Media Design",
                desc: "Eye-catching posts and banners that stand out in crowded feeds.",
              },
              {
                title: "Branding and Visual Identity",
                desc: "Logos, fonts, and colors that give your brand a memorable personality.",
              },
              {
                title: "Marketing Materials",
                desc: "Flyers, brochures, and decks that make a strong impression.",
              },
              {
                title: "App and Dashboard Design",
                desc: "Mobile and web apps, dashboards, and panels. Modern and easy to navigate.",
              },
              {
                title: "Product Mockups",
                desc: "Professional mockups to showcase your digital products.",
              },
              {
                title: "Icon and Illustration Design",
                desc: "Custom icons and illustrations that match your style perfectly.",
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
            label="Design Portfolio"
            caption="From UI/UX to branding - see how we bring ideas to life."
            badge="Our Work"
            aspect="wide"
            accent="violet"
            imageSrc="/images/hero-workflow.png"
            imageAlt="Design portfolio showcase"
          />
          <p className="mt-6 text-center text-slate-600 italic">
            We design everything needed to build a strong digital presence.
          </p>
        </div>

        {/* Who Benefits & Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Who Benefits From Our Designing Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Startups",
                "Business owners",
                "Software companies",
                "Developers",
                "Marketing agencies",
                "Influencers",
                "E commerce brands",
                "App creators",
                "Content creators",
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
              If you want a clean and modern look, we are your design partner.
            </p>
          </div>

          <div className="section-card p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Projects We Work On
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                "Websites and landing pages",
                "Mobile apps",
                "Dashboards",
                "Branding packages",
                "Advertisements",
                "Social media content",
                "Figma prototypes",
                "Presentation decks",
                "Marketing visuals",
                "Digital products",
              ].map((item) => (
                <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className="text-sunsetPeach">▪</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              Every design style. Every platform. Every industry.
            </p>
          </div>
        </div>

        {/* Why Clients Choose EHM */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
          <h2 className="text-2xl font-semibold">
            Why Clients Choose EHM Technology Services
          </h2>
          <p className="mt-2 text-slate-300">
            Clients stay with us because our designs make their brand stronger and customers happier.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Modern and creative designs",
              "Simple communication",
              "Fast and friendly service",
              "Affordable packages",
              "A team that listens",
              "Visuals that convert",
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
            We make design feel easy and enjoyable.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}


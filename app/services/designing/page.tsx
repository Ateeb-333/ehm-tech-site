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
      intro="In the digital world, first impressions hit fast. A messy design scares people away. A clean design pulls them in. At EHM Technology Services, our Designing Services help you look sharp, modern, and professional across every platform you use. Whether you need UI and UX design, social media graphics, brand visuals, or full Figma layouts, we turn your ideas into designs that feel smooth, modern, and easy for people to love. We create visuals that speak for you before you even say a word."
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
          detail: "You share your ideas, goals, references, and preferred styles.",
        },
        {
          title: "Step Two",
          detail:
            "We sketch the concept and send early drafts so you can guide the direction.",
        },
        {
          title: "Step Three",
          detail:
            "Our team designs your complete UI, UX, or visual graphics in a clean format.",
        },
        {
          title: "Step Four",
          detail: "You receive polished and ready to use designs with organized files.",
        },
        {
          title: "Step Five",
          detail: "Need tweaks? We update fast until it feels perfect.",
        },
      ]}
      faqs={[
        {
          question: "Do you provide design assets for development?",
          answer:
            "Yes. We deliver design files in Figma with detailed specs, export assets, and provide component documentation for seamless handoff to developers.",
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer:
            "Absolutely. We adapt and extend your existing brand system, or create new guidelines that align with your brand values and objectives.",
        },
        {
          question: "How do you ensure designs are accessible?",
          answer:
            "We follow WCAG guidelines, check color contrast ratios, consider keyboard navigation, and test with screen readers to ensure inclusive design.",
        },
      ]}
      ctaNote="Your brand deserves visuals that stand out and leave a lasting impression. With EHM Technology Services, you get designs that feel clean, modern, and built for real results. Let us bring your ideas to life with creativity and strategy."
      signals={[
        "Current design doesn't reflect your brand or industry standards.",
        "User feedback indicates confusion or friction in the experience.",
        "Designs exist in scattered files without a cohesive system.",
        "You need a design partner to scale visual work efficiently.",
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
            Your design is usually the first thing people notice. Sometimes it is
            also the thing that makes them stay, click, buy, or trust your brand.
            A good design feels inviting. A bad design feels like a broken
            shopping cart.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Strong design helps you:
            </h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "Look professional and credible",
                "Capture attention on every platform",
                "Improve user experience",
                "Increase engagement and conversions",
                "Keep viewers scrolling instead of leaving",
                "Strengthen your visual identity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600">
                  <span className="text-sunsetPeach mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 font-medium text-slate-900">
            Great design does not just look pretty. It sells. It communicates. It
            creates trust.
          </p>
        </div>

        {/* Why EHM Technology Services Is The Right Choice */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Why EHM Technology Services Is The Right Choice
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We mix creativity, strategy, and tech experience to deliver designs
              that feel clean, modern, and user friendly. You explain your vision.
              We turn it into visuals that actually match what you imagined.
            </p>
            <p className="mt-4 text-slate-600">
              We keep the process simple so you stay relaxed and excited about
              your brand.
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
                  "Clean designs that feel fresh and modern",
                  "Friendly communication",
                  "Fast turnaround",
                  "Unlimited project styles",
                  "Easy revisions",
                  "A team that understands how people think online",
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
                desc: "We design clean and intuitive user interfaces for apps, websites, dashboards, and software. Buttons that make sense. Layouts that feel natural. Screens that look beautiful.",
              },
              {
                title: "UX Design",
                desc: "We map out user journeys, flows, wireframes, and interactions so people enjoy using your platform instead of getting lost.",
              },
              {
                title: "Figma Design",
                desc: "We use Figma to create modern layouts, full prototypes, and design systems. Everything stays organized, editable, and easy to share.",
              },
              {
                title: "Website Layout Design",
                desc: "Home pages. Landing pages. Service pages. Blog layouts. We design screens that keep visitors reading and clicking.",
              },
              {
                title: "Social Media Design",
                desc: "We create eye catching posts, banners, ads, covers, and story templates that help your brand stand out in crowded feeds.",
              },
              {
                title: "Branding and Visual Identity",
                desc: "Logos. Fonts. Colors. Brand style guides. We give your brand a look and personality people remember.",
              },
              {
                title: "Marketing Materials",
                desc: "Flyers. Brochures. Business cards. Pitch decks. Presentations. We design marketing tools that help you make a strong impression.",
              },
              {
                title: "App and Dashboard Design",
                desc: "Mobile apps. Web apps. SaaS dashboards. Admin panels. User systems. Everything modern and easy to navigate.",
              },
              {
                title: "Product Mockups",
                desc: "Professional mockups that help you show off your apps, websites, and digital products.",
              },
              {
                title: "Icon and Illustration Design",
                desc: "Custom icons. Simple illustrations. Visual elements that match your style perfectly.",
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
            imageSrc="/images/hero-workflow.svg"
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
            Clients stay with us because our designs make their brand stronger and
            their customers happier.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Modern and creative designs",
              "Simple communication",
              "Fast and friendly service",
              "Affordable packages",
              "A team that actually listens",
              "Visuals that convert and engage",
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


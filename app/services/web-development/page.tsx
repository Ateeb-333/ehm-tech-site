import type { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export const metadata: Metadata = {
  title: "Development Services | EHM Tech Services",
  description:
    "Build websites, apps, and digital platforms that work smoothly, look modern, and feel amazing to use. Clean code, smart structure, fast performance.",
};

export default function WebDevelopmentPage() {
  return (
    <ServiceLayout
      title="Development Services"
      groupLabel="AI & DIGITAL SOLUTIONS"
      accent="digital"
      intro="Your digital presence is your storefront. If it's slow or outdated, people leave. EHM Technology Services builds websites and apps that work smoothly and look modern. Clean code. Smart structure. Fast performance. Everything your business needs to grow online."
      primaryCta={{ label: "Start a development project", href: "/contact" }}
      sideHeading="What we cover"
      sideItems={[
        "Website development",
        "Web app development",
        "Mobile app development",
        "Full stack development",
        "WordPress development",
        "Shopify and eCommerce development",
        "Custom software development",
        "API integration",
        "Maintenance and support",
      ]}
      stats={[
        {
          label: "Project coverage",
          value: "All types",
          detail: "Websites, apps, platforms, and custom software",
        },
        {
          label: "Turnaround time",
          value: "Fast",
          detail: "Fast communication and smooth collaboration",
        },
        {
          label: "Support",
          value: "Complete",
          detail: "Support from start to finish and beyond",
        },
      ]}
      tools={[
        "React",
        "Node",
        "HTML and CSS",
        "JavaScript",
        "PHP",
        "WordPress",
        "Shopify",
        "SQL and NoSQL databases",
        "Figma for design handoff",
      ]}
      approach={[
        {
          title: "Discuss goals & features",
          detail:
            "We talk about your goals and needs to understand exactly what you want to build.",
        },
        {
          title: "Create UI & UX layouts",
          detail:
            "Our design team creates layouts so you know exactly what your platform will look like.",
        },
        {
          title: "Develop with clean code",
          detail:
            "We bring your idea to life with clean, reliable code that performs well.",
        },
        {
          title: "Test, adjust & launch",
          detail:
            "You test, we adjust. Then we launch your project smoothly and stay for support.",
        },
      ]}
      faqs={[
        {
          question: "What types of development services do you provide?",
          answer:
            "We build everything: business websites, web apps, mobile apps, full stack systems, WordPress sites, Shopify stores, custom software, and API integrations. We also handle maintenance.",
        },
        {
          question: "What tools and technologies do you use?",
          answer:
            "We use modern stacks like React, Node, PHP, WordPress, Shopify, and SQL/NoSQL databases. These tools help us create fast, scalable products.",
        },
        {
          question: "Who can benefit from your development services?",
          answer:
            "Startups, business owners, eCommerce brands, agencies, and enterprises. If you need a digital platform, we can build it.",
        },
      ]}
      ctaNote="Your digital platform deserves expert development. Get clean code, modern designs, and a team that truly cares. Bring your idea to life."
      signals={[
        "Your digital presence is your storefront.",
        "A good platform keeps your business moving forward.",
        "If it is slow or buggy, people leave.",
        "Your platform deserves expert development.",
      ]}
      packages={[
        {
          title: "Website development",
          note: "Fast & modern",
          items: ["Business websites", "Landing pages", "Responsive design"],
        },
        {
          title: "Full development package",
          note: "Complete",
          items: ["Web apps", "Mobile apps", "Custom software"],
        },
        {
          title: "Ongoing support",
          note: "Maintenance",
          items: ["Bug fixes", "Updates", "Performance improvements"],
        },
      ]}
      heroMedia={
        <MediaPlaceholder
          label="Development Services"
          caption="Modern, scalable digital solutions built for growth."
          badge="Digital"
          accent="cyan"
          imageSrc="/images/web-development-hero.png"
          imageAlt="Web development workspace with code and digital interfaces"
        />
      }
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Development Services Matter
        </h2>
        <p className="mt-4 text-slate-600">
          A good platform keeps your business moving forward. Strong development is the engine behind great user experience and growth.
        </p>
        <p className="mt-4 text-slate-600">
          Proper development helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Build a trustworthy online presence</li>
          <li>Improve user satisfaction</li>
          <li>Reduce bugs and technical headaches</li>
          <li>Boost speed and performance</li>
          <li>Increase sales and conversions</li>
          <li>Stay ahead of competitors</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Good code works quietly, efficiently, and without drama.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Development Partner
        </h2>
        <p className="mt-4 text-slate-600">
          We keep everything simple, clear, and friendly. You tell us what you want. We build it. You relax while we do the heavy lifting.
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Clean & Modern
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clean, modern development. Fast communication. Scalable solutions that grow with your business.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Easy Collaboration
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Smooth updates. Plain English explanations. We make development feel like a calm walk, not a stressful sprint.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Development Services
        </h2>
        <p className="mt-4 text-slate-600">
          We build digital solutions for all industries and platforms.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Website Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Business websites, service pages, landing pages, and eCommerce stores. Fast, clean, and responsive.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Web App Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Custom dashboards, portals, booking systems, and SaaS platforms made for your needs.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Mobile App Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              iOS and Android apps with smooth performance and beautiful interfaces.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Full Stack Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Front end, back end, databases, and APIs working together seamlessly.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              WordPress Development
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Themes, plugins, and secure setups. Websites you can update easily.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Shopify and eCommerce
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Online stores built to sell. Clean product pages, smart cart flows, and great UX.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Custom Software
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Tools and systems that streamline workflow and automate tasks.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              API Integration
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect payment gateways, CRMs, and tools so your systems communicate effortlessly.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Maintenance and Support
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Bug fixes, updates, and security checks to keep your products running smoothly.
            </p>
          </div>
        </div>
        <MediaPlaceholder className="mt-12"
          label="Development Portfolio"
          caption="See how we build modern, scalable digital solutions for businesses."
          badge="Projects"
          aspect="wide"
          accent="violet"
          imageSrc="/images/coding-keyboard.jpg"
          imageAlt="Coding keyboard and development environment"
        />
        <p className="mt-6 text-slate-600">
          EHM Technology Services handles end to end development for all project types.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Who Benefits From Our Development Services
        </h2>
        <p className="mt-4 text-slate-600">
          We support everyone who needs a digital platform. If you want something developed, we can build it.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Startups",
              desc: "Build your digital presence from the ground up with scalable solutions.",
            },
            {
              title: "Business Owners",
              desc: "Turn your ideas into functional digital products that drive growth.",
            },
            {
              title: "E Commerce Brands",
              desc: "Online stores that are fast, modern, and built to sell.",
            },
            {
              title: "Marketing Agencies",
              desc: "Professional websites and platforms for your clients.",
            },
            {
              title: "Software Companies",
              desc: "Custom software and platforms tailored to your needs.",
            },
            {
              title: "Influencers",
              desc: "Personal websites and platforms that showcase your brand.",
            },
            {
              title: "Service Providers",
              desc: "Digital platforms that help you serve customers better.",
            },
            {
              title: "Enterprise Businesses",
              desc: "Scalable solutions that grow with your business.",
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
          Projects We Work On
        </h2>
        <p className="mt-4 text-slate-600">
          We develop:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Websites",
            "Mobile apps",
            "Web apps",
            "Dashboards",
            "Online stores",
            "Custom software",
            "Digital platforms",
            "Admin systems",
            "Automation tools",
          ].map((project) => (
            <div key={project} className="section-card p-5">
              <p className="text-slate-900 font-medium">{project}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-600">
          Whatever you imagine, we develop with precision and creativity.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Clients Choose EHM Technology Services
        </h2>
        <p className="mt-4 text-slate-600">
          Clients trust us because we mix friendly communication with strong technical skills.
        </p>
        <p className="mt-4 text-slate-600">
          You get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Fast & Reliable
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fast and reliable development. Modern, scalable solutions. Clear updates.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Fair Pricing & Dedication
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Fair pricing. A team dedicated to your success. We make development simple and effective.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

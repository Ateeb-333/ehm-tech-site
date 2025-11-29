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
      intro="In today's world, your digital presence is your storefront, your office, and sometimes even your whole business. If it is slow, buggy, or outdated, people leave faster than a cat hearing a vacuum. At EHM Technology Services, our Development Services help you build websites, apps, and digital platforms that work smoothly, look modern, and feel amazing to use. We turn your ideas into functional, user friendly digital products built for real results. Clean code. Smart structure. Fast performance. Everything your business needs to grow online."
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
            "We talk about your goals, features, and project needs to understand exactly what you want to build.",
        },
        {
          title: "Create UI & UX layouts",
          detail:
            "Our design team creates UI and UX layouts so you know exactly what your platform will look like.",
        },
        {
          title: "Develop with clean code",
          detail:
            "We start development and bring your idea to life with clean and reliable code that performs well.",
        },
        {
          title: "Test, adjust & launch",
          detail:
            "You test the product and tell us what you want adjusted. We launch your project smoothly and stay with you for support.",
        },
      ]}
      faqs={[
        {
          question: "What types of development services do you provide?",
          answer:
            "We build digital solutions for all industries and all types of platforms including website development (business websites, service pages, landing pages, eCommerce stores), web app development (custom dashboards, customer portals, booking systems, SaaS platforms), mobile app development (iOS and Android apps), full stack development (front end, back end, databases, APIs), WordPress development (themes, plugins, custom pages, secure setups), Shopify and eCommerce development (online stores, product pages, cart flows), custom software development (tools and systems that streamline workflow, automate tasks), API integration (payment gateways, CRMs, third party tools), and maintenance and support (bug fixes, updates, performance improvements, security checks). EHM Technology Services handles end to end development for all project types.",
        },
        {
          question: "What tools and technologies do you use?",
          answer:
            "We use modern tech stacks and tools such as React, Node, HTML and CSS, JavaScript, PHP, WordPress, Shopify, SQL and NoSQL databases, and Figma for design handoff. These tools help us create fast, reliable, and scalable digital products.",
        },
        {
          question: "Who can benefit from your development services?",
          answer:
            "We support startups, business owners, e commerce brands, marketing agencies, software companies, influencers, service providers, enterprise businesses, and anyone who needs a digital platform. If you want something developed, we can build it.",
        },
      ]}
      ctaNote="Your digital platform deserves expert development that works flawlessly. With EHM Technology Services, you get clean code, modern designs, and a team that truly cares. Bring your idea to life with development that helps your business grow stronger."
      signals={[
        "In today's world, your digital presence is your storefront, your office, and sometimes even your whole business.",
        "A good platform keeps your business moving forward. A bad one feels like driving a car with square wheels.",
        "If it is slow, buggy, or outdated, people leave faster than a cat hearing a vacuum.",
        "Your digital platform deserves expert development that works flawlessly.",
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
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why Development Services Matter
        </h2>
        <p className="mt-4 text-slate-600">
          A good platform keeps your business moving forward. A bad one feels like driving a car with square wheels. Strong development is the engine behind great user experience and long term growth.
        </p>
        <p className="mt-4 text-slate-600">
          Proper development helps you:
        </p>
        <ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
          <li>Build a trustworthy online presence</li>
          <li>Improve user satisfaction</li>
          <li>Reduce bugs and technical headaches</li>
          <li>Boost speed and performance</li>
          <li>Increase sales, engagement, and conversions</li>
          <li>Stay ahead of competitors</li>
        </ul>
        <p className="mt-4 text-slate-600">
          Good code does not just work. It works quietly, efficiently, and without causing drama.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Why EHM Technology Services Is Your Best Development Partner
        </h2>
        <p className="mt-4 text-slate-600">
          We know tech can feel complicated, so we keep everything simple, clear, and friendly. You tell us what you want. We build it. You relax while we do the heavy lifting.
        </p>
        <p className="mt-4 text-slate-600">
          With us, you get:
        </p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Clean & Modern
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Clean and modern development. Fast communication. Support for all project sizes. Scalable solutions that grow with your business.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Easy Collaboration & Clear Communication
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Easy collaboration and smooth updates. A team that explains everything in plain English. We make development feel like a calm walk instead of a stressful sprint.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          What We Cover In Our Development Services
        </h2>
        <p className="mt-4 text-slate-600">
          We build digital solutions for all industries and all types of platforms.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Website Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Business websites. Service pages. Landing pages. eCommerce stores. Fast, clean, and responsive websites that help you convert visitors into customers.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Web App Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Custom dashboards. Customer portals. Booking systems. SaaS platforms. Tools made exactly for your business needs.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Mobile App Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              iOS and Android apps designed with smooth performance and beautiful interfaces.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Full Stack Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Front end. Back end. Databases. APIs. We create systems that work together without breaking or slowing down.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              WordPress Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Themes. Plugins. Custom pages. Secure setups. Websites you can update easily without any tech stress.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Shopify and eCommerce Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Online stores that are fast, modern, and built to sell. Clean product pages. Smart cart flows. Great user experience.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Custom Software Development
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              We build tools and systems that streamline your workflow, automate tasks, and make your business run smoother.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              API Integration
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Payment gateways. CRMs. Third party tools. We connect everything so your systems communicate effortlessly.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Maintenance and Support
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Bug fixes. Updates. Performance improvements. Security checks. We keep your digital products running smoothly.
            </p>
          </div>
        </div>
        <MediaPlaceholder
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
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
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
              <p className="text-white font-medium">{project}</p>
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
            <p className="mt-2 text-sm text-gray-300">
              Fast and reliable development. Modern and scalable solutions. Clear updates. Smooth collaboration.
            </p>
          </div>
          <div className="section-card p-5">
            <h3 className="text-lg font-semibold text-sunsetPeach">
              Fair Pricing & Dedicated Team
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Fair pricing. A team dedicated to your success. We make development simple, enjoyable, and effective.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}

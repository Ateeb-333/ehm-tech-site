"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.35 },
  }),
};

const marqueeItems = [
  "Engineering Design",
  "Cost Estimation",
  "IT Solutions",
  "AI Automation",
  "Project Management",
  "Digital Marketing",
];

const capabilityGroups = [
  {
    label: "Engineering Highlights",
    pillars: [
      "Civil & structural layouts and design packages",
      "MEP planning, drawings, and load calculations",
      "Architectural plans, 2D/3D drafting, and design documentation",
    ],
  },
  {
    label: "Estimation Highlights",
    pillars: [
      "Quantity takeoff reports for all construction trades",
      "Detailed cost estimation and bid preparation",
      "Blueprint reading, drafting corrections, and project coordination",
    ],
  },
  {
    label: "IT & AI Highlights",
    pillars: [
      "Web and application development",
      "AI-based tools, automation workflows, and chatbots",
      "UI/UX design, branding, and digital marketing assets",
    ],
  },
];

const testimonials = [
  {
    quote: "Reliable and accurate work every time.",
    author: "Client",
    role: "Construction Partner",
  },
  {
    quote: "Great communication and fast delivery.",
    author: "Client",
    role: "Business Owner",
  },
  {
    quote: "Their engineering and estimation support helped us win more bids.",
    author: "Client",
    role: "General Contractor",
  },
];

export default function HomePage() {
  return (
    <main className="main-shell">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-center"
      >
        <div>
          <span className="chip mb-4">
            <span className="mr-2 text-xs">●</span> Engineering • Estimation • IT
            Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Professional Engineering, Cost Estimation & IT Services
            <span className="block bg-gradient-to-r from-softSkyCyan via-sunsetPeach to-slateBlue bg-clip-text text-transparent">
              You Can Rely On.
            </span>
          </h1>
          <p className="mt-4 text-meta max-w-xl text-sm md:text-base">
            At EHM Technology Services, we provide fully integrated support across
            engineering, construction estimation, and modern IT solutions —
            helping our clients plan smarter, build better, and work more
            efficiently.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90"
            >
              Request a Quote
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-softSkyCyan/80"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="space-y-4">
          <MediaPlaceholder
            label="Integrated Solutions"
            caption="Engineering, Estimation, and IT workflows in one place."
            badge="EHM Tech"
            aspect="wide"
            accent="violet"
            imageSrc="/images/hero-workflow.svg"
            imageAlt="EHM workflow canvas mock"
          />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              About Us
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              About EHM Technology Services
            </h2>
            <p className="mt-4 text-meta leading-relaxed">
              EHM Technology Services is a multi-disciplinary company offering
              complete solutions that support the growth and operations of
              contractors, engineering firms, businesses, startups, and
              developers.
            </p>
            <p className="mt-4 text-meta leading-relaxed">
              Our team brings together expertise in engineering design, cost
              estimation, drafting, project support, IT development, and AI-based
              automation to provide reliable results for projects of any scale.
            </p>
          </div>
          <div className="space-y-6">
            <MediaPlaceholder
              label="Our Focus"
              caption="Accuracy, Modern Tools, and Smooth Workflows."
              badge="Core Values"
              aspect="wide"
              accent="cyan"
              imageSrc="/images/ops-canvas.svg"
              imageAlt="EHM Focus Areas"
            />
            <div className="section-card p-6 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Our Focus
              </h3>
              <ul className="space-y-3 text-sm text-meta">
                {[
                  "Accuracy & Clarity",
                  "Modern Tools",
                  "Smooth Workflows",
                  "Concept to Delivery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-sunsetPeach">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Areas of Expertise */}
      <motion.section
        className="mt-16 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            title: "Engineering Services",
            body: "Well-structured design and technical solutions across civil, structural, MEP, architectural, and industrial engineering.",
            accent: "Stronger, Smarter Project Development",
          },
          {
            title: "Construction Estimation",
            body: "Accurate quantity takeoffs, detailed bid estimates, drafting assistance, and project cost analysis.",
            accent: "Clarity for Your Projects",
          },
          {
            title: "IT & AI Solutions",
            body: "Custom development, AI automation, digital design, branding, and marketing support.",
            accent: "Designed for Modern Business Growth",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            variants={sectionVariant}
            custom={i}
            className="section-card p-5"
          >
            <p className="text-xs font-semibold text-softSkyCyan">0{i + 1}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {card.title}
            </h3>
            <p className="mt-2 text-meta">{card.body}</p>
            <p className="mt-3 text-xs text-slate-500 font-normal">
              {card.accent}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Why Choose EHM */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={sectionVariant} custom={0} className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Choose EHM Technology Services
          </h2>
          <p className="mt-2 text-meta max-w-2xl">
            Choosing EHM means working with a team that values accuracy, quality,
            and clear communication. We focus on practical needs and deliver
            results that support long-term success.
          </p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { text: "Multi-disciplinary expertise across engineering, construction, and technology", icon: "✦" },
            { text: "Accurate and detailed work with modern tools and best practices", icon: "⚡" },
            { text: "Smooth coordination and transparent communication", icon: "🤝" },
            { text: "Flexible support for small, medium, and large projects", icon: "🏗️" },
            { text: "On-time delivery and organized workflows", icon: "⏱️" },
            { text: "Commitment to reliable, high-quality outcomes", icon: "✅" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariant}
              custom={idx}
              className="section-card p-5 flex items-start gap-3 hover:border-softSkyCyan/50 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <p className="text-sm text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Capabilities */}
      <motion.section
        className="mt-16 grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {capabilityGroups.map((group, idx) => (
          <motion.div
            key={group.label}
            variants={sectionVariant}
            custom={idx}
            className="section-card p-5 flex flex-col gap-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Capabilities
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              {group.label}
            </h3>
            <ul className="space-y-2 text-sm text-meta">
              {group.pillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-2">
                  <span className="text-softSkyCyan mt-1">▹</span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      {/* Project Highlights */}
      <motion.section
        className="mt-16 rounded-2xl bg-slate-900 p-8 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <h2 className="text-2xl font-semibold">
          Project Highlights — Work Delivered Across Industries
        </h2>
        <p className="mt-2 text-slate-300">
          This section showcases the variety and quality of our completed tasks.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Engineering drawing packages for residential, commercial, and industrial projects",
            "Detailed takeoff sheets and cost estimates for contractors and builders",
            "Web platforms, automation systems, and digital solutions for businesses",
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/10 p-5 backdrop-blur-sm"
            >
              <p className="text-sm text-slate-200">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">
          Each example helps visitors understand the practical value of our work.
        </p>
      </motion.section>

      {/* Client Feedback */}
      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={sectionVariant}
          custom={0}
          className="mb-6 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            Testimonials
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            What Our Clients Appreciate Most
          </h2>
          <p className="mt-2 text-meta">
            Our clients trust us for our consistent accuracy, responsible
            communication, and dedicated project support.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariant}
              custom={idx + 1}
              className="section-card p-5 flex flex-col gap-4"
            >
              <p className="text-meta italic">"{item.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.author}
                </p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="mt-16 section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Ready to Begin Your Next Project?
          </h2>
          <p className="mt-2 text-meta max-w-xl">
            Whether you need engineering support, cost estimation, drafting work,
            or modern IT solutions, our team is ready to assist. We’re here to
            help you plan, execute, and deliver with confidence.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/contact"
            className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90"
          >
            Contact Us
          </a>
          <a
            href="/contact"
            className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-softSkyCyan/80"
          >
            Request a Quote
          </a>
        </div>
      </motion.section>

      {/* Contact Info */}
      <motion.section
        className="mt-16 mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <h2 className="text-xl font-semibold text-slate-900">
          Contact EHM Technology Services
        </h2>
        <p className="mt-2 text-meta">
          For inquiries, quotes, or project discussions, feel free to reach out.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-slateBlue">✉</span>
            <span>Email: (your email here)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slateBlue">📞</span>
            <span>Phone: (your phone number)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slateBlue">💬</span>
            <span>WhatsApp: (optional)</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

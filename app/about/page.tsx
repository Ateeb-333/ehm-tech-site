"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion } from "framer-motion";

const values = [
  {
    title: "Accuracy",
    detail: "We prioritize precision in every drawing, estimate, and technical output.",
  },
  {
    title: "Reliability",
    detail: "Clients trust us because we deliver consistently and communicate clearly.",
  },
  {
    title: "Innovation",
    detail: "We use modern tools and smart solutions — including AI and advanced software — to enhance our work.",
  },
  {
    title: "Quality",
    detail: "Every project, small or large, receives attention to detail and professional handling.",
  },
  {
    title: "Client Focus",
    detail: "We shape our services around the needs, challenges, and goals of each client.",
  },
];

const services = [
  {
    title: "Engineering Solutions",
    detail: "We provide engineering support across Civil, Structural, MEP, Architectural, and Industrial disciplines. Our team delivers drawings, calculations, planning support, documentation, and technical coordination to ensure strong foundations and efficient project execution.",
  },
  {
    title: "Construction Estimation & Project Support",
    detail: "Our estimation division helps contractors and developers with accurate quantity takeoffs, cost estimates, bid preparation, drafting, and project management support. We focus on the details that drive better decisions and competitive bids.",
  },
  {
    title: "IT, Development & AI Solutions",
    detail: "We offer digital and technology services, including web development, AI-based tools, workflow automation, UI/UX design, branding, and marketing support. Our solutions help businesses improve efficiency, strengthen their digital presence, and adapt to modern technology trends.",
  },
];

const reasons = [
  "Multi-discipline experts across engineering, estimation, and IT",
  "Clear and structured workflows",
  "On-time delivery with transparent communication",
  "Support for projects of any scale",
  "Modern tools, accurate outputs, and organized documentation",
  "Reliable partnership throughout the project lifecycle",
];

export default function AboutPage() {
  return (
    <main className="main-shell space-y-12">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-card p-6 md:p-8 space-y-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient-label">
          ABOUT EHM
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          About EHM Technology Services
        </h1>
        <p className="mt-4 text-meta md:text-base max-w-3xl">
          EHM Technology Services is a multi-disciplinary company providing
          complete Engineering, Construction Estimation, and IT/AI solutions to
          clients across various industries. We combine technical expertise,
          modern tools, and practical industry knowledge to deliver work that is
          accurate, reliable, and aligned with real-world project needs.
        </p>
        <p className="mt-4 text-meta md:text-base max-w-3xl">
          Our approach is simple: We understand what each project requires, plan
          the right solution, and deliver work that supports confident
          decision-making, smooth execution, and long-term success.
        </p>
        <p className="mt-4 text-meta md:text-base max-w-3xl">
          From contractors and builders to engineering firms, businesses, and
          startups — we support clients of all sizes with services that help them
          work smarter and achieve better outcomes.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 transition-colors">
            <div className="mb-4 h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-xl">
              🎯
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-meta">
              To deliver dependable engineering, estimation, and technology
              services that bring clarity, efficiency, and structure to every
              project — helping our clients move forward with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 transition-colors">
            <div className="mb-4 h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-xl">
              🔭
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-meta">
              To be a trusted partner known for accuracy, professionalism, and
              multi-disciplinary technical expertise, while continually advancing
              with modern tools, innovative systems, and evolving industry
              standards.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service) => (
          <div key={service.title} className="section-card p-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              WHAT WE DO
            </p>
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="text-meta text-sm leading-relaxed">{service.detail}</p>
          </div>
        ))}
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="section-card p-6 md:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="text-meta text-sm">{value.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose EHM */}
      <motion.section
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="section-card p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Why Clients Choose EHM
          </h2>
          <ul className="space-y-3 text-sm text-meta">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-2 items-start">
                <span className="text-softSkyCyan mt-1">★</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-card p-6 flex flex-col justify-center space-y-4 bg-slate-50">
          <h2 className="text-xl font-semibold text-slate-900">
            Our Commitment
          </h2>
          <p className="text-meta">
            At EHM Technology Services, we believe in offering practical,
            dependable, and long-lasting solutions.
          </p>
          <p className="text-meta">
            Our team works closely with clients to understand their goals,
            overcome challenges, and deliver results that add real value to their
            projects and operations.
          </p>
          <p className="text-meta font-medium text-slate-900">
            We aim to be not just a service provider — but a long-term partner our
            clients can trust.
          </p>
        </div>
      </motion.section>

      {/* Visual Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MediaPlaceholder
          label="EHM Team"
          caption="Dedicated professionals working together to deliver excellence."
          badge="Team"
          accent="violet"
          aspect="wide"
          imageSrc="/images/professional-team.png"
          imageAlt="Professional diverse team in modern office"
        />
      </motion.section>
    </main>
  );
}

"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
      <Breadcrumbs className="mb-4" />
      {/* Intro Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="section-card p-6 md:p-8 space-y-6"
      >
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">
          About EHM Technology Services
        </h1>
        <p className="mt-4 text-meta md:text-base max-w-3xl">
          EHM Technology Services provides complete Engineering, Construction Estimation, and IT/AI solutions. We combine technical expertise with modern tools to deliver accurate, reliable results for clients across all industries.
        </p>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 transition-colors">
            <div className="mb-4 h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-xl">
              🎯
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-meta">
              To deliver dependable services that bring clarity, efficiency, and structure to every project.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 transition-colors">
            <div className="mb-4 h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-xl">
              🔭
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-meta">
              To be a trusted partner known for accuracy, professionalism, and innovation in engineering and technology.
            </p>
          </div>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={itemVariant}
            whileHover={{ y: -5 }}
            className="section-card p-6 space-y-3 transition-all duration-300 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
              WHAT WE DO
            </p>
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="text-meta text-sm leading-relaxed">{service.detail}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="section-card p-6 md:p-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Our Core Values</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariant}
              className="flex flex-col gap-2"
            >
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="text-meta text-sm">{value.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose EHM */}
      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why Clients Choose EHM
          </h2>
          <p className="text-meta">
            We aim to be not just a service provider — but a long-term partner you can trust.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="section-card p-5 flex items-start gap-3 hover:border-softSkyCyan/50 transition-all duration-300"
            >
              <span className="text-softSkyCyan mt-1">★</span>
              <span className="text-sm text-slate-700 font-medium">{reason}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Visual Placeholder */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-soft group">
          <Image
            src="/images/about-team.png"
            alt="Professional diverse team in modern office"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 text-slate-700 rounded-full">
              Team
            </span>
            <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              Our People
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white">EHM Team</h3>
            <p className="text-sm text-white/80 mt-1">Dedicated professionals working together to deliver excellence.</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

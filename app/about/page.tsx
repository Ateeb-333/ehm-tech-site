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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    detail: "Clients trust us because we deliver consistently and communicate clearly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    detail: "We use modern tools and smart solutions — including AI and advanced software — to enhance our work.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    detail: "Every project, small or large, receives attention to detail and professional handling.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Client Focus",
    detail: "We shape our services around the needs, challenges, and goals of each client.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
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
        className="max-w-7xl mx-auto"
      >
        <div className="section-card p-6 md:p-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
            ABOUT US
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Engineering Excellence Meets Digital Innovation
          </h1>
          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            EHM Technology Services delivers integrated engineering, estimation, and IT solutions. We combine technical precision with modern tools to help businesses achieve their project goals.
          </p>
          </div>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <motion.div 
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-slateBlue/10 to-slateBlue/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-slateBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-sm md:text-meta text-slate-600">
              To deliver dependable services that bring clarity, efficiency, and structure to every project.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-softSkyCyan/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-softSkyCyan/20 to-softSkyCyan/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-softSkyCyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-sm md:text-meta text-slate-600">
              To be a trusted partner known for accuracy, professionalism, and innovation in engineering and technology.
            </p>
          </motion.div>
        </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="divider-line" />

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
        className="section-card p-6 md:p-8 content-block"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 section-header">Our Core Values</h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariant}
              whileHover={{ y: -3 }}
              className="relative rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#046BC6]/50 hover:shadow-md group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#046BC6]/10 to-[#046BC6]/5 flex items-center justify-center text-[#046BC6] group-hover:from-[#046BC6]/20 group-hover:to-[#046BC6]/10 transition-all duration-300">
                  {value.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-meta text-sm leading-relaxed">{value.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Divider */}
      <div className="divider-line" />

      {/* Why Choose EHM */}
      <motion.section
        className="space-y-8 content-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 section-header mx-auto" style={{ maxWidth: 'fit-content' }}>
            Why Clients Choose EHM
          </h2>
          <p className="text-meta leading-relaxed">
            We aim to be not just a service provider — but a long-term partner you can trust.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-10"
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
              <span className="text-sm text-slate-700 font-medium leading-relaxed">{reason}</span>
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

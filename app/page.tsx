"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion, Variants } from "framer-motion";
import { TextShimmer } from "@/components/TextShimmer";
import { Typewriter } from "@/components/Typewriter";
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
        label: "Digital Highlights",
        pillars: [
            "Custom website development and software engineering",
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
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-center min-h-[80vh] relative"
            >
                {/* Dynamic Background Elements Removed */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                </div>

                <div>
                    <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                        <TextShimmer>EHM Technology Services</TextShimmer>
                        <span className="block mt-2">
                            <Typewriter
                                words={[
                                    "Professional Engineering",
                                    "Cost Estimation",
                                    "IT Solutions",
                                    "AI Automation",
                                    "Digital Innovation"
                                ]}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseDuration={2500}
                                className="text-slate-700"
                            />
                        </span>
                        <span className="block bg-gradient-to-r from-softSkyCyan via-sunsetPeach to-slateBlue bg-clip-text text-transparent mt-2">
                            You Can Rely On.
                        </span>
                    </h1>
                    <p className="mt-4 text-meta max-w-xl text-sm md:text-base">
                        Integrated support across engineering, construction estimation, and modern IT solutions — helping you plan smarter and build better.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="/services"
                            className="rounded-full bg-slateBlue px-6 py-3 text-sm font-medium text-white shadow-soft transition-transform hover:scale-105 hover:bg-slateBlue/90"
                        >
                            Explore Services
                        </a>
                        <a
                            href="/contact"
                            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slateBlue/50 hover:bg-slate-50"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>

                {/* Right visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
                    className="space-y-4"
                >
                    <MediaPlaceholder
                        label="Integrated Workflow"
                        caption="Seamlessly connecting engineering precision with digital efficiency."
                        badge="Our Process"
                        accent="cyan"
                        aspect="square"
                        imageSrc="/images/hero-workflow.png"
                        imageAlt="Engineering and digital workflow visualization"
                    />
                </motion.div>
            </motion.section>

            {/* Marquee */}
            <div className="w-full overflow-hidden border-y border-slate-200 bg-slate-50 py-4">
                <div className="marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span
                            key={idx}
                            className="whitespace-nowrap text-sm font-medium text-slate-500 uppercase tracking-wider"
                        >
                            {item} <span className="mx-4 text-slate-300">•</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* About Us Block */}
            <motion.section
                className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
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
                            We offer complete solutions for contractors, engineering firms, and businesses. Our expertise spans engineering design, cost estimation, and IT development, ensuring reliable results for projects of any scale.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <MediaPlaceholder
                            label="Our Focus"
                            caption="Accuracy, Modern Tools, and Smooth Workflows."
                            badge="Core Values"
                            aspect="wide"
                            accent="cyan"
                            imageSrc="/images/professional-team.png"
                            imageAlt="Professional team working with modern technology"
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
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {[
                    {
                        title: "Engineering Services",
                        body: "Structured design and technical solutions across civil, structural, MEP, architectural, and industrial engineering.",
                        accent: "Stronger, Smarter Project Development",
                    },
                    {
                        title: "Construction Estimation",
                        body: "Accurate quantity takeoffs, bid estimates, drafting assistance, and project cost analysis.",
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
                        variants={itemVariant}
                        whileHover={{ y: -5 }}
                        className="section-card p-5 transition-all duration-300 hover:shadow-md"
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
                <motion.div variants={fadeInUp} className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        Why Choose EHM Technology Services
                    </h2>
                    <p className="mt-2 text-meta max-w-2xl">
                        We value accuracy, quality, and clear communication. We focus on practical needs and deliver results that support long-term success.
                    </p>
                </motion.div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-4 md:grid-cols-3"
                >
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
                            variants={itemVariant}
                            whileHover={{ scale: 1.02 }}
                            className="section-card p-5 flex items-start gap-3 hover:border-softSkyCyan/50 transition-all duration-300"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <p className="text-sm text-slate-700">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Featured Capabilities */}
            <motion.section
                className="mt-16 grid gap-6 md:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {capabilityGroups.map((group, idx) => (
                    <motion.div
                        key={group.label}
                        variants={itemVariant}
                        whileHover={{ y: -5 }}
                        className="section-card p-5 flex flex-col gap-3 transition-all duration-300"
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
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                    Project Highlights — Work Delivered Across Industries
                </h2>
                <p className="text-slate-600 mb-8">
                    This section showcases the variety and quality of our completed tasks.
                </p>
                <motion.div
                    className="grid gap-6 md:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        {
                            title: "Engineering Excellence",
                            desc: "Drawing packages for residential, commercial, and industrial projects",
                            image: "/images/engineering-highlight.png",
                            alt: "Engineering blueprints and structural designs"
                        },
                        {
                            title: "Estimation Precision",
                            desc: "Detailed takeoff sheets and cost estimates for contractors and builders",
                            image: "/images/estimation-highlight.png",
                            alt: "Cost estimation spreadsheets and takeoff reports"
                        },
                        {
                            title: "Digital Innovation",
                            desc: "Web platforms, automation systems, and digital solutions for businesses",
                            image: "/images/digital-highlight.png",
                            alt: "Modern web application dashboard"
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariant}
                            whileHover={{ y: -5 }}
                            className="section-card p-0 overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Client Feedback */}
            <motion.section
                className="mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    variants={fadeInUp}
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
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariant}
                            whileHover={{ y: -5 }}
                            className="section-card p-5 flex flex-col gap-4 transition-all duration-300"
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
                </motion.div>
            </motion.section>

            {/* CTA */}
            <motion.section
                className="mt-16 section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">
                        Ready to Begin Your Next Project?
                    </h2>
                    <p className="mt-2 text-meta max-w-xl">
                        Whether you need engineering support, cost estimation, drafting work,
                        or modern IT solutions, our team is ready to assist. We're here to
                        help you plan, execute, and deliver with confidence.
                    </p>
                </div>
                <div className="flex gap-3">
                    <a
                        href="/contact"
                        className="rounded-full bg-slateBlue px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/contact"
                        className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-softSkyCyan/80 hover:bg-slate-50 transition-all duration-300"
                    >
                        Request a Quote
                    </a>
                </div>
            </motion.section>

            {/* Contact Info */}
            <motion.section
                className="mt-12 mb-12 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <h2 className="text-xl font-semibold text-slate-900">
                    Contact EHM Technology Services
                </h2>
                <p className="mt-2 text-meta">
                    For inquiries, quotes, or project discussions, feel free to reach out.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-5 text-sm text-slate-600">
                    <div className="flex items-center gap-4">
                        <span className="text-slateBlue">✉</span>
                        <span>Email: info@ehmtechservices.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-slateBlue">📞</span>
                        <span>Phone: +92 322 628 3848</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-slateBlue">💬</span>
                        <span>WhatsApp: +92 322 628 3848</span>
                    </div>
                </div>
            </motion.section>

            {/* About Teaser */}
            <motion.section
                className="mt-20 grid gap-8 md:grid-cols-2 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">
                        About Us
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                        About EHM Technology Services
                    </h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        We are a multidisciplinary team of engineers, estimators, and developers dedicated to delivering precision and innovation. From complex structural designs to custom software solutions, we bridge the gap between technical requirements and business goals.
                    </p>
                    <a
                        href="/about"
                        className="mt-6 inline-flex items-center text-sm font-medium text-slateBlue hover:text-slateBlue/80"
                    >
                        Read more about our team <span className="ml-1">→</span>
                    </a>
                </div>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-soft group">
                    <Image
                        src="/images/team-collaboration-v2.png"
                        alt="EHM Team collaborating on engineering and development projects"
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
                            Live Capture
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-semibold text-white">Team Collaboration</h3>
                        <p className="text-sm text-white/80 mt-1">Engineers, estimators, and developers working together.</p>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}

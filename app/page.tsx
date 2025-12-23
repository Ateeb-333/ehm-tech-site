"use client";

import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { motion, Variants } from "framer-motion";
import { TextShimmer } from "@/components/TextShimmer";
import { Typewriter } from "@/components/Typewriter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
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
        quote: "EHM delivered accurate MEP drawings and cost estimates on time, which helped us secure a major commercial project. Their team was responsive, professional, and understood our requirements from day one. The level of detail in their work gave us confidence throughout the bidding process.",
        author: "Michael Rodriguez",
        role: "Project Manager",
        company: "BuildRight Construction",
    },
    {
        quote: "Working with EHM on our web development and digital marketing needs has been a game-changer. They built a modern, fast website and implemented SEO strategies that increased our organic traffic by 150% in just three months. Their technical expertise and clear communication made the entire process smooth.",
        author: "Sarah Thompson",
        role: "Marketing Director",
        company: "TechForward Solutions",
    },
    {
        quote: "The AI automation solutions from EHM transformed our workflow efficiency. What used to take hours now takes minutes. Their team took time to understand our processes, delivered custom solutions that actually work, and provided excellent training for our staff. Highly recommend their services.",
        author: "David Chen",
        role: "Operations Manager",
        company: "Innovate Manufacturing",
    },
    {
        quote: "EHM's quantity takeoff and cost estimation services are incredibly accurate and detailed. They've helped us price over 20 projects in the past year, and their work has consistently given us a competitive edge. The turnaround time is impressive, and they're always willing to answer questions.",
        author: "Jennifer Martinez",
        role: "Senior Estimator",
        company: "Prime Contractors LLC",
    },
];

export default function HomePage() {
    return (
        <main className="main-shell space-y-section">
            {/* Hero */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[85vh] flex items-center py-12 overflow-hidden"
            >
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#046BC6]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#5EEAD4]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900">
                                    <TextShimmer>EHM Technology Services</TextShimmer>
                                </h1>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="min-h-[4rem] md:min-h-[4.5rem]"
                            >
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700">
                                    <Typewriter
                                        words={[
                                            "Professional Engineering",
                                            "Cost Estimation",
                                            "AI Automation"
                                        ]}
                                        typingSpeed={80}
                                        deletingSpeed={40}
                                        pauseDuration={2500}
                                        className="text-slate-700"
                                    />
                                </h2>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#046BC6]"
                            >
                                You Can Rely On.
                            </motion.h3>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
                        >
                            Complete engineering, estimation, and digital solutions. From concept to delivery.
                        </motion.p>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="flex items-center gap-6 py-4"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-semibold text-slate-700">750+ Projects</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-semibold text-slate-700">99.5% Accuracy</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300"></div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-semibold text-slate-700">24/7 Support</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#046BC6] text-white font-semibold rounded-lg shadow-lg hover:bg-[#035aa0] hover:shadow-xl transition-all duration-300"
                            >
                                Explore Services
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-[#046BC6] hover:bg-slate-50 transition-all duration-300"
                            >
                                Get a Quote
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Main Card */}
                            <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1581094794329-cd1096d7a61f?auto=format&fit=crop&q=80"
                                    alt="Engineering and digital workflow visualization"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                                
                                {/* Top Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 shadow-lg">
                                        Our Process
                                    </span>
                                    <span className="ml-2 px-3 py-2 bg-[#046BC6]/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                        Live Capture
                                    </span>
                                </div>

                                {/* Bottom Card */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            Integrated Workflow
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Seamlessly connecting engineering precision with digital efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -top-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-slate-200 hidden lg:block"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#046BC6] mb-1">200+</div>
                                <div className="text-xs text-slate-600 font-semibold">Happy Clients</div>
                            </div>
                        </motion.div>
                    </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Marquee */}
            <div className="w-full overflow-hidden border-y border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-5">
                <div className="marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span
                            key={idx}
                            className="whitespace-nowrap text-sm font-semibold text-slate-600 uppercase tracking-wider inline-flex items-center gap-2"
                        >
                            <span className="text-slateBlue">●</span>
                            {item}
                            <span className="mx-4 text-slate-300">|</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* About Us Block */}
            <motion.section
                className="relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                                About Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                                Who We Are
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed">
                                EHM Technology Services delivers integrated engineering, estimation, and digital solutions. We help contractors, firms, and businesses move from concept to delivery with precision and confidence.
                            </p>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-200">
                            <div>
                                <div className="text-2xl font-bold text-[#046BC6]">750+</div>
                                <div className="text-xs text-slate-600 mt-1">Projects</div>
                            </div>
                            <div className="border-x border-slate-200 px-4">
                                <div className="text-2xl font-bold text-[#046BC6]">200+</div>
                                <div className="text-xs text-slate-600 mt-1">Clients</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#046BC6]">99.5%</div>
                                <div className="text-xs text-slate-600 mt-1">Accuracy</div>
                            </div>
                        </div>

                        {/* Core Focus Points */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-900 mb-4">Our Focus</h3>
                            {[
                                { icon: "✓", label: "Accuracy & Clarity", desc: "Precise deliverables with clear documentation" },
                                { icon: "✓", label: "Modern Tools", desc: "Latest software and automation systems" },
                                { icon: "✓", label: "Smooth Workflows", desc: "Efficient processes from start to finish" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-3 items-start"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#046BC6] text-white flex items-center justify-center text-xs font-bold">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                                        <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#046BC6] text-white font-semibold rounded-lg hover:bg-[#035aa0] transition-all shadow-md hover:shadow-lg"
                            whileHover={{ x: 5 }}
                        >
                            Learn More About Us
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right Image Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Main Image */}
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Professional team working with modern technology"
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                
                                {/* Top Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 shadow-lg">
                                        Core Values Live
                                    </span>
                                </div>

                                {/* Bottom Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#046BC6] mb-2">
                                            Our Focus
                                        </p>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            Accuracy, Modern Tools, and Smooth Workflows
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Accent Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-slate-200 hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#046BC6] to-[#5EEAD4] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-600">Delivering Excellence</p>
                                    <p className="text-sm font-bold text-slate-900">Since Day One</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Core Areas of Expertise */}
            <motion.section
                className="max-w-6xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Our Services
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Core Areas of Expertise
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        Comprehensive solutions across engineering, estimation, and technology.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        className="section-card p-4 md:p-5 transition-all duration-300 hover:shadow-md flex flex-col"
                    >
                        <p className="text-xs font-semibold text-softSkyCyan">0{i + 1}</p>
                        <h3 className="mt-2 text-base md:text-lg font-semibold">
                            {card.title}
                        </h3>
                        <p className="mt-2 text-sm flex-1">{card.body}</p>
                        <p className="mt-3 text-xs text-slate-500 font-normal pt-2 border-t border-slate-100">
                            {card.accent}
                        </p>
                    </motion.div>
                ))}
                </div>
            </motion.section>

            {/* Why Choose EHM */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="max-w-5xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Engineering & Technology Solutions
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive services delivered with precision, clarity, and reliability.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {[
                        {
                            title: "Multi-Disciplinary Expertise",
                            desc: "Engineering, estimation, and technology solutions under one roof.",
                        },
                        {
                            title: "Precision & Quality",
                            desc: "Rigorous quality control and modern tools ensure accurate deliverables.",
                        },
                        {
                            title: "Clear Communication",
                            desc: "Transparent updates and responsive support throughout your project.",
                        },
                        {
                            title: "Flexible & Scalable",
                            desc: "Solutions that adapt to your project size and requirements.",
                        },
                        {
                            title: "On-Time Delivery",
                            desc: "Structured workflows and realistic timelines meet your deadlines.",
                        },
                        {
                            title: "Reliable Partnership",
                            desc: "Consistent quality and dedicated support you can count on.",
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariant}
                            className="bg-white border border-slate-200 rounded-lg p-6 hover:border-[#046BC6] hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#046BC6]/10 flex items-center justify-center mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#046BC6]"></div>
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Featured Capabilities */}
            <motion.section
                className="max-w-6xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Capabilities
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        What We Deliver
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        Detailed highlights of our engineering, estimation, and digital services.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
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
                        <h3 className="text-xl font-semibold">
                            {group.label}
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            {group.pillars.map((pillar) => (
                                <li key={pillar} className="flex items-start gap-2">
                                    <span className="text-softSkyCyan mt-1">▹</span>
                                    <span>{pillar}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
                </div>
            </motion.section>

            {/* Project Highlights */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Proven Results
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Project Highlights Across Industries
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        From engineering designs to AI-powered solutions, explore the diverse projects we've delivered with precision and innovation.
                    </p>
                </div>
                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[
                        {
                            title: "Engineering Excellence",
                            desc: "Complete MEP and structural drawing packages for residential, commercial, and industrial developments",
                            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
                            alt: "Engineering blueprints and structural designs",
                            stats: { count: "500+", label: "Drawings Delivered" },
                            tag: "Engineering",
                            color: "bg-blue-500"
                        },
                        {
                            title: "Estimation Precision",
                            desc: "Accurate quantity takeoffs and cost estimates helping contractors win bids and control budgets",
                            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
                            alt: "Cost estimation spreadsheets and takeoff reports",
                            stats: { count: "200+", label: "Projects Estimated" },
                            tag: "Estimation",
                            color: "bg-green-500"
                        },
                        {
                            title: "Digital Innovation",
                            desc: "Modern web applications, AI automation systems, and custom software solutions for forward-thinking businesses",
                            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                            alt: "Modern web application dashboard",
                            stats: { count: "50+", label: "Digital Solutions" },
                            tag: "Technology",
                            color: "bg-purple-500"
                        },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariant}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group section-card p-0 overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                        >
                            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${item.color}`}>
                                    {item.tag}
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold">{item.stats.count}</span>
                                        <span className="text-xs uppercase tracking-wider">{item.stats.label}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-[#046BC6] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-4 flex items-center text-[#046BC6] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    View Details
                                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Client Feedback */}
            <motion.section
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        Trusted by contractors, firms, and businesses for accuracy, communication, and dedicated support.
                    </p>
                </motion.div>
                <TestimonialCarousel
                    testimonials={testimonials}
                    autoPlay={true}
                    autoPlayInterval={6000}
                />
            </motion.section>

            {/* CTA */}
            <motion.section
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="section-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold">
                        Ready to Begin Your Next Project?
                    </h2>
                    <p className="mt-2 text-base text-slate-600 max-w-xl">
                        Whether you need drawings, quantities, cost estimates, or digital tools, we’ll help you scope the work, set clear expectations, and move towards a clean delivery.
                    </p>
                    <div className="flex gap-3">
                    <a
                        href="/contact"
                        className="rounded-lg bg-slateBlue px-8 py-3 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300"
                    >
                        Contact Us
                    </a>
                    <a
                        href="/contact"
                        className="rounded-lg border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-700 hover:border-softSkyCyan/80 hover:bg-slate-50 transition-all duration-300"
                    >
                        Request a Quote
                    </a>
                </div>
                </div>
                
            </motion.section>

            {/* Contact Info */}
            <motion.section
                className="max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="section-card p-6 md:p-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                        Get In Touch
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Contact EHM Technology Services
                    </h2>
                    <p className="text-base text-slate-600 mb-8">
                        For inquiries, quotes, or project discussions, feel free to reach out.
                    </p>
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-sm">
                    <a href="mailto:info@ehmtechservices.com" className="flex items-center justify-center gap-2 text-slate-700 hover:text-slateBlue transition-colors group">
                        <span className="text-slateBlue text-lg group-hover:scale-110 transition-transform">✉</span>
                        <span>info@ehmtechservices.com</span>
                    </a>
                    <a href="tel:+923226283848" className="flex items-center justify-center gap-2 text-slate-700 hover:text-slateBlue transition-colors group">
                        <span className="text-slateBlue text-lg group-hover:scale-110 transition-transform">📞</span>
                        <span>+92 322 628 3848</span>
                    </a>
                    <a href="https://wa.me/923226283848" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-slate-700 hover:text-slateBlue transition-colors group">
                        <span className="text-slateBlue text-lg group-hover:scale-110 transition-transform">💬</span>
                    </a>
                </div>
                </div>
            </motion.section>

            {/* About Teaser */}
            <motion.section
                className="max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
            >
                <div className="section-card p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white">
                <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
                    <div className="space-y-6">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#046BC6] mb-3">
                                About Us
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Building Solutions That Matter
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed">
                                EHM Technology Services combines engineering expertise, cost precision, and digital innovation to deliver results that drive your business forward. Our multidisciplinary team of engineers, estimators, and developers works seamlessly to turn complex challenges into practical solutions.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-200">
                            <motion.div
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-[#046BC6]">750+</div>
                                <div className="text-xs md:text-sm text-slate-600 mt-1">Projects Delivered</div>
                            </motion.div>
                            <motion.div
                                className="text-center border-x border-slate-200"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-[#046BC6]">100%</div>
                                <div className="text-xs md:text-sm text-slate-600 mt-1">Client Satisfaction</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-[#046BC6]">24/7</div>
                                <div className="text-xs md:text-sm text-slate-600 mt-1">Support Available</div>
                            </motion.div>
                        </div>

                        {/* Key Points */}
                        <div className="space-y-3">
                            {[
                                { icon: "✓", text: "Multidisciplinary expertise across engineering, estimation, and technology" },
                                { icon: "✓", text: "Proven track record with diverse industries and project scales" },
                                { icon: "✓", text: "Remote-first team delivering global solutions with local precision" },
                            ].map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#046BC6] text-white flex items-center justify-center text-xs font-bold">
                                        {point.icon}
                                    </span>
                                    <p className="text-sm text-slate-700 leading-relaxed">{point.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#046BC6] text-white font-semibold rounded-lg hover:bg-[#035aa0] transition-all duration-300 shadow-md hover:shadow-lg group"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Learn More About Us
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </motion.a>
                    </div>

                    <div className="relative">
                        <motion.div
                            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                                alt="EHM Team collaborating on engineering and development projects"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                            
                            {/* Top Badge */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/95 text-slate-800 rounded-full shadow-md backdrop-blur-sm">
                                    🏆 Award-Winning Team
                                </span>
                            </div>
                            
                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">Expert Team</h3>
                                    <p className="text-sm text-white/90">Engineers, estimators, and developers collaborating to deliver excellence.</p>
                                    <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded">Engineering</span>
                                        <span className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded">Estimation</span>
                                        <span className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded">Technology</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Cards */}
                        <motion.div
                            className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden md:block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            
                        </motion.div>
                    </div>
                </div>
                </div>
            </motion.section>
        </main>
    );
}

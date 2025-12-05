"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Service = {
  title: string;
  href: string;
  description: string;
  category?: string;
};

type RelatedServicesProps = {
  currentService: string;
  services: Service[];
  className?: string;
};

export function RelatedServices({
  currentService,
  services,
  className = "",
}: RelatedServicesProps) {
  // Filter out current service and limit to 3
  const relatedServices = services
    .filter((service) => service.title !== currentService)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section className={`mt-12 ${className}`}>
      <div className="section-card p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Related Services
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          You might also be interested in these services
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedServices.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={service.href}
                className="block rounded-xl border border-slate-200 bg-white p-4 hover:border-softSkyCyan/50 hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-slateBlue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-slateBlue mt-3 group-hover:gap-2 transition-all">
                  Learn more
                  <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


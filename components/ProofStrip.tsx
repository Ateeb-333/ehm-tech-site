type ProofStripProps = {
  heading: string;
  subheading?: string;
  partnerLabels: string[];
  audienceLine?: string;
  tone?: "delivery" | "partnership" | "talent";
  metrics?: Array<{ label: string; value: string }>;
  testimonial: {
    quote: string;
    byline: string;
  };
};

const toneClasses: Record<NonNullable<ProofStripProps["tone"]>, string> = {
  delivery: "border-[#2c6f95]",
  partnership: "border-[#3e6db2]",
  talent: "border-[#2e7b6f]",
};

export function ProofStrip({
  heading,
  subheading,
  partnerLabels,
  audienceLine = "Trusted by teams across engineering, operations, and delivery",
  tone = "delivery",
  metrics,
  testimonial,
}: ProofStripProps) {
  return (
    <section className="open-section p-7 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient-label">{heading}</p>
      {subheading ? <h3 className="mt-2 text-2xl text-slate-900">{subheading}</h3> : null}

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-meta">{audienceLine}</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {partnerLabels.map((label) => (
              <span
                key={label}
                className={`soft-tile inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200 ${toneClasses[tone]}`}
              >
                {label}
              </span>
            ))}
          </div>

          {metrics && metrics.length > 0 ? (
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className={`soft-tile px-3 py-2 ${toneClasses[tone]}`}>
                  <p className="text-lg font-semibold text-slate-100">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.13em] text-meta">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <article className={`soft-tile p-4 ${toneClasses[tone]}`}>
          <p className="text-sm italic text-meta">"{testimonial.quote}"</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-300">{testimonial.byline}</p>
        </article>
      </div>
    </section>
  );
}

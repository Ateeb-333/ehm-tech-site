import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of engineering, AI automation, web development, and marketing projects. See examples of our work across multiple industries and disciplines.",
  openGraph: {
    title: "Portfolio - EHM Tech Services",
    description:
      "A sample of work across engineering and digital. Projects spanning engineering design, AI automation, web development, and marketing.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


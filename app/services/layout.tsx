import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive engineering, construction estimation, and IT solutions. From engineering design to AI automation, we bridge traditional engineering with modern digital work.",
  openGraph: {
    title: "Services - EHM Tech Services",
    description:
      "Complete solutions for contractors, engineering firms, and businesses. Engineering design, cost estimation, AI automation, and web development.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


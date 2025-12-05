import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EHM Technology Services - a multidisciplinary team of engineers, estimators, and developers delivering precision and innovation across engineering, construction, and technology.",
  openGraph: {
    title: "About EHM Technology Services",
    description:
      "A multidisciplinary team of engineers, estimators, and developers dedicated to delivering precision and innovation.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


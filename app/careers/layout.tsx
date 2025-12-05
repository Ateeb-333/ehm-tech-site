import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join EHM Technology Services. Build modern delivery systems for engineering, automation & digital. Remote-first team shipping high-trust work for technical organizations.",
  openGraph: {
    title: "Careers at EHM Technology Services",
    description:
      "Join our remote-first team. We're hiring for engineering, automation, and digital roles.",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


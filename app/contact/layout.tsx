import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EHM Technology Services. Contact us for engineering design, cost estimation, AI automation, or web development projects. Email: info@ehmtechservices.com | Phone: +92 322 628 3848",
  openGraph: {
    title: "Contact EHM Technology Services",
    description:
      "Let's talk about your next project. Get in touch for engineering, estimation, or IT solutions.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


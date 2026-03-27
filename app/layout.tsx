import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ScrollRevealObserver } from "@/components/ScrollRevealObserver";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "EHM Tech Services",
    template: "%s | EHM Tech Services",
  },
  description:
    "Professional Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services. Helping contractors, engineering firms, and businesses with reliable results.",
  metadataBase: new URL("https://www.ehmtechservices.com"),
  keywords: [
    "engineering design",
    "cost estimation",
    "AI automation",
    "web development",
    "construction estimation",
    "MEP engineering",
    "civil engineering",
    "architectural design",
    "digital marketing",
    "Pakistan engineering services",
  ],
  authors: [{ name: "EHM Technology Services" }],
  creator: "EHM Technology Services",
  publisher: "EHM Technology Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ehmtechservices.com",
    siteName: "EHM Tech Services",
    title: "EHM Tech Services - Engineering, Estimation & IT Solutions",
    description:
      "Professional Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services.",
    images: [
      {
        url: "/images/ehm-logo.png",
        width: 1200,
        height: 630,
        alt: "EHM Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EHM Tech Services - Engineering, Estimation & IT Solutions",
    description:
      "Professional Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services.",
    images: ["/images/ehm-logo.png"],
    creator: "@ehmtechservices",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ehmtechservices.com",
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-slate-900 transition-colors">
        <ThemeProvider>
          <OrganizationSchema />
          <LocalBusinessSchema />
          <ScrollRevealObserver />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <div className="site-shell">
            <main id="main-content" className="site-main">
              <PageTransition>{children}</PageTransition>
            </main>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

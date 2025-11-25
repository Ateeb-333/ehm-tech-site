import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "EHM Tech Services",
  description:
    "Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services.",
  metadataBase: new URL("https://www.ehmtechservices.com"),
  openGraph: {
    title: "EHM Tech Services",
    description:
      "Engineering Design, Cost Estimation, AI Automation, Web Development & Digital Services.",
    type: "website",
    locale: "en_US",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 bg-transparent">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Progress + Navbar */}
        <ScrollProgressBar />
        <Navbar />

        {/* Wrapper for all page content */}
        <div className="pt-20 min-h-screen flex flex-col">
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Global scroll-to-top button */}
          <ScrollToTopButton />

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

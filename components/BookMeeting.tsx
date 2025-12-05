"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BookMeetingProps = {
  calLink?: string; // Cal.com or Calendly link
  email?: string;
  className?: string;
};

export function BookMeeting({
  calLink,
  email = "info@ehmtechservices.com",
  className = "",
}: BookMeetingProps) {
  const [showModal, setShowModal] = useState(false);

  // If Cal.com or Calendly link is provided, use it
  // Otherwise, show email contact option
  const handleBookMeeting = () => {
    if (calLink) {
      window.open(calLink, "_blank", "noopener,noreferrer");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleBookMeeting}
        className={`rounded-full bg-slateBlue px-6 py-3 text-sm font-medium text-white shadow-soft hover:bg-slateBlue/90 hover:scale-105 transition-all duration-300 ${className}`}
      >
        Book a Meeting
      </button>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="section-card p-6 md:p-8 max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Schedule a Meeting
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-slate-500 hover:text-slate-900 text-xl leading-none"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  Contact us to schedule a meeting. We'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${email}?subject=Meeting Request`}
                    className="block w-full rounded-full bg-slateBlue px-6 py-3 text-sm font-medium text-white text-center shadow-soft hover:bg-slateBlue/90 transition-colors"
                  >
                    Email Us
                  </a>
                  <a
                    href={`tel:+923226283848`}
                    className="block w-full rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 text-center hover:border-softSkyCyan/80 hover:bg-slate-50 transition-colors"
                  >
                    Call Us: +92 322 628 3848
                  </a>
                  <p className="text-xs text-slate-500 text-center">
                    Or visit our{" "}
                    <a href="/contact" className="text-slateBlue hover:underline">
                      contact page
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // milliseconds
  className?: string;
};

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="section-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <span className="text-3xl text-slateBlue">"</span>
                <p className="text-base md:text-lg text-slate-700 italic flex-1">
                  {testimonials[currentIndex].quote}
                </p>
                <span className="text-3xl text-slateBlue">"</span>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-xs text-slate-600">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company &&
                      `, ${testimonials[currentIndex].company}`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slateBlue text-white flex items-center justify-center hover:bg-[#035aa0] hover:scale-110 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-slateBlue focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slateBlue text-white flex items-center justify-center hover:bg-[#035aa0] hover:scale-110 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-slateBlue focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-slateBlue w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


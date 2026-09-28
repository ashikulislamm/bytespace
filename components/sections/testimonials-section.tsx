"use client";

import * as React from "react";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden select-none"
      style={{
        background: `
          radial-gradient(circle 650px at 85% 18%, rgba(203, 252, 1, 0.42), transparent 70%),
          radial-gradient(circle 600px at 10% 88%, rgba(0, 59, 226, 0.09), transparent 70%),
          #FFFFFF
        `,
      }}
    >
      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Header Row: Left Title + Right Description */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <h2 className="max-w-[480px] text-2xl sm:text-4xl lg:text-[44px] font-semibold text-shuttle-950 font-poppins leading-[1.18] tracking-tight">
            Discover What Our<br />Community Is Saying
          </h2>

          <p className="max-w-[540px] text-xs sm:text-base text-shuttle-600 leading-relaxed font-normal pt-1">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </div>
    </section>
  );
}

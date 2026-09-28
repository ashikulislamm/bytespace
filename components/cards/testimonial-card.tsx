import * as React from "react";
import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-7 sm:p-8 bg-white rounded-[28px] sm:rounded-[32px] hover:shadow-xl transition-all duration-300 text-left border border-shuttle-100/40",
        className
      )}
    >
      {/* 1. Author Avatar at the Top */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 mb-5 select-none shadow-xs">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      {/* 2. Author Name & Role */}
      <div className="mb-5">
        <h4 className="text-lg sm:text-[19px] font-semibold text-shuttle-950 font-poppins leading-tight">
          {testimonial.name}
        </h4>
        <p className="text-sm font-medium text-persian-800 mt-1">
          {testimonial.role}
        </p>
      </div>

      {/* 3. Testimonial Quote */}
      <p className="text-sm sm:text-[15px] text-shuttle-600 leading-relaxed font-normal">
        {testimonial.content}
      </p>
    </div>
  );
}

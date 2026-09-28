import * as React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
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
        "relative flex flex-col justify-between p-8 bg-white border border-shuttle-200 rounded-[24px] shadow-sm transition-all duration-300 hover:shadow-md hover:border-shuttle-300",
        className
      )}
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-base text-shuttle-700 leading-relaxed font-normal">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      {/* Author Profile */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-shuttle-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-shuttle-100 shrink-0 border border-shuttle-200">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="text-base font-semibold text-shuttle-950">
            {testimonial.name}
          </h4>
          <p className="text-xs font-medium text-shuttle-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

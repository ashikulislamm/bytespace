import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  course: Course;
  className?: string;
  variant?: "default" | "compact";
}

export function CourseCard({ course, className }: CourseCardProps) {
  // Use course student avatars or fallback to the 4 default authentic avatars
  const avatars =
    course.studentAvatars && course.studentAvatars.length > 0
      ? course.studentAvatars.slice(0, 4)
      : [
          "/images/student-avatar-1.png",
          "/images/student-avatar-3.png",
          "/images/student-avatar-4.png",
          "/images/student-avatar-5.png",
        ];

  return (
    <div
      className={cn(
        "group relative flex flex-col w-full bg-white border border-shuttle-200/90 rounded-[28px] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-shuttle-300",
        className
      )}
    >
      {/* 1. Thumbnail Container with Bottom Floating Meta Badges */}
      <div className="relative w-full h-[200px] sm:h-[210px] rounded-[20px] overflow-hidden bg-shuttle-100 shrink-0">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />

        {/* Floating Meta Pills at the Bottom (3 Separate Capsules) */}
        <div className="absolute bottom-3 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
          <div className="px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[11px] sm:text-xs font-medium text-shuttle-800 shadow-xs whitespace-nowrap">
            {course.lessonsCount} Lessons
          </div>
          <div className="px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[11px] sm:text-xs font-medium text-shuttle-800 shadow-xs whitespace-nowrap">
            {course.totalDuration}
          </div>
          <div className="px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-md text-[11px] sm:text-xs font-medium text-shuttle-800 shadow-xs whitespace-nowrap">
            {course.commentsCount} Comments
          </div>
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="flex flex-col flex-1 pt-4 pb-1">
        {/* Row 1: Title & Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <Link href={`/courses/${course.slug}`} className="focus:outline-none block">
              <h3 className="font-semibold text-lg sm:text-[20px] text-shuttle-950 font-poppins leading-snug transition-colors duration-200 group-hover:text-persian-800 line-clamp-1">
                {course.title}
              </h3>
            </Link>

            {/* Creator Byline */}
            <p className="mt-1 text-xs sm:text-sm text-shuttle-400">
              by{" "}
              <Link
                href={`/creators/${course.creator.id}`}
                className="text-persian-800 font-medium hover:underline transition-colors"
              >
                {course.creator.name.toLowerCase()}
              </Link>
            </p>
          </div>

          {/* Rating String with Silver Star */}
          <div className="flex items-center gap-1 shrink-0 pt-0.5 select-none">
            <span className="text-base sm:text-[18px] font-normal text-shuttle-600">
              {course.rating.toFixed(1)}
            </span>
            <svg
              className="w-4 h-4 fill-[#CED0D3] text-[#CED0D3] shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>

        {/* Row 2: Difficulty Level Badge & Student Avatar Stack */}
        <div className="flex items-center justify-between gap-3 mt-4">
          {/* Difficulty Pill with 3 Stepping Signal Bars */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F5F7] text-shuttle-800 text-xs sm:text-sm font-medium select-none">
            <svg
              className="w-3.5 h-3.5 text-shuttle-700 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="3" y="14" width="3.5" height="7" rx="1.5" />
              <rect x="10" y="9" width="3.5" height="12" rx="1.5" />
              <rect x="17" y="4" width="3.5" height="17" rx="1.5" />
            </svg>
            <span>{course.difficulty}</span>
          </div>

          {/* Student Avatars Stack + Electric Lime 26+ Badge */}
          <div className="flex items-center -space-x-1.5 sm:-space-x-2 shrink-0">
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0"
              >
                <Image
                  src={avatar}
                  alt="Enrolled student"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#CBFC01] text-shuttle-950 font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0 select-none">
              26+
            </div>
          </div>
        </div>

        {/* Row 3: Price and Billing Period */}
        <div className="flex items-baseline gap-1 mt-4">
          <span className="text-2xl sm:text-[26px] font-bold text-persian-800 font-poppins tracking-tight">
            ${course.price}
          </span>
          <span className="text-xs sm:text-sm text-shuttle-400 font-normal">
            {course.billingPeriod}
          </span>
        </div>
      </div>
    </div>
  );
}

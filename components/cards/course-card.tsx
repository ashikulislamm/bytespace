import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Clock, BookOpen, Star } from "lucide-react";
import type { Course } from "@/lib/types";
import { cn } from "@/lib/utils";
import { DifficultyBadge } from "@/components/ui/badge";
import { AvatarStack } from "@/components/ui/avatar-stack";

export interface CourseCardProps {
  course: Course;
  className?: string;
  variant?: "default" | "compact";
}

export function CourseCard({ course, className, variant = "default" }: CourseCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col w-full bg-white border border-shuttle-200 rounded-[24px] p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-shuttle-300",
        className
      )}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full h-[195px] rounded-[16px] overflow-hidden bg-shuttle-100 shrink-0">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />

        {/* Floating Meta Pill (Lessons | Duration | Comments) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-[12px] bg-white/90 backdrop-blur-md border border-white/60 text-[11px] font-medium text-shuttle-900 shadow-sm">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-persian-800" />
            <span>{course.lessonsCount} Lessons</span>
          </div>
          <span className="text-shuttle-300">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-persian-800" />
            <span>{course.totalDuration}</span>
          </div>
          <span className="text-shuttle-300">•</span>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-persian-800" />
            <span>{course.commentsCount}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 pt-4">
        {/* Course Title */}
        <Link href={`/courses/${course.slug}`} className="focus:outline-none">
          <h3 className="font-semibold text-lg text-shuttle-950 transition-colors duration-200 group-hover:text-persian-800 line-clamp-1">
            {course.title}
          </h3>
        </Link>

        {/* Creator Byline */}
        <p className="mt-1 text-sm text-shuttle-400">
          by{" "}
          <Link
            href={`/creators/${course.creator.id}`}
            className="text-persian-800 font-medium hover:underline transition-colors"
          >
            {course.creator.name.toLowerCase()}
          </Link>
        </p>

        {/* Difficulty & Students Stack Row */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-shuttle-100">
          <DifficultyBadge level={course.difficulty} />
          <AvatarStack avatars={course.studentAvatars} extraCount="26" size="sm" />
        </div>

        {/* Pricing & Rating Row */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-shuttle-100">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-shuttle-950 tracking-tight">
              ${course.price}
            </span>
            <span className="text-xs text-shuttle-500 font-medium">
              {course.billingPeriod}
            </span>
          </div>

          {/* Rating and Action Link */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-semibold text-shuttle-800 bg-shuttle-50 px-2 py-1 rounded-full border border-shuttle-200">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{course.rating.toFixed(1)}</span>
            </div>

            <Link
              href={`/courses/${course.slug}`}
              className="w-8 h-8 rounded-full bg-shuttle-50 hover:bg-persian-800 hover:text-white border border-shuttle-200 hover:border-transparent flex items-center justify-center text-shuttle-700 transition-all duration-200"
              aria-label={`View ${course.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

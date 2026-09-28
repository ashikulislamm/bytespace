"use client";

import * as React from "react";
import Link from "next/link";
import { CourseCard } from "@/components/cards/course-card";
import { CategoryPill } from "@/components/cards/category-card";
import { courses } from "@/data/courses";
import { homeCategoryRows } from "@/data/categories";

export function FeaturedCoursesSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("Featured");

  const displayedCourses = React.useMemo(() => {
    if (selectedCategory === "Featured") {
      return courses;
    }
    return courses.filter((c) =>
      c.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-custom px-4 sm:px-6">
        {/* Centered Section Header */}
        <div className="max-w-[920px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-semibold text-[#040819] font-poppins leading-[1.2] tracking-tight">
            Discover Your Passion,<br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-[18px] text-shuttle-400 font-normal leading-relaxed max-w-[840px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Tabs Rows */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2.5 sm:gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {homeCategoryRows[0].map((tab) => (
              <CategoryPill
                key={tab}
                label={tab}
                isActive={selectedCategory === tab}
                onClick={() => setSelectedCategory(tab)}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {homeCategoryRows[1].map((tab) => (
              <CategoryPill
                key={tab}
                label={tab}
                isActive={selectedCategory === tab}
                onClick={() => setSelectedCategory(tab)}
              />
            ))}
          </div>

          {/* Row 3 with + More Link */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {homeCategoryRows[2].map((tab) => (
              <CategoryPill
                key={tab}
                label={tab}
                isActive={selectedCategory === tab}
                onClick={() => setSelectedCategory(tab)}
              />
            ))}
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-medium text-persian-800 hover:underline transition-all select-none"
            >
              + More
            </Link>
          </div>
        </div>

        {/* Courses Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-16">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

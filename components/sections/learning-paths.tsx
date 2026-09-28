"use client";

import * as React from "react";
import { CategoryCard } from "@/components/cards/category-card";
import { learningPaths } from "@/data/categories";

export function LearningPathsSection() {
  return (
    <section className="w-full py-12 sm:py-16 relative overflow-hidden bg-white select-none">
      <div className="container-custom relative z-10 px-4 sm:px-6">
        {/* Centered Header */}
        <div className="max-w-[880px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-[#040819] font-poppins leading-[1.2] tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-[18px] text-shuttle-400 font-normal leading-relaxed max-w-[820px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards in a Single Responsive Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 mt-10 sm:mt-14">
          {learningPaths.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

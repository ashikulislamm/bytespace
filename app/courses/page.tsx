"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Filter,
  Shapes,
  ListFilter,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CourseCard } from "@/components/cards/course-card";
import { courses as allCourses } from "@/data/courses";
import type { Course } from "@/lib/types";

// Re-ordered course catalog matching the screenshot:
// 1. Learn Figma from Basic, 2. Build Digital Asset, 3. The Power of Big Data
const initialCourses: Course[] = [
  ...allCourses.filter((c) => c.slug === "learn-figma-from-basic"),
  ...allCourses.filter((c) => c.slug === "build-digital-asset"),
  ...allCourses.filter((c) => c.slug === "the-power-of-big-data"),
  ...allCourses.filter(
    (c) =>
      c.slug !== "learn-figma-from-basic" &&
      c.slug !== "build-digital-asset" &&
      c.slug !== "the-power-of-big-data"
  ),
];

const categoryTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const sortOptions = [
  "Most relevant",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("Featured");
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels");
  const [sortBy, setSortBy] = React.useState("Most relevant");
  const [currentPage, setCurrentPage] = React.useState(1);

  // Dropdown open states
  const [courseTypeDropdownOpen, setCourseTypeDropdownOpen] = React.useState(false);
  const [levelDropdownOpen, setLevelDropdownOpen] = React.useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = React.useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);
  const [filterModalOpen, setFilterModalOpen] = React.useState(false);

  // Filter logic
  const filteredCourses = React.useMemo(() => {
    return initialCourses.filter((course) => {
      // Search matching
      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category matching
      const matchesCategory =
        activeCategory === "Featured" ||
        course.category.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === "UI/UX Design" &&
          (course.slug.includes("figma") || course.category === "Design"));

      // Level matching
      const matchesLevel =
        selectedLevel === "All Levels" || course.difficulty === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, activeCategory, selectedLevel]);

  // Sort logic
  const sortedCourses = React.useMemo(() => {
    const list = [...filteredCourses];
    if (sortBy === "Highest Rated") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Price: Low to High") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [filteredCourses, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* 1. Global Navigation Bar */}
      <Navbar variant="light-on-blue" />

      {/* 2. Hero Search Banner (#55:844) */}
      <section
        className="relative w-full bg-persian-800 bg-center bg-cover bg-no-repeat overflow-visible px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 select-none"
        style={{
          backgroundImage: "url('/images/hero-bg-pattern.svg')",
        }}
      >
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Headline */}
          <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Search Input & Courses Dropdown */}
          <div className="mt-8 sm:mt-10 w-full max-w-[540px] flex items-center justify-center gap-3">
            {/* White Search Capsule */}
            <div className="relative flex-1">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4 h-4 text-shuttle-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full h-[48px] sm:h-[50px] pl-11 pr-5 rounded-full bg-white text-sm text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:ring-2 focus:ring-[#CBFC01] shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-shuttle-400 hover:text-shuttle-700 p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Electric Lime "Courses" Dropdown Capsule */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCourseTypeDropdownOpen(!courseTypeDropdownOpen)}
                className="inline-flex items-center justify-center gap-2 h-[48px] sm:h-[50px] px-6 sm:px-7 rounded-full bg-[#CBFC01] hover:bg-[#b8e500] text-[#040819] font-medium text-sm transition-all duration-200 shadow-xs cursor-pointer shrink-0"
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    courseTypeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Course Type Dropdown Menu */}
              {courseTypeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white shadow-xl border border-shuttle-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {["All Courses", "Popular Courses", "Free Courses", "Certificates"].map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setCourseTypeDropdownOpen(false)}
                        className="w-full text-left px-4 py-2 text-xs sm:text-sm text-shuttle-800 hover:bg-shuttle-50 transition-colors"
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalog Main Content Area */}
      <main className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Filter & Sort Bar (#55:168) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Left Filter Triggers */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Filter Button */}
              <button
                type="button"
                onClick={() => setFilterModalOpen(!filterModalOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-shuttle-200/90 bg-white text-shuttle-800 text-xs sm:text-sm font-medium hover:border-shuttle-400 hover:bg-shuttle-50 transition-colors cursor-pointer select-none"
              >
                <Filter className="w-3.5 h-3.5 text-shuttle-700" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLevelDropdownOpen(!levelDropdownOpen)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none ${
                    selectedLevel !== "All Levels"
                      ? "border-persian-800 bg-persian-50 text-persian-800"
                      : "border-shuttle-200/90 bg-white text-shuttle-800 hover:border-shuttle-400 hover:bg-shuttle-50"
                  }`}
                >
                  {/* Cellular signal bars icon */}
                  <svg
                    className="w-3.5 h-3.5 text-shuttle-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="3" y="14" width="3.5" height="7" rx="1.5" />
                    <rect x="10" y="9" width="3.5" height="12" rx="1.5" />
                    <rect x="17" y="4" width="3.5" height="17" rx="1.5" />
                  </svg>
                  <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
                </button>

                {levelDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-44 rounded-2xl bg-white shadow-xl border border-shuttle-100 py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-150">
                    {levelOptions.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(level);
                          setLevelDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-shuttle-800 hover:bg-shuttle-50 transition-colors text-left"
                      >
                        <span>{level}</span>
                        {selectedLevel === level && (
                          <Check className="w-3.5 h-3.5 text-persian-800" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-shuttle-200/90 bg-white text-shuttle-800 text-xs sm:text-sm font-medium hover:border-shuttle-400 hover:bg-shuttle-50 transition-colors cursor-pointer select-none"
                >
                  <Shapes className="w-3.5 h-3.5 text-shuttle-700" />
                  <span>Category</span>
                </button>

                {categoryDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-52 max-h-64 overflow-y-auto rounded-2xl bg-white shadow-xl border border-shuttle-100 py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-150">
                    {categoryTabs.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => {
                          setActiveCategory(category);
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-shuttle-800 hover:bg-shuttle-50 transition-colors text-left"
                      >
                        <span>{category}</span>
                        {activeCategory === category && (
                          <Check className="w-3.5 h-3.5 text-persian-800" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-shuttle-200/90 bg-white text-shuttle-800 text-xs sm:text-sm font-medium hover:border-shuttle-400 hover:bg-shuttle-50 transition-colors cursor-pointer select-none"
              >
                {/* 3 descending horizontal lines sort icon */}
                <svg
                  className="w-3.5 h-3.5 text-shuttle-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="14" y2="12" />
                  <line x1="4" y1="18" x2="8" y2="18" />
                </svg>
                <span>{sortBy}</span>
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white shadow-xl border border-shuttle-100 py-2 z-40 animate-in fade-in slide-in-from-top-2 duration-150">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSortBy(opt);
                        setSortDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-shuttle-800 hover:bg-shuttle-50 transition-colors text-left"
                    >
                      <span>{opt}</span>
                      {sortBy === opt && (
                        <Check className="w-3.5 h-3.5 text-persian-800" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Chips Bar (#55:1819) */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 mb-8 sm:mb-10 select-none">
            {categoryTabs.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#CBFC01] text-[#040819] font-medium shadow-2xs"
                      : "bg-[#F1F3F7] text-shuttle-700 hover:bg-[#e4e7ec] hover:text-shuttle-950 font-normal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 4. Course Cards Grid (#55:1843) */}
          {sortedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {sortedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-shuttle-100 flex items-center justify-center text-shuttle-400 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-shuttle-950 font-poppins">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-shuttle-500 max-w-sm">
                We couldn&apos;t find any courses matching your criteria. Try adjusting your
                filters or search query.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Featured");
                  setSelectedLevel("All Levels");
                }}
                className="mt-5 px-5 py-2.5 rounded-full bg-persian-800 text-white text-xs sm:text-sm font-medium hover:bg-persian-900 transition-colors"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* 5. Pagination Controls (#55:834) */}
          {sortedCourses.length > 0 && (
            <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3 select-none">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-shuttle-200/90 flex items-center justify-center text-shuttle-700 hover:border-shuttle-400 hover:bg-shuttle-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    currentPage === page
                      ? "bg-persian-800 text-white shadow-xs"
                      : "text-shuttle-700 hover:bg-shuttle-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
                disabled={currentPage === 5}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-shuttle-200/90 flex items-center justify-center text-shuttle-700 hover:border-shuttle-400 hover:bg-shuttle-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>

      {/* 6. Global Multi-Column Footer */}
      <Footer />
    </div>
  );
}

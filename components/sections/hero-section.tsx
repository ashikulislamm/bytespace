"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export interface HeroSectionProps {
  initialSearchQuery?: string;
}

export function HeroSection({ initialSearchQuery = "" }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);

  return (
    <section
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-persian-800 overflow-hidden pt-24 sm:pt-28 lg:pt-32 select-none">
      {/* Unified 3D Vector Ornaments and Neon Lime Arch (HERO_BG) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src="/images/HERO_BG.png"
          alt="Hero Background 3D Elements and Neon Arch"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Top Content: Headline, Subtitle, Search Capsule (#1:1772) */}
      <div className="container-custom relative z-20 flex flex-col items-center text-center px-4 sm:px-6">
        <h1 className="max-w-[940px] text-4xl sm:text-6xl lg:text-[72px] font-semibold text-white tracking-tight leading-[1.12] font-poppins">
          Get Access to Hundreds<br className="hidden sm:inline" /> Courses Available
        </h1>

        <p className="max-w-[760px] mt-4 sm:mt-5 text-sm sm:text-base lg:text-[18px] text-[#E7F6FF] font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Capsules (#1:1772) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[620px] mt-5 sm:mt-6 z-30">
          {/* 1. White Capsule Input (#1:1773) */}
          <div className="w-full sm:w-[461px] h-[50px] sm:h-[52px] bg-white rounded-full flex items-center px-6 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#CBFC01]">
            <Search className="w-5 h-5 text-shuttle-400 mr-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm sm:text-base lg:text-[17px] text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none"
            />
          </div>

          {/* 2. Separate Electric Lime Search Button (#1:1776) */}
          <Link href={`/courses?q=${encodeURIComponent(searchQuery)}`} className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto h-[50px] sm:h-[52px] px-8 bg-[#CBFC01] hover:bg-[#b8e400] text-shuttle-950 font-medium text-sm sm:text-base lg:text-[17px] rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center shrink-0 select-none"
            >
              Search
            </button>
          </Link>
        </div>
      </div>

      {/* Center Showcase: Cutout Student + 3 Floating Cards (Pinned to Bottom) */}
      <div className="relative w-full max-w-[1240px] mx-auto flex-1 flex items-end justify-center z-10 overflow-visible mt-4">
        {/* Floating Card 1: UI/UX Design (#46:126) */}
        <div className="absolute left-2 sm:left-8 lg:left-[15%] xl:left-[18%] top-[35%] sm:top-[18%] lg:top-[22%] bg-white/95 backdrop-blur-md rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-xl border border-white/80 z-20 text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-left">
          <span className="text-xs sm:text-sm font-semibold text-shuttle-950 block">UI/UX Design</span>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-shuttle-400 font-medium mt-0.5">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Floating Card 2: Happy Students (#1:1821) Matching Figma Screenshot 1:1 */}
        <div className="absolute left-2 sm:left-6 lg:left-[10%] xl:left-[13%] bottom-10 sm:bottom-14 lg:bottom-55 bg-white rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 lg:p-[18px] shadow-2xl border border-white/90 z-20 text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-bottom-left">
          {/* Title */}
          <h3 className="text-sm sm:text-base lg:text-[17px] font-semibold text-shuttle-950 leading-tight">
            Happy Students
          </h3>

          {/* Rating & Count Row: 4.5 (240) ★ */}
          <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-shuttle-950 font-normal mt-1 mb-2 sm:mb-3">
            <span className="font-semibold text-shuttle-950">4.5</span>
            <span className="text-shuttle-400 font-normal">(240)</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#CBFC01] text-[#CBFC01] shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>

          {/* 7 Authentic Avatars + 2K+ Badge Row with Exact Figma Overlap */}
          <div className="flex items-center -space-x-2 sm:-space-x-2.5 lg:-space-x-3">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[1]">
              <Image src="/images/happy-student-1.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[2]">
              <Image src="/images/happy-student-2.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[3]">
              <Image src="/images/happy-student-3.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[4]">
              <Image src="/images/happy-student-4.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[5]">
              <Image src="/images/happy-student-5.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[6]">
              <Image src="/images/happy-student-6.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full overflow-hidden shrink-0 z-[7]">
              <Image src="/images/happy-student-7.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-[38px] lg:h-[38px] rounded-full bg-[#CBFC01] text-shuttle-950 font-bold text-xs sm:text-[13px] flex items-center justify-center shrink-0 z-[8] select-none">
              2K+
            </div>
          </div>
        </div>

        {/* Floating Card 3: Learning Progress (#1:1797) */}
        <div className="absolute right-2 sm:right-8 lg:right-[10%] xl:right-[25%] top-[16%] sm:top-[20%] lg:top-[30%] bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:px-5 sm:py-3.5 shadow-xl border border-white/80 z-20 text-left min-w-[150px] sm:min-w-[170px] lg:min-w-[190px] transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-right">
          <span className="text-xs font-medium text-shuttle-400 block">Learning Progress</span>
          <span className="text-2xl sm:text-3xl font-bold text-shuttle-950 mt-1 block">55%</span>
          <div className="w-full h-2 bg-shuttle-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
          </div>
        </div>

        {/* Center Student Photo Cutout (#1:1796) Pinned to Bottom */}
        <div className="relative z-10 w-[800px] sm:w-[460px] md:w-[580px] lg:w-[700px] xl:w-[760px] h-[380px] sm:h-[480px] md:h-[580px] lg:h-[660px] xl:h-[720px] select-none pointer-events-none">
          <Image
            src="/images/hero-student-laptop.png"
            alt="Student holding laptop with headphones"
            fill
            sizes="(max-width: 900px) 600px, (max-width: 1024px) 580px, 760px"
            className="object-cover drop-shadow-2xl mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

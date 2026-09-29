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
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-persian-800 overflow-hidden pt-24 sm:pt-28 lg:pt-32 select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      {/* Floating 3D Vector Ornaments Matching media_1790621392253.png */}

      {/* 1. Far Top-Left: Neon Lime Spiral Ribbon (#1:1785) */}
      <div className="absolute -left-12 sm:-left-8 lg:-left-20 top-16 sm:top-12 lg:top-26 w-[240px] sm:w-[190px] lg:w-[360px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-lime-spiral.png"
          alt="Neon Lime Spiral Ribbon"
          width={260}
          height={260}
          className="object-contain"
          priority
        />
      </div>

      {/* 2. Mid-Left: White Zigzag Ribbon (#1:1820) */}
      <div className="absolute left-8 sm:left-24 lg:left-60 top-[16%] sm:top-[16%] lg:top-[38%] w-[70px] sm:w-[110px] lg:w-[150px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-white-zigzag.png"
          alt="White Zigzag Ribbon"
          width={150}
          height={150}
          className="object-contain"
          priority
        />
      </div>

      {/* 3. Bottom-Left: White 3D Torus Donut (#1:1867) */}
      <div className="absolute -left-10 sm:-left-6 lg:left-32 bottom-6 sm:bottom-10 lg:bottom-6 w-[140px] sm:w-[220px] lg:w-[320px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-white-torus.png"
          alt="White 3D Torus Donut"
          width={320}
          height={320}
          className="object-contain"
          priority
        />
      </div>

      {/* 4. Far Top-Right: Neon Lime Cylinder (#1:1789) */}
      <div className="absolute -right-18 sm:-right-10 lg:-right-8 top-16 sm:top-10 lg:top-12 w-[160px] sm:w-[240px] lg:w-[340px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-lime-cylinder.png"
          alt="Neon Lime Cylinder"
          width={340}
          height={340}
          className="object-contain"
          priority
        />
      </div>

      {/* 5. Mid-Right: White 3D Pyramid (#1:1819) */}
      <div className="absolute -right-10 sm:right-28 lg:right-44 top-[24%] sm:top-[26%] lg:top-[28%] w-[80px] sm:w-[130px] lg:w-[180px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-white-pyramid.png"
          alt="White 3D Pyramid"
          width={180}
          height={180}
          className="object-contain"
          priority
        />
      </div>

      {/* 6. Bottom-Right: White 3D Spiral (#1:1868) */}
      <div className="absolute right-2 sm:right-10 lg:right-16 bottom-12 sm:bottom-16 lg:bottom-24 w-[110px] sm:w-[160px] lg:w-[220px] pointer-events-none select-none z-10">
        <Image
          src="/images/hero-white-spiral.png"
          alt="White 3D Spiral Ribbon"
          width={220}
          height={220}
          className="object-contain"
          priority
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

      {/* Center Showcase: Vector Neon Lime Arch + Cutout Student + 3 Floating Cards (Pinned to Bottom) */}
      <div className="relative w-full max-w-[1020px] mx-auto flex-1 flex items-end justify-center z-10 overflow-visible mt-4">
        {/* Giant Neon Lime Arch / Ring (#1:1866: width 1149px, height 1149px, stroke 320px) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[50px] sm:top-[20px] lg:top-[30px] w-[680px] h-[680px] sm:w-[880px] sm:h-[880px] lg:w-[1149px] lg:h-[1149px] pointer-events-none select-none z-0">
          <svg viewBox="0 0 1149 1149" className="w-full h-full" fill="none">
            <circle
              cx="574.5"
              cy="574.5"
              r="400"
              stroke="#CBFC01"
              strokeWidth="320"
            />
          </svg>
        </div>

        {/* Floating Card 1: UI/UX Design (#46:126) */}
        <div className="absolute left-2 sm:left-8 lg:left-[10%] xl:left-[14%] top-[2%] sm:top-[22%] bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-white/80 z-20 text-left transition-transform hover:-translate-y-1 duration-200">
          <span className="text-sm font-semibold text-shuttle-950 block">UI/UX Design</span>
          <div className="flex items-center gap-1.5 text-xs text-shuttle-400 font-medium mt-0.5">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Floating Card 2: Happy Students (#1:1821) Matching Figma Screenshot 1:1 */}
        <div className="absolute left-2 sm:left-6 lg:left-[7%] xl:left-[5%] bottom-24 sm:bottom-14 lg:bottom-40 bg-white rounded-[20px] p-4 sm:p-[18px] shadow-2xl border border-white/90 z-20 text-left transition-transform hover:-translate-y-1 duration-200">
          {/* Title */}
          <h3 className="text-base sm:text-[17px] font-semibold text-shuttle-950 leading-tight">
            Happy Students
          </h3>

          {/* Rating & Count Row: 4.5 (240) ★ */}
          <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-shuttle-950 font-normal mt-1 mb-3">
            <span className="font-semibold text-shuttle-950">4.5</span>
            <span className="text-shuttle-400 font-normal">(240)</span>
            <svg
              className="w-4 h-4 fill-[#CBFC01] text-[#CBFC01] shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>

          {/* 7 Authentic Avatars + 2K+ Badge Row with Exact Figma Overlap */}
          <div className="flex items-center -space-x-2.5 sm:-space-x-3">
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[1]">
              <Image src="/images/happy-student-1.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[2]">
              <Image src="/images/happy-student-2.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[3]">
              <Image src="/images/happy-student-3.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[4]">
              <Image src="/images/happy-student-4.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[5]">
              <Image src="/images/happy-student-5.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[6]">
              <Image src="/images/happy-student-6.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden shrink-0 z-[7]">
              <Image src="/images/happy-student-7.png" alt="Student" fill className="object-cover" />
            </div>
            <div className="relative w-8 h-8 sm:w-[38px] sm:h-[38px] rounded-full bg-[#CBFC01] text-shuttle-950 font-bold text-xs sm:text-[13px] flex items-center justify-center shrink-0 z-[8] select-none">
              2K+
            </div>
          </div>
        </div>

        {/* Floating Card 3: Learning Progress (#1:1797) */}
        <div className="absolute right-2 sm:right-8 lg:right-[10%] xl:right-[25%] top-[28%] sm:top-[22%] bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl border border-white/80 z-20 text-left min-w-[170px] sm:min-w-[190px] transition-transform hover:-translate-y-1 duration-200">
          <span className="text-xs font-medium text-shuttle-400 block">Learning Progress</span>
          <span className="text-2xl sm:text-3xl font-bold text-shuttle-950 mt-1 block">55%</span>
          <div className="w-full h-2 bg-shuttle-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
          </div>
        </div>

        {/* Center Student Photo Cutout (#1:1796) Pinned to Bottom */}
        <div className="relative z-10 w-[600px] sm:w-[440px] lg:w-[600px] xl:w-[700px] h-[600px] aspect-[1444/1378] select-none pointer-events-none">
          <Image
            src="/images/hero-student-laptop.png"
            alt="Student holding laptop with headphones"
            width={900}
            height={900}
            className="object-contain object-bottom drop-shadow-2xl mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

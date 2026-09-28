"use client";

import * as React from "react";
import Image from "next/image";

export function ValuePropositionSection() {
  return (
    <section
      className="w-full py-16 sm:py-24 lg:py-28 relative overflow-hidden select-none"
      style={{
        background: `
          radial-gradient(circle 650px at 15% 15%, rgba(203, 252, 1, 0.28), transparent 70%),
          radial-gradient(circle 500px at 5% 50%, rgba(0, 59, 226, 0.08), transparent 70%),
          radial-gradient(circle 650px at 15% 90%, rgba(203, 252, 1, 0.35), transparent 70%),
          radial-gradient(circle 600px at 85% 85%, rgba(0, 59, 226, 0.10), transparent 70%),
          #FFFFFF
        `,
      }}
    >
      <div className="container-custom flex flex-col gap-16 sm:gap-24 lg:gap-32 px-4 sm:px-6">
        {/* Top Block: Student Journey (Text Left, Collage Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#040819] font-poppins leading-[1.2] tracking-tight">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="mt-4 sm:mt-5 text-xs sm:text-base text-shuttle-400 font-normal leading-relaxed max-w-[480px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Metrics: 12K Students, 70+ Courses, 16 Creators */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-14 mt-6 sm:mt-10">
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003BE2] font-poppins block">
                  12K
                </span>
                <span className="text-xs sm:text-sm text-shuttle-400 font-normal mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003BE2] font-poppins block">
                  70+
                </span>
                <span className="text-xs sm:text-sm text-shuttle-400 font-normal mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003BE2] font-poppins block">
                  16
                </span>
                <span className="text-xs sm:text-sm text-shuttle-400 font-normal mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Collage (Student + Floating Course Card + Progress Card + 3D Lime Spiral) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[480px] h-[390px] sm:h-[460px] lg:h-[500px] mx-auto flex items-end justify-center">
            {/* Floating Card 1 (Top Left, BEHIND Student: z-10): Mini Course Card */}
            <div className="absolute left-0 sm:-left-4 lg:-left-6 top-2 sm:top-4 lg:top-6 z-10 w-[175px] sm:w-[205px] lg:w-[225px] bg-white rounded-[20px] sm:rounded-[22px] p-2.5 sm:p-3.5 shadow-2xl border border-slate-100 text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-left">
              <div className="relative w-full h-[95px] sm:h-[110px] lg:h-[120px] rounded-[14px] sm:rounded-[16px] overflow-hidden mb-2 sm:mb-2.5">
                <Image
                  src="/images/course-thumb-figma.png"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
                {/* Floating Badges inside thumbnail */}
                <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 flex items-center gap-1 sm:gap-1.5 z-10">
                  <span className="bg-black/40 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/40 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full hidden sm:inline-block">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              <h4 className="text-xs sm:text-sm font-semibold text-[#040819] truncate leading-tight">
                Learn Figma from Basic
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#003BE2] font-medium mt-0.5">
                by purepearl studio
              </p>

              {/* Level Tag & Pink Circle Badge */}
              <div className="flex items-center gap-2 mt-1.5 sm:mt-2">
                <span className="inline-flex items-center gap-1 bg-[#F5F5F6] text-[#585A62] text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full">
                  <svg className="w-2.5 h-2.5 text-[#82868E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 19h4V9H4v10zm6 0h4V5h-4v14zm6 0h4v-7h-4v7z" />
                  </svg>
                  Beginner
                </span>
                <div className="w-4 h-4 rounded-full bg-[#FF7A8A]/30 border border-[#FF7A8A] flex items-center justify-center text-[8px] font-bold text-[#FF5A6E] shrink-0">
                  ★
                </div>
              </div>

              {/* Price */}
              <div className="mt-2 sm:mt-2.5 pt-1.5 sm:pt-2 border-t border-slate-100 flex items-baseline gap-1">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#003BE2]">$25</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-normal">lifetime</span>
              </div>
            </div>

            {/* Floating 3D Lime Zigzag (Top Right, BEHIND Progress card: z-10) */}
            <div className="absolute right-1 sm:right-4 lg:right-6 top-2 sm:top-4 lg:top-8 w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-10 pointer-events-none select-none">
              <Image
                src="/images/hero-lime-spiral.png"
                alt="3D Ornament"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Floating Card 2 (Right Side, IN FRONT of Student: z-30): Learning Progress Card */}
            <div className="absolute right-0 sm:-right-2 lg:-right-4 top-24 sm:top-32 lg:top-36 z-30 bg-white/95 backdrop-blur-md rounded-[18px] sm:rounded-[22px] p-3 sm:p-4 lg:p-5 shadow-2xl border border-white/80 min-w-[140px] sm:min-w-[170px] lg:min-w-[195px] text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-right">
              <span className="text-[10px] sm:text-xs font-medium text-slate-400 block leading-tight">
                Learning Progress
              </span>
              <span className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#040819] mt-0.5 sm:mt-1 block tracking-tight">
                55%
              </span>
              <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Central Student Photo (z-20, overlaps Course Card, tucks under Progress Card) */}
            <div className="relative z-20 w-[240px] sm:w-[320px] lg:w-[500px] xl:w-[800px] h-[660px] sm:h-[420px] lg:h-[400px] pointer-events-none">
              <Image
                src="/images/hero-student-laptop.png"
                alt="Student with laptop"
                width={900}
                height={900}
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Block: Creator Empowerment (Collage Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Collage (Creator + Total Revenue + Year to Date + Happy Students + 3D Lime Spiral) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[480px] h-[390px] sm:h-[460px] lg:h-[500px] mx-auto flex items-end justify-center order-2 lg:order-1">
            {/* Card 1 (Top Left Persian Blue, BEHIND Creator: z-10): Total Revenue */}
            <div className="absolute left-0 sm:-left-4 lg:-left-6 top-4 sm:top-8 lg:top-12 z-10 w-[245px] sm:w-[270px] lg:w-[240px] bg-[#003BE2] text-white rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 shadow-xl text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-left">
              <span className="text-xs sm:text-[13px] font-medium text-white/90 block leading-tight">
                Total Revenue
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/60 block mt-0.5">
                July 1-28
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-1.5 block tracking-tight">
                $120.29
              </span>
              <div className="w-full h-1.5 bg-white/20 rounded-full mt-2.5 sm:mt-3 overflow-hidden">
                <div className="h-full bg-[#CBFC01] rounded-full w-[65%]" />
              </div>
            </div>

            {/* Card 2 (Bottom Left Persian Blue, BEHIND Creator: z-10): Year to Date */}
            <div className="absolute left-0 sm:-left-4 lg:-left-6 top-32 sm:top-40 lg:top-48 z-10 w-[180px] sm:w-[170px] lg:w-[145px] bg-[#003BE2] text-white rounded-[18px] sm:rounded-[20px] p-3 sm:p-4 shadow-xl text-left transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-top-left">
              <span className="text-xs sm:text-[13px] font-medium text-white/90 block leading-tight">
                Year to Date
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/60 block mt-0.5">
                2023
              </span>
              <span className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-1.5 block tracking-tight">
                $1,200.38
              </span>
              <div className="mt-2 sm:mt-2.5">
                <span className="inline-block bg-[#CBFC01] text-black font-semibold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full">
                  +12
                </span>
              </div>
            </div>

            {/* Floating 3D Lime Zigzag (Right side, BEHIND Creator: z-10) */}
            <div className="absolute right-2 sm:right-6 lg:right-8 top-20 sm:top-28 lg:top-32 w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-10 pointer-events-none select-none">
              <Image
                src="/images/hero-lime-spiral.png"
                alt="3D Ornament"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Floating Card 3 (Bottom Right, IN FRONT of Creator: z-30): Happy Students Card */}
            <div className="absolute right-0 sm:-right-2 bottom-4 sm:bottom-8 lg:bottom-12 z-30 bg-white rounded-[18px] sm:rounded-[22px] p-3 sm:p-4 shadow-2xl border border-white/90 text-left min-w-[190px] sm:min-w-[210px] lg:min-w-[230px] transition-transform hover:-translate-y-1 duration-200 scale-90 sm:scale-100 origin-bottom-right">
              <span className="text-xs sm:text-[13px] font-semibold text-[#040819] block leading-tight">
                Happy Students
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1 mb-2 sm:mb-2.5">
                <span className="font-semibold text-[#040819]">4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <svg className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01] shrink-0" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[1] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-1.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[2] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-2.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[3] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-3.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[4] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-4.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[5] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-5.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[6] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-6.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 z-[7] border-2 border-white shadow-sm">
                  <Image src="/images/happy-student-7.png" alt="Student" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CBFC01] text-shuttle-950 font-bold text-[9px] sm:text-[11px] flex items-center justify-center shrink-0 z-[8] border-2 border-white shadow-sm select-none">
                  2K+
                </div>
              </div>
            </div>

            {/* Central Creator Photo Cutout (z-20, overlaps blue cards on left, tucks under Happy Students card) */}
            <div className="relative z-20 w-[240px] sm:w-[300px] lg:w-[540px] h-[360px] sm:h-[420px] lg:h-[460px] pointer-events-none">
              <Image
                src="/images/hero-student-laptop-women.png"
                alt="Creator"
                width={900}
                height={900}
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-semibold text-[#040819] font-poppins leading-[1.2] tracking-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="mt-4 sm:mt-5 text-xs sm:text-base text-shuttle-400 font-normal leading-relaxed max-w-[480px]">
              <strong className="text-[#040819] font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* 4 Bullet Points with Blue Circle Checkmark */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-3 h-3 text-white stroke-[2.5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-[#040819]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

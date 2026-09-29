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
          <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] h-[420px] sm:h-[480px] lg:h-[540px] mx-auto flex items-end justify-center">
            {/* Central Student Photo (z-20, overlaps Course Card, tucks under Progress Card) */}
            <div className="relative z-20 w-[280px] sm:w-[360px] lg:w-[460px] h-[360px] sm:h-[440px] lg:h-[500px] pointer-events-none">
              <Image
                src="/images/Student_Man.png"
                alt="Student with laptop"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 460px"
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Block: Creator Empowerment (Collage Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Collage (Creator + Total Revenue + Year to Date + Happy Students + 3D Lime Spiral) */}
          <div className="relative w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] h-[420px] sm:h-[480px] lg:h-[540px] mx-auto flex items-end justify-center order-2 lg:order-1">
            {/* Central Creator Photo Cutout (z-20, overlaps blue cards on left, tucks under Happy Students card) */}
            <div className="relative z-20 w-[480px] sm:w-[360px] lg:w-[460px] h-[360px] sm:h-[440px] lg:h-[500px] pointer-events-none">
              <Image
                src="/images/Student_Women.png"
                alt="Creator with laptop"
                fill
                sizes="(max-width: 640px) 380px, (max-width: 1024px) 460px, 460px"
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

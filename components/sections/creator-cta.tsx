"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export function CreatorCtaSection() {
  return (
    <section
      id="creator-cta"
      className="relative w-full bg-persian-800 py-16 sm:py-24 lg:py-28 overflow-hidden select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      {/* Floating 3D Ornaments */}

      {/* Top-Left: Neon Lime Spiral Ribbon */}
      <div className="absolute -left-10 sm:-left-6 lg:-left-18 top-0 sm:top-2 lg:-top-12 w-[100px] sm:w-[170px] lg:w-[220px] pointer-events-none select-none z-10 opacity-70 sm:opacity-100">
        <Image
          src="/images/hero-lime-spiral.png"
          alt="Neon Lime Spiral Ribbon"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Mid-Left: White Zigzag Ribbon */}
      <div className="absolute left-4 sm:left-16 lg:left-42 top-[12%] w-[50px] sm:w-[100px] lg:w-[200px] pointer-events-none select-none z-10 opacity-60 sm:opacity-100">
        <Image
          src="/images/hero-white-zigzag.png"
          alt="White Zigzag Ribbon"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Far Bottom-Left: White 3D Cone */}
      <div className="absolute -left-8 sm:-left-4 lg:-left-10 -bottom-8 sm:-bottom-6 lg:bottom-24 w-[80px] sm:w-[125px] lg:w-[155px] pointer-events-none select-none z-10 opacity-60 sm:opacity-100">
        <Image
          src="/images/cta-cone-2.png"
          alt="White 3D Cone"
          width={155}
          height={155}
          className="object-contain"
        />
      </div>

      {/* Bottom-Left: Neon Lime Torus Donut */}
      <div className="absolute left-6 sm:left-16 lg:left-24 -bottom-10 sm:-bottom-8 lg:-bottom-24 w-[140px] sm:w-[220px] lg:w-[280px] pointer-events-none select-none z-10 opacity-70 sm:opacity-100">
        <Image
          src="/images/cta-cone-3.png"
          alt="Neon Lime Torus"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>

      {/* Top-Right: Neon Lime Pyramid */}
      <div className="absolute right-12 sm:right-36 lg:right-52 top-4 sm:top-6 lg:top-8 w-[70px] sm:w-[120px] lg:w-[200px] pointer-events-none select-none z-10 opacity-70 sm:opacity-100">
        <Image
          src="/images/cta-cone-1.png"
          alt="Neon Lime 3D Pyramid"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      {/* Far Top-Right: White Cylinder */}
      <div className="absolute -right-8 sm:-right-4 lg:-right-28 top-0 sm:top-2 lg:top-4 w-[110px] sm:w-[180px] lg:w-[350px] pointer-events-none select-none z-10 opacity-60 sm:opacity-100">
        <Image
          src="/images/cta-cone-4.png"
          alt="White 3D Cylinder"
          width={350}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Bottom-Right: Neon Lime Spiral Ribbon */}
      <div className="absolute -right-6 sm:right-0 lg:right-6 -bottom-10 sm:-bottom-8 lg:-bottom-18 w-[100px] sm:w-[170px] lg:w-[220px] pointer-events-none select-none z-10 opacity-70 sm:opacity-100">
        <Image
          src="/images/hero-lime-spiral.png"
          alt="Neon Lime Spiral Ribbon"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Central Content */}
      <div className="container-custom relative z-20 text-center flex flex-col items-center px-4 sm:px-6">
        <h2 className="max-w-[820px] text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-white tracking-tight font-poppins leading-[1.2]">
          Unlock Your Potential as a<br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        <p className="max-w-[820px] mt-4 sm:mt-5 mb-8 text-xs sm:text-sm lg:text-base text-shuttle-100 font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link href="/register">
          <button
            type="button"
            className="h-[48px] sm:h-[52px] px-8 bg-[#CBFC01] hover:bg-[#b8e400] text-shuttle-950 font-medium text-sm sm:text-base rounded-full transition-all duration-200 cursor-pointer shadow-md select-none"
          >
            Join as Creator
          </button>
        </Link>
      </div>
    </section>
  );
}

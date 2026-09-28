"use client";

import * as React from "react";
import Image from "next/image";

export interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

const defaultPartnerLogos: PartnerLogo[] = [
  { id: 1, src: "/images/partner-1.svg", alt: "Partner brand 1" },
  { id: 2, src: "/images/partner-2.svg", alt: "Partner brand 2" },
  { id: 3, src: "/images/partner-3.svg", alt: "Partner brand 3" },
  { id: 4, src: "/images/partner-4.svg", alt: "Partner brand 4" },
  { id: 5, src: "/images/partner-5.svg", alt: "Partner brand 5" },
];

export function PartnerCarousel({ logos = defaultPartnerLogos }: { logos?: PartnerLogo[] }) {
  return (
    <section className="w-full bg-shuttle-50 py-8 sm:py-10 overflow-hidden border-b border-shuttle-200/60 select-none">
      <div className="container-custom px-4">
        <p className="text-center text-xs font-semibold text-shuttle-400 uppercase tracking-widest mb-6 sm:mb-8 select-none">
          Trusted by Creators and Students Worldwide
        </p>
      </div>

      {/* Infinite Carousel Slider with Left/Right Fading Edge Masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-10 sm:gap-16 lg:gap-24">
          {/* Repeat Sets for Seamless Infinite Loop */}
          {[1, 2, 3, 4].map((setNum) => (
            <div
              key={`marquee-set-${setNum}`}
              className="flex items-center gap-10 sm:gap-16 lg:gap-24 shrink-0"
              aria-hidden={setNum > 1 ? true : undefined}
            >
              {logos.map((partner) => (
                <div
                  key={`p${setNum}-${partner.id}`}
                  className="relative w-28 sm:w-36 h-8 sm:h-10 shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <Image src={partner.src} alt={partner.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

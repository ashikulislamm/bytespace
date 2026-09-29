import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* 1. Global Navigation Bar */}
      <Navbar variant="light-on-blue" />

      {/* 2. Error 404 Hero Section */}
      <main
        className="relative w-full flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] sm:min-h-[850px] bg-persian-800 bg-center bg-cover bg-no-repeat overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20 select-none"
        style={{
          backgroundImage: "url('/images/hero-bg-pattern.svg')",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Giant 404 Display with Lime-to-Transparent Vertical Gradient */}
          <h1
            className="font-poppins font-bold text-[200px] sm:text-[220px] md:text-[280px] lg:text-[380px] xl:text-[400px] leading-[0.85] tracking-tight select-none pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #D4FB20 0%, #CBFC01 30%, rgba(203, 252, 1, 0.45) 75%, rgba(203, 252, 1, 0.1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </h1>

          {/* Overlapping Main Headline */}
          <h2 className="relative z-20 -mt-8 sm:-mt-12 md:-mt-22 lg:-mt-16 font-poppins font-semibold text-white text-3xl sm:text-3xl md:text-4xl lg:text-[60px] xl:text-[62px] leading-[1.18] tracking-tight">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h2>

          {/* Subtitle / Help Text */}
          <p className="mt-5 sm:mt-7 text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed max-w-xl mx-auto">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#D4FB20] hover:bg-[#c3ea1a] active:scale-95 text-[#040819] font-medium text-xs sm:text-sm md:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* 3. Global Multi-Column Footer */}
      <Footer />
    </div>
  );
}

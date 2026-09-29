"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful registration
    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 600);
  };

  return (
    <div
      className="min-h-screen w-full bg-persian-800 flex items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-16 select-none overflow-x-hidden relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <div className="w-full max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Brand Logo, Copy & Visual Showcase */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between h-full pt-4 sm:pt-6 lg:pt-0">
          <div>
            {/* Electric Lime ByteSpace Logo Mark */}
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105"
              aria-label="Back to Home"
            >
              <Image
                src="/images/logo.svg"
                alt="ByteSpace"
                width={32}
                height={35}
                className="object-contain"
                priority
              />
            </Link>

            {/* Headline & Description */}
            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-white font-poppins tracking-tight">
                Sign up and come in
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-[420px]">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
              </p>
            </div>
          </div>

          {/* Visual Showcase Collage (AUTH_IMG.png) */}
          <div className="mt-6 sm:mt-10 relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[540px] aspect-[552/586] mx-auto lg:mx-0">
            <Image
              src="/images/AUTH_IMG.png"
              alt="ByteSpace Platform Showcase"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Column: Floating Registration Card */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[540px] bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/60">
            {/* Card Header */}
            <span className="text-sm font-medium text-[#003BE2] block mb-2">
              Create an Account
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#040819] font-poppins leading-[1.15] tracking-tight mb-8">
              Welcome to<br />ByteSpace
            </h1>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs sm:text-sm font-medium text-[#040819] mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full h-[52px] sm:h-[54px] px-5 bg-white border border-shuttle-200 rounded-[12px] sm:rounded-[14px] text-sm sm:text-base text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-[#040819] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full h-[52px] sm:h-[54px] px-5 bg-white border border-shuttle-200 rounded-[12px] sm:rounded-[14px] text-sm sm:text-base text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-medium text-[#040819] mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
                  className="w-full h-[52px] sm:h-[54px] px-5 bg-white border border-shuttle-200 rounded-[12px] sm:rounded-[14px] text-sm sm:text-base text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all"
                />
              </div>

              {/* Continue Button (Aligned to the Right) */}
              <div className="flex justify-end mt-4 mb-10 sm:mb-14">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[46px] sm:h-[48px] px-8 bg-[#CBFC01] hover:bg-[#b8e400] active:scale-95 text-[#040819] font-medium text-sm sm:text-base rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow flex items-center justify-center select-none disabled:opacity-70"
                >
                  {loading ? "Creating..." : "Continue"}
                </button>
              </div>

              {/* Bottom Login Link */}
              <p className="text-xs sm:text-sm text-shuttle-600 text-center font-normal">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#003BE2] hover:underline font-medium transition-colors"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

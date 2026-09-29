"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful login
    setTimeout(() => {
      setLoading(false);
      router.push("/");
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
                Sign in with ease
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-[420px]">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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

        {/* Right Column: Floating Login Card */}
        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[540px] bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/60">
            {/* Card Header */}
            <span className="text-sm font-medium text-[#003BE2] block mb-2">
              Sign In
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#040819] font-poppins leading-[1.15] tracking-tight mb-8">
              Welcome Back
            </h1>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

              {/* Sign In Button (Aligned to the Right) */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[46px] sm:h-[48px] px-8 bg-[#CBFC01] hover:bg-[#b8e400] active:scale-95 text-[#040819] font-medium text-sm sm:text-base rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow flex items-center justify-center select-none disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              </div>

              {/* Divider: or */}
              <div className="relative my-6 sm:my-8 flex items-center justify-center">
                <div className="w-full border-t border-shuttle-200" />
                <span className="absolute bg-white px-4 text-xs sm:text-sm text-shuttle-400 font-normal">
                  or
                </span>
              </div>

              {/* Social Auth Triggers: Facebook & Google */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-2xl border border-shuttle-200 flex items-center justify-center hover:bg-shuttle-50 active:scale-95 transition-all shadow-xs"
                  aria-label="Sign in with Facebook"
                >
                  <svg className="w-5 h-5 fill-current text-[#040819]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-2xl border border-shuttle-200 flex items-center justify-center hover:bg-shuttle-50 active:scale-95 transition-all shadow-xs"
                  aria-label="Sign in with Google"
                >
                  <svg className="w-5 h-5 text-[#040819]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.887C18.2 16.89 15.65 18.72 12.24 18.72c-3.71 0-6.72-3.01-6.72-6.72s3.01-6.72 6.72-6.72c1.78 0 3.32.65 4.51 1.72l3.22-3.22C18.01 1.95 15.34 1 12.24 1 6.16 1 1.2 5.96 1.2 12.04s4.96 11.04 11.04 11.04c6.35 0 10.56-4.47 10.56-10.75 0-.72-.08-1.39-.2-2.045H12.24z" />
                  </svg>
                </button>
              </div>

              {/* Bottom Registration Link */}
              <p className="text-xs sm:text-sm text-shuttle-600 text-center font-normal mt-4">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-persian-800 hover:underline font-medium transition-colors"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

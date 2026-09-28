"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const column1Links = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses?category=Featured" },
    { label: "Business", href: "/courses?category=Business" },
    { label: "IT", href: "/courses?category=IT+%26+Software" },
    { label: "Design", href: "/courses?category=Design" },
  ];

  const column2Links = [
    { label: "Development", href: "/courses?category=Development" },
    { label: "Marketing", href: "/courses?category=Marketing" },
    { label: "Photography", href: "/courses?category=Photography" },
    { label: "Finance", href: "/courses?category=Business" },
    { label: "Sport", href: "/courses" },
  ];

  const column3Links = [
    { label: "Become a Creator", href: "/#creator-cta" },
    { label: "Affiliate Program", href: "/courses" },
    { label: "Contact", href: "mailto:support@bytespace.com" },
    { label: "Help", href: "/courses" },
    { label: "About", href: "/courses/build-digital-asset" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t border-shuttle-100 pt-16 sm:pt-20 pb-12">
      <div className="container-custom">
        {/* Top Section: Newsletter (Left) & 3 Link Columns (Right) Matching Figma 1:1 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 xl:gap-24">
          {/* Left Column: Logo & Newsletter Subscription */}
          <div className="w-full lg:max-w-[490px] flex flex-col">
            <Logo variant="dark" />

            <p className="text-sm sm:text-base text-shuttle-900 leading-relaxed font-normal mt-6 mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Subscription Form: Separate Pill Input + Lime "Search" Pill Button */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-[340px] h-[50px] bg-white border border-shuttle-300 rounded-full px-6 text-sm sm:text-base text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:border-persian-800 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto h-[50px] px-8 bg-[#CBFC01] hover:bg-[#b8e400] text-shuttle-950 font-semibold text-sm sm:text-base rounded-full transition-colors cursor-pointer shrink-0 select-none shadow-xs"
              >
                {submitted ? "Joined" : "Search"}
              </button>
            </form>

            <p className="text-xs text-shuttle-500 font-normal leading-normal mt-3 max-w-[440px]">
              By subscribing, you agree to our{" "}
              <Link href="#" className="underline hover:text-persian-800">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Clean Link Columns Without Headers Matching Figma Screenshot */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pt-1 lg:pt-3">
            {/* Column 1 */}
            <ul className="flex flex-col gap-4 sm:gap-5">
              {column1Links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] text-shuttle-800 hover:text-persian-800 transition-colors font-normal whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col gap-4 sm:gap-5">
              {column2Links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] text-shuttle-800 hover:text-persian-800 transition-colors font-normal whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col gap-4 sm:gap-5">
              {column3Links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] text-shuttle-800 hover:text-persian-800 transition-colors font-normal whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-shuttle-200 mt-16 sm:mt-20 mb-8" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-shuttle-500 font-normal">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-persian-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

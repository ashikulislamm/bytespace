"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const browseLinks = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses?category=Featured" },
    { label: "Business", href: "/courses?category=Business" },
    { label: "IT", href: "/courses?category=IT+%26+Software" },
    { label: "Design", href: "/courses?category=Design" },
    { label: "Development", href: "/courses?category=Development" },
    { label: "Marketing", href: "/courses?category=Marketing" },
    { label: "Photography", href: "/courses?category=Photography" },
    { label: "Finance", href: "/courses?category=Business" },
    { label: "Sport", href: "/courses" },
  ];

  const platformLinks = [
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
    <footer className="w-full bg-white border-t border-shuttle-100 pt-20 pb-12">
      <div className="container-custom">
        {/* Top Section: Newsletter and Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          {/* Left Column: Brand & Newsletter (EL-705f10d1, width: 528px) */}
          <div className="w-full lg:max-w-[528px] flex flex-col gap-6">
            <Logo variant="dark" />

            <p className="text-sm text-shuttle-950 leading-relaxed font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-[359px] h-[52px] bg-white border border-shuttle-200 rounded-[12px] px-4 text-base text-shuttle-950 placeholder:text-shuttle-400 focus:outline-none focus:border-persian-800 focus:ring-2 focus:ring-persian-800/10 transition-all"
              />
              <Button
                type="submit"
                variant="primary"
                className="h-[52px] px-8 rounded-[24px] shrink-0 font-medium text-base text-shuttle-950"
              >
                {subscribed ? "Subscribed!" : "Search "}
              </Button>
            </form>

            <p className="text-xs text-shuttle-400 leading-normal">
              By subscribing, you agree to our{" "}
              <Link href="#" className="underline hover:text-persian-800">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Browse & Platform Links (EL-c309bf68) */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 lg:gap-24">
            {/* Column 1: Browse (EL-f04aec2d) */}
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-semibold text-shuttle-950">
                Browse
              </h4>
              <ul className="flex flex-col gap-3">
                {browseLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-shuttle-700 hover:text-persian-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div className="flex flex-col gap-5">
              <h4 className="text-base font-semibold text-shuttle-950">
                Platform
              </h4>
              <ul className="flex flex-col gap-3">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-shuttle-700 hover:text-persian-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line (EL-990de18a) */}
        <div className="w-full h-px bg-shuttle-200 mt-16 mb-8" />

        {/* Bottom Bar: Copyright & Legal (EL-91644f66) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-shuttle-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
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

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  variant?: "light-on-blue" | "dark-on-light" | "auto";
  className?: string;
}

export function Navbar({ variant = "auto", className }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Pages with Persian Blue Hero background
  const hasDarkBlueHero =
    pathname === "/" ||
    pathname.startsWith("/courses") ||
    pathname.startsWith("/creators");

  const effectiveVariant =
    variant === "auto"
      ? hasDarkBlueHero && !scrolled
        ? "light-on-blue"
        : "dark-on-light"
      : variant;

  const isLight = effectiveVariant === "light-on-blue";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators/purepearl-studio" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-shuttle-200/80 py-4"
          : isLight
          ? "bg-transparent py-6 lg:py-8"
          : "bg-white border-b border-shuttle-100 py-6",
        className
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo variant={isLight && !scrolled ? "light" : "dark"} />
        </div>

        {/* Center: Desktop Navigation Links (EL-400d42ed) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors select-none",
                  isLight && !scrolled
                    ? isActive
                      ? "text-lime-400 font-semibold"
                      : "text-shuttle-50 hover:text-white"
                    : isActive
                    ? "text-persian-800 font-semibold"
                    : "text-shuttle-700 hover:text-shuttle-950"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions & Auth Triggers (EL-d04e3250) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Trigger */}
          <Link
            href="/courses"
            className={cn(
              "p-2 rounded-full transition-colors",
              isLight && !scrolled
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-shuttle-700 hover:text-shuttle-950 hover:bg-shuttle-50"
            )}
            aria-label="Search courses"
          >
            <Search className="w-5 h-5" />
          </Link>

          {/* Shopping Bag Trigger (1:98) */}
          <button
            type="button"
            className={cn(
              "relative p-2 rounded-full transition-colors cursor-pointer",
              isLight && !scrolled
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-shuttle-700 hover:text-shuttle-950 hover:bg-shuttle-50"
            )}
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-lime-400" />
          </button>

          {/* Sign In Link */}
          <Link
            href="/login"
            className={cn(
              "text-base font-medium px-4 py-2 rounded-full transition-colors select-none",
              isLight && !scrolled
                ? "text-white hover:text-lime-400"
                : "text-shuttle-800 hover:text-persian-800"
            )}
          >
            Sign In
          </Link>

          {/* Join Us Button (Primary Lime Action) */}
          <Link href="/register">
            <Button
              variant="primary"
              size="default"
              className="px-6 py-2.5 text-base font-medium shadow-sm hover:shadow"
            >
              Join Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/courses"
            className={cn(
              "p-2 rounded-full",
              isLight && !scrolled ? "text-white" : "text-shuttle-950"
            )}
            aria-label="Search courses"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-xl transition-colors",
              isLight && !scrolled
                ? "text-white hover:bg-white/10"
                : "text-shuttle-950 hover:bg-shuttle-100"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen ? (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white border-b border-shuttle-200 shadow-xl p-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-persian-800 bg-persian-50 font-semibold"
                    : "text-shuttle-800 hover:bg-shuttle-50"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-shuttle-100 flex flex-col gap-3">
              <Link href="/login" className="w-full">
                <Button variant="secondary" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button variant="primary" className="w-full justify-center">
                  Join Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

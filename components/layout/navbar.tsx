"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  variant?: "light-on-blue" | "dark-on-light" | "auto";
  className?: string;
}

export function Navbar({ variant = "auto", className }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

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
          ? "bg-transparent py-7 lg:py-9"
          : "bg-white border-b border-shuttle-100 py-6",
        className
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Logo variant={isLight && !scrolled ? "light" : "dark"} />
        </div>

        {/* Center: Desktop Navigation Links with Smooth Color Transition */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <div key={link.href} className="relative py-1">
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-normal transition-colors duration-300 select-none block",
                    isLight && !scrolled
                      ? isActive
                        ? "text-white font-medium"
                        : "text-white/90 hover:text-lime-800"
                      : isActive
                      ? "text-persian-800 font-semibold"
                      : "text-shuttle-700 hover:text-lime-800"
                  )}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: Actions & Auth Triggers with Smooth Hover States */}
        <div className="hidden md:flex items-center gap-8">
          {/* Login Link */}
          <Link
            href="/login"
            className={cn(
              "text-base font-normal transition-colors duration-300 select-none py-1 relative block",
              isLight && !scrolled
                ? "text-white hover:text-lime-800"
                : "text-shuttle-800 hover:text-lime-800"
            )}
          >
            Login
          </Link>

          {/* Register Link */}
          <Link
            href="/register"
            className={cn(
              "text-base font-normal transition-colors duration-300 select-none py-1 relative block",
              isLight && !scrolled
                ? "text-white hover:text-lime-800"
                : "text-shuttle-800 hover:text-lime-800"
            )}
          >
            Register
          </Link>

          {/* Shopping Bag Trigger with smooth hover */}
          <button
            type="button"
            className={cn(
              "relative p-2 rounded-full transition-colors duration-300 cursor-pointer",
              isLight && !scrolled
                ? "text-white hover:text-lime-800"
                : "text-shuttle-700 hover:text-lime-800"
            )}
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
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
        <div className="md:hidden absolute top-full inset-x-0 bg-white border-b border-shuttle-200 shadow-xl p-6 transition-all z-50">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium py-2 px-3 rounded-lg transition-colors duration-300",
                  pathname === link.href
                    ? "text-persian-800 bg-persian-50 font-semibold"
                    : "text-shuttle-800 hover:text-lime-800 hover:bg-shuttle-50"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-shuttle-100 flex flex-col gap-3">
              <Link href="/login" className="w-full">
                <button type="button" className="w-full py-3 text-shuttle-950 font-medium hover:text-lime-800 transition-colors duration-300">
                  Login
                </button>
              </Link>
              <Link href="/register" className="w-full">
                <button type="button" className="w-full py-3 bg-lime-400 hover:bg-lime-800 hover:text-white text-shuttle-950 font-medium rounded-full transition-colors duration-300">
                  Register
                </button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

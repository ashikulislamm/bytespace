import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

export interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function CategoryPill({
  label,
  isActive = false,
  onClick,
  className,
  href,
}: CategoryPillProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
    isActive
      ? "bg-[#CBFC01] text-shuttle-950 font-semibold shadow-xs"
      : "bg-[#F4F5F7] text-shuttle-800 hover:bg-shuttle-200 hover:text-shuttle-950",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
}

export interface CategoryCardProps {
  category: {
    id: string;
    name: string;
  };
  className?: string;
}

function getCategoryIcon(name: string) {
  switch (name.toLowerCase()) {
    case "design":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "development":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M9.5 9.5L8 12l1.5 2.5" />
          <path d="M14.5 9.5L16 12l-1.5 2.5" />
        </svg>
      );
    case "it & software":
    case "it":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="4" width="17" height="11" rx="2" />
          <path d="M2 19h20" />
        </svg>
      );
    case "business":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      );
    case "marketing":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      );
    case "photography":
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-shuttle-950"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/courses?category=${encodeURIComponent(category.name)}`}
      className={cn(
        "group flex flex-col items-center justify-center p-6 sm:p-7 bg-white border border-shuttle-200/90 rounded-[24px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-shuttle-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-[#CBFC01] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs">
        {getCategoryIcon(category.name)}
      </div>
      <h4 className="text-base font-medium text-shuttle-950 group-hover:text-persian-800 transition-colors">
        {category.name}
      </h4>
    </Link>
  );
}

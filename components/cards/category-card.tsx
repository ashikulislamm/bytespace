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
    "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
    isActive
      ? "bg-persian-800 text-white shadow-sm border border-transparent"
      : "bg-white text-shuttle-700 border border-shuttle-200 hover:bg-shuttle-50 hover:text-shuttle-950 hover:border-shuttle-300",
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
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/courses?category=${encodeURIComponent(category.name)}`}
      className={cn(
        "group flex flex-col items-center justify-center p-6 bg-white border border-shuttle-200 rounded-[24px] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-persian-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-persian-50 text-persian-800 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-shuttle-950">
        <span className="text-xl font-bold">{category.name[0]}</span>
      </div>
      <h4 className="text-base font-semibold text-shuttle-950 group-hover:text-persian-800 transition-colors">
        {category.name}
      </h4>
      {category.courseCount ? (
        <p className="mt-1 text-xs text-shuttle-400 font-medium">
          {category.courseCount}+ Courses
        </p>
      ) : null}
    </Link>
  );
}

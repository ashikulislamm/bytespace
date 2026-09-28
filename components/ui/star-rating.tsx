import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StarRatingProps {
  rating: number; // e.g. 4.5 or 4.7
  totalStars?: number;
  showScore?: boolean;
  reviewsCount?: number;
  size?: "sm" | "md" | "lg";
  starColor?: "blue" | "lime" | "amber";
  className?: string;
}

export function StarRating({
  rating,
  totalStars = 5,
  showScore = true,
  reviewsCount,
  size = "md",
  starColor = "blue",
  className,
}: StarRatingProps) {
  const sizeMap = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const colorMap = {
    blue: "text-persian-800 fill-persian-800",
    lime: "text-lime-500 fill-lime-500",
    amber: "text-amber-400 fill-amber-400",
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: totalStars }).map((_, idx) => {
          const isFilled = idx + 1 <= Math.round(rating);
          return (
            <Star
              key={idx}
              className={cn(
                sizeMap[size],
                isFilled
                  ? colorMap[starColor]
                  : "text-shuttle-200 fill-transparent stroke-shuttle-300"
              )}
            />
          );
        })}
      </div>
      {showScore ? (
        <span className="text-sm font-semibold text-shuttle-950 ml-0.5">
          {rating.toFixed(1)}
        </span>
      ) : null}
      {reviewsCount !== undefined ? (
        <span className="text-xs text-shuttle-500">
          ({reviewsCount})
        </span>
      ) : null}
    </div>
  );
}

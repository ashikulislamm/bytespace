import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarStackProps {
  avatars: string[];
  extraCount?: number | string;
  size?: "sm" | "md";
  className?: string;
}

export function AvatarStack({
  avatars,
  extraCount,
  size = "sm",
  className,
}: AvatarStackProps) {
  const sizeClasses = size === "sm" ? "w-6 h-6 text-[10px]" : "w-8 h-8 text-xs";
  const displayAvatars = avatars.slice(0, 4);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <div className="flex items-center -space-x-2">
        {displayAvatars.map((src, idx) => (
          <div
            key={idx}
            className={cn(
              "relative rounded-full border-2 border-white overflow-hidden bg-shuttle-100 shrink-0",
              sizeClasses
            )}
          >
            <Image
              src={src}
              alt="Student avatar"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
        ))}
        {extraCount ? (
          <div
            className={cn(
              "relative rounded-full border-2 border-white bg-shuttle-950 text-white font-medium flex items-center justify-center shrink-0",
              sizeClasses
            )}
          >
            +{extraCount}
          </div>
        ) : null}
      </div>
    </div>
  );
}

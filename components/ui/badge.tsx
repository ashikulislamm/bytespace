import * as React from "react";
import { cn } from "@/lib/utils";
import { Signal, SignalLow, SignalMedium } from "lucide-react";
import type { DifficultyLevel } from "@/lib/types";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "active" | "lime" | "frosted" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-shuttle-50 text-shuttle-700 border border-shuttle-200 hover:bg-shuttle-100",
    active: "bg-persian-800 text-white border-transparent",
    lime: "bg-lime-400 text-shuttle-950 border-transparent font-medium",
    frosted: "glass-frosted text-shuttle-950 border border-white/40 shadow-sm",
    outline: "bg-transparent text-shuttle-800 border border-shuttle-200",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs rounded-full",
    md: "px-4 py-1.5 text-sm rounded-full",
    lg: "px-6 py-2 text-base rounded-full",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Specialized Difficulty Badge with cellular signal icon
 */
export function DifficultyBadge({
  level,
  className,
}: {
  level: DifficultyLevel;
  className?: string;
}) {
  const getIcon = () => {
    switch (level) {
      case "Beginner":
        return <SignalLow className="w-3.5 h-3.5 text-persian-800" />;
      case "Intermediate":
        return <SignalMedium className="w-3.5 h-3.5 text-persian-800" />;
      case "Advanced":
        return <Signal className="w-3.5 h-3.5 text-persian-800" />;
      default:
        return <SignalLow className="w-3.5 h-3.5 text-persian-800" />;
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5 text-xs text-shuttle-800 font-medium", className)}>
      {getIcon()}
      <span>{level}</span>
    </div>
  );
}

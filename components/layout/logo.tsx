import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 select-none",
        className
      )}
    >
      <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo.svg"
          alt="ByteSpace Icon"
          width={32}
          height={32}
          className="object-contain"
          priority
        />
      </div>
      <span
        className={cn(
          "font-bold text-2xl tracking-tight",
          isLight ? "text-white" : "text-shuttle-950"
        )}
        style={{ fontFamily: "var(--font-clash), sans-serif" }}
      >
        ByteSpace
      </span>
    </Link>
  );
}

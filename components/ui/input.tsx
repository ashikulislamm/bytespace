import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ReactNode;
  trailingElement?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", leadingIcon, trailingElement, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-center w-full h-[52px] bg-white border border-shuttle-200 rounded-[12px] px-4 transition-all duration-200 focus-within:border-persian-800 focus-within:ring-2 focus-within:ring-persian-800/10",
            error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/10",
            className
          )}
        >
          {leadingIcon ? (
            <div className="flex items-center justify-center mr-3 text-shuttle-400 shrink-0">
              {leadingIcon}
            </div>
          ) : null}
          <input
            type={type}
            ref={ref}
            className="w-full h-full bg-transparent text-shuttle-950 text-base placeholder:text-shuttle-400 focus:outline-none"
            {...props}
          />
          {trailingElement ? (
            <div className="flex items-center ml-2 shrink-0">
              {trailingElement}
            </div>
          ) : null}
        </div>
        {error ? <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";

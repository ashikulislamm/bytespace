import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark" | "brand";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-lime-400 text-shuttle-950 hover:bg-[#8CB400] shadow-sm hover:shadow",
      secondary:
        "bg-white text-shuttle-950 border border-shuttle-200 hover:bg-shuttle-50 hover:border-shuttle-400",
      ghost:
        "bg-transparent text-shuttle-700 hover:text-persian-800 hover:bg-persian-50",
      dark: "bg-shuttle-950 text-white hover:bg-shuttle-800 shadow-sm",
      brand: "bg-persian-800 text-white hover:bg-persian-900 shadow-sm",
    };

    const sizeStyles = {
      default: "px-6 py-3 text-base rounded-[24px] leading-snug",
      sm: "px-4 py-2 text-sm rounded-[20px] leading-tight",
      lg: "px-8 py-3.5 text-lg rounded-[24px] leading-normal",
      icon: "w-11 h-11 rounded-full p-0 flex items-center justify-center aspect-square",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

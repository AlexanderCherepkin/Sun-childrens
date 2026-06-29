import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
      {
        "bg-primary-dark text-white shadow-md hover:bg-[#5e2300] hover:shadow-lg active:scale-[0.98]":
          variant === "primary",
        "bg-secondary text-foreground shadow-sm hover:brightness-95 active:scale-[0.98]":
          variant === "secondary",
        "border-2 border-primary-dark text-primary-dark hover:bg-primary-light active:scale-[0.98]":
          variant === "outline",
        "text-primary-dark hover:underline underline-offset-2": variant === "ghost",
        "h-10 px-5 text-sm": size === "sm",
        "h-12 px-6 text-base": size === "md",
        "h-14 px-8 text-lg": size === "lg",
        "w-full": fullWidth,
      },
      className
    );

    if (href) {
      return (
        <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

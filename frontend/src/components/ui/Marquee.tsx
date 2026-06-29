"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "./marquee.css";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = "normal",
  className,
  ...props
}: MarqueeProps) {
  return (
    <div data-speed={speed} className={cn("marquee-root group flex overflow-hidden", className)} {...props}>
      <div
        className={cn(
          "marquee-track flex shrink-0 items-center justify-around gap-8",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          }
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "marquee-track flex shrink-0 items-center justify-around gap-8",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          }
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

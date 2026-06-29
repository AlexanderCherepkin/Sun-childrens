"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  visibleClassName?: string;
  hiddenClassName?: string;
}

export function ScrollReveal({
  children,
  className,
  visibleClassName = "opacity-100 translate-y-0",
  hiddenClassName = "opacity-0 translate-y-6",
}: ScrollRevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn(className, visible ? visibleClassName : hiddenClassName)}>
      {children}
    </div>
  );
}

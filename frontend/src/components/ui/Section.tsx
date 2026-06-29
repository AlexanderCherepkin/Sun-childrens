import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  container?: boolean;
  background?: "white" | "surface" | "primary-light" | "accent-light" | "primary";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, container = true, background = "white", className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "section",
          {
            "bg-background": background === "white",
            "bg-surface": background === "surface",
            "bg-primary-light": background === "primary-light",
            "bg-accent-light": background === "accent-light",
            "bg-primary": background === "primary",
          },
          className
        )}
        {...props}
      >
        {container ? <Container>{children}</Container> : children}
      </section>
    );
  }
);
Section.displayName = "Section";

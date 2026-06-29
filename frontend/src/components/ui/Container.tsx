import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({ className, as: Component = "div", children, ...props }: ContainerProps) {
  return (
    <Component className={cn("container-app", className)} {...props}>
      {children}
    </Component>
  );
}

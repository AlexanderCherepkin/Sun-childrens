"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  open: string | null;
  setOpen: (value: string | null) => void;
}>({ open: null, setOpen: () => {} });

function useAccordion() {
  return React.useContext(AccordionContext);
}

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: "single"; collapsible?: boolean }
>(({ children, type, collapsible, ...props }, ref) => {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div ref={ref} data-type={type} data-collapsible={collapsible} {...props}>{children}</div>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, value, ...props }, ref) => (
  <div ref={ref} data-value={value} className={cn("border-b border-border last:border-b-0", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const itemValue = props["aria-controls"] || "";
  const { open, setOpen } = useAccordion();
  const isOpen = open === itemValue;

  return (
    <h3 className="flex">
      <button
        ref={ref}
        type="button"
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? null : itemValue)}
        className={cn(
          "flex flex-1 items-center justify-between py-5 text-left text-lg font-medium transition-all hover:text-primary-dark [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-state={isOpen ? "open" : "closed"}
          className="h-5 w-5 shrink-0 text-muted transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </h3>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const itemValue = props.id || "";
  const { open } = useAccordion();
  const isOpen = open === itemValue;

  return (
    <div
      ref={ref}
      id={itemValue}
      role="region"
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "grid transition-all duration-200 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
      {...props}
    >
      <div className={cn("overflow-hidden", className)}>
        <div className="pb-5 text-muted">{children}</div>
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

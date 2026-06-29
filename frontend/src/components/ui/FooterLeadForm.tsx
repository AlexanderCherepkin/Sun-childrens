"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { LeadFormProps } from "@/components/ui/LeadForm";

const LeadForm = dynamic(() => import("@/components/ui/LeadForm").then((m) => m.LeadForm), {
  ssr: false,
  loading: () => <LeadFormSkeleton />,
});

const RecaptchaProvider = dynamic(
  () => import("@/components/layout/RecaptchaProvider").then((m) => m.RecaptchaProvider),
  { ssr: false }
);

function LeadFormSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-12 rounded-lg bg-white/10" />
      <div className="h-12 rounded-lg bg-white/10" />
      <div className="h-12 rounded-lg bg-white/10" />
      <div className="h-12 rounded-lg bg-white/10" />
      <div className="h-12 rounded-lg bg-secondary/20" />
    </div>
  );
}

export function FooterLeadForm(props: LeadFormProps) {
  const [visible, setVisible] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!wrapperRef.current || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px", threshold: 0 }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={wrapperRef}>
      {visible ? (
        <RecaptchaProvider>
          <LeadForm {...props} />
        </RecaptchaProvider>
      ) : (
        <LeadFormSkeleton />
      )}
    </div>
  );
}

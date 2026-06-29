"use client";

import * as React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const registry: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  MapSection: () => import("./MapSection").then((m) => ({ default: m.MapSection })),
  FinancialSection: () => import("./FinancialSection").then((m) => ({ default: m.FinancialSection })),
  DirectionsSection: () => import("./DirectionsSection").then((m) => ({ default: m.DirectionsSection })),
  LeadFormSection: () => import("./LeadFormSection").then((m) => ({ default: m.LeadFormSection })),
  FormatsSection: () => import("./FormatsSection").then((m) => ({ default: m.FormatsSection })),
  TimelineSection: () => import("./TimelineSection").then((m) => ({ default: m.TimelineSection })),
  LocationSection: () => import("./LocationSection").then((m) => ({ default: m.LocationSection })),
  TourSection: () => import("./TourSection").then((m) => ({ default: m.TourSection })),
  CasesSection: () => import("./CasesSection").then((m) => ({ default: m.CasesSection })),
  PackageSection: () => import("./PackageSection").then((m) => ({ default: m.PackageSection })),
  TeamSection: () => import("./TeamSection").then((m) => ({ default: m.TeamSection })),
  TrainingSection: () => import("./TrainingSection").then((m) => ({ default: m.TrainingSection })),
  MarketingSection: () => import("./MarketingSection").then((m) => ({ default: m.MarketingSection })),
  MethodologySection: () => import("./MethodologySection").then((m) => ({ default: m.MethodologySection })),
  QualitySection: () => import("./QualitySection").then((m) => ({ default: m.QualitySection })),
  AwardsSection: () => import("./AwardsSection").then((m) => ({ default: m.AwardsSection })),
  MissionSection: () => import("./MissionSection").then((m) => ({ default: m.MissionSection })),
  VideoReviewsSection: () => import("./VideoReviewsSection").then((m) => ({ default: m.VideoReviewsSection })),
  B2CReviewsSection: () => import("./B2CReviewsSection").then((m) => ({ default: m.B2CReviewsSection })),
  LeadMagnetSection: () => import("./LeadMagnetSection").then((m) => ({ default: m.LeadMagnetSection })),
  FaqSection: () => import("./FaqSection").then((m) => ({ default: m.FaqSection })),
};

export type LazySectionName = keyof typeof registry;

interface LazySectionProps {
  name: LazySectionName;
  minHeight?: string;
}

export function LazySection({ name, minHeight = "400px" }: LazySectionProps) {
  const load = registry[name];
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [Component, setComponent] = React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    if (visible && !Component) {
      load().then((m) => setComponent(() => m.default));
    }
  }, [visible, Component, load]);

  return <div ref={ref} style={{ minHeight }} className="lazy-section-placeholder">{Component ? <Component /> : null}</div>;
}

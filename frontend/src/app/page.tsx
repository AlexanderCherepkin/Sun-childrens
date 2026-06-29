import { HeroSection } from "@/components/sections/HeroSection";
import { AboutBrandSection } from "@/components/sections/AboutBrandSection";
import { Footer } from "@/components/layout/Footer";
import { LazySection } from "@/components/sections/LazySection";
import { getSiteSettings } from "@/lib/api";

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <HeroSection />
      <AboutBrandSection />
      <LazySection name="MapSection" minHeight="700px" />
      <LazySection name="FinancialSection" minHeight="500px" />
      <LazySection name="DirectionsSection" minHeight="500px" />
      <LazySection name="FormatsSection" minHeight="600px" />
      <LazySection name="TimelineSection" minHeight="700px" />
      <LazySection name="LocationSection" minHeight="500px" />
      <LazySection name="TourSection" minHeight="600px" />
      <LazySection name="CasesSection" minHeight="500px" />
      <LazySection name="LeadFormSection" minHeight="600px" />
      <LazySection name="PackageSection" minHeight="500px" />
      <LazySection name="TeamSection" minHeight="600px" />
      <LazySection name="TrainingSection" minHeight="500px" />
      <LazySection name="MarketingSection" minHeight="600px" />
      <LazySection name="MethodologySection" minHeight="500px" />
      <LazySection name="QualitySection" minHeight="500px" />
      <LazySection name="AwardsSection" minHeight="400px" />
      <LazySection name="MissionSection" minHeight="500px" />
      <LazySection name="VideoReviewsSection" minHeight="600px" />
      <LazySection name="B2CReviewsSection" minHeight="600px" />
      <LazySection name="LeadMagnetSection" minHeight="500px" />
      <LazySection name="FaqSection" minHeight="500px" />
      <Footer settings={settings || {}} />
    </>
  );
}

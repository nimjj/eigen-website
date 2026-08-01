import { Hero } from "./components/hero";
import { MissionVision } from "./components/mission-vision";
import { CapabilitiesGrid } from "./components/capabilities-grid";
import { CTASection } from "./components/cta-section";

export function AboutPage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <CapabilitiesGrid />
      <CTASection />
    </>
  );
}

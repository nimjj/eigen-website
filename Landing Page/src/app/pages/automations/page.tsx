import { Hero } from "./components/hero";
import { ThreePillars } from "./components/three-pillars";
import { IntegrationMarquee } from "./components/integration-marquee";
import { CoreCapabilities } from "./components/core-capabilities";
import { RoiAnalytics } from "./components/roi-analytics";
import { LifecycleManagement } from "./components/lifecycle-management";
import { ComplianceBand } from "./components/compliance-band";
import { CTABlock } from "./components/cta-block";

export function AutomationsPage() {
  return (
    <>
      <Hero />
      <ThreePillars />
      <IntegrationMarquee />
      <CoreCapabilities />
      <RoiAnalytics />
      <LifecycleManagement />
      <ComplianceBand />
      <CTABlock />
    </>
  );
}

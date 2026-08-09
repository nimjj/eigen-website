import { SEO } from "../../components/seo";
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
      <SEO
        title="Enterprise Automations & RPA — eigen."
        description="Self-executing RPA workflows, self-hosted n8n pipelines, and cognitive AI agents running 24/7."
        canonical="https://ei-gen.tech/services/automations"
      />
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

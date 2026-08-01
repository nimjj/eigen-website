import { Hero } from "./components/hero";
import { CoreThree } from "./components/core-three";
import { IndustryMarquee } from "./components/industry-marquee";
import { BidirectionalPipelines } from "./components/bidirectional-pipelines";
import { ExpertAuditing } from "./components/expert-auditing";
import { LifecycleManagement } from "./components/lifecycle-management";
import { CTACard } from "./components/cta-card";

export function CrmOrchestrationPage() {
  return (
    <>
      <Hero />
      <CoreThree />
      <IndustryMarquee />
      <BidirectionalPipelines />
      <ExpertAuditing />
      <LifecycleManagement />
      <CTACard />
    </>
  );
}

import { Hero } from "./components/hero";
import { FrontEndIntelligence } from "./components/front-end-intelligence";
import { EcosystemOrchestration } from "./components/ecosystem-orchestration";
import { EngineeringCore } from "./components/engineering-core";
import { TechMarquee } from "./components/tech-marquee";
import { CTABlock } from "./components/cta-block";

export function AIOrchestrationPage() {
  return (
    <>
      <Hero />
      <FrontEndIntelligence />
      <EcosystemOrchestration />
      <EngineeringCore />
      <TechMarquee />
      <CTABlock />
    </>
  );
}

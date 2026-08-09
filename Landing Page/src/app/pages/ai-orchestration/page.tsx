import { SEO } from "../../components/seo";
import { Hero } from "./components/hero";
import { FrontEndIntelligence } from "./components/front-end-intelligence";
import { EcosystemOrchestration } from "./components/ecosystem-orchestration";
import { EngineeringCore } from "./components/engineering-core";
import { TechMarquee } from "./components/tech-marquee";
import { CTABlock } from "./components/cta-block";

export function AIOrchestrationPage() {
  return (
    <>
      <SEO
        title="AI Orchestration & LLM Solutions — eigen.tech"
        description="Sovereign AI architectures, RAG pipelines, CUDA kernel optimization, and custom ML fine-tuning."
        canonical="https://ei-gen.tech/services/ai-orchestration"
      />
      <Hero />
      <FrontEndIntelligence />
      <EcosystemOrchestration />
      <EngineeringCore />
      <TechMarquee />
      <CTABlock />
    </>
  );
}

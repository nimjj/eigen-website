import { SEO } from "../../components/seo";
import { Hero } from "../../components/hero";
import { BentoGrid } from "../../components/bento-grid";
import { IntegrationMarquee } from "../../components/integration-marquee";
import { TechStack } from "../../components/tech-stack";
import { Mandate } from "../../components/mandate";
import { FinalCTA } from "../../components/final-cta";

export function HomePage() {
  return (
    <>
      <SEO
        title="ei-gen.tech — Applied AI Orchestration & Cloud Infrastructure"
        description="We engineer custom AI orchestration, robust cloud infrastructure & seamless platform integrations so your tools work for you, not against you."
        canonical="https://ei-gen.tech/"
      />
      <Hero />
      <BentoGrid />
      <IntegrationMarquee />
      <TechStack />
      <Mandate />
      <FinalCTA />
    </>
  );
}

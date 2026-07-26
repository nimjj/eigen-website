import { Hero } from "../../components/hero";
import { BentoGrid } from "../../components/bento-grid";
import { IntegrationMarquee } from "../../components/integration-marquee";
import { TechStack } from "../../components/tech-stack";
import { Mandate } from "../../components/mandate";
import { FinalCTA } from "../../components/final-cta";

export function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <IntegrationMarquee />
      <TechStack />
      <Mandate />
      <FinalCTA />
    </>
  );
}

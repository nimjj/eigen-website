import { SEO } from "../../components/seo";
import { Hero } from "../../components/hero";
import { IntegrationMarquee } from "../../components/integration-marquee";
import { FloatingCollage } from "../../components/floating-collage";
import { BentoGrid } from "../../components/bento-grid";
import { SolutionsShowcase } from "../../components/solutions-showcase";
import { TechStack } from "../../components/tech-stack";
import { Testimonial } from "../../components/testimonial";
import { FinalCTA } from "../../components/final-cta";

export function HomePage() {
  return (
    <>
      <SEO
        title="eigen. — Applied AI Orchestration & Cloud Infrastructure"
        description="We engineer custom AI orchestration, robust cloud infrastructure & seamless platform integrations so your tools work for you, not against you."
        canonical="https://ei-gen.tech/"
      />
      <Hero />
      <IntegrationMarquee />
      <FloatingCollage />
      <BentoGrid />
      <SolutionsShowcase />
      <TechStack />
      <Testimonial />
      <FinalCTA />
    </>
  );
}



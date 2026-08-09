import { SEO } from "../../components/seo";
import { Hero } from "./components/hero";
import { MissionVision } from "./components/mission-vision";
import { CapabilitiesGrid } from "./components/capabilities-grid";
import { CTASection } from "./components/cta-section";

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — eigen."
        description="Learn about our purpose, mission, and pragmatic engineering approach to enterprise AI, cloud architecture, and automation."
        canonical="https://ei-gen.tech/about"
      />
      <Hero />
      <MissionVision />
      <CapabilitiesGrid />
      <CTASection />
    </>
  );
}

import { SEO } from "../../components/seo";
import { Hero } from "./components/hero";
import { MissionVision } from "./components/mission-vision";
import { CorePhilosophy } from "./components/core-philosophy";
import { CapabilitiesGrid } from "./components/capabilities-grid";
import { LeadershipExpertise } from "./components/leadership-expertise";
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
      <CorePhilosophy />
      <CapabilitiesGrid />
      <LeadershipExpertise />
      <CTASection />
    </>
  );
}


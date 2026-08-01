import { Hero } from "./components/hero";
import { CorePhilosophy } from "./components/core-philosophy";
import { LeadershipExpertise } from "./components/leadership-expertise";
import { CTASection } from "./components/cta-section";

export function AboutPage() {
  return (
    <>
      <Hero />
      <CorePhilosophy />
      <LeadershipExpertise />
      <CTASection />
    </>
  );
}

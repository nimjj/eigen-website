import { Hero } from "./components/hero";
import { CloudMarquee } from "./components/cloud-marquee";
import { AwsEcosystem } from "./components/aws-ecosystem";
import { DevOpsAutomation } from "./components/devops-automation";
import { FinOpsSecurity } from "./components/finops-security";
import { CTABlock } from "./components/cta-block";

export function CloudInfrastructurePage() {
  return (
    <>
      <Hero />
      <CloudMarquee />
      <AwsEcosystem />
      <DevOpsAutomation />
      <FinOpsSecurity />
      <CTABlock />
    </>
  );
}

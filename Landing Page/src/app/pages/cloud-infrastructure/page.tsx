import { SEO } from "../../components/seo";
import { Hero } from "./components/hero";
import { CloudMarquee } from "./components/cloud-marquee";
import { AwsEcosystem } from "./components/aws-ecosystem";
import { DevOpsAutomation } from "./components/devops-automation";
import { FinOpsSecurity } from "./components/finops-security";
import { CTABlock } from "./components/cta-block";

export function CloudInfrastructurePage() {
  return (
    <>
      <SEO
        title="Cloud Infrastructure & DevOps — eigen."
        description="Hyper-secure AWS, GCP, and Azure cloud environments engineered for peak performance and radical FinOps cost efficiency."
        canonical="https://ei-gen.tech/services/cloud-infrastructure"
      />
      <Hero />
      <CloudMarquee />
      <AwsEcosystem />
      <DevOpsAutomation />
      <FinOpsSecurity />
      <CTABlock />
    </>
  );
}

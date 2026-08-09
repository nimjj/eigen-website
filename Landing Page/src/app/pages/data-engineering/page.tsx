import { SEO } from "../../components/seo";
import { Hero } from "./components/hero";
import { BigDataPipelines } from "./components/big-data-pipelines";
import { LakehouseArchitecture } from "./components/lakehouse-architecture";
import { DatabaseMigrations } from "./components/database-migrations";
import { PredictiveAnalytics } from "./components/predictive-analytics";
import { CTABlock } from "./components/cta-block";

export function DataEngineeringPage() {
  return (
    <>
      <SEO
        title="Data Engineering & Analytics — eigen.tech"
        description="High-throughput streaming & batch data pipelines, lakehouses, Apache Spark, Kafka, and predictive intelligence."
        canonical="https://ei-gen.tech/services/data-engineering"
      />
      <Hero />
      <BigDataPipelines />
      <LakehouseArchitecture />
      <DatabaseMigrations />
      <PredictiveAnalytics />
      <CTABlock />
    </>
  );
}

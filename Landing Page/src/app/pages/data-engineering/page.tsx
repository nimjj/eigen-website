import { Hero } from "./components/hero";
import { BigDataPipelines } from "./components/big-data-pipelines";
import { LakehouseArchitecture } from "./components/lakehouse-architecture";
import { DatabaseMigrations } from "./components/database-migrations";
import { PredictiveAnalytics } from "./components/predictive-analytics";
import { CTABlock } from "./components/cta-block";

export function DataEngineeringPage() {
  return (
    <>
      <Hero />
      <BigDataPipelines />
      <LakehouseArchitecture />
      <DatabaseMigrations />
      <PredictiveAnalytics />
      <CTABlock />
    </>
  );
}

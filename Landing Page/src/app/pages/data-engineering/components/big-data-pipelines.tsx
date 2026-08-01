import { Cpu, RefreshCw, Network } from "lucide-react";

export function BigDataPipelines() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Streaming & Batch Systems
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Big Data Pipelines & Orchestration
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            High-throughput infrastructure built for zero data loss and real-time processing scale.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Apache Spark & Kafka */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Cpu className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Apache Spark & Kafka</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Processing terabytes of real-time streaming and batch data with distributed Apache frameworks.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Apache Spark</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Apache Kafka</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Streaming</span>
            </div>
          </div>

          {/* Card 2: Automated ETL/ELT */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <RefreshCw className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Automated ETL/ELT</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Designing fault-tolerant extraction and loading pipelines to unify disparate enterprise data sources.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">ETL / ELT</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">dbt</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Data Unification</span>
            </div>
          </div>

          {/* Card 3: Airflow Orchestration */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Network className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Airflow Orchestration</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Managing complex workflow dependencies with directed acyclic graphs (DAGs) for zero-fail execution.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Apache Airflow</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">DAG Pipelines</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Zero-Fail</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

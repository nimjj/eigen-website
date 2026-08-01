import { Database, Layers, CheckCircle2, Zap } from "lucide-react";

export function LakehouseArchitecture() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
              <Database className="h-6 w-6" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
              Unified Storage & Analytics
            </p>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Warehousing & Lakehouse Architecture
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Bridging the gap between raw data lakes and structured warehouses. We architect unified lakehouses using Databricks and Snowflake, enabling simultaneous BI reporting and advanced machine learning workloads without data duplication.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Zero data duplication across BI and ML workloads</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Databricks Delta Lake & Snowflake Warehousing</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Zap className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Sub-second SQL query acceleration & columnar storage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[var(--accent-yellow)]" />
                  <span className="text-xs font-mono text-zinc-300">lakehouse_schema.sys</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">● Synchronized</span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <span className="text-zinc-400">Raw Data Streams (S3 / Kafka)</span>
                  <span className="text-zinc-500">Bronze Layer</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-[var(--accent-yellow)]/30 flex items-center justify-between">
                  <span className="text-white font-bold">Databricks Delta Lake / Snowflake</span>
                  <span className="text-[var(--accent-yellow)] font-bold">Silver Layer</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <span className="block text-zinc-300 font-bold">BI & Reporting</span>
                    <span className="block text-[10px] text-emerald-400 mt-1">Gold Marts</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <span className="block text-zinc-300 font-bold">ML & AI Models</span>
                    <span className="block text-[10px] text-emerald-400 mt-1">Feature Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

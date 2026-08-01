import { Cpu, Workflow, Cloud, RefreshCw, Database, Search } from "lucide-react";

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Technical Excellence
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Engineering Capabilities
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            End-to-end technical solutions designed for high performance, zero downtime, and maximum ROI.
          </p>
        </div>

        {/* Static 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: AI Orchestration */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">AI Orchestration</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Sovereign LLMs, custom MCP server connectors, vector databases, and RAG systems tailored to your internal data.
            </p>
          </div>

          {/* Card 2: Enterprise Automations */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Enterprise Automations</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Self-hosted n8n clusters, legacy RPA screen scraping, and cognitive AI workflows to eliminate manual data entry.
            </p>
          </div>

          {/* Card 3: Cloud Architecture */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Cloud Architecture</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              AWS/Azure/GCP cloud environments, zero-downtime VPC setups, FinOps cost optimization, and DevOps CI/CD pipelines.
            </p>
          </div>

          {/* Card 4: CRM Middleware */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">CRM Middleware</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Custom API integrations and bidirectional synchronization across Zoho One, Salesforce, HubSpot, and legacy ERPs.
            </p>
          </div>

          {/* Card 5: Data Warehousing */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Data Warehousing</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Automated ETL/ELT data pipelines, SQL optimization, and predictive analytics dashboards built for real-time visibility.
            </p>
          </div>

          {/* Card 6: Systems Auditing */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Systems Auditing</h3>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Complete technical health checks to identify system bottlenecks, fix broken webhooks, and optimize existing IT stacks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

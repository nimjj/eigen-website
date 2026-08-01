import { Shield, GitCommit, Settings2 } from "lucide-react";

export function LifecycleManagement() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Continuous Maintenance
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Lifecycle Management & Governance
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Dedicated senior engineering oversight to ensure your integrations evolve alongside changing business needs and platform API updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Dedicated Engineering Support</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Direct access to senior middleware engineers who monitor your CRM connections, handle edge-case triage, and perform rapid code patches.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <GitCommit className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">API Version Monitoring</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Proactive tracking of vendor API deprecation schedules (Salesforce v5X, Zoho v2/v3, HubSpot v3) to update endpoint adapters months before sunset dates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Settings2 className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Continuous Orchestration</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Ongoing pipeline optimization, automated throughput scaling, and monthly performance reports to guarantee maximum system efficiency.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

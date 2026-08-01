import { Container, Activity, ShieldAlert, GitBranch, LayoutDashboard } from "lucide-react";

export function LifecycleManagement() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Ops & Reliability
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Lifecycle Management & Hosting Infrastructure
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Post-deployment operations engineered for continuous 24/7 uptime, fail-safe redundancy, and enterprise security compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Docker Containerization */}
          <div className="group rounded-3xl border border-zinc-700/50 bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Container className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Docker Containerization</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Self-contained, reproducible Docker containers deployed across AWS ECS/EKS or Azure Kubernetes Service for isolated execution and instant vertical scaling.
            </p>
          </div>

          {/* Card 2: Real-time Webhook Error Logging */}
          <div className="group rounded-3xl border border-zinc-700/50 bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Real-Time Webhook Error Logging</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Comprehensive telemetry with Datadog or Grafana integrations. Every payload, status code, and latency spike is logged for immediate debugging.
            </p>
          </div>

          {/* Card 3: Automated Fallback Routing */}
          <div className="group rounded-3xl border border-zinc-700/50 bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Automated Fallback Routing</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Fail-safe circuit breakers. If a third-party API endpoint goes down, traffic automatically reroutes to dead-letter queues or backup secondary providers seamlessly.
            </p>
          </div>

          {/* Card 4: API Version Management */}
          <div className="group rounded-3xl border border-zinc-700/50 bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <GitBranch className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">API Version Management</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Rigorous backward-compatibility wrappers and automated schema migrations to guarantee that upstream API updates never break live client workflows.
            </p>
          </div>

          {/* Card 5: Custom Health-Check Dashboards */}
          <div className="group rounded-3xl border border-zinc-700/50 bg-zinc-800/50 p-8 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5 lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Custom Health-Check Dashboards</h3>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              Real-time operational dashboards for zero-downtime continuity. Track active execution queues, error rates, system throughput, and SLA performance metrics in one unified dashboard.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

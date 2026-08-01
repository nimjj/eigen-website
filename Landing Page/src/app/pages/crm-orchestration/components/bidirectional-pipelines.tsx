import { ArrowRightLeft, ShieldCheck, Zap } from "lucide-react";

export function BidirectionalPipelines() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
              <ArrowRightLeft className="h-6 w-6" />
            </div>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
              Real-Time Synchronization
            </p>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Bidirectional Data Pipelines
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              We design and deploy custom API middleware that powers secure, sub-second data synchronization between your central CRM and external ERP, EHR, or financial systems.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
              Never worry about stale customer records, out-of-sync inventory, or manual double-entry. Our event-driven webhooks and stateful queues guarantee zero data drift across all platforms.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Stateful queue management with exponential backoff retries</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Zap className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Sub-second sub-100ms webhook response handling</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Middleware Diagram Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <span className="text-xs font-mono text-zinc-400">crm_sync_engine.py</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live Sync Active
                </span>
              </div>

              {/* Visual Flow Diagram */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-zinc-200">Zoho / Salesforce</span>
                  </div>
                  <span className="text-zinc-500">Source Event</span>
                </div>

                <div className="flex justify-center py-1">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500 to-[var(--accent-yellow)] relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[var(--accent-yellow)] animate-ping" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-[var(--accent-yellow)]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-[var(--accent-yellow)]" />
                    <span className="text-white font-bold">eigen Custom Middleware</span>
                  </div>
                  <span className="text-[var(--accent-yellow)] font-bold text-xs">Transform & Validate</span>
                </div>

                <div className="flex justify-center py-1">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-[var(--accent-yellow)] to-emerald-500 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="text-zinc-200">SAP / NetSuite / Epic</span>
                  </div>
                  <span className="text-emerald-400">Target Updated</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

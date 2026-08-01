import { Search, Wrench, Database } from "lucide-react";

export function ExpertAuditing() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            System Diagnostics
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Expert Auditing & Remediation
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Fix hidden bottlenecks, unbreak failing workflows, and sanitize legacy data schemas before they impact revenue.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Audit 1 */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Search className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">CRM Health Checks</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Comprehensive diagnostic audits analyzing API rate limits, slow Deluge/Apex scripts, duplicate record creation, and unoptimized workflow rules.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Diagnostic SLA & Bottleneck Analysis
            </div>
          </div>

          {/* Audit 2 */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Wrench className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Fixing Broken Webhooks</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Remediating silent integration failures, unhandled 5xx errors, and payload timeout drops by injecting resilient stateful retry queues.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Zero-Payload-Drop Guarantee
            </div>
          </div>

          {/* Audit 3 */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Database className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Legacy Data Cleaning</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Standardizing unstructured field mappings, deduplicating contact databases, and migrating legacy schemas to modern relational structures.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Schema Normalization & Deduplication
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

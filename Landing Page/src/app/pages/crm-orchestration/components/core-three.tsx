import { Code, Cloud, Zap } from "lucide-react";

export function CoreThree() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Core Ecosystem Platforms
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Deep Native Platform Engineering
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            We don't rely on basic drag-and-drop connectors. We engineer custom scripts, triggers, and custom code modules directly within your core CRM engines.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Platform 1: Zoho One */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Code className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Zoho One Ecosystem</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Custom Zoho Deluge scripting, standalone function triggers, and multi-module Zoho CRM / Books / Analytics automation to handle high-throughput corporate workflows.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Deluge Scripting</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Custom Widgets</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Zoho APIs</span>
            </div>
          </div>

          {/* Platform 2: Salesforce */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Cloud className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Salesforce Enterprise</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Custom Apex triggers, Lightning Web Components (LWC), and REST/SOAP API integrations to seamlessly bridge Sales Cloud, Service Cloud, and enterprise data warehouses.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Apex Code</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">LWC Components</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">REST / SOAP</span>
            </div>
          </div>

          {/* Platform 3: HubSpot */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Zap className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">HubSpot Suite</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Advanced Operations Hub custom code actions (Node.js / Python), bidirectional custom object syncs, and real-time webhook listeners for complex revops automation.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Custom Code Actions</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Operations Hub</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Custom Objects</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

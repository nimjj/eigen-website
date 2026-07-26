import { Cpu, Workflow, Cloud, Database, RefreshCw } from "lucide-react";

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
          : "rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm text-zinc-600"
      }
    >
      {label}
    </span>
  );
}

export function BentoGrid() {
  return (
    <section id="ecosystem" className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm tracking-wide text-zinc-500">The Ecosystem</span>
          <h2 className="mt-3 text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Capabilities Built for Total Operational Peace of Mind
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            We engineer the complex backend mechanics you shouldn't have to worry
            about, freeing your team to focus exclusively on your core product and
            growth.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* AI Orchestration — massive hero */}
          <article className="rounded-3xl border border-zinc-200 bg-white p-8 md:col-span-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]">
                <Cpu className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-2xl leading-snug text-zinc-900">
                AI Orchestration & Open-Source LLMs
              </h3>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-zinc-600">
                Deploy sovereign, high-speed AI tailored to your precise business
                logic without the vendor lock-in.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag label="Open-Source LLMs" />
              <Tag label="CUDA Optimization" />
              <Tag label="Enterprise RAG" />
              <Tag label="Domain Fine-Tuning" />
            </div>
          </article>

          {/* Agentic Automations — tall hero */}
          <article className="rounded-3xl border border-zinc-200 bg-white p-8 md:col-span-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]">
                <Workflow className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl leading-snug text-zinc-900">
                Autonomous AI Agents
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Turn fragmented, manual tasks into self-executing workflows. We
                build intelligent agents that bridge legacy silos and deliver
                immediate ROI.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag label="API Scripting" />
              <Tag label="iPaaS Connections" />
            </div>
          </article>

          {/* Cloud Architecture */}
          <article className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 md:col-span-6 lg:col-span-5 min-h-[280px]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                <Cloud className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl text-zinc-900">Cost-Optimized Cloud</h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600">
                Eliminate bloat. We configure pragmatic, hyper-secure AWS and Azure
                architectures engineered for peak throughput and radical cost
                efficiency.
              </p>
            </div>
          </article>

          {/* Data Warehousing */}
          <article className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 md:col-span-6 lg:col-span-4 min-h-[280px]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
                <Database className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl text-zinc-900">Warehousing & Analytics</h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600">
                Transform raw data into predictive intelligence with automated ETL
                pipelines and optimized SQL architectures.
              </p>
            </div>
          </article>

          {/* CRM Audits — compact dark accent square */}
          <article className="flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:col-span-12 lg:col-span-3 min-h-[280px]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]">
                <RefreshCw className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl text-white">CRM Orchestration</h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-400">
                Identify bottlenecks and establish seamless, bi-directional data flow.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

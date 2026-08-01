import { Cpu, Layers, TrendingUp } from "lucide-react";

export function CorePhilosophy() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Guiding Principles
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Core Philosophy
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Engineered from first principles to turn technical complexity into business velocity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Pragmatic Execution */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Cpu className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Pragmatic Execution</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Radical cost-efficiency leveraging existing tools and open-source frameworks before expensive custom builds.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Low Overhead · High Impact
            </div>
          </div>

          {/* Card 2: Architectural Authority */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Layers className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Architectural Authority</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Untangling complex backend systems to seamlessly connect AI, cloud infrastructure, and legacy data.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Unified Data & AI Pipelines
            </div>
          </div>

          {/* Card 3: Frictionless Scaling */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <TrendingUp className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Frictionless Scaling</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Building zero-downtime workflows that allow businesses to scale exponentially without adding headcount.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Zero-Downtime Continuity
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

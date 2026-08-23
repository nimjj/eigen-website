import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export function CorePhilosophy() {
  return (
    <section className="bg-white pt-6 sm:pt-8 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Guiding Principles
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Core Philosophy
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Liberating product and engineering leaders from infrastructure friction so they can focus entirely on high-velocity innovation and growth.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Zero Infrastructure Friction */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Sparkles className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Zero Infrastructure Friction</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                We take on the heavy technical architecture and complex backend mechanics, freeing your team to focus 100% on product, customers, and business velocity.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Growth Over Overhead · Zero Bottlenecks
            </div>
          </div>

          {/* Card 2: Sovereign & Radical Pragmatism */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Radical Pragmatism & Sovereignty</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Zero vendor lock-in and no wasteful over-engineering. We deploy battle-tested open-source LLMs, optimized cloud infra, and native integrations to maximize ROI.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Zero Lock-In · High Impact
            </div>
          </div>

          {/* Card 3: Frictionless Autonomous Scale */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Zap className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">High-Velocity Autonomous Scale</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                From deterministic rule-based automations to cognitive AI agents, we build resilient, zero-downtime workflows that scale seamlessly without ballooning headcount.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Continuous Velocity · 24/7 Resilience
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

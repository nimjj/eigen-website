import { ArrowRight, RefreshCw } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent-yellow)" }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-800/60 px-4 py-1.5 text-xs backdrop-blur-sm mb-8">
          <RefreshCw className="h-3.5 w-3.5 text-[var(--accent-yellow)] animate-spin-slow" />
          <span className="font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">CRM Orchestration Services</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
          Unified Intelligence Through{" "}
          <span className="text-[var(--accent-yellow)]">CRM Orchestration.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-zinc-400">
          Dismantle data silos. We build custom API middleware to connect, manage, and audit complex ecosystems.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#audit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-105 sm:w-auto"
          >
            Review CRM Architecture
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

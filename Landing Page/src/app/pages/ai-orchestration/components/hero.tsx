import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 pt-32 pb-24 lg:pt-48 lg:pb-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent-yellow)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Intelligence Engineered for Impact, Not Hype.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          We build sovereign, custom AI architectures that optimize workflows and eliminate enterprise bloat—moving far beyond basic API wrappers.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-7 py-4 text-sm font-medium text-zinc-900 shadow-sm transition-all hover:bg-[var(--accent-yellow-hover)]"
          >
            Review AI architecture
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

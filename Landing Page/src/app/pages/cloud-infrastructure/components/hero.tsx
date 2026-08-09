import { Link } from "react-router";
import { ArrowRight, Cloud } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent-yellow)" }}
      />
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-800/60 px-4 py-1.5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
          <Cloud className="h-3.5 w-3.5 text-[var(--accent-yellow)]" />
          <span className="font-medium tracking-wide">Cloud Infrastructure & DevOps</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
          Resilient Infrastructure for{" "}
          <span className="inline-block relative">
            <span className="relative z-10 text-[var(--accent-yellow)]">High-Throughput Scale</span>
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg sm:text-xl leading-relaxed text-zinc-400">
          Stop overpaying for unoptimized cloud services. We design, deploy, and maintain hyper-secure AWS, GCP, and Azure environments engineered for peak performance and radical FinOps cost efficiency.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-105 sm:w-auto"
          >
            Review Cloud Architecture
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

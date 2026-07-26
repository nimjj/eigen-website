import { ArrowRight } from "lucide-react";

export function CTABlock() {
  return (
    <section id="audit" className="bg-zinc-900 pb-24 pt-10">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-800/50 px-8 py-20 text-center shadow-xl">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--accent-yellow)" }}
          />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
            Radical Cost-Efficiency Meets Sovereign Intelligence.
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Stop overpaying for generic AI that doesn't understand your business. Let's architect a solution that drives actual ROI.
          </p>
          <div className="relative mt-10">
            <a
              href="#audit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-7 py-4 font-medium text-zinc-900 shadow-lg transition-all hover:bg-[var(--accent-yellow-hover)]"
            >
              Review AI architecture
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

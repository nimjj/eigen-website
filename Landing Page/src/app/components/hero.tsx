import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-left space-y-8 max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-900">
            <span className="animate-fade-slide-up">
              Your Focus Belongs to{" "}
              <span className="animate-bolt-expand inline-flex items-center -rotate-2 rounded-2xl bg-[var(--accent-yellow)] px-4 sm:px-6 py-1 pb-2.5 shadow-md mx-1 align-middle">
                <span className="rotate-2 inline-block">Growth.</span>
              </span>
            </span>
            <span className="block mt-4 text-3xl font-bold text-zinc-700 sm:text-4xl lg:text-5xl">
              Not Infrastructure.
            </span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-4xl">
            Managing disparate platforms and scaling internal tech takes your eyes off what actually matters. <strong className="font-bold text-zinc-900">Your product.</strong> That's where we step in. We drive company connectivity and scale by engineering custom AI orchestration, robust cloud infrastructure & seamless platform integrations. <strong className="font-semibold text-zinc-900">So your tools work for you, not against you.</strong>
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-105"
            >
              Ready to feel the energy?
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

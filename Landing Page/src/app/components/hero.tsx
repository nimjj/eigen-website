import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        <h1 className="text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl font-bold">
          <span className="inline-block animate-fade-slide-up">
            Your Focus Belongs to
          </span>{" "}
          <span className="animate-bolt-expand inline-flex items-center -rotate-2 rounded-2xl bg-[var(--accent-yellow)] px-4 sm:px-5 py-1 pb-2 shadow-md mx-2 align-middle">
            <span className="rotate-2 inline-block">Growth.</span>
          </span>
          <span className="block mt-4 text-2xl font-bold text-zinc-700 sm:text-3xl">
            Not Infrastructure.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Managing disparate platforms and scaling internal tech takes your eyes off what actually matters. <strong className="font-bold text-zinc-900">Your product.</strong> That's where we step in. We drive company connectivity and scale by engineering custom AI orchestration, robust cloud infrastructure & seamless platform integrations. <strong className="font-semibold text-zinc-900">So your tools work for you, not against you.</strong>
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-sm transition-all hover:bg-[var(--accent-yellow-hover)] hover:scale-105 sm:w-auto"
          >
            Ready to feel the energy?
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

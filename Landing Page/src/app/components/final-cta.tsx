import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-zinc-900 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-800/50 px-8 py-20 text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--accent-yellow)" }}
          />
          <h2 className="relative mx-auto max-w-2xl text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Stop fighting your systems. Let's build architecture that scales with
            you.
          </h2>
          <div className="relative mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-7 py-4 text-zinc-900 shadow-lg transition-all hover:bg-[var(--accent-yellow-hover)]"
            >
              Talk to an Engineer
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail } from "lucide-react";

export function HeroHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-800/60 px-4 py-1.5 text-xs backdrop-blur-sm mb-6">
        <Mail className="h-3.5 w-3.5 text-[var(--accent-yellow)]" />
        <span className="font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">GET IN TOUCH</span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
        Let's Solve Your <span className="text-[var(--accent-yellow)]">Technical Bottlenecks.</span>
      </h1>

      <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
        Book a direct technical consultation with our engineering team to review your architecture, eliminate manual friction, and accelerate scaling.
      </p>
    </div>
  );
}

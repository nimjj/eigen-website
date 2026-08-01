import { Monitor, Network, BrainCircuit } from "lucide-react";

export function ThreePillars() {
  return (
    <section className="bg-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Architectural Pillars
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            The Three Pillars of Enterprise Automation
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            From legacy mainframes to modern LLMs, we construct resilient automation engines tailored to your system maturity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {/* Pillar 1: Legacy RPA */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Monitor className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Legacy RPA</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Screen scraping and automated GUI interactions for non-API legacy ERPs, mainframe terminals, and desktop software. We bridge legacy gaps without costly rip-and-replace overhauls.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <span>GUI & Terminal Scraping</span>
              <span className="text-zinc-900 font-medium">Non-API ERPs</span>
            </div>
          </div>

          {/* Pillar 2: n8n Orchestration */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Network className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">n8n Orchestration</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Secure, self-hosted bidirectional API pipelines. We deploy private n8n clusters that handle high-frequency webhooks, state management, and complex data routing inside your VPC.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <span>Self-Hosted & VPC Private</span>
              <span className="text-zinc-900 font-medium">Zero Task Tax</span>
            </div>
          </div>

          {/* Pillar 3: Cognitive AI */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <BrainCircuit className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Cognitive AI</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Injecting machine learning decision-making into linear workflows. We embed specialized classification, sentiment analysis, and NER models to turn static IF/THEN rules into adaptive, self-correcting logic.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <span>ML Decision Models</span>
              <span className="text-zinc-900 font-medium">Adaptive Logic</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

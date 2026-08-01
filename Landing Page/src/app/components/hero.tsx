import { ArrowRight, Terminal, Cpu, Activity, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-900">
              <span className="inline-block animate-fade-slide-up">
                Your Focus Belongs to
              </span>{" "}
              <span className="animate-bolt-expand inline-flex items-center -rotate-2 rounded-2xl bg-[var(--accent-yellow)] px-4 sm:px-6 py-1 pb-2.5 shadow-md mx-1 align-middle">
                <span className="rotate-2 inline-block">Growth.</span>
              </span>
              <span className="block mt-3 text-3xl font-bold text-zinc-700 sm:text-4xl lg:text-5xl">
                Not Infrastructure.
              </span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-2xl">
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

          {/* Right Column: Floating High-Tech Terminal / Dashboard Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Subtle top glow */}
              <div 
                className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full opacity-20 blur-2xl"
                style={{ background: "var(--accent-yellow)" }}
              />

              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[var(--accent-yellow)]" />
                  <span className="text-xs font-mono text-zinc-400">orchestration_kernel.sys</span>
                </div>
              </div>

              {/* Live Terminal & Metrics Display */}
              <div className="space-y-4 font-mono text-xs sm:text-sm relative z-10">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[var(--accent-yellow)] animate-pulse" />
                    <span className="text-zinc-300 font-bold">SYSTEM STATUS</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold">● 100% OPERATIONAL</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> AI Orchestration
                    </span>
                    <span className="text-emerald-400 font-semibold">Active (14ms)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> n8n Middleware
                    </span>
                    <span className="text-emerald-400 font-semibold">200 OK</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5 text-[var(--accent-yellow)]" /> AWS / Cloud Cluster
                    </span>
                    <span className="text-emerald-400 font-semibold">99.99% SLA</span>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                    <span className="block text-xs text-zinc-500 uppercase">Live Webhooks</span>
                    <span className="block text-lg font-bold text-white mt-1">48 Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
                    <span className="block text-xs text-zinc-500 uppercase">Avg Latency</span>
                    <span className="block text-lg font-bold text-[var(--accent-yellow)] mt-1">&lt; 18ms</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

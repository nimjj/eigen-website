import { CheckCircle2, Award, Terminal, Code2 } from "lucide-react";

export function LeadershipExpertise() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Grayscale Technical Visual Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/60 to-zinc-800/20 opacity-80" />
              
              {/* Grayscale Code & Architecture Mockup */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-300">eigen_core_architecture.py</span>
                  </div>
                  <span className="text-xs font-mono text-[var(--accent-yellow)]">v3.4 Production</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-zinc-400 leading-relaxed">
                  <p className="text-zinc-500"># Engineering leadership & applied ML</p>
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">SystemArchitecture</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, leader="Nimithra Jayakody"):</p>
                  <p className="pl-8">self.leader = leader</p>
                  <p className="pl-8">self.pillars = ["ML Orchestration", "Cloud DevOps", "CRM Integration"]</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">execute</span>(self):</p>
                  <p className="pl-8 text-emerald-400">return "Immediate, Measurable ROI"</p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Code2 className="h-4 w-4 text-[var(--accent-yellow)]" />
                    <span>Applied ML & Data Engineering</span>
                  </div>
                  <Award className="h-5 w-5 text-[var(--accent-yellow)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
              Leadership & Technical Rigor
            </p>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Built on Deep Technical Rigor.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Led by <strong className="text-white font-semibold">Nimithra Jayakody</strong>. We blend applied data analytics, machine learning, and enterprise platform orchestration to deliver solutions that drive immediate, measurable ROI.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed">
              From high-volume data extraction pipelines to custom tracking dashboards, we architect systems that simply work.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Zero-vendor-lockin modular architecture</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Proven high-throughput enterprise pipelines</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Continuous 24/7 monitoring and SLAs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

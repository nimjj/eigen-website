import { BrainCircuit, LineChart } from "lucide-react";

export function PredictiveAnalytics() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Intelligence & Visualization
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Predictive Analytics & ML Training
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Turn historical data into active forward-looking intelligence and real-time operational visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Block 1: Custom ML Model Training */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 sm:p-10 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-white">Custom ML Model Training</h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Building and fine-tuning predictive algorithms on your proprietary data to forecast market trends and customer behavior.
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">Predictive Forecasting</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">PyTorch & XGBoost</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">Proprietary Training</span>
            </div>
          </div>

          {/* Block 2: Real-Time BI Dashboards */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 sm:p-10 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-white">Real-Time BI Dashboards</h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Developing interactive, React-based analytical tools that visualize KPIs and operational metrics instantly.
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">React Dashboards</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">KPI Telemetry</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3.5 py-1 text-xs text-zinc-300">Instant Streaming</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

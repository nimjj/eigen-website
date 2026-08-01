import { Mail, MapPin, Search, FileText, Rocket } from "lucide-react";

export function ContactInfoTimeline() {
  return (
    <div className="space-y-14">
      
      {/* Direct Contact Details Card */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 sm:p-10 space-y-6">
        <h3 className="text-xl font-medium text-white">Direct Communication</h3>
        
        <div className="space-y-5 text-sm">
          <div className="flex items-center gap-4 text-zinc-300">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] border border-zinc-700">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Direct Email</span>
              <a href="mailto:hello@eigen.lk" className="font-mono text-white text-base hover:text-[var(--accent-yellow)] transition-colors">
                hello@eigen.lk
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-300 pt-1">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] border border-zinc-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider mb-0.5">Headquarters</span>
              <span className="font-mono text-white text-base">
                Colombo, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical 3-Step Timeline: What Happens Next */}
      <div className="space-y-8 pt-2">
        <h3 className="text-2xl font-medium text-white">
          What Happens Next
        </h3>

        <div className="relative pl-10 space-y-14 border-l-2 border-zinc-800">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -left-[57px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-sm font-bold shadow-lg">
              1
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white font-medium text-lg">
                <Search className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Initial Technical Audit</span>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                A senior engineer reviews your system inputs, API dependencies, and data structures to diagnose existing bottlenecks.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -left-[57px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-sm font-bold shadow-lg">
              2
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white font-medium text-lg">
                <FileText className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Architecture Proposal & ROI Roadmap</span>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                We deliver a clear, plain-English architectural blueprint outlining recommended middleware, timeline, and ROI projection.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -left-[57px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-sm font-bold shadow-lg">
              3
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white font-medium text-lg">
                <Rocket className="h-5 w-5 text-[var(--accent-yellow)] shrink-0" />
                <span>Deployment & Integration</span>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                Our team builds and deploys your custom self-executing automation pipelines with zero downtime and 24/7 telemetry.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

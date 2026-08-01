import { Mail, MapPin, Search, FileText, Rocket } from "lucide-react";

export function ContactInfoTimeline() {
  return (
    <div className="space-y-12">
      
      {/* Direct Contact Details Card */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 space-y-6">
        <h3 className="text-xl font-medium text-white">Direct Communication</h3>
        
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3 text-zinc-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] border border-zinc-700">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase">Direct Email</span>
              <a href="mailto:hello@eigen.lk" className="font-mono text-white hover:text-[var(--accent-yellow)] transition-colors">
                hello@eigen.lk
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] border border-zinc-700">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-xs text-zinc-500 uppercase">Headquarters</span>
              <span className="font-mono text-white">
                Colombo, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical 3-Step Timeline: What Happens Next */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-white flex items-center gap-2">
          <span>What Happens Next</span>
        </h3>

        <div className="relative pl-6 space-y-8 border-l border-zinc-800">
          
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-xs font-bold">
              1
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium text-base">
                <Search className="h-4 w-4 text-[var(--accent-yellow)]" />
                <span>Initial Technical Audit</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A senior engineer reviews your system inputs, API dependencies, and data structures to diagnose existing bottlenecks.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-xs font-bold">
              2
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium text-base">
                <FileText className="h-4 w-4 text-[var(--accent-yellow)]" />
                <span>Architecture Proposal & ROI Roadmap</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We deliver a clear, plain-English architectural blueprint outlining recommended middleware, timeline, and ROI projection.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] font-mono text-xs font-bold">
              3
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-medium text-base">
                <Rocket className="h-4 w-4 text-[var(--accent-yellow)]" />
                <span>Deployment & Integration</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our team builds and deploys your custom self-executing automation pipelines with zero downtime and 24/7 telemetry.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

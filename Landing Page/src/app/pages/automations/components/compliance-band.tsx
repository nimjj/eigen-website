import { ShieldCheck, HeartPulse, Globe } from "lucide-react";

export function ComplianceBand() {
  return (
    <section className="bg-zinc-950 border-t border-b border-zinc-800 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">SOC 2 Type II Ready</span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-zinc-800" />

          <div className="flex items-center gap-3">
            <HeartPulse className="h-5 w-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">HIPAA Compliant Architecture</span>
          </div>

          <div className="hidden sm:block h-5 w-px bg-zinc-800" />

          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium text-zinc-400 tracking-wide">GDPR Data Sovereignty</span>
          </div>

        </div>
      </div>
    </section>
  );
}

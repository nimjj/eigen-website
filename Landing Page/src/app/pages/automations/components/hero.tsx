import { Workflow } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-[#0A0A0A] pt-32 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 text-left">
      {/* White Grid / Check Lines Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Yellow Glowing Ambient Lighting Orbs */}
      <div 
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] sm:h-[650px] rounded-full opacity-25 blur-[140px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 221, 43, 0.5) 0%, transparent 70%)",
        }}
      />
      <div 
        className="pointer-events-none absolute -left-20 bottom-10 w-[400px] sm:w-[500px] h-[400px] rounded-full opacity-15 blur-[120px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 221, 43, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Main Content (Left Aligned, anchored low) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-left">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 mb-6 backdrop-blur-md shadow-sm">
          <Workflow className="h-3.5 w-3.5 text-[#FEDD2B]" />
          <span className="font-display font-medium tracking-wide">Enterprise Automations & RPA</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.08] text-balance max-w-5xl text-left">
          Autonomous Execution for the{" "}
          <span className="text-[#FEDD2B] drop-shadow-[0_4px_30px_rgba(254,221,43,0.3)]">
            Modern Enterprise
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-6 max-w-3xl text-base sm:text-xl leading-relaxed text-zinc-400 text-balance text-left">
          Eliminate operational bottlenecks, brittle custom scripts, and human error. We architect self-executing RPA workflows, self-hosted n8n pipelines, and cognitive AI agents that run 24/7 with zero downtime.
        </p>
      </div>
    </section>
  );
}

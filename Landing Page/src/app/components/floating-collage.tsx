import { Cpu, Cloud, Workflow, Sparkles, CheckCircle2, ShieldCheck, Zap, Database, ArrowUpRight, Activity } from "lucide-react";

export function FloatingCollage() {
  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden bg-[#FAF9F5] py-28 sm:py-36 px-6 sm:px-8 lg:px-12 min-h-[950px] lg:min-h-[1100px] flex items-center justify-center border-b border-black/5">
      
      {/* Central Radiating Yellow Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] sm:h-[650px] rounded-full opacity-25 blur-[120px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 221, 43, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Central Typography Anchor */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 px-4">
        <span className="font-display text-xs sm:text-sm font-bold tracking-widest text-black uppercase mb-4 bg-[#FEDD2B] px-4 py-1.5 rounded-full border border-black/15 shadow-sm">
          Enterprise Systems & Architecture
        </span>
        <h2 className="font-display text-7xl sm:text-9xl md:text-[130px] lg:text-[150px] font-black text-[#111111] tracking-tighter leading-[0.88] text-center text-balance">
          Applied<br />
          <span className="text-[#111111]">Intelligence</span>
        </h2>
      </div>

      {/* Floating Glassmorphic Interactive Grid (Desktop absolute, Mobile flex/grid) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto hidden lg:block h-[900px]">
        
        {/* 1. Top-Left: Enterprise RAG Engine */}
        <div 
          className="absolute rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
          style={{ left: "0%", top: "4%", width: "340px" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FEDD2B] flex items-center justify-center text-black font-bold shadow-sm">
                <Cpu className="w-4 h-4 text-black" />
              </div>
              <span className="font-display text-xs font-bold text-[#1B1B1B]">Enterprise RAG</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEDD2B] text-black border border-black/10">
              Active
            </span>
          </div>
          <p className="font-body text-xs text-[#717182] mb-3 leading-relaxed">
            Vector search over proprietary docs with semantic re-ranking and domain guardrails.
          </p>
          <div className="bg-[#FAF9F5] rounded-xl p-3 border border-black/5">
            <div className="flex justify-between items-center text-[10px] font-display font-semibold mb-1">
              <span className="text-[#8C8880]">Retrieval Accuracy</span>
              <span className="text-[#1B1B1B] font-bold">99.8%</span>
            </div>
            <div className="w-full bg-black/10 rounded-full h-1.5">
              <div className="bg-[#FEDD2B] w-[99%] h-1.5 rounded-full border border-black/10"></div>
            </div>
          </div>
        </div>

        {/* 2. Top-Right: Cloud Cost Optimizer */}
        <div 
          className="absolute rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
          style={{ right: "2%", top: "6%", width: "320px" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm">
                <Cloud className="w-4 h-4" />
              </div>
              <span className="font-display text-xs font-bold text-[#1B1B1B]">AWS & Azure FinOps</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-2 text-2xl font-bold font-display text-[#1B1B1B]">
            -42% <span className="text-xs font-normal text-[#717182]">Infra Spend</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-[#717182]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Auto-scaling serverless clusters
          </div>
        </div>

        {/* 3. Mid-Left: Live Workflow Sync */}
        <div 
          className="absolute rounded-[28px] overflow-hidden bg-white/80 backdrop-blur-3xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          style={{ left: "2%", top: "44%", width: "290px" }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-display text-xs font-bold text-[#1B1B1B]">Bi-directional Sync</span>
            <div className="w-8 h-5 bg-[#151515] rounded-full relative p-0.5 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] flex items-center justify-center text-white shadow-md">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display text-xs font-bold text-[#1B1B1B]">CRM & ERP Bridge</div>
              <div className="text-[11px] text-emerald-600 font-medium">3,400+ events/sec</div>
            </div>
          </div>
        </div>

        {/* 4. Mid-Right: Sovereign Open-Source LLMs */}
        <div 
          className="absolute rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
          style={{ right: "0%", top: "45%", width: "330px" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="font-display text-[11px] font-bold text-[#1B1B1B] uppercase tracking-wider">
              Zero Vendor Lock-In
            </span>
          </div>
          <h4 className="font-display text-sm font-bold text-[#1B1B1B] mb-1">
            Private Model Deployment
          </h4>
          <p className="font-body text-xs text-[#717182] leading-relaxed">
            Run Llama 3.3, DeepSeek R1 & Mistral inside your VPC for absolute data sovereignty.
          </p>
        </div>

        {/* 5. Bottom-Left: Real-time Data Streaming */}
        <div 
          className="absolute rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
          style={{ left: "10%", top: "72%", width: "360px" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-sm">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display text-xs font-bold text-[#1B1B1B] block">Lakehouses & Kafka ETL</span>
              <span className="text-[10px] text-[#8C8880]">Automated schema validation</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#717182] bg-[#FAF9F5] p-2.5 rounded-xl border border-black/5">
            <span>Stream Throughput</span>
            <span className="font-bold text-[#1B1B1B]">12.4 GB/s</span>
          </div>
        </div>

        {/* 6. Bottom-Right: Infrastructure Security */}
        <div 
          className="absolute rounded-[32px] overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
          style={{ right: "8%", top: "74%", width: "340px" }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-display text-xs font-bold text-[#1B1B1B]">Terraform IaC & IAM</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              SOC2 Ready
            </span>
          </div>
          <p className="font-body text-xs text-[#717182] leading-relaxed">
            Immutable, reproducible infrastructure with strict role-based access control.
          </p>
        </div>

      </div>

      {/* Mobile Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10 lg:hidden mt-8">
        
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-black" />
            <span className="font-display text-xs font-bold text-[#1B1B1B]">Enterprise RAG & AI</span>
          </div>
          <p className="text-xs text-[#717182]">99.8% semantic accuracy with custom open-source LLMs.</p>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-4 h-4 text-sky-600" />
            <span className="font-display text-xs font-bold text-[#1B1B1B]">Cloud Cost Optimization</span>
          </div>
          <p className="text-xs text-[#717182]">-42% average cloud compute overhead savings.</p>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-4 h-4 text-amber-600" />
            <span className="font-display text-xs font-bold text-[#1B1B1B]">3000+ Integrations</span>
          </div>
          <p className="text-xs text-[#717182]">Bi-directional CRM, ERP, and API event streams.</p>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-display text-xs font-bold text-[#1B1B1B]">Sovereign Security</span>
          </div>
          <p className="text-xs text-[#717182]">VPC on-premise execution with zero vendor lock-in.</p>
        </div>

      </div>

    </section>
  );
}

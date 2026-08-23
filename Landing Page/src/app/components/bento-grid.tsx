import { Cpu, Workflow, Cloud, Database, RefreshCw, Layers, Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router";

function Tag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "rounded-full border border-yellow-400/40 bg-[#FEDD2B]/20 px-3.5 py-1 text-xs font-bold text-[#FEDD2B]"
          : "rounded-full border border-yellow-400/50 bg-[#FEDD2B]/20 px-3.5 py-1 text-xs font-bold text-yellow-950"
      }
    >
      {label}
    </span>
  );
}

export function BentoGrid() {
  return (
    <div id="ecosystem" className="bg-[#FAF9F5] space-y-28 sm:space-y-36 py-20 sm:py-28">
      
      {/* Overarching Automation Headline */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B1B1B] max-w-4xl mx-auto leading-[1.12] text-balance">
          Seamless Automations Engineered for Velocity.
        </h2>
      </div>

      {/* Section 4 — Rule-Based Automation (Sticky Topic on LEFT, Cards Stream on RIGHT) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Sticky Topic & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4 pt-2">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-black px-3.5 py-1.5 rounded-full bg-[#FEDD2B]/40 border border-yellow-400/50 shadow-sm w-max inline-block">
              Deterministic Pipelines
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1B1B] leading-[1.12]">
              Rule-Based Automation
            </h3>
            <p className="font-body text-base sm:text-lg text-[#5A5956] leading-relaxed max-w-md">
              Fast, predictable, no thinking required.
            </p>
          </div>

          {/* Right: Vertical Card Stream (Cards move up as user scrolls) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEDD2B] text-black font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                01
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Order to Fulfillment
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Order in → invoice out → shipment booked — automatically, every time
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEDD2B] text-black font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                02
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  CRM Self-Synchronization
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  New lead lands, CRM updates itself — no one touches a keyboard
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEDD2B] text-black font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                03
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Automated Invoicing
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Invoices matched & approved — without a spreadsheet in sight
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEDD2B] text-black font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                04
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Instant Ticket Routing
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Support tickets routed to the right queue — instantly, based on rules you set
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-yellow-400/60 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEDD2B] text-black font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                05
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Zero-Touch Employee Onboarding
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  New hire onboarded — accounts, docs, and meetings ready before day one
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5 — AI Agent in the Loop (Cards Stream on LEFT, Sticky Topic on RIGHT) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Vertical Card Stream (Cards move up as user scrolls) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 order-2 lg:order-1">
            
            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#151515] text-[#FEDD2B] font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                01
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Smart Support Resolution
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Reads a ticket, drafts the reply, sends it — or asks a human first
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#151515] text-[#FEDD2B] font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                02
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Confidence-Based Approvals
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Approves the invoices it's sure about — flags the ones it isn't
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#151515] text-[#FEDD2B] font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                03
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Dynamic Decision Making
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Picks the next best action — not just the next step in a chain
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#151515] text-[#FEDD2B] font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                04
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Native Tool Integration
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Plugs into your CRM, inbox, database & more — on its own
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#FFFDF8] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#151515] text-[#FEDD2B] font-display font-bold flex items-center justify-center shrink-0 text-xs shadow-sm">
                05
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1B1B1B] mb-1">
                  Total Auditability
                </h4>
                <p className="font-body text-sm text-[#5A5956] leading-relaxed">
                  Logs every decision it makes — nothing runs in a black box
                </p>
              </div>
            </div>

          </div>

          {/* Right: Sticky Topic & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4 pt-2 order-1 lg:order-2">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-black px-3.5 py-1.5 rounded-full bg-[#FEDD2B]/40 border border-yellow-400/50 shadow-sm w-max inline-block">
              Cognitive Workflows
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1B1B] leading-[1.12]">
              AI Agent in the Loop
            </h3>
            <p className="font-body text-base sm:text-lg text-[#5A5956] leading-relaxed max-w-md">
              Reasoning, not just steps.
            </p>
          </div>

        </div>
      </section>

      {/* 3. The 5-Pillar Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14">
          <span className="font-display text-xs font-bold tracking-widest text-black uppercase mb-2 block bg-[#FEDD2B]/40 px-3 py-1 rounded-full w-max border border-yellow-400/50 shadow-sm">
            The Ecosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1B1B1B]">
            Capabilities Built for Total Operational Peace of Mind
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#717182]">
            We engineer the complex backend mechanics you shouldn't have to worry about, freeing your team to focus exclusively on your core product and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: AI Orchestration — 8 cols */}
          <article className="group rounded-[36px] border border-black/10 bg-[#FFFDF8] p-8 md:col-span-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/60 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEDD2B] text-black font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Cpu className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-6 text-2xl font-bold font-display text-[#1B1B1B]">
                AI Orchestration & Open-Source LLMs
              </h3>
              <p className="mt-3 max-w-xl text-base text-[#717182] leading-relaxed">
                Deploy sovereign, high-speed AI tailored to your precise business logic without the vendor lock-in. Custom domain fine-tuning and low-latency inference pipelines.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag label="Open-Source LLMs" />
              <Tag label="CUDA Optimization" />
              <Tag label="Enterprise RAG" />
              <Tag label="Domain Fine-Tuning" />
            </div>
          </article>

          {/* Card 2: Agentic Automations — 4 cols */}
          <article className="group rounded-[36px] border border-black/10 bg-[#FFFDF8] p-8 md:col-span-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/60 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEDD2B] text-black font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Workflow className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-6 text-xl font-bold font-display text-[#1B1B1B]">
                AI & RPA Automations
              </h3>
              <p className="mt-3 text-sm text-[#717182] leading-relaxed">
                Turn fragmented, manual tasks into self-executing workflows that bridge legacy silos and deliver immediate ROI.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag label="API Scripting" />
              <Tag label="iPaaS Connections" />
            </div>
          </article>

          {/* Card 3: Cloud Architecture — 4 cols */}
          <article className="group rounded-[36px] border border-black/10 bg-[#FFFDF8] p-8 md:col-span-4 min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/60 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold font-display text-[#1B1B1B]">Cost-Optimized Cloud</h3>
              <p className="mt-2 text-sm text-[#717182] leading-relaxed">
                Eliminate bloat. We configure pragmatic, hyper-secure AWS and Azure architectures engineered for peak throughput and radical cost efficiency.
              </p>
            </div>
          </article>

          {/* Card 4: Data Warehousing — 4 cols */}
          <article className="group rounded-[36px] border border-black/10 bg-[#FFFDF8] p-8 md:col-span-4 min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400/60 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEDD2B] text-black font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Database className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-6 text-xl font-bold font-display text-[#1B1B1B]">Warehousing & Analytics</h3>
              <p className="mt-2 text-sm text-[#717182] leading-relaxed">
                Transform raw data into predictive intelligence with automated ETL pipelines, Kafka streaming, and optimized SQL lakehouses.
              </p>
            </div>
          </article>

          {/* Card 5: CRM & ERP Orchestration — 4 cols Dark Accent */}
          <article className="group rounded-[36px] border border-white/10 bg-[#151515] p-8 md:col-span-4 min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between text-white">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEDD2B] text-black font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <RefreshCw className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-6 text-xl font-bold font-display text-white">CRM & ERP Orchestration</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Identify bottlenecks and establish seamless, bi-directional data flow across your entire tool ecosystem.
              </p>
            </div>
            <div className="mt-6">
              <Tag label="Bi-directional Sync" dark />
            </div>
          </article>

        </div>
      </section>

    </div>
  );
}

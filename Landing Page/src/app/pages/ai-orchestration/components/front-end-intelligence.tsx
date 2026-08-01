import { Shield, MessageSquare, AlertTriangle, Paperclip } from "lucide-react";

export function FrontEndIntelligence() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-start lg:gap-16">
          
          {/* Left Column - Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-48 h-fit mb-12 lg:mb-0">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Front-End Intelligence
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Intelligent user interfaces that adapt, monitor, and assist in real-time.
            </p>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:ring-zinc-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow-hover)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)]">
                <Shield className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Secure RAG Chatbots</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Enterprise-grade conversational agents grounded in your sovereign data. We build Retrieval-Augmented Generation systems with strict access controls, ensuring sensitive information never leaks while providing accurate, context-aware responses.
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:ring-zinc-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow-hover)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)]">
                <MessageSquare className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Sentiment & Review Monitoring</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Real-time pulse checks on your brand's perception. We ingest multi-channel feedback—from social media to App Store reviews—and deploy NLP pipelines to gauge sentiment trends, giving you actionable insights at a glance.
              </p>
            </div>

            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:ring-zinc-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow-hover)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)]">
                <AlertTriangle className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Proactive Complaint Detection</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Identify and escalate customer issues before they escalate. Our ML models analyze incoming support tickets and interactions to flag high-risk complaints, routing them instantly to specialized resolution teams.
              </p>
            </div>
            
            <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:ring-zinc-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow-hover)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)]">
                <Paperclip className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Universal MCP Connectors</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                We deploy Model Context Protocol (MCP) servers to securely bridge your proprietary data sources—like CRMs, local databases, and internal APIs—directly to your AI models. This standardizes data access, eliminates brittle custom integrations, and equips your AI agents with the real-time, secure context they need to execute tasks accurately.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

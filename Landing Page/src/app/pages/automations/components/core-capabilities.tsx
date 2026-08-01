import { FileText, Route, ShoppingCart, ArrowUpRight } from "lucide-react";

export function CoreCapabilities() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 sm:mb-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Core Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Machine Learning Infused Workflows
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            We don't just connect endpoints. We embed intelligent machine learning algorithms directly inside your automation pipelines.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32">
          
          {/* Block 1: Unstructured Data Extraction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Unstructured Data Extraction
              </h3>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Parse disorganized incoming emails, PDF invoices, and unstructured attachments using customized Natural Language Processing (NLP) and Named Entity Recognition (NER) models. 
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                Extracted entities are validated against schema constraints and converted into normalized, structured JSON before being dispatched to your SQL databases or ERP via automated n8n pipelines.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">NLP / NER Models</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Structured JSON Output</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">n8n Pipeline</span>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-zinc-500">nlp_extractor.py</span>
                </div>
                <pre className="text-xs sm:text-sm font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                  <code>{`// Input: Raw Vendor Invoice Email
{
  "subject": "Invoice #8942 - Q3 Infrastructure",
  "entities": {
    "vendor_name": "ACME Cloud Services",
    "invoice_id": "INV-8942",
    "total_amount": 14250.00,
    "currency": "USD",
    "confidence_score": 0.984
  },
  "status": "VALIDATED_AND_PUSHED_TO_ERP"
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Block 2: Autonomous Support Routing (Reversed Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
                <Route className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Autonomous Support Routing
              </h3>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Deploy lightweight Support Vector Machine (SVM) and sentiment classification models directly inside webhook listeners to automatically grade ticket urgency, intent, and risk level.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                High-priority issues immediately trigger real-time escalation channels in Jira or Zoho CRM, bypassing manual triage and shrinking SLA response times from hours to milliseconds.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">SVM Classifier</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Webhook Listeners</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Jira / Zoho Dispatch</span>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">Live Webhook Pipeline</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                  </span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm font-mono">
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-400">SVM Classification</span>
                    <span className="text-emerald-400 font-bold">URGENT_ESCALATION</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-400">Sentiment Score</span>
                    <span className="text-red-400 font-bold">-0.87 (High Frustration)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-400">Routed Target</span>
                    <span className="text-[var(--accent-yellow)] font-bold">Jira Tier-3 Queue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Predictive Procurement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)]/20 text-[var(--accent-yellow)]">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-medium text-white sm:text-3xl">
                Predictive Procurement
              </h3>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                Integrate Random Forest regression models to continuously analyze historical inventory consumption patterns, lead times, and API sales velocity.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                Instead of relying on rigid static thresholds, the pipeline dynamically calculates stockout risk and automatically triggers automated supplier purchase orders before supply chain bottlenecks impact revenue.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Random Forest Model</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Automated PO Dispatch</span>
                <span className="rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700">Zero Stockout Risk</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-xs font-mono text-zinc-400">demand_forecast_engine.py</span>
                  <span className="text-xs font-mono text-[var(--accent-yellow)]">99.4% Accuracy</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs sm:text-sm text-zinc-300">
                    <span>Projected Stockout Window:</span>
                    <span className="font-mono text-amber-400">3.2 Days</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-[var(--accent-yellow)] h-full w-[82%]" />
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>Auto PO Generated: #PO-9914</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      Dispatched <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
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

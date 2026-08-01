import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-800/50 p-8 sm:p-10 shadow-2xl relative">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-yellow)] text-zinc-900">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-medium text-white">Architecture Review Initiated</h3>
          <p className="text-zinc-400 max-w-md mx-auto text-sm leading-relaxed">
            Thank you! A senior engineer will review your inputs and contact you within 24 business hours with an initial diagnostic summary.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-semibold text-[var(--accent-yellow)] hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-medium text-white mb-2">Initiate Architecture Review</h2>
          <p className="text-sm text-zinc-400">Fill out your technical context below for an engineer-led audit.</p>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors"
            />
          </div>

          {/* Work Email Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors"
            />
          </div>

          {/* Infrastructure Need Dropdown */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Primary Infrastructure Need *
            </label>
            <select
              required
              defaultValue=""
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors"
            >
              <option value="" disabled className="text-zinc-500">Select an infrastructure area...</option>
              <option value="ai-orchestration" className="bg-zinc-900 text-white">AI Orchestration & LLM RAG</option>
              <option value="enterprise-automations" className="bg-zinc-900 text-white">Enterprise Automations & RPA</option>
              <option value="cloud-devops" className="bg-zinc-900 text-white">Cloud Infrastructure & DevOps</option>
              <option value="crm-middleware" className="bg-zinc-900 text-white">CRM & ERP Middleware</option>
              <option value="system-audit" className="bg-zinc-900 text-white">Complete System Diagnostic Audit</option>
            </select>
          </div>

          {/* Technical Bottleneck Textarea */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Technical Bottleneck / Context *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe your current system friction, broken webhooks, manual data entry points, or scalability limits..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors resize-none"
            />
          </div>

          {/* Yellow Submit Button */}
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-[1.02]"
          >
            Initiate Architecture Review
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  );
}

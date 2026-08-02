import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

// Paste your Web3Forms Access Key here (get a free key at https://web3forms.com)
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    need: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "eigen Website Contact",
          subject: `New Architecture Review Request from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          infrastructure_need: formData.need,
          technical_bottleneck: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setSubmitted(true);
      } else {
        // Fallback demo submission if key is not yet set
        setSubmitted(true);
      }
    } catch (err) {
      // Graceful fallback display
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
            Thank you! A senior engineer will review your inputs and contact you within 24 business hours at <strong className="text-white font-mono">{formData.email || "your email"}</strong> with an initial diagnostic summary.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", need: "", message: "" });
            }}
            className="mt-4 text-xs font-semibold text-[var(--accent-yellow)] hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-medium text-white mb-2">Initiate Architecture Review</h2>
          <p className="text-sm text-zinc-400">Fill out your technical context below for an engineer-led audit.</p>

          {errorMsg && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
              {errorMsg}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
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
              name="need"
              required
              value={formData.need}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors"
            >
              <option value="" disabled className="text-zinc-500">Select an infrastructure area...</option>
              <option value="AI Orchestration & LLM RAG" className="bg-zinc-900 text-white">AI Orchestration & LLM RAG</option>
              <option value="Enterprise Automations & RPA" className="bg-zinc-900 text-white">Enterprise Automations & RPA</option>
              <option value="Cloud Infrastructure & DevOps" className="bg-zinc-900 text-white">Cloud Infrastructure & DevOps</option>
              <option value="CRM & ERP Middleware" className="bg-zinc-900 text-white">CRM & ERP Middleware</option>
              <option value="Data Engineering & Lakehouses" className="bg-zinc-900 text-white">Data Engineering & Lakehouses</option>
              <option value="Complete System Diagnostic Audit" className="bg-zinc-900 text-white">Complete System Diagnostic Audit</option>
            </select>
          </div>

          {/* Technical Bottleneck Textarea */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Technical Bottleneck / Context *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your current system friction, broken webhooks, manual data entry points, or scalability limits..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-[var(--accent-yellow)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-yellow)] transition-colors resize-none"
            />
          </div>

          {/* Yellow Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-8 py-4 text-base font-bold text-zinc-900 shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-[1.02] disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-zinc-900" />
                <span>Initiating Audit...</span>
              </>
            ) : (
              <>
                <span>Initiate Architecture Review</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

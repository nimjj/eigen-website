import { DollarSign, ShieldCheck, Activity } from "lucide-react";

export function FinOpsSecurity() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Governance & Optimization
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            FinOps, Security & Observability
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Proactive management to keep your cloud secure, fast, and aggressively cost-optimized.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Radical Cost Optimization */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <DollarSign className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Radical Cost Optimization</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Executing continuous instance rightsizing, automated spot scaling, and idle resource culling to drastically reduce monthly cloud expenditures.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Rightsizing</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Spot Scaling</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">FinOps</span>
            </div>
          </div>

          {/* Card 2: Zero-Trust Security */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Zero-Trust Security</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Enforcing strict Identity and Access Management (IAM), Web Application Firewalls (WAF), and KMS encryption to maintain SOC2 and HIPAA compliance.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">IAM</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">WAF</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">KMS</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">SOC2 / HIPAA</span>
            </div>
          </div>

          {/* Card 3: Proactive Observability */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Activity className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Proactive Observability</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Deploying real-time telemetry, automated error logging, and custom health dashboards via CloudWatch and Datadog for 24/7 visibility.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">CloudWatch</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Datadog</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">24/7 Telemetry</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

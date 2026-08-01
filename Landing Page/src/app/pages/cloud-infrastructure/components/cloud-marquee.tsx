import { Cloud, Server, Globe } from "lucide-react";

export function CloudMarquee() {
  return (
    <section className="bg-zinc-900 py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Multi-Cloud Orchestration
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Vendor-Agnostic Infrastructure Architecture
          </h2>
        </div>

        {/* 3 Static Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AWS */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Amazon Web Services (AWS)</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Complete AWS cloud lifecycle management, serverless execution, and multi-region deployment.
            </p>
          </div>

          {/* Card 2: GCP */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Google Cloud Platform (GCP)</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Google Cloud BigQuery data warehousing, Anthos hybrid clusters, and Vertex AI model pipelines.
            </p>
          </div>

          {/* Card 3: Azure */}
          <div className="group rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-white">Microsoft Azure</h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Enterprise Azure Active Directory (Entra ID), AKS Kubernetes, and hybrid enterprise cloud infrastructure.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

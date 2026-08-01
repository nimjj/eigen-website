import { FileCode, GitBranch, Container } from "lucide-react";

export function DevOpsAutomation() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-yellow)]">
            Modern DevOps
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            DevOps & CI/CD Pipelines
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Accelerating deployment velocity with automated, reproducible infrastructure.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Infrastructure as Code */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
                <FileCode className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">Infrastructure as Code</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Provisioning reproducible, version-controlled cloud environments universally utilizing Terraform and AWS CloudFormation.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">Terraform</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">CloudFormation</span>
            </div>
          </div>

          {/* Card 2: CI/CD Pipelines */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
                <GitBranch className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">CI/CD Pipelines</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Automating deployment workflows using GitOps, GitHub Actions, and GitLab CI to ensure rapid, error-free code releases.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">GitHub Actions</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">GitLab CI</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">GitOps</span>
            </div>
          </div>

          {/* Card 3: Containerization */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-800/40 p-8 transition-all duration-300 hover:bg-zinc-800/80 hover:-translate-y-1.5 hover:border-[var(--accent-yellow)]/40 hover:shadow-xl hover:shadow-yellow-500/5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--accent-yellow)] group-hover:text-zinc-900">
                <Container className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">Containerization</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Managing scalable, isolated container clusters via Docker and Kubernetes (EKS/AKS) for ultimate workload portability.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-700/50 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">Docker</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">Kubernetes</span>
              <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">EKS / AKS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

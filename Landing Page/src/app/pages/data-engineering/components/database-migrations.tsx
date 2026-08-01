import { ArrowUpRight, Wrench, ShieldCheck } from "lucide-react";

export function DatabaseMigrations() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Database Modernization
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Database Migrations & Audits
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Transition, optimize, and fortify your core database infrastructure with zero business disruption.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Zero-Downtime Migrations */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <ArrowUpRight className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Zero-Downtime Migrations</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Seamlessly transitioning legacy SQL and NoSQL databases to scalable cloud environments.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Legacy to Cloud Transfer
            </div>
          </div>

          {/* Card 2: Schema Optimization */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Wrench className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Schema Optimization</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Restructuring complex relational tables to eliminate query bottlenecks and reduce compute costs.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              Query Acceleration & Tuning
            </div>
          </div>

          {/* Card 3: Security & Health Audits */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheck className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Security & Health Audits</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Executing rigorous penetration testing and health checks to ensure data integrity and compliance.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 text-xs font-medium text-zinc-500">
              SOC2 & HIPAA Audit Ready
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

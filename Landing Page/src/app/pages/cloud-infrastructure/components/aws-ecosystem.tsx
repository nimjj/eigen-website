import { Cpu, Database, Network } from "lucide-react";

export function AwsEcosystem() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            AWS Expertise
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Deep-Dive AWS Expertise
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            End-to-end lifecycle management for complex AWS workloads.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {/* Card 1: Compute & Serverless */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Cpu className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Compute & Serverless</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Deploying scalable execution layers via AWS EC2 for heavy workloads and AWS Lambda for event-driven, serverless automation.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">EC2</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Lambda</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Auto Scaling</span>
            </div>
          </div>

          {/* Card 2: Database & Storage */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Database className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Database & Storage</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Structuring high-throughput data centers using Amazon RDS, DynamoDB, Redshift, and highly durable S3 object storage.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">RDS</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">DynamoDB</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">Redshift</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">S3</span>
            </div>
          </div>

          {/* Card 3: Networking & Delivery */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Network className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-zinc-900">Networking & Delivery</h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Configuring secure VPCs, API Gateways, Route 53 DNS, and CloudFront CDNs for low-latency global distribution.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">VPC</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">API Gateway</span>
              <span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs text-zinc-600">CloudFront</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

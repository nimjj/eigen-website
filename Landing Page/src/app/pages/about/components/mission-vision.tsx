import { Compass, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="bg-white pt-20 sm:pt-28 pb-6 sm:pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Our Direction
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Built to provide non-technical decision-makers with complete technical clarity and execution confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="group rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Compass className="h-6 w-6 text-zinc-900" />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-zinc-900">Our Mission</h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              To eliminate technical friction for business leaders by translating complex software, AI, and cloud architectures into simple, self-executing systems—guaranteeing zero jargon, complete transparency, and zero operational bottlenecks.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-yellow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Eye className="h-6 w-6 text-zinc-900" />
            </div>
            <h3 className="mt-6 text-2xl font-medium text-zinc-900">Our Vision</h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              To serve as the premier technology partner for growing enterprises, giving non-technical decision-makers complete technical confidence and autonomous systems that drive measurable ROI.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

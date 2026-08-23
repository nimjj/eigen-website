import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function CTABlock() {
  return (
    <section id="audit" className="bg-white pb-24 pt-16 border-t border-black/5">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#151515] px-8 py-20 text-center shadow-2xl transition-all duration-500">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-60"
            style={{ background: "var(--accent-yellow)" }}
          />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
            Radical Cost-Efficiency Meets Sovereign Intelligence.
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Stop overpaying for generic AI that doesn't understand your business. Let's architect a solution that drives actual ROI.
          </p>
          <div className="relative mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-yellow)] px-7 py-4 font-medium text-zinc-900 shadow-lg transition-all duration-300 hover:bg-[var(--accent-yellow-hover)] hover:scale-105 hover:shadow-yellow-500/20"
            >
              Review AI architecture
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

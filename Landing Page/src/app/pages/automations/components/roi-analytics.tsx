import { Check, X, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function RoiAnalytics() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Financial Impact & Architectural Security
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
            Automation ROI Over 12 Months
          </h2>
          <p className="mt-5 text-lg text-zinc-600">
            Compare predictable infrastructure costs against skyrocketing manual labor expenses and restrictive commercial SaaS task taxes.
          </p>
        </div>

        {/* 1. Refined SVG Line Chart */}
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-10 shadow-sm mb-20 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-xl font-medium text-zinc-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-zinc-900" />
                Cumulative Cost Trajectory
              </h3>
              <p className="text-xs text-zinc-500 mt-1">12-Month Total Cost of Ownership Comparison</p>
            </div>
            
            {/* Chart Legend */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 rounded-full bg-red-500 inline-block" />
                <span className="text-zinc-600">Manual Labor Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 rounded-full bg-[var(--accent-yellow)] inline-block" />
                <span className="text-zinc-600">eigen Autonomous Stack</span>
              </div>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative h-[300px] sm:h-[360px] w-full">
            <svg className="h-full w-full" viewBox="0 0 800 320" preserveAspectRatio="none">
              {/* Y-axis labels area */}
              {/* Grid lines */}
              <line x1="60" y1="40" x2="780" y2="40" stroke="#e4e4e7" strokeWidth="1" />
              <line x1="60" y1="100" x2="780" y2="100" stroke="#e4e4e7" strokeWidth="1" />
              <line x1="60" y1="160" x2="780" y2="160" stroke="#e4e4e7" strokeWidth="1" />
              <line x1="60" y1="220" x2="780" y2="220" stroke="#e4e4e7" strokeWidth="1" />
              <line x1="60" y1="280" x2="780" y2="280" stroke="#d4d4d8" strokeWidth="1" />

              {/* Y-axis labels */}
              <text x="50" y="44" fill="#a1a1aa" fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$500K</text>
              <text x="50" y="104" fill="#a1a1aa" fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$375K</text>
              <text x="50" y="164" fill="#a1a1aa" fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$250K</text>
              <text x="50" y="224" fill="#a1a1aa" fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$125K</text>
              <text x="50" y="284" fill="#a1a1aa" fontSize="10" textAnchor="end" fontFamily="Inter, sans-serif">$0</text>

              {/* X-axis labels */}
              <text x="120" y="305" fill="#a1a1aa" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Mo 1</text>
              <text x="240" y="305" fill="#a1a1aa" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Mo 3</text>
              <text x="420" y="305" fill="#a1a1aa" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Mo 6</text>
              <text x="600" y="305" fill="#a1a1aa" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Mo 9</text>
              <text x="760" y="305" fill="#a1a1aa" fontSize="10" textAnchor="middle" fontFamily="Inter, sans-serif">Mo 12</text>

              {/* Area fill under Manual Labor line */}
              <path
                d="M 120 268 C 200 258, 300 220, 360 185 C 420 150, 520 100, 600 68 C 660 45, 730 35, 760 30 L 760 280 L 120 280 Z"
                fill="url(#redGradient)" opacity="0.12"
              />

              {/* Area fill under eigen line */}
              <path
                d="M 120 265 L 240 242 L 360 235 L 480 232 L 600 230 L 760 228 L 760 280 L 120 280 Z"
                fill="url(#yellowGradient)" opacity="0.15"
              />

              {/* Manual Labor Cost Line (Red - steep curve) */}
              <path
                d="M 120 268 C 200 258, 300 220, 360 185 C 420 150, 520 100, 600 68 C 660 45, 730 35, 760 30"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* eigen Autonomous Stack Line (Yellow - flat) */}
              <path
                d="M 120 265 L 240 242 L 360 235 L 480 232 L 600 230 L 760 228"
                fill="none"
                stroke="#D4A800"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Breakeven vertical dashed line */}
              <line x1="240" y1="40" x2="240" y2="280" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="4 4" />

              {/* Breakeven label */}
              <g transform="translate(240, 55)">
                <rect x="-38" y="-14" width="76" height="20" rx="4" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
                <text x="0" y="1" fill="#18181B" fontSize="9" textAnchor="middle" fontWeight="600" fontFamily="Inter, sans-serif">Breakeven</text>
              </g>

              {/* Data point dots - Manual */}
              <circle cx="120" cy="268" r="3.5" fill="#EF4444" />
              <circle cx="240" cy="242" r="3.5" fill="#EF4444" />
              <circle cx="360" cy="185" r="3.5" fill="#EF4444" />
              <circle cx="480" cy="130" r="3.5" fill="#EF4444" />
              <circle cx="600" cy="68" r="3.5" fill="#EF4444" />
              <circle cx="760" cy="30" r="3.5" fill="#EF4444" />

              {/* Data point dots - eigen */}
              <circle cx="120" cy="265" r="3.5" fill="#D4A800" />
              <circle cx="240" cy="242" r="3.5" fill="#D4A800" />
              <circle cx="360" cy="235" r="3.5" fill="#D4A800" />
              <circle cx="480" cy="232" r="3.5" fill="#D4A800" />
              <circle cx="600" cy="230" r="3.5" fill="#D4A800" />
              <circle cx="760" cy="228" r="3.5" fill="#D4A800" />

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A800" />
                  <stop offset="100%" stopColor="#D4A800" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Savings callout */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2">
              <span className="text-zinc-500">12-Month Savings:</span>
              <span className="font-bold text-zinc-900">Up to 72% reduction</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2">
              <span className="text-zinc-500">Breakeven:</span>
              <span className="font-bold text-zinc-900">Month 3</span>
            </div>
          </div>
        </div>

        {/* 2. Feature Comparison Table */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium text-zinc-900 sm:text-3xl">
              Architectural Comparison
            </h3>
            <p className="text-sm text-zinc-600 mt-2">
              Why leading engineering teams choose eigen over commercial cloud iPaaS platforms.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50">
                  <th className="py-5 px-6 text-sm font-semibold text-zinc-500">Feature / Dimension</th>
                  <th className="py-5 px-6 text-sm font-semibold text-zinc-900">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--accent-yellow)]">
                        <Zap className="h-3.5 w-3.5 text-zinc-900" />
                      </span>
                      eigen Managed Stack
                    </span>
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-zinc-400">
                    Commercial SaaS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-sm">
                
                {/* Row 1 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">Execution Cost</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Predictable flat baseline — zero per-task tax</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Exponential pay-per-task pricing</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">Data Privacy</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>100% Private VPC · HIPAA · SOC2</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Shared multi-tenant cloud</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">Extensibility</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Native Python, Node.js & custom CUDA</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Locked to pre-built GUI connectors</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">AI Integration</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Private LLMs (Ollama, vLLM) & custom models</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Basic public API wrappers only</span>
                    </div>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">Vendor Lock-in</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Zero lock-in — open-source core</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>High switching costs & proprietary logic</span>
                    </div>
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="py-5 px-6 font-medium text-zinc-900">Infrastructure Target</td>
                  <td className="py-5 px-6 text-zinc-700">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Single-tenant isolation</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-zinc-400">
                    <div className="flex items-center gap-2.5">
                      <X className="h-4 w-4 text-red-400 shrink-0" />
                      <span>Multi-tenant shared resources</span>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

import { Database, Server, HeartPulse, Building2, CreditCard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type EcosystemItem = { name: string; icon: LucideIcon };

const items: EcosystemItem[] = [
  { name: "SAP ERP", icon: Server },
  { name: "Oracle NetSuite", icon: Database },
  { name: "Epic Systems EHR", icon: HeartPulse },
  { name: "Cerner Health", icon: Building2 },
  { name: "Stripe Payments", icon: CreditCard },
];

function Chip({ name, icon: Icon }: EcosystemItem) {
  return (
    <div className="mx-4 flex shrink-0 items-center gap-3 rounded-full border border-zinc-700 bg-zinc-800/50 px-8 py-4 text-zinc-300 transition-colors duration-300 hover:border-[var(--accent-yellow)]/50 hover:text-white">
      <Icon className="h-5 w-5 text-[var(--accent-yellow)] opacity-80" />
      <span className="text-sm sm:text-base font-medium tracking-wide whitespace-nowrap">{name}</span>
    </div>
  );
}

export function IndustryMarquee() {
  const quadrupled = [...items, ...items, ...items, ...items];
  return (
    <section className="bg-zinc-900 py-16 sm:py-20 overflow-hidden border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          ENTERPRISE ECOSYSTEM CONNECTIONS
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-zinc-900 to-transparent" />

        <div className="flex w-max">
          <div className="flex py-2 animate-marquee" style={{ animationDuration: "25s" }}>
            {quadrupled.map((it, i) => (
              <Chip key={`${it.name}-${i}`} name={it.name} icon={it.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Building2, Cloud, Server, Boxes, Ticket, MessageSquare, Table2, CreditCard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IntegrationItem = { name: string; icon: LucideIcon };

const integrations: IntegrationItem[] = [
  { name: "Zoho CRM", icon: Building2 },
  { name: "Salesforce", icon: Cloud },
  { name: "SAP ERP", icon: Server },
  { name: "Microsoft Dynamics", icon: Boxes },
  { name: "Jira", icon: Ticket },
  { name: "Slack", icon: MessageSquare },
  { name: "Airtable", icon: Table2 },
  { name: "Stripe", icon: CreditCard },
];

function Chip({ name, icon: Icon }: IntegrationItem) {
  return (
    <div className="mx-3 flex shrink-0 items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-800/50 px-6 py-3 text-zinc-300 transition-colors duration-300 hover:border-[var(--accent-yellow)]/50 hover:text-white">
      <Icon className="h-4 w-4 opacity-70" />
      <span className="text-sm font-medium tracking-wide whitespace-nowrap">{name}</span>
    </div>
  );
}

export function IntegrationMarquee() {
  const doubled = [...integrations, ...integrations];
  return (
    <section className="bg-zinc-900 py-16 sm:py-20 overflow-hidden border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Native Integration with Enterprise Ecosystems
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-zinc-900 to-transparent" />

        <div className="flex w-max">
          <div className="flex py-2 animate-marquee">
            {doubled.map((it, i) => (
              <Chip key={`${it.name}-${i}`} name={it.name} icon={it.icon} />
            ))}
          </div>
        </div>

        <div className="flex w-max">
          <div className="flex py-2 animate-marquee-reverse">
            {doubled.map((it, i) => (
              <Chip key={`${it.name}-rev-${i}`} name={it.name} icon={it.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { 
  Cpu, Terminal, Bot, Flame, Network, Link2, Database, 
  TreePine, Palette, Box, Server, Cloud 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TechItem = { name: string; icon: LucideIcon };

const row1: TechItem[] = [
  { name: "vLLM", icon: Cpu },
  { name: "Ollama", icon: Terminal },
  { name: "Hugging Face", icon: Bot },
  { name: "PyTorch", icon: Flame },
  { name: "CUDA", icon: Cpu },
  { name: "Model Context Protocol (MCP)", icon: Network },
  { name: "LangChain", icon: Link2 },
  { name: "LlamaIndex", icon: Database },
];

const row2: TechItem[] = [
  { name: "Pinecone", icon: TreePine },
  { name: "Chroma", icon: Palette },
  { name: "Qdrant", icon: Box },
  { name: "Milvus", icon: Database },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Server },
  { name: "AWS Bedrock", icon: Cloud },
  { name: "Azure AI", icon: Cloud },
];

function Chip({ name, icon: Icon }: TechItem) {
  return (
    <div className="group mx-3 flex shrink-0 items-center gap-2.5 rounded-full border border-zinc-700/50 bg-zinc-800/50 px-6 py-3 text-zinc-300 transition-colors duration-300 hover:border-[var(--accent-yellow)]/50 hover:text-white">
      <Icon className="h-4.5 w-4.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-[var(--accent-yellow)]" />
      <span className="text-sm font-medium tracking-wide">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max">
      <div className={`flex py-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((it, i) => (
          <Chip key={`${it.name}-${i}`} name={it.name} icon={it.icon} />
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="overflow-hidden bg-zinc-900 pt-8 pb-24 sm:pt-12 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Powered by Open & Enterprise Frameworks
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* edge fades - dark theme */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-zinc-900 to-transparent" />
        
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}

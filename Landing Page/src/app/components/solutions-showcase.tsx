import { useState } from "react";
import { Workflow, Cpu, Cloud, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router";

type Solution = {
  id: string;
  category: string;
  title: string;
  desc: string;
  tag: string;
  gradient: string;
  link: string;
};

const solutions: Solution[] = [
  {
    id: "1",
    category: "Operations",
    title: "Autonomous Ticket & Workflow Routing",
    desc: "Convert fragmented manual intake into self-triaging AI workflows that resolve and assign tasks in milliseconds.",
    tag: "AI Automations",
    gradient: "from-[#1e3c72] to-[#2a5298]",
    link: "/services/automations",
  },
  {
    id: "2",
    category: "Engineering",
    title: "Sovereign Enterprise Knowledge Systems",
    desc: "Private RAG pipelines that index your codebases, documents, and databases securely within your VPC.",
    tag: "AI Orchestration",
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
    link: "/services/ai-orchestration",
  },
  {
    id: "3",
    category: "Strategy",
    title: "Cloud Infrastructure & FinOps Audits",
    desc: "Cut infrastructure waste with automated container auto-scaling, Terraform IaC, and 99.99% multi-region uptime.",
    tag: "Cloud Architecture",
    gradient: "from-[#2c3e50] to-[#3498db]",
    link: "/services/cloud-infrastructure",
  },
  {
    id: "4",
    category: "Growth",
    title: "CRM, ERP & Middleware Harmonization",
    desc: "Empower revenue teams with real-time, bi-directional sync across HubSpot, Salesforce, and custom internal tools.",
    tag: "CRM Orchestration",
    gradient: "from-[#111111] to-[#333333]",
    link: "/services/crm-orchestration",
  },
];

export function SolutionsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Operations", "Engineering", "Strategy", "Growth"];

  const filteredSolutions =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#FAF9F5] flex flex-col items-center">
      
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center text-[#1B1B1B] mb-8">
        Built for every enterprise team.
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#FEDD2B] text-black shadow-md border border-yellow-400/60 scale-105"
                : "bg-white/80 text-[#1B1B1B] border border-black/10 hover:bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {filteredSolutions.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={`relative min-h-[340px] sm:min-h-[380px] rounded-[36px] p-8 flex flex-col justify-between group overflow-hidden shadow-lg border border-white/10 bg-gradient-to-br ${item.gradient} transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl`}
          >
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-display font-semibold uppercase tracking-wider border border-white/20">
                {item.tag}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto pt-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-white/80 leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

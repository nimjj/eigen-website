import { useState, useRef, useEffect } from "react";
import { ChevronDown, Workflow, Cloud, Cpu, RefreshCw, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";
import logoDark from "../../imports/4-Photoroom.png";

type ServiceItem = {
  name: string;
  desc: string;
  to: string;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  { name: "AI Orchestration", desc: "RAG pipelines & custom ML", to: "/services/ai-orchestration", icon: Cpu },
  { name: "Automations", desc: "Bespoke API scripts & workflows", to: "/services/automations", icon: Workflow },
  { name: "Cloud Architecture", desc: "Secure, scalable infrastructure", to: "/services/cloud-infrastructure", icon: Cloud },
  { name: "CRM Integrations", desc: "Sync across your platforms", to: "/services/crm-orchestration", icon: RefreshCw },
  { name: "Data Engineering", desc: "Lakehouses, ETL & ML models", to: "/services/data-engineering", icon: Database },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex items-center justify-center px-4 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[840px] flex items-center justify-between bg-[#151515]/95 backdrop-blur-2xl rounded-full px-4 sm:px-6 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)] border border-white/15 h-[68px] sm:h-[72px] transition-all duration-300">
        
        {/* Left: Brand Logo & Links */}
        <div className="flex items-center gap-4 sm:gap-6 pl-1">
          <Link to="/" className="flex items-center group">
            <img
              src={logoDark}
              alt="eigen."
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5">
            <Link
              to="/about"
              className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200"
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-white" : ""}`}
                />
              </button>

              {open && (
                <div className="absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]/95 backdrop-blur-2xl p-2 shadow-2xl">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.name}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-[var(--accent-yellow)] group-hover:text-black">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold text-white group-hover:text-[var(--accent-yellow)] transition-colors">
                            {s.name}
                          </span>
                          <span className="block text-[11px] text-white/50">{s.desc}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#ecosystem"
              className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200"
            >
              Ecosystem
            </a>
          </nav>
        </div>

        {/* Right: CTA Pill */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="bg-[#FEDD2B] text-black font-display rounded-full hover:bg-[#E5C725] transition-all duration-300 shrink-0 flex items-center px-4 sm:px-5 text-[11px] h-[36px] font-bold uppercase tracking-wider shadow-md hover:scale-105"
          >
            Talk to an Engineer
          </Link>
        </div>
      </div>
    </header>
  );
}

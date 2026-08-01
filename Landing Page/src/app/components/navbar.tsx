import { useState, useRef, useEffect } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { Link } from "react-router";
import logoLight from "../../imports/3_Fotor.png";

const services = [
  { name: "Automations", desc: "Bespoke API scripts & workflows", to: "/services/automations" },
  { name: "Cloud Architecture", desc: "Secure, scalable infrastructure", to: "/services/cloud-infrastructure" },
  { name: "AI Orchestration", desc: "RAG pipelines & custom ML", to: "/services/ai-orchestration" },
  { name: "CRM Integrations", desc: "Sync across your platforms", to: "/services/crm-orchestration" },
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoLight} alt="eigen." className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply" />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/about"
            className="hidden rounded-lg px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:block"
          >
            About Us
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl shadow-zinc-900/5">
                {services.map((s) => (
                  <Link
                    key={s.name}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-zinc-50"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-yellow)]/20 text-zinc-900 transition-colors group-hover:bg-[var(--accent-yellow)]">
                      <Zap className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm text-zinc-900">{s.name}</span>
                      <span className="block text-xs text-zinc-500">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-lg px-4 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:block"
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="ml-2 rounded-lg bg-[var(--accent-yellow)] px-4 py-2 text-sm text-zinc-900 shadow-sm transition-colors hover:bg-[var(--accent-yellow-hover)]"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

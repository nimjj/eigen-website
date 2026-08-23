import { useState, useRef, useEffect } from "react";
import { ChevronDown, Workflow, Cloud, Cpu, RefreshCw, Database, Menu, X, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
    setVisible(true);
  }, [location.pathname, location.hash]);

  // Handle outside clicks
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Smart Hide on Scroll Down, Reveal on Scroll Up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always visible at the top of the page
          if (currentScrollY < 40) {
            setVisible(true);
          } else if (currentScrollY > lastScrollY.current + 8) {
            // Scrolling DOWN -> Hide header
            if (!mobileOpen) {
              setVisible(false);
              setOpen(false);
            }
          } else if (currentScrollY < lastScrollY.current - 8) {
            // Scrolling UP -> Show header
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex items-center justify-center px-4 w-full pointer-events-none transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
      }`}
      ref={mobileRef}
    >
      <div className="pointer-events-auto w-full max-w-[840px] flex items-center justify-between bg-[#151515]/95 backdrop-blur-2xl rounded-full px-4 sm:px-6 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)] border border-white/15 h-[68px] sm:h-[72px] transition-all duration-300">
        
        {/* Left: Brand Logo & Desktop Links */}
        <div className="flex items-center gap-4 sm:gap-6 pl-1">
          <Link to="/" className="flex items-center group" aria-label="eigen. home">
            <img
              src={logoDark}
              alt="eigen."
              width={160}
              height={80}
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-5" aria-label="Desktop Navigation">
            <Link
              to="/about"
              className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-haspopup="true"
                className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-white" : ""}`}
                />
              </button>

              {open && (
                <div className="absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]/95 backdrop-blur-2xl p-2 shadow-2xl animate-fade-slide-up">
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
          </nav>
        </div>

        {/* Right: CTA Pill & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="bg-[#FEDD2B] text-black font-display rounded-full hover:bg-[#E5C725] transition-all duration-300 shrink-0 flex items-center px-4 sm:px-5 text-[11px] h-[36px] font-bold uppercase tracking-wider shadow-md hover:scale-105"
          >
            Talk to an Engineer
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-24 left-4 right-4 max-w-[840px] mx-auto rounded-3xl bg-[#151515]/98 backdrop-blur-3xl border border-white/15 p-6 shadow-2xl flex flex-col gap-5 animate-fade-slide-up z-50 text-white">
          <div className="flex flex-col gap-2 pb-4 border-b border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FEDD2B]">
              Navigation
            </span>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold py-2 hover:text-[#FEDD2B] transition-colors"
            >
              About Us
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FEDD2B]">
              Services
            </span>
            <div className="grid grid-cols-1 gap-2 pt-1">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.name}
                    to={s.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FEDD2B]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold">{s.name}</div>
                      <div className="text-[10px] text-white/50">{s.desc}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FEDD2B] py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform active:scale-95 shadow-lg"
            >
              Schedule Architecture Review
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


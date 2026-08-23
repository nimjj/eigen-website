import { Link } from "react-router";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import logoDark from "../../imports/4-Photoroom.png";

export function Footer() {
  return (
    <footer className="bg-[#151515] text-white pt-20 sm:pt-28 pb-12 px-6 sm:px-8 lg:px-12 rounded-t-[48px] sm:rounded-t-[64px] relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 sm:mb-20">
          
          {/* Brand Column — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center group" aria-label="eigen. home">
              <img
                src={logoDark}
                alt="eigen."
                width={160}
                height={80}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            
            <p className="font-body text-sm text-white/60 max-w-sm leading-relaxed">
              The applied intelligence engine for modern enterprises. Engineering custom AI orchestration, robust cloud infrastructure & seamless platform integrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/ei-gentech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="mailto:sales@ei-gen.tech"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Services */}
          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-[11px] font-semibold">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link to="/services/ai-orchestration" className="text-sm text-white/60 hover:text-white transition-colors">
                  AI Orchestration & LLMs
                </Link>
              </li>
              <li>
                <Link to="/services/automations" className="text-sm text-white/60 hover:text-white transition-colors">
                  Agentic Automations & RPA
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-infrastructure" className="text-sm text-white/60 hover:text-white transition-colors">
                  Cloud Architecture & FinOps
                </Link>
              </li>
              <li>
                <Link to="/services/crm-orchestration" className="text-sm text-white/60 hover:text-white transition-colors">
                  CRM & ERP Middleware
                </Link>
              </li>
              <li>
                <Link to="/services/data-engineering" className="text-sm text-white/60 hover:text-white transition-colors">
                  Data Engineering & ETL
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Company */}
          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-[11px] font-semibold">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/#ecosystem" className="text-sm text-white/60 hover:text-white transition-colors">
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest text-[11px] font-semibold">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3.5 text-sm text-white/60">
              <a href="mailto:sales@ei-gen.tech" className="hover:text-[var(--accent-yellow)] transition-colors font-mono">
                sales@ei-gen.tech
              </a>
              <p className="text-white/40 text-xs">
                Initiate an engineer-led architecture review.
              </p>
              <p className="text-white/40 text-xs">
                Colombo, Sri Lanka
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-display">
          <p>© 2026 ei-gen.tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Automation Made Human.</span>
            <span>Applied Intelligence.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


import { Link } from "react-router";
import { Mail, Linkedin } from "lucide-react";
import logoDark from "../../imports/4-Photoroom.png";

export function Footer() {
  return (
    <footer className="bg-zinc-900 pb-16 pt-8 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/">
              <img src={logoDark} alt="eigen." className="h-12 sm:h-16 w-auto object-contain" />
            </Link>
            <p className="text-xs text-zinc-500 max-w-xs text-center md:text-left">
              Applied AI Orchestration, Enterprise Automations & Cloud Infrastructure.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400">
            <Link to="/about" className="transition-colors hover:text-white">
              About Us
            </Link>

            <Link to="/contact" className="transition-colors hover:text-white">
              Contact Us
            </Link>

            <a
              href="mailto:sales@ei-gen.tech"
              className="flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-300 transition-colors hover:text-[var(--accent-yellow)]"
            >
              <Mail className="h-4 w-4 text-[var(--accent-yellow)]" />
              <span>sales@ei-gen.tech</span>
            </a>

            <a
              href="https://www.linkedin.com/company/ei-gentech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-6 text-xs text-zinc-600 sm:flex-row">
          <span>© 2026 eigen.tech. All rights reserved.</span>
          <span>Demystifying Technology. Accelerating Growth.</span>
        </div>
      </div>
    </footer>
  );
}

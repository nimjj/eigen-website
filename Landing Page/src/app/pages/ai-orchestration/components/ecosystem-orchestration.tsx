import { Bot } from "lucide-react";

export function EcosystemOrchestration() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 overflow-hidden border-t border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Ecosystem Orchestration
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              We don't just deploy models; we build autonomous agents that act as the connective tissue across your entire digital ecosystem.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              By linking siloed systems—from legacy CRMs to modern cloud data warehouses—our orchestration layer ensures that AI agents can securely access, analyze, and act upon data anywhere in your organization. The result is a unified intelligence fabric that drives end-to-end automation.
            </p>
          </div>

          {/* Hub and Spoke Graphic */}
          <div className="relative h-[320px] w-full flex items-center justify-center rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200/50">
            {/* Center Node (AI Bot) */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--accent-yellow)] shadow-lg shadow-[var(--accent-yellow)]/20">
              <Bot className="h-10 w-10 text-zinc-900" />
            </div>

            {/* Connecting Lines (SVG) - Direct Radial Lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              <g stroke="currentColor" strokeWidth="2" className="text-black">
                {/* To Top (S3) */}
                <line x1="50%" y1="50%" x2="50%" y2="15%" />
                {/* To Right (CRM) */}
                <line x1="50%" y1="50%" x2="85%" y2="40%" />
                {/* To Bottom Right (Jira) */}
                <line x1="50%" y1="50%" x2="75%" y2="85%" />
                {/* To Bottom Left (Sheets) */}
                <line x1="50%" y1="50%" x2="25%" y2="85%" />
                {/* To Left (EHR) */}
                <line x1="50%" y1="50%" x2="15%" y2="40%" />
              </g>
            </svg>

            {/* Surrounding Nodes */}
            {/* S3 (Top) */}
            <div className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm gap-1 transition-transform hover:scale-110">
              <svg className="h-5 w-5 text-[#E1523D]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 3c4.42 0 8 1.79 8 4s-3.58 4-8 4-8-1.79-8-4 3.58-4 8-4zm0 15c-4.42 0-8-1.79-8-4v-2.33c2.31 1.7 5.06 2.33 8 2.33s5.69-.63 8-2.33V17c0 2.21-3.58 4-8 4z" />
              </svg>
              <span className="text-[8px] font-semibold text-zinc-500">S3</span>
            </div>
            
            {/* Salesforce (Right) */}
            <div className="absolute top-[40%] left-[85%] -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm gap-1 transition-transform hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10c-.39 0-.766.05-1.12.143A6.997 6.997 0 0010 4a6.997 6.997 0 00-6.19 3.633C1.655 8.165 0 9.873 0 12c0 2.21 1.79 4 4 4h13.5z" fill="#00A1E0"/>
                <text x="12" y="15" fontSize="6" fill="#fff" textAnchor="middle" fontWeight="bold">Sf</text>
              </svg>
              <span className="text-[8px] font-semibold text-zinc-500">CRM</span>
            </div>
            
            {/* Jira (Bottom Right) */}
            <div className="absolute top-[85%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm gap-1 transition-transform hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M11.5 2L16 6.5L11.5 11L7 6.5L11.5 2Z" fill="#2684FF"/>
                <path d="M6.5 7L11 11.5L6.5 16L2 11.5L6.5 7Z" fill="#0052CC"/>
                <path d="M16.5 7L21 11.5L16.5 16L12 11.5L16.5 7Z" fill="#2684FF"/>
                <path d="M11.5 12L16 16.5L11.5 21L7 16.5L11.5 12Z" fill="#0052CC"/>
              </svg>
              <span className="text-[8px] font-semibold text-zinc-500">Jira</span>
            </div>
            
            {/* Google Sheets (Bottom Left) */}
            <div className="absolute top-[85%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm gap-1 transition-transform hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#0F9D58"/>
                <path d="M14 2V8H20" fill="#000000" fillOpacity="0.2"/>
                <rect x="8" y="11" width="8" height="2" fill="#FFFFFF"/>
                <rect x="8" y="15" width="8" height="2" fill="#FFFFFF"/>
                <rect x="11" y="11" width="2" height="6" fill="#FFFFFF"/>
              </svg>
              <span className="text-[8px] font-semibold text-zinc-500">Sheets</span>
            </div>

            {/* EHR (Left) */}
            <div className="absolute top-[40%] left-[15%] -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm gap-1 transition-transform hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#E11D48"/>
                <path d="M11 9H13V12H16V14H13V17H11V14H8V12H11V9Z" fill="white"/>
              </svg>
              <span className="text-[8px] font-semibold text-zinc-500">EHR</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mandate() {
  return (
    <section className="py-24 sm:py-36 px-6 lg:px-10 max-w-[1728px] mx-auto relative flex flex-col items-center text-center bg-[#FAF9F5] border-b border-black/5 overflow-hidden">
      
      {/* Background Orbital Geometric Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] opacity-20 pointer-events-none">
        <svg className="w-full h-full" fill="none" stroke="url(#manifesto-grad)" strokeWidth="0.6" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="manifesto-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEDD2B" />
              <stop offset="50%" stopColor="#151515" />
              <stop offset="100%" stopColor="#FEDD2B" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" />
          <ellipse cx="50" cy="50" rx="24" ry="48" />
          <ellipse cx="50" cy="50" rx="48" ry="24" />
          <line x1="2" y1="50" x2="98" y2="50" />
          <line x1="50" y1="2" x2="50" y2="98" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <span className="font-display text-xs sm:text-sm font-bold tracking-widest text-black uppercase mb-6 px-4 py-1.5 rounded-full bg-[#FEDD2B]/30 border border-yellow-400/50 shadow-sm">
          The Mandate
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1B1B1B] leading-[1.15] text-balance mb-8">
          Pragmatic Engineering. Maximum ROI.
        </h2>

        <p className="font-body text-base sm:text-xl text-[#717182] leading-relaxed max-w-3xl text-balance">
          As AI agents expand across the enterprise, the need for a singular, robust infrastructure foundation has never been more critical. We meticulously research your current architecture to prioritize the smartest, lowest-cost integration options first—delivering high-impact solutions without unnecessary overhead.
        </p>
      </div>

    </section>
  );
}


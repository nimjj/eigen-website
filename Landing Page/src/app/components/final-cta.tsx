import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 sm:py-36 px-6 lg:px-10 bg-[#FAF9F5] relative overflow-hidden">
      
      {/* Radiant Yellow Glow Background */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-30 blur-[140px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 221, 43, 0.6) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Brand Circle */}
        <div className="w-12 h-12 rounded-full border border-black/20 bg-[#FEDD2B] flex items-center justify-center mb-8 shadow-md">
          <span className="text-black font-display font-bold text-lg leading-none">e.</span>
        </div>

        {/* Large Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1B1B1B] tracking-tight leading-[1.1] mb-8 max-w-4xl text-balance">
          Experience the future of <span className="underline decoration-[#FEDD2B] decoration-wavy decoration-2">applied AI</span> & cloud intelligence.
        </h2>

        <p className="font-body text-base sm:text-xl text-[#717182] max-w-2xl mb-12 leading-relaxed text-balance">
          Stop fighting your systems. Let's engineer architecture and automations that scale seamlessly with your vision.
        </p>

        {/* Dual Pill CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FEDD2B] px-8 py-4 text-xs font-bold uppercase tracking-wider text-black shadow-xl shadow-yellow-500/20 border border-yellow-400/60 transition-all duration-300 hover:bg-[#E5C725] hover:scale-105"
          >
            Talk to an Engineer
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white/70 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#1B1B1B] transition-all duration-300 hover:bg-white hover:border-black/40"
          >
            About Our Approach
          </Link>
        </div>

      </div>
    </section>
  );
}


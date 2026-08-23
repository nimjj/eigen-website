import { Quote } from "lucide-react";
import logoImg from "../../imports/3_Fotor.png";

export function Testimonial() {
  return (
    <section className="py-28 sm:py-40 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center bg-[#FAF9F5] border-t border-black/5">
      
      {/* Quote Icon with yellow background */}
      <div className="mb-10 w-16 h-16 rounded-full bg-[#FEDD2B]/30 border border-yellow-400/50 flex items-center justify-center text-black shadow-sm">
        <Quote className="w-8 h-8 rotate-180" />
      </div>

      {/* Main Quote Spread Out to the Two Sides */}
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.22] font-bold tracking-tight text-[#1B1B1B] mb-14 max-w-6xl text-balance">
        "eigen was founded on a simple principle: liberate product and engineering leaders from infrastructure friction, allowing them to focus entirely on high-velocity innovation."
      </h2>

      {/* Philosophy Tag with eigen Logo */}
      <div className="flex items-center gap-3 bg-black/5 border border-black/10 px-5 py-2 rounded-full shadow-sm">
        <img
          src={logoImg}
          alt="eigen. logo"
          className="h-5 sm:h-6 w-auto object-contain"
        />
        <div className="h-3.5 w-px bg-black/20" />
        <span className="font-display text-xs font-bold uppercase tracking-widest text-[#1B1B1B]">
          Our Philosophy
        </span>
      </div>

    </section>
  );
}

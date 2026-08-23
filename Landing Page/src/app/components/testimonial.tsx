export function Testimonial() {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center bg-[#FAF9F5] border-t border-black/5">
      
      {/* Our Philosophy Pill */}
      <span className="font-display text-xs font-bold uppercase tracking-widest text-black mb-8 px-4 py-1.5 rounded-full bg-[#FEDD2B]/40 border border-yellow-400/50 shadow-sm">
        Our Philosophy
      </span>

      {/* Part 1: Introductory Principle */}
      <p className="font-display text-lg sm:text-2xl md:text-3xl font-medium text-[#717182] mb-6 max-w-3xl">
        eigen was founded on a simple principle:
      </p>

      {/* Part 2: Main Highlighted Mission */}
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.22] font-bold tracking-tight text-[#1B1B1B] max-w-5xl text-balance">
        “liberate product and engineering leaders from infrastructure friction, allowing them to focus entirely on high-velocity innovation.”
      </h2>

    </section>
  );
}


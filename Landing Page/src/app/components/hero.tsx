export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] pt-[160px] sm:pt-[220px] lg:pt-[260px] pb-[80px] sm:pb-[120px] px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-end overflow-hidden bg-[#FAF9F5]">
      
      {/* Surge-Inspired Radiant Ambient Lighting Backdrop */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] lg:w-[1500px] h-[500px] sm:h-[700px] rounded-full opacity-35 blur-[120px] sm:blur-[160px] -z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(254, 221, 43, 0.45) 0%, rgba(254, 200, 43, 0.2) 45%, rgba(250, 249, 245, 0) 75%)",
        }}
      />
      
      <div 
        className="pointer-events-none absolute -right-[150px] top-[120px] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full opacity-20 blur-[130px] -z-0"
        style={{
          background: "radial-gradient(circle, rgba(254, 221, 43, 0.5) 0%, transparent 70%)",
        }}
      />

      {/* Main Content Anchored Lower Down (Surge Style) */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto text-left mt-auto">
        
        {/* Massive Editorial Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[115px] font-extrabold tracking-tight text-[#1B1B1B] leading-[1.02] text-balance">
          Your Focus Belongs to{" "}
          <span className="relative inline-block">
            Growth.
            <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 bg-[#FEDD2B] -z-10 rounded-full opacity-70"></span>
          </span>
          <span className="block mt-2 sm:mt-4 text-[#1B1B1B]">
            Not Infrastructure.
          </span>
        </h1>

      </div>
    </section>
  );
}



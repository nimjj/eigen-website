export function FrictionBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <h2 className="text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl font-medium">
          <span className="relative inline-block">
            Your
            <svg aria-hidden="true" viewBox="0 0 100 10" className="absolute -bottom-2 left-0 w-full fill-[var(--accent-yellow)]" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z" /></svg>
          </span>{" "}
          Focus Belongs on{" "}
          <span className="relative inline-block">
            Growth
            <svg aria-hidden="true" viewBox="0 0 100 10" className="absolute -bottom-2 left-0 w-full fill-[var(--accent-yellow)]" preserveAspectRatio="none"><path d="M0 5 Q 50 0 100 5 L 100 8 Q 50 3 0 8 Z" /></svg>
          </span>
          , Not Infrastructure.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Managing disparate platforms and scaling internal tech takes your eyes off what actually matters. We step in as your dedicated engineering arm—optimizing your current workflows with tailored middleware and smart integrations so your tools work for you, not against you.
        </p>
      </div>
    </section>
  );
}

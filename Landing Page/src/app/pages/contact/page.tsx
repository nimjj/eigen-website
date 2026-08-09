import { SEO } from "../../components/seo";
import { HeroHeader } from "./components/hero-header";
import { ContactForm } from "./components/contact-form";
import { ContactInfoTimeline } from "./components/contact-info-timeline";

export function ContactPage() {
  return (
    <section id="contact" className="bg-zinc-900 py-24 sm:py-32 relative overflow-hidden">
      <SEO
        title="Contact Us — eigen."
        description="Initiate an engineer-led architecture review for your enterprise AI, cloud, automation, or data stack."
        canonical="https://ei-gen.tech/contact"
      />
      {/* Background radial glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--accent-yellow)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <HeroHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactForm />
          <ContactInfoTimeline />
        </div>
      </div>
    </section>
  );
}

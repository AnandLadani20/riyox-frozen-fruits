import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { certifications } from "@/data/site";

export function CertificationsMarquee() {
  const loop = [...certifications, ...certifications];

  return (
    <section className="border-y border-ink-100 bg-white py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
          Certified Quality &amp; Compliance
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
        <div className="marquee-track flex w-max items-center gap-4">
          {loop.map((cert, i) => (
            <span
              key={`${cert}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-ink-100 bg-cream-50 px-5 py-2.5 text-sm font-semibold text-ink-700"
            >
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

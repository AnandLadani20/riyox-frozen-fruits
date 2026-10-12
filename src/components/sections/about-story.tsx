import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

const highlights = [
  "100% Natural — No Preservatives",
  "IQF Technology Locks in Freshness",
  "Export-Grade Global Standards",
  "Reliable Cold Chain, Door to Door",
];

export function AboutStory() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-full shadow-card ring-8 ring-cream-200">
            <Image
              src="/images/hero/story-berries.jpg"
              alt="Assorted frozen berries"
              fill
              sizes="(max-width: 1024px) 70vw, 32vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 w-56 -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center shadow-card sm:w-64">
            <p className="font-display text-xl font-extrabold text-brand-700 sm:text-2xl">
              Farm to Freezer
            </p>
            <p className="mt-0.5 text-xs font-medium text-ink-500 sm:text-sm">
              to Your Business
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
              Our Story
            </span>
            <h2 className="font-display text-balance mt-5 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
              Freshness should never be compromised.
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-ink-500">
              {site.description}
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              <span className="font-semibold text-ink-700">Our mission is simple:</span>{" "}
              {site.mission}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

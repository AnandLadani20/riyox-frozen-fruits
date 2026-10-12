import { Sprout, Droplets, ListFilter, Package, Snowflake, Truck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

const icons = [Sprout, Droplets, ListFilter, Package, Snowflake, Truck];

export function ProcessSection() {
  return (
    <section className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            light
            eyebrow="Our Process"
            title="From farm to freezer to your business"
            description="Every pack passes through six controlled stages so quality stays consistent, batch after batch."
          />
        </Reveal>

        <div className="relative mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-white/15 lg:block" />
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={i * 0.08} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-sun-500 text-[11px] font-extrabold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60 sm:text-sm">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

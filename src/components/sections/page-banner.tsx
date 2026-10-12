import { Container } from "@/components/ui/container";

export function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-leaf-texture relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sun-200/50 blur-3xl" />
      <Container className="relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="font-display text-balance mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-balance mx-auto mt-4 max-w-xl text-base text-ink-500 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

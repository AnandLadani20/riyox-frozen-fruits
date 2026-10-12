import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center shadow-card sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-sun-400/20" />

            <h2 className="font-display text-balance relative mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Grow Together.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-white/80">
              Partner with Riyox Foods for premium frozen fruits, imported
              berries and fruit pulps — reliable supply, consistent quality,
              every single time.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="https://wa.me/918487823237"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="!bg-white !text-brand-700 hover:!bg-white/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

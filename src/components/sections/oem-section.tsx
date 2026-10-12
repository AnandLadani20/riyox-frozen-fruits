"use client";

import { motion } from "framer-motion";
import { PackageCheck, Package, ShoppingBag, Boxes, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { packagingOptions } from "@/data/site";

const icons = [PackageCheck, Package, ShoppingBag, Boxes];

const bullets = [
  "Custom branding & label design support",
  "Low minimum order quantities (MOQ)",
  "Retail, private-label & bulk packs",
  "End-to-end support, from design to dispatch",
];

export function OemSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">
            OEM &amp; Private Label
          </span>
          <h2 className="font-display text-balance mt-5 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Build your brand. We handle the rest.
          </h2>
          <p className="mt-5 leading-relaxed text-ink-500">
            Whether you need retail-ready pouches for your own label or bulk
            cartons for food-service, our team manages sourcing, packaging and
            logistics so you can focus on growing your brand.
          </p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="text-sm font-medium text-ink-700">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact">Discuss Your Requirement</Button>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-5">
          {packagingOptions.map((option, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={option.title}
                variants={revealItem}
                className="rounded-3xl border border-ink-100 bg-cream-50 p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sun-50 text-sun-600">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display mt-4 text-base font-bold text-ink-900">
                  {option.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
                  {option.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

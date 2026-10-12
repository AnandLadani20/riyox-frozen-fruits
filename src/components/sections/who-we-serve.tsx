"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IceCreamCone,
  CupSoda,
  ConciergeBell,
  Coffee,
  Factory,
  ShoppingCart,
  Globe2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/reveal";
import { whoWeServe } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  "ice-cream-cone": IceCreamCone,
  "cup-soda": CupSoda,
  "concierge-bell": ConciergeBell,
  coffee: Coffee,
  factory: Factory,
  "shopping-cart": ShoppingCart,
  globe: Globe2,
};

export function WhoWeServe() {
  return (
    <section className="bg-cream-200/60 py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Serve"
              title="Delivering premium frozen produce to businesses worldwide"
              description="From ice cream manufacturers to export buyers, our cold chain is built to support food businesses of every scale."
              className="mx-0"
            />
          </Reveal>

          <RevealGroup className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {whoWeServe.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={item.title} variants={revealItem}>
                  <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-50 text-sun-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold leading-snug text-ink-900">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="/images/hero/category-banner.jpg"
              alt="Assorted frozen fruit on ice"
              width={824}
              height={540}
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

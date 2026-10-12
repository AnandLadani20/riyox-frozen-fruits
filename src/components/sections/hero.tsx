"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Snowflake, Leaf, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useSplashDone } from "@/components/layout/splash-screen";
import { products } from "@/data/products";

const stats = [
  { value: `${products.length}+`, label: "Frozen Varieties" },
  { value: "100%", label: "Natural, No Preservatives" },
  { value: "Global", label: "Export Ready Supply" },
];

export function Hero() {
  const ready = useSplashDone();
  const show = <T,>(target: T) => (ready ? target : undefined);

  return (
    <section className="relative overflow-hidden bg-leaf-texture pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-sun-200/50 blur-3xl" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={show({ opacity: 1, y: 0 })}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur"
          >
            <Leaf className="h-3.5 w-3.5" />
            Premium Frozen Foods &amp; Produce
          </motion.span>

          <h1 className="mt-7">
            <motion.span
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={show({ opacity: 1, y: 0, scale: 1 })}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="block origin-left"
            >
              <Image
                src="/images/brand/riyox-logo.png"
                alt="Riyox Foods"
                width={2801}
                height={1219}
                priority
                sizes="(max-width: 640px) 230px, 300px"
                className="h-24 w-auto drop-shadow-sm sm:h-28 lg:h-32"
              />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={show({ opacity: 1, y: 0 })}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display mt-6 block text-balance text-3xl font-bold leading-[1.12] text-ink-900 sm:text-4xl lg:text-[2.6rem]"
            >
              Nature&apos;s Freshness,{" "}
              <span className="relative text-brand-700">
                Frozen at Its Peak
                <svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 h-3 w-full text-sun-400"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C60 2 180 2 298 9.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={show({ opacity: 1, y: 0 })}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            Riyox Foods supplies premium frozen foods, IQF vegetables, fruits,
            berries and fruit pulps to hotels, ice cream makers, cafés and exporters —
            picked fresh, frozen fast, delivered with trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={show({ opacity: 1, y: 0 })}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/products" size="lg">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="https://wa.me/918487823237"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={show({ opacity: 1, y: 0 })}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-100 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-extrabold text-brand-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-ink-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={show({ opacity: 1, scale: 1 })}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-card ring-8 ring-white/70">
            <Image
              src="/images/hero/hero-bowls.jpg"
              alt="Bowls of premium frozen strawberries, mango, broccoli and corn"
              width={624}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-8 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-left-10"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Snowflake className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-bold text-ink-900">IQF Frozen</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:-right-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun-50 text-sun-600">
              <BadgeCheck className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-bold text-ink-900">Export Quality</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

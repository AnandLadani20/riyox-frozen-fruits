"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { categoryMeta } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link
        href={`/products/${product.slug}`}
        className="block overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-100 transition-shadow duration-300 hover:shadow-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur">
            {categoryMeta[product.category].label}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-ink-900">{product.name}</h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink-500">{product.tagline}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MessageCircle,
  Snowflake,
  ShieldCheck,
  Globe2,
  PackageCheck,
  ChefHat,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";
import {
  categoryMeta,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { site } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Riyox Foods`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

const features = [
  { icon: Snowflake, label: "IQF Frozen" },
  { icon: ShieldCheck, label: "Export Quality" },
  { icon: Globe2, label: "100% Natural" },
  { icon: PackageCheck, label: "Private Label Available" },
];

const foodFeatures = [
  { icon: Snowflake, label: "Quick Frozen" },
  { icon: ShieldCheck, label: "Export Quality" },
  { icon: ChefHat, label: "Ready to Cook" },
  { icon: PackageCheck, label: "Private Label Available" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const meta = categoryMeta[product.category];

  const whatsappText = encodeURIComponent(
    `Hello Riyox Foods, I'd like to enquire about ${product.name} (bulk / private-label / retail packs).`
  );

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <nav className="flex items-center gap-1.5 text-sm text-ink-500">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/products" className="hover:text-brand-700">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-brand-700"
          >
            {meta.plural}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-ink-900">{product.name}</span>
        </nav>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-cream-200 shadow-card">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur">
              {meta.label}
            </span>
          </div>

          <div>
            <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-700">
              {product.tagline}
            </p>
            <p className="mt-5 text-balance leading-relaxed text-ink-500">
              {product.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(product.category === "food" ? foodFeatures : features).map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-ink-100 bg-white px-3 py-4 text-center shadow-soft"
                >
                  <f.icon className="h-5 w-5 text-brand-600" />
                  <span className="text-xs font-bold leading-tight text-ink-700">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href={`https://wa.me/${site.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Browse More Products
              </Button>
            </div>

            <div className="mt-9 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-bold text-brand-800">Available packaging</p>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-700/80">
                Vacuum bags, zip pouches, stand-up pouches and bulk cartons —
                with custom branding and label design support for private
                label orders.
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              More from {meta.plural}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

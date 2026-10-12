import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageBanner } from "@/components/sections/page-banner";
import { ProductCard } from "@/components/products/product-card";
import { categoryMeta, products, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse Riyox Foods' full range of premium IQF frozen fruits, imported berries, fruit pulps and speciality produce — available in retail, bulk and private-label packs.",
};

const tabs: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "fruit", label: categoryMeta.fruit.plural },
  { key: "berry", label: categoryMeta.berry.plural },
  { key: "pulp", label: categoryMeta.pulp.plural },
  { key: "speciality", label: categoryMeta.speciality.plural },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (category as ProductCategory | undefined) ?? "all";

  const list =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pb-16 sm:pb-20">
      <PageBanner
        eyebrow="Our Range"
        title="Premium frozen fruits, berries, pulps & speciality produce"
        description="Every product is individually quick frozen (IQF), quality checked and available in retail, bulk and private-label packaging."
      />
      <Container>
        <div className="mx-auto -mt-2 flex max-w-full flex-wrap items-center justify-center gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const href = tab.key === "all" ? "/products" : `/products?category=${tab.key}`;
            const isActive = active === tab.key;
            return (
              <Link
                key={tab.key}
                href={href}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-white text-ink-700 ring-1 ring-ink-100 hover:bg-brand-50"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm font-medium text-ink-500">
          Showing {list.length} {list.length === 1 ? "product" : "products"}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}

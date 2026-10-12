import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProductCard } from "@/components/products/product-card";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream-200/60 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Bestsellers"
              title="Customer-favourite frozen picks"
              description="A snapshot of our most requested frozen foods, vegetables, fruits and berries — available in bulk, retail and private-label packs."
              className="mx-0"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/products" variant="outline">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

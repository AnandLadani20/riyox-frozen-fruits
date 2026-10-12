import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { categoryMeta, getProductsByCategory, type ProductCategory } from "@/data/products";

const cards: { key: ProductCategory; image: string }[] = [
  { key: "food", image: "/images/products/food-french-fries.jpg" },
  { key: "vegetable", image: "/images/products/veg-mix-veg.jpg" },
  { key: "fruit", image: "/images/products/fruit-kesar-mango.jpg" },
  { key: "berry", image: "/images/products/fruit-blueberry.jpg" },
  { key: "pulp", image: "/images/products/fruit-alphonso-mango.jpg" },
  { key: "speciality", image: "/images/products/fruit-dragon-fruit.jpg" },
];

export function CategoryShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Six categories. One standard of quality."
            description="From ready-to-cook frozen foods and farm-fresh vegetables to orchard fruit, imported berries, bulk pulps and exotic specialities — every product follows the same freezing process and quality checks."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const meta = categoryMeta[card.key];
            const count = getProductsByCategory(card.key).length;
            return (
              <Reveal key={card.key} delay={i * 0.1}>
                <Link
                  href={`/products?category=${card.key}`}
                  className="group relative block h-80 overflow-hidden rounded-[2rem] shadow-soft"
                >
                  <Image
                    src={card.image}
                    alt={meta.plural}
                    fill
                    sizes="(max-width: 1024px) 90vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-full bg-sun-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {count} Varieties
                    </span>
                    <h3 className="font-display mt-3 text-xl font-bold text-white">
                      {meta.plural}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/75">
                      {meta.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      Browse category
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

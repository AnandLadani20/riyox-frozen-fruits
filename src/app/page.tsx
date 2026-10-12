import { Hero } from "@/components/sections/hero";
import { CertificationsMarquee } from "@/components/sections/certifications-marquee";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { AboutStory } from "@/components/sections/about-story";
import { ProcessSection } from "@/components/sections/process-section";
import { PromiseSection } from "@/components/sections/promise-section";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { OemSection } from "@/components/sections/oem-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CertificationsMarquee />
      <CategoryShowcase />
      <FeaturedProducts />
      <AboutStory />
      <ProcessSection />
      <PromiseSection />
      <WhoWeServe />
      <OemSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}

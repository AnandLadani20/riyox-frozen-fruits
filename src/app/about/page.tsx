import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/page-banner";
import { AboutStory } from "@/components/sections/about-story";
import { ProcessSection } from "@/components/sections/process-section";
import { PromiseSection } from "@/components/sections/promise-section";
import { CertificationsMarquee } from "@/components/sections/certifications-marquee";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Riyox Foods LLP brings nature's finest frozen fruits, imported berries and fruit pulps to the world through advanced IQF freezing, strict quality assurance and a reliable cold chain.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Riyox Foods"
        title="Preserving nature's goodness, one freeze at a time"
        description="We don't just freeze nature — we preserve its goodness for a better tomorrow."
      />
      <AboutStory />
      <ProcessSection />
      <PromiseSection />
      <CertificationsMarquee />
      <WhoWeServe />
      <CtaSection />
    </>
  );
}

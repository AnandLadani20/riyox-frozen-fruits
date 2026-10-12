import type { Metadata } from "next";
import { PageBanner } from "@/components/sections/page-banner";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Riyox Foods LLP for bulk orders, private-label packaging and export enquiries on premium frozen foods, frozen vegetables, frozen fruits, imported berries and fruit pulps.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        description="Reach out for bulk orders, private-label packaging or export enquiries — our team typically replies within one business day."
      />
      <ContactSection />
    </>
  );
}

"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.full
  )}&z=14&output=embed`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `Hello Riyox Foods, I'd like to enquire about your products.`,
      name ? `Name: ${name}` : null,
      contact ? `Contact: ${contact}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's start a conversation"
            description="Have a bulk order, private-label project or export enquiry? Reach out and our team will respond within one business day."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">Visit Us</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {site.address.full}
                  </p>
                </div>
              </div>

              <a
                href={site.phoneHref}
                className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-colors hover:border-brand-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">Call Us</p>
                  <p className="mt-1 text-sm text-ink-500">{site.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-colors hover:border-brand-200"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">Email Us</p>
                  <p className="mt-1 text-sm text-ink-500">{site.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 p-5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-brand-700"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <div className="min-h-[180px] flex-1 overflow-hidden rounded-2xl border border-ink-100 shadow-soft">
                <iframe
                  src={mapSrc}
                  title="Riyox Foods location"
                  className="h-full min-h-[180px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl border border-ink-100 bg-white p-7 shadow-soft sm:p-9"
            >
              <h3 className="font-display text-xl font-bold text-ink-900">
                Send an Enquiry
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">
                We&apos;ll open WhatsApp with your message pre-filled, ready to send.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-ink-700">
                  Your Name
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-xl border border-ink-100 bg-cream-50 px-4 py-3 text-sm font-normal text-ink-900 outline-none ring-brand-300 transition focus:ring-2"
                  />
                </label>
                <label className="block text-sm font-semibold text-ink-700">
                  Phone or Email
                  <input
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    type="text"
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full rounded-xl border border-ink-100 bg-cream-50 px-4 py-3 text-sm font-normal text-ink-900 outline-none ring-brand-300 transition focus:ring-2"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold text-ink-700">
                Your Requirement
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell us which products, quantities and packaging you need..."
                  className="mt-2 w-full resize-none rounded-xl border border-ink-100 bg-cream-50 px-4 py-3 text-sm font-normal text-ink-900 outline-none ring-brand-300 transition focus:ring-2"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun-500 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-colors hover:bg-sun-600 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

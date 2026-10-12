# Riyox Foods — Marketing Website

A premium, fully responsive Next.js website for **Riyox Foods LLP**, a frozen fruits & vegetables
supplier. Built with the App Router, Tailwind CSS v4 and Framer Motion, using real product
photography and business details extracted from the company's catalogue.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **Framer Motion** for scroll reveals, hover and page interactions
- **lucide-react** for iconography

## Structure

- `src/data/site.ts` — business info, process steps, promises, certifications, etc.
- `src/data/products.ts` — full product catalogue (31 fruits/vegetables/foods)
- `src/components/sections/*` — homepage/landing sections (hero, process, promise, CTA, contact…)
- `src/components/products/product-card.tsx` — reusable product card
- `src/app/products` — product listing (with `?category=` filter) + `[slug]` detail pages
- `src/app/about`, `src/app/contact` — supporting pages
- `public/images` — optimized product photos, logo and banner images sourced from the catalogue

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SplashProvider } from "@/components/layout/splash-screen";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riyoxfoods.com"),
  title: {
    default: "Riyox Foods | Premium Frozen Foods, Vegetables & Fruits",
    template: "%s | Riyox Foods",
  },
  description:
    "Riyox Foods LLP supplies premium frozen foods, IQF frozen vegetables, frozen fruits, imported berries, fruit pulps and speciality produce to hotels, ice cream manufacturers, cafés, food processors and exporters worldwide. Where Trust Meets Quality.",
  keywords: [
    "frozen foods supplier India",
    "frozen vegetables supplier India",
    "frozen french fries supplier",
    "frozen green peas sweet corn",
    "frozen fruits supplier India",
    "imported IQF berries India",
    "frozen fruit pulp manufacturer",
    "IQF frozen fruit",
    "Riyox Foods",
    "frozen mango chunks",
    "frozen strawberry supplier Rajkot",
    "frozen fruit export India",
  ],
  openGraph: {
    title: "Riyox Foods | Premium Frozen Foods, Vegetables & Fruits",
    description:
      "Premium frozen foods, IQF vegetables, frozen fruits, imported berries, fruit pulps and speciality produce — sourced fresh, frozen at peak ripeness, delivered with trust.",
    url: "https://www.riyoxfoods.com",
    siteName: "Riyox Foods",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-100 text-ink-900">
        <SplashProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}

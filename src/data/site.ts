export const site = {
  name: "Riyox Foods",
  legalName: "Riyox Foods LLP",
  tagline: "Where Trust Meets Quality",
  description:
    "Riyox Foods LLP is dedicated to bringing nature's finest produce to the world through advanced freezing, processing and packing technology. We specialize in Frozen Foods, Frozen Vegetables, Frozen Fruits, Imported IQF Berries, Fruit Pulps and Speciality produce, delivering unmatched quality, freshness and nutrition in every pack.",
  mission:
    "To preserve nature's goodness and deliver trust, quality and satisfaction to our global partners.",
  url: "https://www.riyoxfoods.com",
  email: "riyoxfoods@gmail.com",
  phone: "+91 84878 23237",
  phoneHref: "tel:+918487823237",
  whatsapp: "918487823237",
  address: {
    line1: "Plot No. 16, Pragati Ind. Area",
    line2: "Opp. Gokul Weybridge, Ravki",
    city: "Rajkot",
    state: "Gujarat",
    zip: "360004",
    country: "India",
    full: "Plot No. 16, Pragati Ind. Area, Opp. Gokul Weybridge, Ravki, Rajkot-360004, Gujarat, India.",
  },
  social: {
    instagram: "https://instagram.com/riyox_foods",
    facebook: "https://facebook.com/riyox_foods",
    linkedin: "https://linkedin.com/company/riyox_foods",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const certifications = [
  "FSSAI",
  "ISO 22000",
  "HACCP",
  "Make in India",
  "Startup India",
  "ZED Certified",
  "APEDA",
  "Halal",
  "IEC",
  "MSME",
] as const;

export const processSteps = [
  {
    title: "Sourcing",
    description:
      "Carefully selected farms and trusted global growers supply fruit harvested at peak ripeness.",
  },
  {
    title: "Pick & Wash",
    description:
      "Produce is hand-picked for quality and thoroughly washed to remove impurities.",
  },
  {
    title: "Sorting",
    description:
      "Every batch is sorted and graded to keep size, colour and quality consistent.",
  },
  {
    title: "Processing & Packing",
    description:
      "Produce is cut, portioned and prepared under strict hygiene standards.",
  },
  {
    title: "Freezing",
    description:
      "Individually Quick Frozen (IQF) within hours to lock in flavour, texture and nutrients.",
  },
  {
    title: "Cold Chain Delivery",
    description:
      "An unbroken cold chain keeps every pack fresh from our facility to your door.",
  },
] as const;

export const promises = [
  {
    title: "100% Natural",
    description: "No preservatives, no additives — just real fruit, straight from nature.",
  },
  {
    title: "IQF Technology",
    description: "Individually Quick Frozen to lock in freshness, colour and nutrients.",
  },
  {
    title: "Export Quality",
    description: "Produced and packed to meet global standards for international buyers.",
  },
  {
    title: "Strict Quality Assurance",
    description: "Multi-point checks at every stage, from sourcing to dispatch.",
  },
  {
    title: "Reliable Cold Chain",
    description: "Temperature-controlled logistics for complete safety in transit.",
  },
  {
    title: "Sustainable & Responsible",
    description: "Sourcing practices that respect farmers, communities and the environment.",
  },
] as const;

export const whoWeServe = [
  { title: "Ice Cream Manufacturers", icon: "ice-cream-cone" },
  { title: "Juice & Shake Brands", icon: "cup-soda" },
  { title: "Hotels & Restaurants", icon: "concierge-bell" },
  { title: "Cafés", icon: "coffee" },
  { title: "Food Processors", icon: "factory" },
  { title: "Retail Chains", icon: "shopping-cart" },
  { title: "Export Buyers", icon: "globe" },
] as const;

export const packagingOptions = [
  { title: "Vacuum Bag", description: "Tight-sealed freshness for food-service portions." },
  { title: "Zip Bag", description: "Resealable retail-ready pouches for everyday convenience." },
  { title: "Stand-Up Pouch", description: "Shelf-ready branded pouches for retail display." },
  { title: "Bulk Box", description: "High-volume cartons built for food processors & exporters." },
] as const;

export const whyChooseFrozen = [
  { title: "Consistent Quality", description: "Every batch, every season — the same premium standard." },
  { title: "Available All Year", description: "No seasonal shortages, no compromises on supply." },
  { title: "Convenient & Ready to Use", description: "Pre-washed, pre-cut and ready for your kitchen." },
  { title: "Less Food Waste", description: "Frozen at peak freshness, used only as much as you need." },
] as const;

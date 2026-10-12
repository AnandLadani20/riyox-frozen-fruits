export type ProductCategory = "fruit" | "berry" | "pulp" | "speciality";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  tagline: string;
  description: string;
  featured?: boolean;
};

export const categoryMeta: Record<
  ProductCategory,
  { label: string; plural: string; description: string }
> = {
  fruit: {
    label: "Frozen Fruit",
    plural: "Frozen Fruits",
    description:
      "Hand-picked fruit, individually quick frozen at the peak of ripeness to lock in natural sweetness, colour and nutrition.",
  },
  berry: {
    label: "Imported Berry",
    plural: "Imported IQF Berries",
    description:
      "Premium berries sourced from trusted global growers and individually quick frozen to preserve their colour, aroma and antioxidants.",
  },
  pulp: {
    label: "Fruit Pulp",
    plural: "Fruit Pulps",
    description:
      "Smooth, ready-to-use fruit pulp frozen in bulk packs — built for beverages, ice creams and food processing at scale.",
  },
  speciality: {
    label: "Speciality",
    plural: "Speciality",
    description:
      "Exotic and niche fruits, individually quick frozen for chefs, mixologists and brands who want something beyond the everyday.",
  },
};

export const products: Product[] = [
  // Frozen Fruits
  {
    slug: "kesar-mango",
    name: "Kesar Mango",
    category: "fruit",
    image: "/images/products/fruit-kesar-mango.jpg",
    tagline: "Gujarat's aromatic saffron mango",
    description:
      "Premium Kesar mango chunks frozen at peak ripeness to capture its signature saffron aroma and rich golden colour, year-round.",
    featured: true,
  },
  {
    slug: "alphonso-mango",
    name: "Alphonso Mango",
    category: "fruit",
    image: "/images/products/fruit-alphonso-mango.jpg",
    tagline: "The king of mangoes, frozen at its peak",
    description:
      "Rich, fibre-free Alphonso mango chunks frozen at the height of the season, delivering the king of mangoes to your business all year.",
    featured: true,
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    category: "fruit",
    image: "/images/products/fruit-strawberry.jpg",
    tagline: "Bright red, whole IQF strawberries",
    description:
      "Plump strawberries individually quick frozen within hours of harvest, keeping their bright colour, aroma and juicy sweetness intact.",
    featured: true,
  },
  {
    slug: "pineapple",
    name: "Pineapple",
    category: "fruit",
    image: "/images/products/fruit-pineapple.jpg",
    tagline: "Tangy-sweet tropical pineapple chunks",
    description:
      "Golden pineapple cut into juicy chunks and frozen to retain its signature tang-sweet balance for beverages and desserts.",
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    category: "fruit",
    image: "/images/products/fruit-pomegranate.jpg",
    tagline: "Ruby-red, antioxidant-packed arils",
    description:
      "Ruby pomegranate arils frozen individually so they stay separate and burst-fresh, perfect for garnishing and juicing.",
  },
  {
    slug: "black-grapes",
    name: "Black Grapes",
    category: "fruit",
    image: "/images/products/fruit-black-grapes.jpg",
    tagline: "Sweet, deep-coloured seedless grapes",
    description:
      "Seedless black grapes flash frozen whole, retaining their deep colour and natural sweetness for snacking and beverages.",
  },
  {
    slug: "orange",
    name: "Orange",
    category: "fruit",
    image: "/images/products/fruit-orange.jpg",
    tagline: "Zesty citrus segments",
    description:
      "Juicy orange segments frozen to retain their citrus zing and vitamin-rich freshness for juices and fruit mixes.",
  },
  {
    slug: "peach",
    name: "Peach",
    category: "fruit",
    image: "/images/products/fruit-peach.jpg",
    tagline: "Juicy, fragrant stone fruit",
    description:
      "Ripe, fragrant peaches frozen to lock in their juicy sweetness — ideal for desserts, smoothies and fruit preparations.",
  },
  {
    slug: "apricot",
    name: "Apricot",
    category: "fruit",
    image: "/images/products/fruit-apricot.jpg",
    tagline: "Honeyed stone fruit",
    description:
      "Golden apricots frozen at peak ripeness, keeping their honeyed sweetness and soft texture for preserves and desserts.",
  },
  {
    slug: "red-guava",
    name: "Red Guava",
    category: "fruit",
    image: "/images/products/fruit-red-guava.jpg",
    tagline: "Pink-fleshed guava, naturally fibre-rich",
    description:
      "Red guava wedges flash frozen to lock in their vibrant pink flesh and refreshing flavour, perfect for juices and fruit salads.",
  },
  {
    slug: "chickoo",
    name: "Chickoo",
    category: "fruit",
    image: "/images/products/fruit-chickoo.jpg",
    tagline: "Caramel-sweet sapodilla",
    description:
      "Sweet, malty chickoo (sapodilla) frozen to preserve its natural caramel notes — a favourite for milkshakes and desserts.",
  },

  // Imported IQF Berries
  {
    slug: "blueberry",
    name: "Blueberry",
    category: "berry",
    image: "/images/products/fruit-blueberry.jpg",
    tagline: "Antioxidant-rich whole blueberries",
    description:
      "Plump imported blueberries IQF frozen within hours of picking, holding onto their deep colour and antioxidant-rich sweetness.",
    featured: true,
  },
  {
    slug: "blackberry",
    name: "Blackberry",
    category: "berry",
    image: "/images/products/fruit-blackberry.jpg",
    tagline: "Deep, wine-dark berries",
    description:
      "Rich, deeply coloured imported blackberries frozen whole to preserve their bold flavour for premium desserts and beverages.",
  },
  {
    slug: "raspberry",
    name: "Raspberry",
    category: "berry",
    image: "/images/products/fruit-raspberry.jpg",
    tagline: "Delicate, tart-sweet berries",
    description:
      "Delicate imported raspberries individually frozen to protect their fragile structure and bright tart-sweet flavour.",
    featured: true,
  },
  {
    slug: "cranberry",
    name: "Cranberry",
    category: "berry",
    image: "/images/products/fruit-cranberry.jpg",
    tagline: "Tart, vibrant red cranberries",
    description:
      "Vibrant imported cranberries frozen to retain their characteristic tartness, perfect for sauces, baking and beverages.",
  },
  {
    slug: "mulberry",
    name: "Mulberry",
    category: "berry",
    image: "/images/products/fruit-mulberry.jpg",
    tagline: "Rich, naturally sweet mulberries",
    description:
      "Naturally sweet imported mulberries frozen at peak ripeness, ideal for syrups, desserts and health-focused beverages.",
  },

  // Fruit Pulps
  {
    slug: "alphonso-mango-pulp",
    name: "Alphonso Mango Pulp",
    category: "pulp",
    image: "/images/products/fruit-alphonso-mango.jpg",
    tagline: "Smooth, fibre-free Alphonso puree",
    description:
      "Rich Alphonso mango pulp, frozen in bulk packs for ice cream, beverages and bakery use — consistent sweetness and colour in every batch.",
  },
  {
    slug: "kesar-mango-pulp",
    name: "Kesar Mango Pulp",
    category: "pulp",
    image: "/images/products/fruit-kesar-mango.jpg",
    tagline: "Aromatic saffron mango puree",
    description:
      "Kesar mango pulp frozen at peak season to deliver its signature aroma and golden colour straight into your production line.",
    featured: true,
  },
  {
    slug: "guava-pulp",
    name: "Guava Pulp",
    category: "pulp",
    image: "/images/products/fruit-red-guava.jpg",
    tagline: "Pink, naturally fragrant guava puree",
    description:
      "Smooth red guava pulp frozen in bulk for juices, nectars and desserts, keeping its natural fragrance and blush-pink colour.",
  },
  {
    slug: "strawberry-pulp",
    name: "Strawberry Pulp",
    category: "pulp",
    image: "/images/products/fruit-strawberry.jpg",
    tagline: "Bright, juicy strawberry puree",
    description:
      "Strawberry pulp frozen soon after crushing to retain its vivid colour and fragrance — ideal for shakes, toppings and bakery fillings.",
  },
  {
    slug: "pineapple-pulp",
    name: "Pineapple Pulp",
    category: "pulp",
    image: "/images/products/fruit-pineapple.jpg",
    tagline: "Tangy-sweet pineapple puree",
    description:
      "Golden pineapple pulp frozen in bulk packs, delivering consistent tang and sweetness for beverages and food processing.",
  },

  // Speciality
  {
    slug: "black-jamun-slice",
    name: "Black Jamun Slice",
    category: "speciality",
    image: "/images/products/fruit-black-jamun-slice.jpg",
    tagline: "Deep-purple, antioxidant-rich jamun slices",
    description:
      "Juicy black jamun sliced and IQF frozen to preserve its deep colour and distinctive tart-sweet flavour, perfect for juices, sorbets and desserts.",
  },
  {
    slug: "custard-apple",
    name: "Custard Apple",
    category: "speciality",
    image: "/images/products/fruit-custard-apple.jpg",
    tagline: "Creamy, naturally sweet sitaphal pulp fruit",
    description:
      "Ripe custard apple frozen to retain its signature creamy texture and fragrant sweetness — ideal for ice creams, smoothies and milkshakes.",
  },
  {
    slug: "coconut-malai",
    name: "Coconut Malai",
    category: "speciality",
    image: "/images/products/fruit-coconut-malai.jpg",
    tagline: "Soft, creamy tender coconut flesh",
    description:
      "Tender coconut malai frozen in its shell-fresh state — soft, creamy and ready for desserts, shakes and garnishing.",
  },
  {
    slug: "coconut-shredded",
    name: "Coconut Shredded",
    category: "speciality",
    image: "/images/products/fruit-coconut-shredded.jpg",
    tagline: "Finely shredded fresh coconut",
    description:
      "Freshly shredded coconut, IQF frozen to stay moist and aromatic — ready to use in sweets, garnishes and curries.",
  },
  {
    slug: "lichi",
    name: "Lichi",
    category: "speciality",
    image: "/images/products/fruit-lichi.jpg",
    tagline: "Fragrant, juicy lychee",
    description:
      "Delicately sweet lychee frozen to preserve its floral aroma and juicy bite, popular for desserts and premium beverages.",
  },
  {
    slug: "dragon-fruit",
    name: "Dragon Fruit",
    category: "speciality",
    image: "/images/products/fruit-dragon-fruit.jpg",
    tagline: "Vivid pink, mildly sweet superfruit",
    description:
      "Striking pink dragon fruit frozen to hold its vibrant colour — an eye-catching ingredient for smoothie bowls and desserts.",
    featured: true,
  },
  {
    slug: "passion-fruit",
    name: "Passion Fruit",
    category: "speciality",
    image: "/images/products/fruit-passion-fruit.jpg",
    tagline: "Tangy, aromatic tropical pulp",
    description:
      "Tart and aromatic passion fruit frozen to capture its intense tropical flavour for beverages, sauces and desserts.",
    featured: true,
  },
  {
    slug: "avocado-halves",
    name: "Avocado Halves",
    category: "speciality",
    image: "/images/products/fruit-avocado-halves.jpg",
    tagline: "Creamy, nutrient-dense avocado",
    description:
      "Ripe avocado halves frozen to preserve their buttery texture and healthy fats, ready for kitchens and food processors.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

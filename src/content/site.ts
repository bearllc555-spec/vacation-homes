export type Listing = {
  id: string;
  name: string;
  location: string;
  beds: number;
  guests: number;
  priceUsd: number;
  accent: string;
};

export const navLinks = [
  { label: "Stays", href: "#stays" },
  { label: "Why us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
] as const;

export const listings: Listing[] = [
  {
    id: "cityscape",
    name: "Cityscape Lofts",
    location: "New York · Downtown",
    beds: 1,
    guests: 2,
    priceUsd: 180,
    accent: "#2C4A5E",
  },
  {
    id: "zen-villas",
    name: "Zen Villas",
    location: "Bali · Bliss",
    beds: 2,
    guests: 4,
    priceUsd: 120,
    accent: "#3D6B5C",
  },
  {
    id: "sunset-horizon",
    name: "Sunset Horizon Villas",
    location: "Santorini · Sunset",
    beds: 2,
    guests: 4,
    priceUsd: 150,
    accent: "#5B4A7A",
  },
  {
    id: "mountainview",
    name: "Mountainview Cabin",
    location: "Aspen · Heights",
    beds: 1,
    guests: 2,
    priceUsd: 95,
    accent: "#4A5568",
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze Suites",
    location: "Malibu · Coast",
    beds: 3,
    guests: 6,
    priceUsd: 210,
    accent: "#1E5F74",
  },
  {
    id: "horizon-view",
    name: "Horizon View Villas",
    location: "Santorini · Sunset",
    beds: 1,
    guests: 2,
    priceUsd: 55,
    accent: "#6B7C8F",
  },
];

export const whyChoose = [
  {
    title: "Diverse and unique stays",
    body: "From budget-friendly escapes to luxury retreats, every property is chosen for character and comfort.",
  },
  {
    title: "Seamless booking",
    body: "Browse, compare, and reserve in a few clicks — transparent pricing with no surprise fees at checkout.",
  },
  {
    title: "Verified properties",
    body: "Each listing passes our quality review so you arrive to a clean, well-maintained home every time.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Absolutely loved our stay. The place was perfect, even better than the photos. Great location and a fantastic host.",
    name: "Emily J.",
    role: "Travel blogger",
  },
  {
    quote:
      "Such a cozy space. Everything was clean and thoughtfully arranged. We would book again without hesitation.",
    name: "Michael J.",
    role: "Adventure traveler",
  },
  {
    quote:
      "Beautiful design, close to everything we needed. The check-in was smooth from start to finish.",
    name: "Sarah W.",
    role: "Travel enthusiast",
  },
] as const;

export const journalPosts = [
  {
    title: "How to travel on a budget",
    category: "Travel tips",
    author: "Sarah W.",
    date: "Jun 2, 2025",
    readMins: 4,
  },
  {
    title: "Japan: essential travel tips",
    category: "Insights",
    author: "Emily D.",
    date: "Jun 4, 2025",
    readMins: 5,
  },
  {
    title: "Adventure in Greece",
    category: "Destinations",
    author: "Michael J.",
    date: "Jun 20, 2025",
    readMins: 4,
  },
] as const;

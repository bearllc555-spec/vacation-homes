import { lodgingImages } from "../lib/lodging-images";

export type Listing = {
  id: string;
  name: string;
  location: string;
  beds: number;
  guests: number;
  priceUsd: number;
  image: string;
};

export const navLinks = [
  { label: "Home", href: "#start" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#journal" },
] as const;

export const categories = [
  {
    title: "Remote Work Destinations",
    body: "Quiet spots with fast Wi-Fi, ideal for working in a new setting.",
    image: lodgingImages.poolRetreat,
    cta: "Explore",
  },
  {
    title: "Family getaways",
    body: "Comfortable spaces perfect for family memories.",
    image: lodgingImages.lakesideRoom,
    cta: "Discover",
  },
] as const;

export const listings: Listing[] = [
  {
    id: "cityscape",
    name: "Cityscape Lofts",
    location: "New York Downtown",
    beds: 1,
    guests: 2,
    priceUsd: 180,
    image: lodgingImages.lodgeExterior,
  },
  {
    id: "zen-villas",
    name: "Zen Villas",
    location: "Bali Bliss",
    beds: 2,
    guests: 4,
    priceUsd: 120,
    image: lodgingImages.suiteInterior,
  },
  {
    id: "sunset-horizon",
    name: "Sunset Horizon Villas",
    location: "Santorini Sunset",
    beds: 2,
    guests: 4,
    priceUsd: 150,
    image: lodgingImages.poolRetreat,
  },
  {
    id: "mountainview",
    name: "Mountainview Cabin",
    location: "Aspen Heights",
    beds: 1,
    guests: 2,
    priceUsd: 95,
    image: lodgingImages.lakesideRoom,
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze Suites",
    location: "Malibu Coast",
    beds: 3,
    guests: 6,
    priceUsd: 210,
    image: lodgingImages.suiteInterior,
  },
  {
    id: "horizon-view",
    name: "Horizon View Villas",
    location: "Santorini Sunset",
    beds: 1,
    guests: 2,
    priceUsd: 55,
    image: lodgingImages.mountainView,
  },
];

export const whyChoose = [
  {
    title: "Diverse and Unique Stays",
    body: "From affordable options for budget travelers to high-end luxury retreats, Stayli offers a wide variety of properties tailored to every traveler's needs.",
  },
  {
    title: "Seamless Booking Experience",
    body: "Our intuitive platform makes planning your stay stress-free. Browse, compare, and book in just a few clicks – no hidden fees, no surprises.",
  },
  {
    title: "Verified and Trusted Properties",
    body: "We prioritize safety and quality. All listings go through a verification process, ensuring you stay at reliable and well-maintained properties.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Absolutely loved our stay! The place was perfect, even better than expected. Great location, and the host was fantastic. Highly recommend!",
    name: "Emily Johnson",
    role: "Travel Blogger",
    avatar: "/images/tn6LfEaX4TJCPCvr2BbqzEaNeQ.jpg",
    photo: lodgingImages.poolRetreat,
  },
  {
    quote:
      "Such a cozy space! Everything was clean and just as described. We especially loved the little touches that made it feel like home. Would totally stay again!",
    name: "Michael Johnson",
    role: "Adventure Traveler",
    avatar: "/images/y7nwj8MxN3cyIppSiglOfC810X0.webp",
    photo: lodgingImages.suiteInterior,
  },
  {
    quote:
      "Our experience was amazing from start to finish. The property was beautifully designed, and close to everything we needed. We'd definitely book again!",
    name: "Sarah Wilson",
    role: "Travel Enthusiast",
    avatar: "/images/6kz6Y5bDiG9Gy15iZZEGZEfJuI.webp",
    photo: lodgingImages.lakesideRoom,
  },
] as const;

export const journalPosts = [
  {
    title: "How to travel on a budget",
    category: "Travel Tips",
    author: "Sarah Wilson",
    date: "Jun 2, 2025",
    readMins: 4,
    image: lodgingImages.poolRetreat,
  },
  {
    title: "Japan: Essential Travel Tips",
    category: "Travel Tips News",
    author: "Emily Davis",
    date: "Jun 4, 2025",
    readMins: 5,
    image: lodgingImages.suiteInterior,
  },
  {
    title: "Adventure in Greece: Travel Insights",
    category: "Insights",
    author: "Michael Johnson",
    date: "Jun 20, 2025",
    readMins: 4,
    image: lodgingImages.lakesideRoom,
  },
] as const;

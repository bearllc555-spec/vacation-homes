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
    image: "/images/7gsrHHR9sbH3PQgRawuxGJL9GbM.webp",
    cta: "Explore",
  },
  {
    title: "Family getaways",
    body: "Comfortable spaces perfect for family memories.",
    image: "/images/Z8XEWnU25PNS3p62mlvKKkzQCWg.webp",
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
    image: "/images/cQhxKTEX8Bvbszzx54YCEqNsuc.webp",
  },
  {
    id: "zen-villas",
    name: "Zen Villas",
    location: "Bali Bliss",
    beds: 2,
    guests: 4,
    priceUsd: 120,
    image: "/images/tZBeQTrsw7HQUjx7GASloqaxRo.webp",
  },
  {
    id: "sunset-horizon",
    name: "Sunset Horizon Villas",
    location: "Santorini Sunset",
    beds: 2,
    guests: 4,
    priceUsd: 150,
    image: "/images/hLClyZf4xqI41LuCI2UecjIdg.webp",
  },
  {
    id: "mountainview",
    name: "Mountainview Cabin",
    location: "Aspen Heights",
    beds: 1,
    guests: 2,
    priceUsd: 95,
    image: "/images/5BaieWphM9EHM7cUW9g8MBuAGA.webp",
  },
  {
    id: "ocean-breeze",
    name: "Ocean Breeze Suites",
    location: "Malibu Coast",
    beds: 3,
    guests: 6,
    priceUsd: 210,
    image: "/images/UsJPsnSzyP2kM0CHU24H1HdwwU.webp",
  },
  {
    id: "horizon-view",
    name: "Horizon View Villas",
    location: "Santorini Sunset",
    beds: 1,
    guests: 2,
    priceUsd: 55,
    image: "/images/qgDDbHuQhwZvGmgVo8Be1t2uezQ.webp",
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
    avatar: "/images/L8ecKv1khqtkKXzCYnf1dx5L7i0.webp",
  },
  {
    quote:
      "Such a cozy space! Everything was clean and just as described. We especially loved the little touches that made it feel like home. Would totally stay again!",
    name: "Michael Johnson",
    role: "Adventure Traveler",
    avatar: "/images/uptRtksXtXSfAlSqF1tiHpzvr7g.webp",
  },
  {
    quote:
      "Our experience was amazing from start to finish. The property was beautifully designed, and close to everything we needed. We'd definitely book again!",
    name: "Sarah Wilson",
    role: "Travel Enthusiast",
    avatar: "/images/tn6LfEaX4TJCPCvr2BbqzEaNeQ.jpg",
  },
] as const;

export const journalPosts = [
  {
    title: "How to travel on a budget",
    category: "Travel Tips",
    author: "Sarah Wilson",
    date: "Jun 2, 2025",
    readMins: 4,
    image: "/images/00vZVvP93tE4EEBUGDimbKtELI.webp",
  },
  {
    title: "Japan: Essential Travel Tips",
    category: "Travel Tips News",
    author: "Emily Davis",
    date: "Jun 4, 2025",
    readMins: 5,
    image: "/images/DkyT1E55ffCHP2fDKQiz2vpRY0I.webp",
  },
  {
    title: "Adventure in Greece: Travel Insights",
    category: "Insights",
    author: "Michael Johnson",
    date: "Jun 20, 2025",
    readMins: 4,
    image: "/images/y7nwj8MxN3cyIppSiglOfC810X0.webp",
  },
] as const;

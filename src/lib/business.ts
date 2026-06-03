export const business = {
  brandName: "Pocono Vacation Homes",
  tagline: "Discover your ideal vacation home today",
  heroSubtext:
    "Uncover a world of unique homes and unforgettable experiences. Your perfect getaway awaits just a search away!",
  email: "hello@stayli.example",
  phone: "(570) 555-0142",
  founded: "2021",
} as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "Facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "Instagram",
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: "Twitter",
  },
] as const;

export type SocialIconName = (typeof socialLinks)[number]["icon"];

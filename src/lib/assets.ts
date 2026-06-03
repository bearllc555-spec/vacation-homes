/** Local site assets */
import { lodgingImages } from "./lodging-images";

export const images = {
  logo: "/images/GprGteIPH00Jsm7vk0gDIa0mg.svg",
  hero: lodgingImages.lodgeExterior,
  introWide: lodgingImages.livingRoom,
  categoryRemote: lodgingImages.bedroom,
  categoryFamily: lodgingImages.kitchen,
  aboutPortrait: lodgingImages.deck,
  aboutWide: lodgingImages.mountainView,
  videoThumb: lodgingImages.bedroom,
  aboutVideo: "/video/stayli-about.mp4",
  ctaBanner: lodgingImages.deck,
  contactWide: "/images/HgPboyydOC5EspjxZyAvkV5b8w.webp",
  footerWordmark: "/images/HgPboyydOC5EspjxZyAvkV5b8w.webp",
} as const;

export { lodgingImages };

/** Local site assets */
import { lodgingImages } from "./lodging-images";

export const images = {
  logo: "/images/GprGteIPH00Jsm7vk0gDIa0mg.svg",
  hero: lodgingImages.poolRetreat /* first hero slide; see heroSlides */,
  introWide: lodgingImages.lodgeExterior,
  /** Page-bottom CTA band — lakeside scene */
  ctaBanner: lodgingImages.lakesidePortrait,
  categoryRemote: lodgingImages.poolRetreat,
  categoryFamily: lodgingImages.kitchen,
  aboutPortrait: lodgingImages.lakesideRoom,
  aboutWide: lodgingImages.mountainView,
  videoThumb: lodgingImages.suiteInterior,
  aboutVideo: "/video/stayli-about.mp4",
  contactWide: "/images/HgPboyydOC5EspjxZyAvkV5b8w.webp",
  footerWordmark: "/images/HgPboyydOC5EspjxZyAvkV5b8w.webp",
} as const;

export { lodgingImages };

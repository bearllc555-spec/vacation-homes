import { business } from "../lib/business";
import { poconosLocation } from "../lib/location";
import { images } from "../lib/assets";
import { SiteHeader } from "./SiteHeader";
import { Button } from "./ui/Button";

/** Framer "Variant 1" CSS + matrix(-1,0,0,-1) flip so deep blue reads at the top */
const HERO_BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(252, 252, 252, 0) 10.5857%, rgb(6, 80, 135) 100%)";
const HERO_BLUE_FLIP = "matrix(-1, 0, 0, -1, 0, 0)";
const HERO_BOTTOM_FADE =
  "linear-gradient(rgba(252, 252, 252, 0) 10.5857%, rgb(252, 252, 252) 85.2795%)";

export function HeroSection() {
  return (
    <section
      id="start"
      className="relative min-h-[100svh] overflow-hidden text-white lg:min-h-[1136px]"
      aria-label="Hero"
    >
      <img
        src={images.hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1920}
        height={2022}
      />
      {/* Framer "Variant 1": inset top/left/right 0, bottom 492px on 1136px hero */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] bottom-[43.31%]"
        style={{ background: HERO_BLUE_GRADIENT, transform: HERO_BLUE_FLIP }}
        aria-hidden
      />
      {/* Framer "gradient bottom": 284px band at base */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[200px] sm:h-[240px] lg:h-[284px]"
        style={{ background: HERO_BOTTOM_FADE }}
        aria-hidden
      />
      <SiteHeader variant="hero" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col items-center justify-start px-6 pb-32 pt-28 text-center lg:min-h-[1136px] lg:pt-[160px] md:px-10 lg:px-16">
        <p className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EBF213] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EBF213]" />
          </span>
          Flagship escapes · {poconosLocation.region}
        </p>
        <h1
          className="max-w-4xl text-[clamp(2.25rem,6vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.04em]"
          style={{ letterSpacing: "-0.04em" }}
        >
          {business.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
          {business.heroSubtext}
        </p>
        <div className="mt-10">
          <Button href="#listings">Book today</Button>
        </div>
      </div>
    </section>
  );
}

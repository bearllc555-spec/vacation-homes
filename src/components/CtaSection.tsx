import { images } from "../lib/assets";
import { Button } from "./ui/Button";

/** Framer CTA "Variant 1" — same gradient + flip as hero (454px band on 750px section) */
const CTA_BLUE_GRADIENT =
  "linear-gradient(180deg, rgba(252, 252, 252, 0) 10.5857%, rgb(6, 80, 135) 100%)";
const CTA_BLUE_FLIP = "matrix(-1, 0, 0, -1, 0, 0)";

export function CtaSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden text-white lg:min-h-[750px]">
      <img
        src={images.ctaBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={2560}
        height={1500}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[60.53%] lg:h-[454px]"
        style={{ background: CTA_BLUE_GRADIENT, transform: CTA_BLUE_FLIP }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1280px] flex-col items-center justify-start px-6 pt-20 text-center md:px-10 lg:min-h-[750px] lg:px-16 lg:pt-[96px]">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-[-0.03em]">
          Find a home away from home!
        </h2>
        <div className="mt-8">
          <Button href="#contact">List Your Property</Button>
        </div>
      </div>
    </section>
  );
}

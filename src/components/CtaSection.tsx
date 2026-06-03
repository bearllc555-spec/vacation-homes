import { images } from "../lib/assets";
import { Button } from "./ui/Button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img
        src={images.ctaBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-6 text-center text-white md:px-10 lg:px-16">
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

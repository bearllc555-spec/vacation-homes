import { business } from "../lib/business";
import { images } from "../lib/assets";
import { SiteHeader } from "./SiteHeader";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section
      id="start"
      className="relative min-h-[100svh] overflow-hidden text-white"
      aria-label="Hero"
    >
      <img
        src={images.hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
      />
      {/* Stayli uses the same asset with no top dimming — only a short bottom fade into #fcfcfc */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[28%] min-h-[200px] max-h-[320px]"
        style={{
          background:
            "linear-gradient(rgba(252, 252, 252, 0) 10.5857%, rgb(252, 252, 252) 85.2795%)",
        }}
        aria-hidden
      />
      <SiteHeader variant="hero" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col items-center justify-center px-6 pb-32 pt-28 text-center md:px-10 lg:px-16">
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

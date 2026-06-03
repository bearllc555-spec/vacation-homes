import { Play } from "lucide-react";
import { images } from "../lib/assets";
import { business } from "../lib/business";
import { Button } from "./ui/Button";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight tracking-[-0.03em]">
              Creating unforgettable stays since {business.founded}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-600">
              Find your perfect getaway in our handpicked rentals. Each home is
              full of character and ready to welcome you.
            </p>
            <div className="mt-8">
              <Button href="#contact">Book now</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={images.aboutPortrait}
              alt="Vacation rental interior"
              className="aspect-[591/796] w-full rounded-2xl object-cover sm:row-span-2"
              loading="lazy"
            />
            <button
              type="button"
              className="group relative overflow-hidden rounded-2xl sm:col-start-2"
              aria-label="Play video"
            >
              <img
                src={images.aboutWide}
                alt=""
                className="aspect-[1280/963] h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-black">
                  <Play className="h-4 w-4 fill-black" />
                  Play video
                </span>
              </span>
            </button>
            <img
              src={images.videoThumb}
              alt=""
              className="hidden aspect-square w-full rounded-2xl object-cover sm:col-start-2 sm:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { business } from "../lib/business";
import { images } from "../lib/assets";
import { Button } from "./ui/Button";

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    const el = videoRef.current;
    if (!el) return;
    void el.play();
    setPlaying(true);
  };

  return (
    <section className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="max-w-xl">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.03em]">
            Creating unforgettable
            <br />
            stays since {business.founded}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600">
            Find your perfect getaway in our handpicked rentals. Each home is
            full of character and ready to welcome you.
          </p>
          <div className="mt-8">
            <Button href="#contact">Book now</Button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl md:mt-16">
          <video
            ref={videoRef}
            className="aspect-[1176/662] h-auto w-full object-cover"
            poster={images.aboutWide}
            playsInline
            controls={playing}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          >
            <source src={images.aboutVideo} type="video/mp4" />
          </video>
          {!playing && (
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-black/15 transition hover:bg-black/25"
              aria-label="Play video"
              onClick={playVideo}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-black">
                <Play className="h-4 w-4 fill-black" />
                Play video
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

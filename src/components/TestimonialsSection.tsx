import { testimonials } from "../content/site";
import { Carousel } from "./ui/Carousel";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <Carousel
          variant="slides"
          showDots
          ariaLabel="Guest testimonials"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex min-h-[360px] flex-col items-center justify-between px-4 py-6 text-center md:min-h-[464px] md:px-12"
            >
              <blockquote className="max-w-3xl text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug tracking-[-0.02em] text-neutral-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
                <div className="text-left">
                  <p className="font-medium text-black">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

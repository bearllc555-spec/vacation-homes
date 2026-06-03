import { testimonials } from "../content/site";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { Carousel } from "./ui/Carousel";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <SectionEyebrow className="mb-10 block text-center md:mb-14">
          User feedback
        </SectionEyebrow>

        <Carousel
          variant="slides"
          showDots
          ariaLabel="Guest testimonials"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mx-auto flex w-full max-w-[1176px] flex-col gap-8 md:min-h-[464px] md:flex-row md:items-stretch md:justify-between md:gap-12"
            >
              <div className="flex flex-1 flex-col justify-between md:max-w-[520px] md:py-4">
                <blockquote className="text-left text-[clamp(1.125rem,2.2vw,1.75rem)] font-normal leading-snug tracking-[-0.02em] text-neutral-800">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                    width={72}
                    height={72}
                    loading="eager"
                    decoding="async"
                  />
                  <div>
                    <p className="font-medium text-black">{t.name}</p>
                    <p className="text-sm text-neutral-500">{t.role}</p>
                  </div>
                </figcaption>
              </div>

              <div className="w-full shrink-0 md:w-[376px]">
                <img
                  src={t.photo}
                  alt=""
                  className="aspect-[376/464] w-full rounded-2xl object-cover"
                  width={376}
                  height={464}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

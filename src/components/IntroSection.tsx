import { images } from "../lib/assets";
import { categories } from "../content/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";

export function IntroSection() {
  return (
    <section id="about" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,470px)_1fr] lg:gap-16">
          <AnimatedHeading
            as="h2"
            variant="shimmer"
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]"
          >
            Find the ideal spot for your next adventure.
          </AnimatedHeading>
          <div>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              Discover the world&apos;s most extraordinary stays with Stayli.
              Whether you&apos;re planning a romantic getaway, a family vacation,
              or a business trip, we have the perfect space waiting for you.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {categories.map((cat) => (
                <article
                  key={cat.title}
                  className="card-magic card-magic-panel overflow-hidden rounded-2xl border border-transparent bg-neutral-100"
                >
                  <div className="card-magic-media">
                    <img
                      src={cat.image}
                      alt=""
                      className="aspect-[376/476] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="card-magic-title text-lg font-medium tracking-tight text-black">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {cat.body}
                    </p>
                    <a
                      href="#listings"
                      className="card-magic-cta mt-4 inline-block text-sm font-medium text-black underline-offset-4 hover:underline"
                    >
                      {cat.cta} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl lg:mt-16">
          <img
            src={images.introWide}
            alt="Luxury vacation property"
            className="aspect-[776/516] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

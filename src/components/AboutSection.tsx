import { business } from "../lib/business";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#1A2B32] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#E8C4B0]">
              Since {business.founded}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Creating unforgettable stays
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Find your perfect getaway in our handpicked rentals. Each home has
              character, thoughtful amenities, and hosts who care about your
              experience.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#C47B5A] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#B06A4A]"
            >
              Book now
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-6">
            {[
              { value: "240+", label: "Verified homes" },
              { value: "18", label: "Countries" },
              { value: "4.9", label: "Average guest rating" },
              { value: "24/7", label: "Guest support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <dt className="text-3xl font-semibold">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

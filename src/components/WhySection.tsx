import { whyChoose } from "../content/site";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { AnimatedHeading } from "./ui/AnimatedHeading";

export function WhySection() {
  return (
    <section id="why" className="border-y border-black/5 bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <SectionEyebrow>Why us</SectionEyebrow>
        <AnimatedHeading
          as="h2"
          variant="shimmer"
          className="mt-3 max-w-2xl text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]"
        >
          Your trusted companion for memorable stays
        </AnimatedHeading>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {whyChoose.map((item) => (
            <li
              key={item.title}
              className="card-magic card-magic-panel rounded-2xl border border-transparent bg-white/80 p-6 md:p-8"
            >
              <h3 className="card-magic-title text-lg font-medium tracking-tight text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

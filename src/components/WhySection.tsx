import { whyChoose } from "../content/site";
import { SectionEyebrow } from "./ui/SectionEyebrow";

export function WhySection() {
  return (
    <section id="why" className="border-y border-black/5 bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <SectionEyebrow>Why us</SectionEyebrow>
        <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]">
          Your trusted companion for memorable stays
        </h2>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {whyChoose.map((item) => (
            <li key={item.title}>
              <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
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

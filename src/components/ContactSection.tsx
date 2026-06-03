import { images } from "../lib/assets";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { Button } from "./ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Connect</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]">
              Get In touch
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-600">
              We&apos;d love to hear from you. Reach out with any questions or
              feedback.
            </p>
            <div className="mt-8">
              <Button href="mailto:hello@stayli.example">Contact</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images.contactWide}
              alt=""
              className="aspect-[1171/272] w-full object-cover md:aspect-auto md:min-h-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

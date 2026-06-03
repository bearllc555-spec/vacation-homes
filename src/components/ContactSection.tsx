import { Mail, Phone } from "lucide-react";
import { business } from "../lib/business";
import { poconosLocation } from "../lib/location";
import { ContactForm } from "./ContactForm";
import { GoogleMap } from "./GoogleMap";
import { SectionEyebrow } from "./ui/SectionEyebrow";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#fcfcfc] py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#065087]/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#EBF213]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="max-w-xl">
          <SectionEyebrow>Connect</SectionEyebrow>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]">
            Get In touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Planning a mountain escape? Tour our{" "}
            <span className="font-medium text-black">{poconosLocation.region}</span>{" "}
            showcase home or ask about listings near{" "}
            {poconosLocation.city}.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_24px_80px_-24px_rgba(6,80,135,0.18)] md:p-8">
            <ContactForm />
            <ul className="mt-8 flex flex-col gap-3 border-t border-black/8 pt-8 text-sm text-neutral-600">
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-2 transition hover:text-black"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 transition hover:text-black"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {business.phone}
                </a>
              </li>
            </ul>
          </div>

          <GoogleMap />
        </div>
      </div>
    </section>
  );
}

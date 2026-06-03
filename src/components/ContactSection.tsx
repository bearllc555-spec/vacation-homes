import { business } from "../lib/business";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1A2B32] md:text-4xl">
          Find a home away from home
        </h2>
        <p className="mt-4 text-lg text-[#5C6B73]">
          Questions about a listing or hosting with us? We would love to hear
          from you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${business.email}`}
            className="rounded-full bg-[#1A2B32] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#2A3F4A]"
          >
            Contact us
          </a>
          <a
            href="#stays"
            className="rounded-full border border-[#1A2B32] px-8 py-3 font-semibold text-[#1A2B32] transition-colors hover:bg-white"
          >
            List your property
          </a>
        </div>
        <p className="mt-8 text-sm text-[#5C6B73]">
          {business.phone} · {business.email}
        </p>
      </div>
    </section>
  );
}

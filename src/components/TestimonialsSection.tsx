import { testimonials } from "../content/site";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-[#1A2B32] md:text-4xl">
          What guests are saying
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-[#E8E2DA] bg-white p-8"
            >
              <blockquote className="flex-1 text-[#1A2B32] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-[#E8E2DA] pt-6">
                <p className="font-semibold text-[#1A2B32]">{t.name}</p>
                <p className="text-sm text-[#5C6B73]">{t.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

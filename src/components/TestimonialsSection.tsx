import { testimonials } from "../content/site";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-black/8 bg-white p-8"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 flex items-center gap-3 border-t border-black/8 pt-6">
                <img
                  src={t.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-medium text-black">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { whyChoose } from "../content/site";

export function WhySection() {
  return (
    <section id="why" className="border-y border-[#E8E2DA] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C47B5A]">
          Why choose us
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight text-[#1A2B32] md:text-4xl">
          Your trusted companion for memorable stays
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {whyChoose.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[#E8E2DA] bg-[#FAF8F5] p-8"
            >
              <h3 className="text-lg font-semibold text-[#1A2B32]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#5C6B73] leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

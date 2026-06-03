import { listings } from "../content/site";

export function ListingsSection() {
  return (
    <section id="stays" className="bg-[#FAF8F5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C47B5A]">
            Explore
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1A2B32] md:text-4xl">
            Dream destinations
          </h2>
          <p className="mt-4 text-lg text-[#5C6B73]">
            Handpicked homes for romantic getaways, family trips, and remote-work
            retreats.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((stay) => (
            <li key={stay.id}>
              <article className="group overflow-hidden rounded-2xl border border-[#E8E2DA] bg-white shadow-sm transition-shadow hover:shadow-md">
                <div
                  className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(145deg, ${stay.accent} 0%, ${stay.accent}88 45%, #FAF8F5 100%)`,
                  }}
                  role="img"
                  aria-label={`${stay.name} preview`}
                />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#5C6B73]">
                    {stay.beds} bedroom{stay.beds > 1 ? "s" : ""} · {stay.guests}{" "}
                    guests
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-[#1A2B32]">
                    {stay.name}
                  </h3>
                  <p className="text-sm text-[#5C6B73]">{stay.location}</p>
                  <p className="mt-3 text-base font-semibold text-[#1A2B32]">
                    ${stay.priceUsd}{" "}
                    <span className="font-normal text-[#5C6B73]">/ night</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

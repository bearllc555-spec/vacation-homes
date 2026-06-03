import { poconosLocation } from "../lib/location";

const stats = [
  { value: "120+", label: "Curated stays" },
  { value: "4.9", label: "Guest rating" },
  { value: "24/7", label: "Concierge" },
] as const;

export function StatsRibbon() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#111111] py-10 text-white"
      aria-label="Highlights"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 120% at 50% -20%, rgb(6, 80, 135), transparent 55%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6 md:flex-row md:justify-between md:px-10 lg:px-16">
        <p className="text-center text-sm font-medium tracking-wide text-white/70 md:text-left">
          <span className="text-[#EBF213]">●</span> Flagship escapes in{" "}
          <span className="text-white">{poconosLocation.region}</span>
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {stats.map((item) => (
            <li key={item.label} className="text-center">
              <p className="text-2xl font-medium tracking-tight md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

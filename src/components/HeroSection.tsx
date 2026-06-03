import { business } from "../lib/business";

export function HeroSection() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-[#1A2B32] text-white"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, #C47B5A 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 10% 80%, #3D6B5C 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#E8C4B0]">
          Vacation rentals · design concept
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {business.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
          Uncover unique homes and unforgettable stays. Your perfect getaway is
          one search away.
        </p>
        <form
          className="mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:flex-row sm:items-end sm:p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex-1">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/70">
              Destination
            </span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-[#1A2B32] placeholder:text-[#5C6B73] focus:outline-none focus:ring-2 focus:ring-[#C47B5A]"
            />
          </label>
          <label className="sm:w-40">
            <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-white/70">
              Guests
            </span>
            <select
              className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-[#1A2B32] focus:outline-none focus:ring-2 focus:ring-[#C47B5A]"
              defaultValue="2"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="4">4 guests</option>
              <option value="6">6 guests</option>
            </select>
          </label>
          <button
            type="submit"
            className="rounded-xl bg-[#C47B5A] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#B06A4A] sm:shrink-0"
          >
            Search stays
          </button>
        </form>
      </div>
    </section>
  );
}

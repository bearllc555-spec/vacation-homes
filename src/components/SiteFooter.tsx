import { images } from "../lib/assets";
import { goHome } from "../lib/navigation";

const footerLinks = [
  { label: "Home", href: "#start" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#journal" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="/" onClick={goHome} className="inline-block">
              <img
                src={images.footerWordmark}
                alt="Stayli"
                className="h-10 w-auto max-w-[280px] object-contain object-left md:h-12"
                width={280}
                height={48}
              />
            </a>
            <p className="mt-8 text-sm font-medium text-white">Subscribe to Updates</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111111] hover:bg-neutral-200"
              >
                Join
              </button>
            </form>
          </div>

          <nav aria-label="Footer" className="lg:pt-2">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-10">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-14 text-xs text-white/50">
          © {year} Stayli. Vacation homes design concept.
        </p>
      </div>
    </footer>
  );
}

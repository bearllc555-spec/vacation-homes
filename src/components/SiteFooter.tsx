import { Facebook, Instagram, Twitter } from "lucide-react";
import { business, socialLinks } from "../lib/business";
import { goHome } from "../lib/navigation";
import { navLinks } from "../content/site";

const SOCIAL_ICONS = {
  Facebook,
  Instagram,
  Twitter,
} as const;

const BUILT_BY_URL = "https://998webdesigns.com";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a
              href="/"
              onClick={goHome}
              className="inline-block text-lg font-semibold tracking-tight text-white md:text-xl"
            >
              {business.brandName}
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
              {navLinks.map((item) => (
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

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            Copyrighted by {business.brandName} &copy; {year}
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = SOCIAL_ICONS[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-white/70 transition hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-white/50 md:text-right">
            Built by{" "}
            <a
              href={BUILT_BY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 transition hover:text-white"
            >
              998 web designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

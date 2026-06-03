import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "../lib/business";
import { goHome } from "../lib/navigation";
import { SITE_VERSION } from "../lib/version";
import { navLinks } from "../content/site";
import { Button } from "./ui/Button";

type SiteHeaderProps = {
  variant?: "hero" | "default";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const onHero = variant === "hero";

  const linkClass = onHero
    ? "text-sm text-white/90 transition-colors hover:text-white"
    : "text-sm text-black/80 transition-colors hover:text-black";

  return (
    <header
      className={
        onHero
          ? "absolute inset-x-0 top-0 z-50"
          : "sticky top-0 z-50 border-b border-black/5 bg-[#fcfcfc]/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-6 md:px-10 lg:px-16">
        <a
          href="/"
          onClick={(e) => {
            goHome(e);
            setMenuOpen(false);
          }}
          className="inline-flex min-w-0 flex-col gap-0.5"
          aria-label={`${business.brandName} home`}
        >
          <span
            className={`text-base font-semibold leading-tight tracking-tight md:text-lg ${
              onHero ? "text-white" : "text-black"
            }`}
          >
            {business.brandName}
          </span>
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
              onHero ? "text-white/70" : "text-neutral-500"
            }`}
          >
            {SITE_VERSION}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#listings"
            className={`hidden sm:inline-flex ${onHero ? "" : ""}`}
          >
            Get Started
          </Button>
          <button
            type="button"
            className={`inline-flex rounded-lg p-2 md:hidden ${onHero ? "text-white" : "text-black"}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className={`px-6 pb-6 md:hidden ${onHero ? "text-white" : "text-black"}`}
          aria-label="Mobile"
        >
          <ul className="space-y-2 rounded-2xl bg-black/40 p-4 backdrop-blur-md">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#listings">Get Started</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

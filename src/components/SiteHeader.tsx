import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "../lib/business";
import { goHome } from "../lib/navigation";
import { SITE_VERSION } from "../lib/version";
import { navLinks } from "../content/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E2DA] bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="/"
          onClick={(e) => {
            goHome(e);
            setMenuOpen(false);
          }}
          className="group flex flex-col"
          aria-label={`${business.brandName} home`}
        >
          <span className="text-xl font-semibold tracking-tight text-[#1A2B32] transition-colors group-hover:text-[#C47B5A] md:text-2xl">
            {business.brandName}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5C6B73]">
            {SITE_VERSION}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#1A2B32] transition-colors hover:text-[#C47B5A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#1A2B32] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2A3F4A] sm:inline-flex"
          >
            Book today
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-[#1A2B32] md:hidden"
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
          className="border-t border-[#E8E2DA] px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-[#1A2B32] hover:bg-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="block rounded-full bg-[#1A2B32] px-5 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                Book today
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

import { business } from "../lib/business";
import { goHome } from "../lib/navigation";
import { navLinks } from "../content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E2DA] bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <a
            href="/"
            onClick={goHome}
            className="text-lg font-semibold text-[#1A2B32] hover:text-[#C47B5A]"
          >
            {business.brandName}
          </a>
          <p className="mt-2 max-w-xs text-sm text-[#5C6B73]">
            Vacation rentals design concept for Cloudflare Pages preview.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-[#5C6B73] hover:text-[#1A2B32]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-6 text-center text-xs text-[#5C6B73] md:px-10 md:text-left">
        © {year} {business.brandName}. All rights reserved.
      </p>
    </footer>
  );
}

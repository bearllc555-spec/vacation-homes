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
    <footer className="border-t border-black/8 bg-[#fcfcfc] py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="/" onClick={goHome} className="inline-flex items-center gap-2">
              <img src={images.logo} alt="Stayli" className="h-5 w-auto" width={59} height={20} />
            </a>
            <p className="mt-6 max-w-xs text-sm text-neutral-600">
              Subscribe to Updates
            </p>
            <form
              className="mt-4 flex max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-black/25"
              />
              <button
                type="submit"
                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Join
              </button>
            </form>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 text-xs text-neutral-500">
          © {year} Stayli. Vacation homes design concept.
        </p>
      </div>
    </footer>
  );
}

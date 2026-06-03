import { journalPosts } from "../content/site";
import { SectionEyebrow } from "./ui/SectionEyebrow";
import { Button } from "./ui/Button";

export function JournalSection() {
  return (
    <section id="journal" className="bg-[#fcfcfc] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionEyebrow>Blog &amp; articles</SectionEyebrow>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.08] tracking-[-0.03em]">
              Together, let&apos;s make your
              <br />
              travels awesome
            </h2>
          </div>
          <Button href="#journal" variant="outline">
            View all
          </Button>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {journalPosts.map((post) => (
            <li key={post.title}>
              <article className="group overflow-hidden rounded-2xl bg-neutral-100">
                <div className="relative aspect-[376/400] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-black">
                    {post.category}
                  </span>
                </div>
                <div className="min-h-[180px] p-6">
                  <h3 className="text-lg font-medium leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <div className="mt-6 flex items-center gap-3 border-t border-black/8 pt-4">
                    <span className="text-sm text-neutral-500">
                      {post.author}
                    </span>
                    <span className="text-sm text-neutral-400">·</span>
                    <span className="text-sm text-neutral-500">{post.date}</span>
                    <span className="text-sm text-neutral-400">·</span>
                    <span className="text-sm text-neutral-500">
                      {post.readMins} min read
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

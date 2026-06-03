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
            <h2 className="mt-3 max-w-lg text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-tight tracking-[-0.03em]">
              Together, let&apos;s make your travels awesome
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
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[418/464] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm text-neutral-500">
                    {post.author} · {post.date} · {post.readMins} min read
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

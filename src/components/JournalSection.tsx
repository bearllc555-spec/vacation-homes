import { journalPosts } from "../content/site";

export function JournalSection() {
  return (
    <section id="journal" className="border-t border-[#E8E2DA] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C47B5A]">
              Journal
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1A2B32] md:text-4xl">
              Travel inspiration
            </h2>
          </div>
          <a
            href="#journal"
            className="text-sm font-medium text-[#C47B5A] hover:underline"
          >
            View all
          </a>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {journalPosts.map((post) => (
            <li key={post.title}>
              <article className="rounded-2xl border border-[#E8E2DA] p-6 transition-colors hover:border-[#C47B5A]/40">
                <p className="text-xs font-medium uppercase tracking-wide text-[#C47B5A]">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#1A2B32]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-[#5C6B73]">
                  {post.author} · {post.date} · {post.readMins} min read
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

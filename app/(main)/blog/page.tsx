import type { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts, blogCategories } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Generator Repair Tips & Equipment Guides for UAE Contractors",
  description:
    "Practical articles on generator maintenance, compactor troubleshooting, construction site safety and equipment selection. Written by our technicians for UAE contractors.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Generator Repair Tips & Equipment Guides for UAE Contractors",
    description:
      "Practical articles on generator maintenance, compactor troubleshooting, construction site safety and equipment selection. Written by our technicians.",
    url: "/blog",
  },
  twitter: {
    title: "Blog | Generator Repair Tips & Equipment Guides for UAE Contractors",
    description:
      "Practical articles on generator maintenance, compactor troubleshooting, construction site safety and equipment selection. Written by our technicians.",
  },
};

export default function BlogPage() {
  const sortedPosts = [...allBlogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featuredPosts = sortedPosts.filter((p) => p.featured).slice(0, 3);
  const remainingPosts = sortedPosts.filter(
    (p) => !featuredPosts.includes(p)
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Equipment Repair &amp; Maintenance Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            Expert guides on generator service, compactor repair, and
            construction equipment maintenance — written for UAE contractors.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4 lg:px-8">
          {blogCategories.map((cat) => (
            <span
              key={cat.slug}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700"
            >
              {cat.name}
              <span className="text-xs text-zinc-400">({cat.count})</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Featured Articles
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-xl border border-zinc-200 transition-shadow hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-zinc-900 group-hover:text-amber-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
                      <span>{post.author.name}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                      <span>·</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-AE",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">All Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-block w-fit rounded-full bg-zinc-100 px-3 py-0.5 text-xs font-medium text-zinc-600">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug text-zinc-900 group-hover:text-amber-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-zinc-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
                    <span>{post.readTime} min read</span>
                    <span>·</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-AE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Equipment Trouble? We Fix It.
          </h2>
          <p className="mt-3 text-lg text-zinc-800">
            Generator won&apos;t start, compactor vibration off, hydraulic leak on site — call 055 455 5786 and we&apos;ll sort it out. Day or night, across all Emirates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Contact Our Technicians
            </Link>
            <a
              href="https://wa.me/971554555786"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              WhatsApp: 055 455 5786
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

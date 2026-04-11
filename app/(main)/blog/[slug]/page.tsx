import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allBlogPosts, getRelatedPosts } from "@/data/blogs";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - Harma Machinery Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.image, width: 800, height: 500 }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.id, 3);

  return (
    <main>
      {/* Hero */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-amber-400"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Back to Blog
          </Link>
          <div className="mt-6">
            <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-zinc-400">{post.author.role}</p>
              </div>
              <span className="text-xs text-zinc-500">·</span>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-zinc-400"
              >
                {new Date(post.publishedAt).toLocaleDateString("en-AE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-xs text-zinc-500">·</span>
              <span className="text-xs text-zinc-400">
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto -mt-1 max-w-4xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div
          className="prose prose-zinc prose-lg max-w-none prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-li:marker:text-amber-500 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-zinc-200 pt-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block rounded-full bg-zinc-100 px-3 py-0.5 text-xs font-medium text-zinc-600">
                      {r.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold leading-snug text-zinc-900 group-hover:text-amber-600">
                      {r.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-amber-500 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-zinc-900">
            Need Professional Equipment Repair?
          </h2>
          <p className="mt-2 text-zinc-800">
            Harma Machinery offers 24/7 generator repair, compactor service, and
            equipment maintenance across all UAE emirates.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-quote"
              className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+971554555786"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Call: 055 455 5786
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
            },
            publisher: {
              "@type": "Organization",
              name: "Harma Machinery",
              url: "https://harmachinery.com",
            },
          }),
        }}
      />
    </main>
  );
}

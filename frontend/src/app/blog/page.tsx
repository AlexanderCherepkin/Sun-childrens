import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogPosts } from "@/lib/api";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Блог",
  description: "Экспертные статьи и кейсы партнёров франшизы «Яркие дети».",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Section>
      <h1 className="text-4xl font-semibold">Блог</h1>
      <p className="mt-4 text-muted">Экспертные материалы и истории успеха партнёров.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {(posts.data as { title: string; slug: string; excerpt: string; cover?: { url: string }; type: string; publishedAt: string }[]).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
            {post.cover && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.cover.url}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  decoding="async"
                />
              </div>
            )}
            <div className="p-5">
              <span className="text-xs font-medium text-primary">{post.type === "case" ? "Кейс" : "Статья"}</span>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted">{new Date(post.publishedAt).toLocaleDateString("ru-RU")}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

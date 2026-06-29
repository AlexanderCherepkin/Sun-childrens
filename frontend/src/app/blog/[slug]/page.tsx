import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/api";
import { sanitizeHtml } from "@/lib/sanitize";
import { Section } from "@/components/ui/Section";
import "@/app/typography.css";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return (posts.data as { slug: string }[]).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Статья не найдена" };
  const typed = post as { title: string; excerpt: string };
  return {
    title: typed.title,
    description: typed.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const typed = post as {
    title: string;
    content: string;
    cover?: { url: string; alternativeText?: string | null };
    type: string;
    publishedAt: string;
  };

  return (
    <Section>
      <Link href="/blog" className="text-sm text-muted hover:text-primary">← Все публикации</Link>

      <div className="mt-6">
        <span className="text-sm font-medium text-primary">{typed.type === "case" ? "Кейс партнёра" : "Статья-экспертиза"}</span>
        <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{typed.title}</h1>
        <p className="mt-2 text-sm text-muted">{new Date(typed.publishedAt).toLocaleDateString("ru-RU")}</p>
      </div>

      {typed.cover && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={typed.cover.url}
            alt={typed.cover.alternativeText || typed.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            decoding="auto"
          />
        </div>
      )}

      <article
        className="prose prose-lg mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(typed.content) }}
      />
    </Section>
  );
}

import CommentSection from "@/components/features/blog/CommentSection";
import { blogPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800">
        Post not found.
      </div>
    );
  }

  return (
    <article className="flex flex-col gap-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Insight
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">{post.title}</h1>
        <p className="mt-3 text-slate-600">{post.summary}</p>
      </header>
      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-slate-700">
          This is a placeholder article body. Swap this with your CMS or markdown renderer
          when you are ready.
        </p>
      </section>
      <CommentSection />
    </article>
  );
}

import PostCard from "@/components/features/blog/PostCard";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Blog</h1>
        <p className="mt-2 text-slate-600">
          Updates on legal operations, compliance strategy, and contract management.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

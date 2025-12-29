import type { BlogPost } from "@/types/blog";
import Link from "next/link";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-slate-900"
      >
        Read more
      </Link>
    </article>
  );
}

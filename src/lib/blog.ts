import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-techlegal7",
    title: "Welcome to TechLegal7",
    summary: "A quick look at how we organize legal tech projects for clarity.",
  },
  {
    slug: "compliance-with-confidence",
    title: "Compliance, With Confidence",
    summary: "How structured workflows keep teams audit-ready without chaos.",
  },
  {
    slug: "contract-lifecycle-playbook",
    title: "The Contract Lifecycle Playbook",
    summary: "Practical steps to track, review, and approve contracts faster.",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

import { notFound } from "next/navigation";
import blogPosts from "@/data/blogPosts";
import BlogPostView from "@/components/sections/BlogPostView";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostView post={post!} allPosts={blogPosts} />;
}

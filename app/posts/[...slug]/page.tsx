import "katex/dist/katex.min.css";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Difficulty } from "@/components/ui/difficulty";
import { Toaster } from "@/components/ui/toaster";
import { NewAppAlert } from "@/components/newAppAlert";
import SubscribeFeatured from "@/components/subscribe";

export const dynamicParams = false;

interface PostProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(slug: string[]) {
  const joinedSlug = slug.join("/");
  const post = allPosts.find((post) => post.slugAsParams === joinedSlug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPostFromParams(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="py-6 prose dark:prose-invert">
      <NewAppAlert />
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex flex-row justify-between my-8">
        {Boolean(post.difficulty) && (
          <Difficulty value={post.difficulty as 1 | 2 | 3} />
        )}
        <span className="text-sm">Last updated {formattedDate}</span>
      </div>
      {post.description && (
        <p className="text-xl mt-0 text-zinc-700 dark:text-zinc-200">
          {post.description}
        </p>
      )}
      <Mdx code={post.body.code} />
      <SubscribeFeatured />
      <Toaster />
    </article>
  );
}

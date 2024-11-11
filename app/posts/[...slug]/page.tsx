import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Difficulty } from "@/components/ui/difficulty";
import SubscribeFeatured from "@/components/subscribe";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

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
    </article>
  );
}

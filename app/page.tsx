import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { NewAppAlert } from "@/components/newAppAlert";

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-6 prose dark:prose-invert">
      <NewAppAlert />
      <h1 className="mt-12">Posts</h1>
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}

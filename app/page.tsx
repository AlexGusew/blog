import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-6 prose dark:prose-invert">
      <h1>Posts</h1>
      {allPosts.map((post) => (
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

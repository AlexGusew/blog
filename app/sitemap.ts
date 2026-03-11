import { MetadataRoute } from "next";
import { allPosts, allPages } from "contentlayer/generated";

const BASE_URL = "https://alexcoders.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${BASE_URL}${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const pages = allPages.map((page) => ({
    url: `${BASE_URL}${page.slug}`,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/apps`,
    },
    ...pages,
    ...posts,
  ];
}

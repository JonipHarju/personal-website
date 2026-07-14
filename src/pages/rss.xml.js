import rss from "@astrojs/rss";
import { getPublishedPosts } from "../utils/blog";

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: "Joni Harju — Blog",
    description: "Notes, deep dives, and lessons from building for the web.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}

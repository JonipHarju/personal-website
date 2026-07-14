import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts: drop a .md file in src/content/blog/ and it publishes at
// /blog/<filename>. Posts with images use a folder: my-post/index.md +
// colocated images referenced as ./image.png (auto-optimized by Astro).
// The slug IS the filename — never rename a published file.
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      // Alt text for the hero image (empty = decorative).
      heroAlt: z.string().optional(),
      // Small credit line under the hero image; may contain HTML links.
      heroCredit: z.string().optional(),
    }),
});

export const collections = { blog };

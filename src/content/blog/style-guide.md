---
title: "Style Guide: How to Write a Post Here"
description: "A draft post showing every markdown style this blog supports — keep it around as a cheat sheet."
pubDate: 2026-07-14
draft: true
---

This post is a living cheat sheet for writing on this blog. It's marked
`draft: true` in the frontmatter, so it shows up when running `npm run dev`
but is **excluded from production builds** — it never gets published, listed,
or added to the RSS feed until you flip the flag.

## How posts work

Drop a `.md` file into `src/content/blog/` and it becomes a page at
`/blog/<filename>`. This file is `style-guide.md`, so it lives at
`/blog/style-guide`. The slug **is** the filename, so never rename a file
after publishing it.

Every post needs this frontmatter at the top:

```yaml
---
title: "My Post Title"
description: "One sentence used for SEO and social previews."
pubDate: 2026-07-14
draft: true # remove this (or set false) to publish
heroImage: ./cover.png # optional — a default hero is used if omitted
heroAlt: A description of the hero image # optional alt text for accessibility
heroCredit: 'Photo by <a href="https://example.com">Someone</a> on Unsplash' # optional small credit line under the hero
---
```

If a post has images, use a folder instead of a single file:
`src/content/blog/my-post/index.md` with the images next to it, referenced
as `![alt text](./cover.png)`. Astro optimizes them automatically. The URL
stays `/blog/my-post`.

## Text styling

Regular paragraph text looks like this. You can use **bold**, _italic_,
**_bold italic_**, ~~strikethrough~~, and `inline code` for things like
`npm run dev` or `getPublishedPosts()`. Links look like
[this one to Astro's docs](https://docs.astro.build/en/guides/content-collections/).

### A third-level heading

Use `##` for main sections and `###` for subsections. The post title is
already the `<h1>`, so start at `##` inside the body.

## Code blocks

Fenced code blocks get syntax highlighting with the site's custom dual
light/dark themes. Tag the language after the backticks:

```ts
// TypeScript
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
```

```bash
# Shell
npm run dev   # drafts are visible here
npm run build # drafts are excluded here
```

## Quotes

> Blockquotes look like this. Good for pull quotes, citations, or that one
> sentence you want people to actually read.

## Lists

Unordered:

- First point
- Second point
  - Nested points work too
- Third point

Ordered:

1. Write the post
2. Preview it with `npm run dev`
3. Delete the `draft: true` line
4. Commit and push — done

## Tables

| Frontmatter field | Required | Notes                                |
| ----------------- | -------- | ------------------------------------ |
| `title`           | Yes      | Shown as the page heading            |
| `description`     | Yes      | Used for SEO and social cards        |
| `pubDate`         | Yes      | Posts are sorted newest-first        |
| `draft`           | No       | Defaults to `false` (published)      |
| `heroImage`       | No       | Falls back to the default hero       |
| `heroAlt`         | No       | Alt text for the hero image          |
| `heroCredit`      | No       | Small credit text below the hero; HTML links allowed |

## Dividers

Use three dashes on their own line for a horizontal rule:

---

And that's everything. When in doubt, open this file and copy what you need.

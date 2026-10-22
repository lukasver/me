# [Lucas Verdiell](https://lucasverdiell.dev)

Personal site and blog of Lucas Verdiell.

## Stack

- Next.js 14 (App Router) and TypeScript
- Tailwind CSS and shadcn/ui (Radix primitives)
- MDX blog rendered with next-mdx-remote
- Contact form emails built with react-email and sent through the Resend API
- Cal.com embed for booking calls

## Requirements

- Bun 1.4.4 (see `packageManager` in `package.json`)
- Node >=24.22.1 (see `.nvmrc`)

## Scripts

```bash
bun install          # install dependencies
bun dev              # start the dev server on http://localhost:3000
bun run build        # production build
bun run typecheck    # tsc --noEmit
bun run lint         # next lint
bun run email        # react-email preview server for emails/
```

## Environment variables

There is no `.env.example`. Set these in `.env.local` for local development:

- `RESEND`: Resend API key used by `src/app/api/emails/send`
- `FROM`: sender address for contact form emails
- `TO`: recipient address for contact form emails
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID (only loaded in production)

## Writing a post

Posts live in `src/app/blog/posts/*.mdx`. The slug is the filename, so `my-post.mdx` is served at `/blog/my-post`. Frontmatter fields (validated in `src/lib/mdx.ts`):

```mdx
---
title: Post title
summary: One line summary
publishedAt: '2026-01-31'
image: /assets/cover.png
tags: ['tag-one', 'tag-two']
authors: ['Lucas Verdiell']
draft: true
---
```

`title`, `summary` and `publishedAt` are required. Set `draft: true` to hide a post.

## Project structure

```
src/app         routes: home, blog, contact, api, og, rss, sitemap, robots
src/components  page sections, MDX components and shadcn/ui in ui/
src/lib         MDX loading, table of contents, helpers
emails          react-email template for the contact form
public          icons, OG image and static assets
```

## Deploy

Deployed on Vercel.

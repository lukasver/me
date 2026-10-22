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

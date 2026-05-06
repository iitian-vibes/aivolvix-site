# aivolvix-site

Single-page corporate site for **Aivolvix Private Limited** — parent of [IITian Vibes](https://iitianvibes.com) and [Crayonz](https://crayonz.ai).

**Live:** https://aivolvix.in

## Stack

- Astro 6 (static output)
- React 19 islands (only `BrandCard`, `Reveal`)
- Tailwind v4 (CSS-first via `@theme`)
- TypeScript (strict)

## Develop

```bash
npm install
npm run dev          # localhost:4321
npm run build        # production build to dist/
npm run preview      # serve dist/ locally
```

## Edit copy

All site copy lives in [`src/content/copy.ts`](src/content/copy.ts). Edit there.

## Deploy

Cloudflare Pages auto-deploys on push to `main`. Project name: `aivolvix-site`. Custom domain: `aivolvix.in`.

## Spec & plan

- Design spec: `../docs/superpowers/specs/2026-05-06-aivolvix-corporate-site-design.md`
- Implementation plan: `../docs/superpowers/plans/2026-05-06-aivolvix-corporate-site.md`

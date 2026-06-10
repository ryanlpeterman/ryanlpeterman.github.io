# ryanlpeterman.dev

Personal link-in-bio site. A single static page built with Next.js (App
Router, static export) and deployed to GitHub Pages.

## Develop

- `npm ci` — install dependencies
- `npm run dev` — local dev server at `http://localhost:3000`
- `npm run build` — static export to `./out`

## Deploy

Push to `master`. GitHub Actions (`.github/workflows/nextjs.yml`) builds
`./out` and deploys it to Pages. The custom domain comes from
`public/CNAME` (`www.ryanlpeterman.dev`).

## Structure

- `app/page.js` — the page; links, posts, and socials live in data arrays at the top
- `app/globals.css` — all styling (design tokens in `:root`)
- `public/` — avatar, favicons, CNAME, robots/sitemap

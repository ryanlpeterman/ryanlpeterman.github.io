## Overview
Static site powered by Next.js (exported to static HTML) and deployed to GitHub Pages. Hugo has been removed from this repo.

## Prerequisites
- Node.js 20.x and npm 10.x
- GitHub repository with Pages enabled (uses the included workflow)

## Install
- `npm ci`

## Develop
- `npm run dev` — starts local dev server at `http://localhost:3000`

## Build
- `npm run build` — outputs static site to `./out`

## Deploy
- Automatic: push to `main` and GitHub Actions builds `./out` and deploys to Pages using `.github/workflows/deploy.yml`.
- Custom domain: `public/CNAME` contains `www.ryanlpeterman.dev` and is included in the build output.
- Optional manual (if ever needed without Actions): `npm run build && npm run deploy:docs` to copy `./out` to `./docs`, then set Pages source to `main` → `/docs` in repo settings.

## Using Codex
- Run a Codex CLI session in this folder to iterate quickly.
- Ask Codex to: install deps, run the dev server, add/edit pages under `app/`, or adjust `next.config.js`.
- Codex can run shell commands and apply patches; review its diffs and commit when satisfied.

## Structure
- `app/` — Next.js App Router pages and routes
- `public/` — static assets (copied into the export)
- `next.config.js` — `output: 'export'` enables static export
- `.github/workflows/deploy.yml` — GitHub Pages build + deploy

## Common Tasks
- Bump deps: `npm outdated` → `npm update` (or `npm i <pkg>@latest`)
- Lint/format: add your preferred tooling as needed (none configured yet)

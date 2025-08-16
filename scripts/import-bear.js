#!/usr/bin/env node
/*
  Import posts from Bear Blog into content/posts as Markdown with frontmatter.
*/

const fs = require('fs');
const path = require('path');

const BASE = 'https://ryanlpeterman.bearblog.dev';
const INDEX = `${BASE}/blog/`;
const OUT_DIR = path.join(process.cwd(), 'content', 'posts');

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'import-script' } });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${url}`);
  return await res.text();
}

function uniq(arr) { return Array.from(new Set(arr)); }

function extractSlugs(indexHtml) {
  const hrefs = Array.from(indexHtml.matchAll(/href="([^"]+)"/g)).map(m => m[1]);
  const paths = hrefs
    .filter(h => h.startsWith('/'))
    .filter(h => !h.startsWith('/feed'))
    .filter(h => h !== '/' && h !== '/blog/' && h !== '/blog');
  const slugs = paths.map(p => p.replace(/^\//, '').replace(/\/$/, ''));
  return uniq(slugs);
}

function extractBetween(str, startRe, endRe) {
  const start = str.search(startRe);
  if (start === -1) return '';
  const rest = str.slice(start);
  const endIdx = rest.search(endRe);
  return endIdx === -1 ? rest : rest.slice(0, endIdx);
}

function extractTitle(html) {
  const m = html.match(/<main[\s\S]*?<h1>([\s\S]*?)<\/h1>/i);
  return m ? m[1].trim() : '';
}

function extractDate(html) {
  const m = html.match(/<time[^>]*datetime="([^"]+)"/i);
  if (!m) return '';
  return m[1].split('T')[0];
}

function extractBodyHtml(html) {
  // Take content inside <main> ... (stop before upvote form if present)
  let mainHtml = extractBetween(html, /<main>/i, /<footer|<form id=\"upvote-form\"/i);
  if (!mainHtml) return '';
  // Drop header h1 and time block
  // Find first content tag after header: <p, <ul, <ol, <h2/3/4, <pre, <div class="post-content">
  const idx = mainHtml.search(/<(p|ul|ol|h2|h3|h4|pre|div\s+class=\"post-content\")/i);
  let body = idx === -1 ? mainHtml : mainHtml.slice(idx);
  // Remove the initial date/time paragraph if present
  body = body.replace(/^\s*<p>\s*<i>\s*<time[\s\S]*?<\/time>\s*<\/i>\s*<\/p>\s*/i, '');
  // Outdent any HTML lines that accidentally start with spaces (Markdown would
  // treat those as code blocks)
  body = body.replace(/^[ \t]+(?=<)/gm, '');
  return body.trim();
}

function toFrontmatter({ title, date }) {
  const esc = (s) => String(s || '').replace(/"/g, '\\"');
  const lines = [
    '---',
    `title: "${esc(title)}"`,
  ];
  if (date) lines.push(`date: ${date}`);
  lines.push('---', '');
  return lines.join('\n');
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const indexHtml = await fetchText(INDEX);
  const slugs = extractSlugs(indexHtml);
  const created = [];
  for (const slug of slugs) {
    const url = `${BASE}/${slug}/`;
    const html = await fetchText(url);
    const title = extractTitle(html);
    const date = extractDate(html);
    const bodyHtml = extractBodyHtml(html);
    if (!title || !bodyHtml) {
      console.warn(`Skip ${slug}: missing title/body`);
      continue;
    }
    const fm = toFrontmatter({ title, date });
    const outPath = path.join(OUT_DIR, `${slug}.md`);
    fs.writeFileSync(outPath, fm + bodyHtml + '\n');
    created.push(outPath);
  }
  console.log(`Created ${created.length} files:`);
  created.forEach(p => console.log(' - ' + path.relative(process.cwd(), p)));
}

run().catch(err => { console.error(err); process.exit(1); });

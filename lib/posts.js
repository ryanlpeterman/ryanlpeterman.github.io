import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { parse } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = String(processedContent);

  const text = content.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTimeMinutes = Math.max(1, Math.round(wordCount / 200));

  // Normalize date as YYYY-MM-DD string to avoid timezone drift
  const isoDateOnly = /^\d{4}-\d{2}-\d{2}$/;
  let dateStr = undefined;
  if (typeof data.date === 'string' && isoDateOnly.test(data.date)) {
    dateStr = data.date;
  } else if (data.date instanceof Date && !isNaN(data.date)) {
    dateStr = data.date.toISOString().slice(0, 10);
  }
  const date = dateStr ? parse(dateStr, 'yyyy-MM-dd', new Date()) : null;

  return {
    slug,
    title: data.title || data.linktitle || slug,
    date,
    dateStr,
    content,
    contentHtml,
    wordCount,
    readingTimeMinutes,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  posts.sort((a, b) => {
    if (a.dateStr && b.dateStr) return a.dateStr < b.dateStr ? 1 : -1;
    return (b.date?.getTime?.() || 0) - (a.date?.getTime?.() || 0);
  });
  return posts;
}

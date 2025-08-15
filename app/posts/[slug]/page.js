import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import { parse, format } from 'date-fns';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <main className="post">
      <div className="post-info">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-clock"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {post.readingTimeMinutes} minutes
        </p>
      </div>

      <article>
        <h1 className="post-title">
          <a href={`/posts/${post.slug}/`}>{post.title}</a>
        </h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <hr />

      <div className="post-info">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-file-text"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          {post.wordCount} Words
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-calendar"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {post.dateStr
            ? format(parse(post.dateStr, 'yyyy-MM-dd', new Date()), 'yyyy-MM-dd HH:mm')
            : ''}
        </p>
      </div>
    </main>
  );
}

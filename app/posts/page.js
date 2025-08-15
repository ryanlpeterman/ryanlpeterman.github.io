import { getAllPosts } from '../../lib/posts';
import { parse, format } from 'date-fns';

export const dynamic = 'error';

export default async function PostsIndex() {
  const posts = await getAllPosts();

  // Group posts by year
  const grouped = posts.reduce((acc, post) => {
    const year = post.date ? post.date.getFullYear() : 'Unknown';
    acc[year] = acc[year] || [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped)
    .filter((y) => y !== 'Unknown')
    .sort((a, b) => Number(b) - Number(a));
  if (grouped['Unknown']) years.push('Unknown');

  return (
    <main className="posts">
      <h1>Posts</h1>

      {years.map((year) => (
        <div className="posts-group" key={year}>
          <div className="post-year">{year}</div>
          <ul className="posts-list">
            {grouped[year].map((post) => (
              <li className="post-item" key={post.slug}>
                <a href={`/posts/${post.slug}/`}>
                  <span className="post-title">{post.title}</span>
                  <span className="post-day">
                    {post.dateStr
                      ? format(
                          parse(post.dateStr, 'yyyy-MM-dd', new Date()),
                          'MMM d'
                        )
                      : ''}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}

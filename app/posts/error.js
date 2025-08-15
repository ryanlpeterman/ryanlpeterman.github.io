"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      minHeight: '40vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '12px',
    }}>
      <h2>Something went wrong loading posts</h2>
      <pre style={{ opacity: 0.6, whiteSpace: 'pre-wrap', textAlign: 'center', maxWidth: 600 }}>
        {error?.message || 'Unknown error'}
      </pre>
      <button
        onClick={() => reset?.()}
        style={{ padding: '8px 14px', cursor: 'pointer' }}
      >
        Try again
      </button>
    </div>
  );
}


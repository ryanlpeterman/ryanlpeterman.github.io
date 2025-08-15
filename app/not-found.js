export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '40vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <h2>404: This page could not be found.</h2>
      <a href="/" style={{ textDecoration: 'underline' }}>Go home</a>
    </div>
  );
}


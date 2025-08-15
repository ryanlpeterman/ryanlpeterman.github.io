export default function HomePage() {
  return (
    <main role="main">
      <div>
        <h1 style={{ marginBottom: '0.7rem' }}>Ryan Peterman</h1>

        <p
          className="tagline"
          style={{
            marginTop: 0,
            marginBottom: '0.9rem',
            fontSize: '1.08rem',
            lineHeight: 1.72,
            color: '#bfbfbf',
          }}
        >
          <span style={{ display: 'block' }}>
            AI/ML @Meta, ex-Staff engineer @instagram
          </span>
          <span style={{ display: 'block' }}>
            Building a newsletter, podcast &amp; hardware side project
          </span>
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginTop: 0,
            flexWrap: 'nowrap',
          }}
        >
          <a
            href="https://twitter.com/ryanlpeterman"
            target="_blank"
            rel="noopener"
            title="Twitter"
            aria-label="Twitter"
          >
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
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="http://linkedin.com/in/ryanlpeterman"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
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
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://medium.com/@ryanlpeterman"
            target="_blank"
            rel="noopener"
            title="Medium"
            aria-label="Medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="2"
            >
              <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z" />
            </svg>
          </a>
          <a
            href="https://www.developing.dev/"
            target="_blank"
            rel="noopener"
            title="Substack"
            aria-label="Substack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@petermanpod"
            target="_blank"
            rel="noopener"
            title="TikTok"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02 .37-.63 .41-1.11 1.04-1.36 1.75-.21 .51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33 .4-.67 .41-1.06 .1-1.79 .06-3.57 .07-5.36 .01-4.03 -.01-8.05 .02-12.07z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener"
            title="YouTube"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.5 6.203a3 3 0 0 0-2.116-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.587A3 3 0 0 0 .5 6.203C0 8.086 0 12 0 12s0 3.914.5 5.797a3 3 0 0 0 2.116 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.587A3 3 0 0 0 23.5 17.797C24 15.914 24 12 24 12s0-3.914-.5-5.797zM9.75 15.5v-7l6 3.5-6 3.5z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/ryanlpeterman"
            target="_blank"
            rel="noopener"
            title="Instagram"
            aria-label="Instagram"
          >
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
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}

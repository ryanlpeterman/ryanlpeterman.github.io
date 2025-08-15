export const metadata = {
  title: 'Ryan Peterman',
  description: 'Personal website and blog',
  metadataBase: new URL('https://www.ryanlpeterman.dev'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#252627" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/main.css" />
        <link rel="icon" href="/favicon.ico" />
        <script src="/bundle.min.js" defer></script>
      </head>
      <body>
        <div className="container">
          <header className="header">
            <span className="header__inner">
              <a href="/" style={{ textDecoration: 'none' }}>
                <div className="logo">
                  <span className="logo__mark">&gt;</span>
                  <span className="logo__text">$ cd /home/</span>
                  <span className="logo__cursor" />
                </div>
              </a>

              <span className="header__right">
                <nav className="menu">
                  <ul className="menu__inner">
                    <li>
                      <a href="/posts/">Posts</a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/document/d/1NDrXulRFSwLN1vn-Eed-phNCkZ2mRsFdERlXtoCvyI0/">
                        Travel Recs
                      </a>
                    </li>
                  </ul>
                </nav>
                <span className="menu-trigger">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                  </svg>
                </span>
              </span>
            </span>
          </header>

          <div className="content">{children}</div>

          <footer className="footer"></footer>
        </div>
      </body>
    </html>
  );
}

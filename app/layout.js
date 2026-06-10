import './globals.css';

export const metadata = {
  title: 'Ryan Peterman',
  description:
    'Ryan Peterman — AI/ML engineer, writer of The Peterman Post, host of The Peterman Pod. All my links in one place.',
  metadataBase: new URL('https://www.ryanlpeterman.dev'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0e0d" />
        <link rel="icon" href="/favicon.ico" sizes="32x32 64x64" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

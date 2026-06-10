const LINKS = [
  {
    title: 'The Peterman Pod',
    sub: 'New episodes weekly',
    platforms: [
      {
        label: 'YouTube',
        url: 'https://www.youtube.com/@RyanLPeterman/',
        color: '#ff0000',
        svg: (
          <>
            <path
              fill="#ff0000"
              d="M23.5 6.203a3 3 0 0 0-2.116-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.587A3 3 0 0 0 .5 6.203C0 8.086 0 12 0 12s0 3.914.5 5.797a3 3 0 0 0 2.116 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.587a3 3 0 0 0 2.116-2.116C24 15.914 24 12 24 12s0-3.914-.5-5.797z"
            />
            <path fill="#ffffff" d="M9.75 15.5v-7l6 3.5-6 3.5z" />
          </>
        ),
      },
      {
        label: 'Spotify',
        url: 'https://open.spotify.com/show/0MX9PyeCzDhdlyRv6slwIX',
        color: '#1db954',
        path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
      },
      {
        label: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/us/podcast/the-peterman-pod/id1777363835',
        color: '#a970ff',
        path: 'M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z',
      },
    ],
  },
  {
    title: 'Compose',
    sub: 'Ultra-low profile keyboard I’m building',
    platforms: [
      {
        label: 'Kickstarter',
        url: 'https://www.kickstarter.com/projects/ryanlpeterman/compose-simple-ergonomics-beautifully-done',
        color: '#05ce78',
        path: 'M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.42 3.968 24 7.168 24c1.981 0 3.716-.978 4.768-2.479l.794.79c2.26 2.245 5.943 2.245 8.203 0a5.724 5.724 0 001.696-4.075 5.724 5.724 0 00-1.696-4.074l-2.182-2.168 2.182-2.156a5.724 5.724 0 001.696-4.074 5.724 5.724 0 00-1.696-4.074c-2.26-2.246-5.942-2.246-8.203 0l-.794.789A5.797 5.797 0 007.168 0Z',
      },
      {
        label: 'Newsletter (Substack)',
        url: 'https://read.compose.llc/',
        color: '#ff6719',
        path: 'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z',
      },
    ],
  },
  {
    title: 'The Peterman Post',
    sub: 'My newsletter · 100k+ subscribers',
    platforms: [
      {
        label: 'Substack',
        url: 'https://www.developing.dev/',
        color: '#ff6719',
        path: 'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z',
      },
    ],
  },
];

const TECHNICAL_POSTS = [
  {
    title: 'I Quit My Job',
    year: 2026,
    url: 'https://www.developing.dev/p/i-quit-my-job',
  },
  {
    title: 'What To Buy That Improves Quality of Life',
    year: 2025,
    url: 'https://www.developing.dev/p/what-to-buy-that-improves-quality',
  },
  {
    title: 'Engineering Confidence',
    year: 2024,
    url: 'https://www.developing.dev/p/engineering-confidence',
  },
  {
    title: 'How To Get Promoted (Without Getting Lucky)',
    year: 2024,
    url: 'https://www.developing.dev/p/how-to-get-promoted-without-getting',
  },
  {
    title: 'Scaling Yourself',
    year: 2024,
    url: 'https://www.developing.dev/p/scaling-yourself',
  },
  {
    title: 'Why Engineers Need To Write',
    year: 2023,
    url: 'https://www.developing.dev/p/why-engineers-need-to-write',
  },
  {
    title: 'Reducing Instagram’s Basic Video Compute Time by 94%',
    year: 2022,
    url: 'https://engineering.fb.com/2022/11/04/video-engineering/instagram-video-processing-encoding-reduction/',
    credibility: {
      zuck: [
        { label: 'Zuck’s IG', url: 'https://www.instagram.com/p/CkihQRtO5yO/' },
        {
          label: 'Zuck’s FB',
          url: 'https://www.facebook.com/4/videos/884058129426425/',
        },
      ],
      outlets: [
        'https://thenewstack.io/how-instagram-prepared-for-a-tsunami-of-high-definition-video/',
        'https://siliconangle.com/2022/11/04/meta-develops-new-hardware-efficient-video-processing-method/',
        'https://interestingengineering.com/culture/instagram-decreases-video-compute-time-by-94-without-updating-hardware',
      ],
    },
  },
  {
    title: 'Making Instagram Video Ads Performant',
    year: 2021,
    url: 'https://about.instagram.com/blog/engineering/making-instagram-video-ads-performant',
  },
  {
    title: 'Cutting Threads’ Send Latency in Half',
    year: 2021,
    url: 'https://about.instagram.com/blog/engineering/cutting-threads-send-latency-in-half',
  },
  {
    title: 'Video Processing Latency Improvements',
    year: 2020,
    url: 'https://instagram-engineering.com/video-upload-latency-improvements-at-instagram-bcf4b4c5520a',
  },
];

const SOCIALS = [
  {
    label: 'X',
    url: 'https://x.com/ryanlpeterman',
    svg: (
      <path
        fill="#e7e9ea"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    ),
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ryanlpeterman/',
    svg: (
      <>
        <rect width="24" height="24" rx="3.5" fill="#0a66c2" />
        <path
          fill="#ffffff"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z"
        />
      </>
    ),
  },
  {
    label: 'Threads',
    url: 'https://www.threads.com/@ryanlpeterman',
    svg: (
      <path
        fill="#e7e9ea"
        d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"
      />
    ),
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@ryanlpeterman',
    svg: (
      <>
        <path
          fill="#25f4ee"
          transform="translate(-0.9 -0.9)"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        />
        <path
          fill="#fe2c55"
          transform="translate(0.9 0.9)"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        />
        <path
          fill="#e7e9ea"
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        />
      </>
    ),
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/ryanlpeterman',
    svg: (
      <>
        <defs>
          <radialGradient id="ig-grad" cx="0.3" cy="1.07" r="1.3">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285aeb" />
          </radialGradient>
        </defs>
        <path
          fill="url(#ig-grad)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
        />
      </>
    ),
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@RyanLPeterman/',
    svg: (
      <>
        <path
          fill="#ff0000"
          d="M23.5 6.203a3 3 0 0 0-2.116-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.587A3 3 0 0 0 .5 6.203C0 8.086 0 12 0 12s0 3.914.5 5.797a3 3 0 0 0 2.116 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.587a3 3 0 0 0 2.116-2.116C24 15.914 24 12 24 12s0-3.914-.5-5.797z"
        />
        <path fill="#ffffff" d="M9.75 15.5v-7l6 3.5-6 3.5z" />
      </>
    ),
  },
];

function ExternalLink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="page">
      <div className="rise" style={{ animationDelay: '0ms' }}>
        <img
          className="avatar"
          src="/avatar.png"
          alt="Ryan Peterman"
          width="92"
          height="92"
        />
      </div>

      <h1 className="profile-name rise" style={{ animationDelay: '60ms' }}>
        Ryan Peterman
      </h1>
      <p className="profile-bio rise" style={{ animationDelay: '120ms' }}>
        Building the podcast &amp; ergonomic keyboard I wish existed
        <br />
        ex-software engineer @instagram, @meta
      </p>

      <div className="social-row rise" style={{ animationDelay: '180ms' }}>
        {SOCIALS.map((s) => (
          <ExternalLink
            key={s.label}
            href={s.url}
            title={s.label}
            aria-label={s.label}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {s.svg}
            </svg>
          </ExternalLink>
        ))}
      </div>

      <div className="links">
        {LINKS.map((link, i) => {
          const index = String(i + 1).padStart(2, '0');
          const delay = { animationDelay: `${240 + i * 70}ms` };

          if (link.platforms) {
            return (
              <div key={link.title} className="link-button rise" style={delay}>
                <ExternalLink
                  href={link.platforms[0].url}
                  className="row-link"
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <span className="link-index">{index}</span>
                <span className="link-body">
                  <span className="link-title">{link.title}</span>
                  <span className="link-sub">{link.sub}</span>
                </span>
                <span className="platform-icons">
                  {link.platforms.map((p, pi) => (
                    <ExternalLink
                      key={p.label}
                      href={p.url}
                      title={p.label}
                      aria-label={`${link.title} on ${p.label}`}
                      className="platform-icon"
                      style={{ color: p.color }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {p.svg || <path d={p.path} />}
                      </svg>
                    </ExternalLink>
                  ))}
                </span>
              </div>
            );
          }

          return (
            <ExternalLink
              key={link.url}
              href={link.url}
              className="link-button rise"
              style={delay}
            >
              <span className="link-index">{index}</span>
              <span className="link-body">
                <span className="link-title">{link.title}</span>
                <span className="link-sub">{link.sub}</span>
              </span>
              <span className="link-arrow" aria-hidden="true">
                ↗
              </span>
            </ExternalLink>
          );
        })}
      </div>

      <div className="rise" style={{ animationDelay: '580ms' }}>
        <h2 className="section-label">About me</h2>
        <ul className="about-list">
          <li>
            Got promoted to Staff at Instagram 3 years out of college through
            a combination of luck and hard work (Mark Zuckerberg talking
            about part of my Staff promo work on his{' '}
            <ExternalLink href="https://www.instagram.com/p/CkihQRtO5yO/">
              IG
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink href="https://www.facebook.com/4/videos/884058129426425/">
              FB
            </ExternalLink>{' '}
            -{' '}
            <ExternalLink href="https://engineering.fb.com/2022/11/04/video-engineering/instagram-video-processing-encoding-reduction/">
              technical blog post I wrote here
            </ExternalLink>
            ).
          </li>
          <li>
            Shared what I learned{' '}
            <ExternalLink href="https://www.developing.dev/">
              on my Substack
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink href="https://www.developing.dev/p/100000">
              grew it to 100k subscribers
            </ExternalLink>
            .
          </li>
          <li>
            Started a podcast and{' '}
            <ExternalLink href="https://www.developing.dev/p/i-quit-my-job">
              quit my job
            </ExternalLink>{' '}
            to work on it full time. Interviewing top technical folks to
            share their learnings.
          </li>
          <li>
            I&apos;m also{' '}
            <ExternalLink href="https://www.kickstarter.com/projects/ryanlpeterman/compose-simple-ergonomics-beautifully-done">
              building an ergonomic keyboard
            </ExternalLink>{' '}
            because I didn&apos;t see any options that fit what I wanted.
          </li>
        </ul>
      </div>

      <div className="rise" style={{ animationDelay: '640ms' }}>
        <h2 className="section-label section-label-tight">Posts</h2>
        <ul className="post-links">
          {TECHNICAL_POSTS.map((post) => (
            <li key={post.url}>
              <span className="post-year">{post.year}</span>
              <ExternalLink href={post.url}>{post.title}</ExternalLink>
              {post.credibility && (
                <div className="credibility">
                  as seen on:{' '}
                  {post.credibility.zuck.map((c, i) => (
                    <span key={c.url}>
                      {i > 0 && ', '}
                      <ExternalLink href={c.url}>{c.label}</ExternalLink>
                    </span>
                  ))}{' '}
                  and several news outlets (
                  {post.credibility.outlets.map((url, i) => (
                    <span key={url}>
                      {i > 0 && ', '}
                      <ExternalLink href={url}>{`ex${i + 1}`}</ExternalLink>
                    </span>
                  ))}
                  )
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
}

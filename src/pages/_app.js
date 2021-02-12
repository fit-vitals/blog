import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import GoogleFonts from 'next-google-fonts'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <script
          async
          defer
          data-website-id="9eb6abaf-5daa-4b7c-b295-1d4b2befad29"
          src="https://data.drew.tech/umami.js"
        ></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/blog/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/blog/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/blog/favicon-16x16.png" />
        <link rel="manifest" href="/blog/site.webmanifest" />
        <link rel="mask-icon" href="/blog/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  )
}

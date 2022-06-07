import Document, { Html, Head, Main, NextScript } from 'next/document'

const title = 'The Armentani Brothers'
const description = 'The Armentani Brothers are a DJ trio from the City of Brotherly Love. They look forward to releasing a ton of music and creative content for everyone soon!'
const image = 'https://armentanibrothers.com/meta.jpg'
const twitter = '@ArmentaniBros'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />

            <title>{title}</title>
            <meta name="description" content={description} />

            <title key="title">{title}</title>
            <meta key="desc" name="description" content={description} />
            <meta key="og-title" property="og:title" content={title} />
            <meta key="og-image" property="og:image" content={image} />
            <meta key="twitter-card" name="twitter:card" content="summary_large_image"/>
            <meta key="twitter-site" name="twitter:site" content={twitter} />
            <meta key="twitter-title" name="twitter:title" content={title} />
            <meta key="twitter-desc" name="twitter:description" content={description} />
            <meta key="twitter-creator" name="twitter:creator" content={twitter} />
            <meta key="twitter-image-src" name="twitter:image:src" content={image} />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

        </Head>
        <body>
          <Main />
            
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

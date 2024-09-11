import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

          <title>Empresa Júnior IDE | IDE</title>

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="description" content="Somos a IDE, empresa júnior do instituto de informática da UFRGS. Uma empresa com foco em desenvolvimento de aplicações web." />
          <meta property="og:title" content="IDE" />
          <meta property="og:description" content="Somos a IDE, empresa júnior do instituto de informática da UFRGS. Uma empresa com foco em desenvolvimento de aplicações web." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="IDE" />
          <meta name="twitter:title" content="IDE" />
          <meta name="twitter:description" content="Somos a IDE, empresa júnior do instituto de informática da UFRGS. Uma empresa com foco em desenvolvimento de aplicações web." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/17241356?s=200&v=4" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `}}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
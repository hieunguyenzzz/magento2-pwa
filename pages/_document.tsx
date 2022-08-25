// import { GoogleTagManagerNoScript } from '@graphcommerce/googletagmanager'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument<any> {
  render() {
    return (
      <Html>
        <Head>{/* Inject MUI styles first to match with the prepend: true configuration. */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document

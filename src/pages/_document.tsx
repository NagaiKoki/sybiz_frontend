import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
        </Head>
        <body>
          <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-auth.js"></script>
          <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>
          <Main />
          <NextScript />
          <div id="create-modal-element" />
        </body>
      </Html>
    )
  }
}
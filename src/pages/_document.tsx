import Document, { Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <body>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html:  `
              var firebaseConfig = {
                apiKey: "AIzaSyB2wVoccdRo-69iU7KHJnpQIEKZC98DpTI",
                authDomain: "hukugyo-ddc0c.firebaseapp.com",
                databaseURL: "https://hukugyo-ddc0c.firebaseio.com",
                projectId: "hukugyo-ddc0c",
                storageBucket: "hukugyo-ddc0c.appspot.com",
                messagingSenderId: "851741893356",
                appId: "1:851741893356:web:f4399bcbb64ee89bda3bc9",
                measurementId: "G-K1EZC379HX"
              };
              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);
              firebase.analytics();
            `
          }}
        />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
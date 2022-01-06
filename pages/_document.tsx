import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head >
          <meta charSet='utf-8' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head> 
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

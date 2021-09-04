import Document, { Html, Head, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="elNsu1o5nPm1smmJLcjD_WMx8Ei-VW3yXlb6Aj8FyYg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

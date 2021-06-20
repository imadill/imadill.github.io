import React from "react"
import Head from "next/head"

function SEO() {
  return (
    <div>
      <Head>
        <title>Knoxo&apos;s Website</title>
        <meta name="description" content="Knoxo, A Developer Boi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        {/* eslint-disable */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
        {/* eslint-enable */}
        <meta property="og:url" content="https://knoxo.github.io" />
        <meta property="og:title" content="Knoxo's Website" />
        <meta property="og:description" content="Knoxo, A Developer Boi" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Knoxo" />
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="420" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Knoxo_dev" />
      </Head>
    </div>
  )
}

export default SEO

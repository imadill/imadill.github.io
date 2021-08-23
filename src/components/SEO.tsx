import Head from "next/head"

interface SEO {
  title: string
  imageAlt: string
}

function SEO({ title, imageAlt }: SEO) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Knoxo, A Developer Boi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta property="og:url" content="https://knoxo.github.io" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Knoxo, A Developer Boi" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="420" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Knox69420" />
      </Head>
    </div>
  )
}

export default SEO

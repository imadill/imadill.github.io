import React from "react"
import Head from "next/head"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <div className="mt-36 flex justify-center items-center">
          {/* The reason for not using `next/image` is due to the problems with using `next export` */}
          <img
            src="https://i.imgur.com/AdnYSmu.gif"
            alt="Rick Astley"
            width={400}
            height={300}
          />
        </div>
        <div className="mt-4 flex justify-center items-center">
          <h1 className="font-main sm:text-4xl text-3xl">
            Under Construction!!!
          </h1>
        </div>
        <p className="font-main text-center">
          Even I don't know when it will finish
        </p>
        <div className="mt-12 text-center">
          <Footer />
        </div>
      </main>
    </>
  )
}

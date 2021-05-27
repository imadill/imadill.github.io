import React from "react"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="mt-main flex justify-center items-center">
        <h1 className="font-main sm:text-4xl text-3xl">
          Under Construction!!!
        </h1>
      </div>
      <p className="font-main text-center">
        Even I don't know when it will finish
      </p>
      <div className="mt-52 text-center">
        <Footer />
      </div>
    </>
  )
}

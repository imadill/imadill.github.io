import React from "react"
import Image from "next/image"
import SEO from "@components/SEO"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Header />
        <div className="mt-36 flex justify-center items-center">
          <Image
            src="/Rick.gif"
            blurDataURL="data:image/gif;base64,LXHC1ko#.AM{-?bIM|ogWXj]V@of"
            alt="Rick Astley"
            placeholder="blur"
            width={400}
            height={300}
          />
          {/* eslint-enable */}
        </div>
        <div className="mt-4 flex justify-center items-center">
          <h1 className="font-main sm:text-4xl text-3xl">
            Under Construction!!!
          </h1>
        </div>
        <p className="font-main text-center">
          Even I don&apos;t know when it will finish
        </p>
        <div className="mt-12 text-center">
          <Footer />
        </div>
      </main>
    </>
  )
}

import { useEffect } from "react"
import { Howl } from "howler"
import dynamic from "next/dynamic"
const SEO = dynamic(() => import("components/SEO"))
const Header = dynamic(() => import("components/Header"))
const Footer = dynamic(() => import("components/Footer"))

export default function Home() {
  useEffect(() => {
    const sound = new Howl({
      src: ["/Rick.mp3"],
      loop: true,
      html5: true,
      preload: true,
    })

    sound.play()
  })

  return (
    <>
      <SEO title="Knoxo's Portfolio" imageAlt="Knoxo" />
      <main>
        <Header />
        <div className="mt-36 flex justify-center items-center">
          <video autoPlay loop muted playsInline width={400} height={300}>
            <source src="/Rick.webm" type="video/webm" />
            <source src="/Rick.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <h1 className="font-main sm:text-4xl text-3xl">
            Under Construction!!!
          </h1>
        </div>
        <p className="font-main text-center">
          Even I don&apos;t know when it will finish
        </p>
        <Footer mt="mt-12" />
      </main>
    </>
  )
}

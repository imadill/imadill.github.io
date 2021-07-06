import dynamic from "next/dynamic"
const SEO = dynamic(() => import("@components/SEO"))
const Header = dynamic(() => import("@components/Header"))
const Footer = dynamic(() => import("@components/Footer"))

function Custom404() {
  return (
    <>
      <SEO title="404: Page Not Found :(" imageAlt="404" />
      <main>
        <Header />
        <div className="relative mt-26 flex flex-col justify-center items-center">
          {/* eslint-disable */}
          <img
            lazy-loading="true"
            src="/404.jpg"
            alt="404 Error"
            width={600}
            height={400}
          />
          {/* eslint-enable */}
          <h5
            className="absolute text-gray-500
              bottom-12 right-1
              sm:bottom-16 sm:right-2
              md:right-10
              lg:right-32
              xl:right-96"
          >
            <a className="hover:underline" href="http://www.freepik.com">
              Designed by stories / Freepik
            </a>
          </h5>
        </div>
        <Footer mt="mt-0" />
      </main>
    </>
  )
}

export default Custom404

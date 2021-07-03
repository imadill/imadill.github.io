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
          <h5 className="absolute bottom-16 right-96 text-gray-500">
            <a className="hover:underline" href="http://www.freepik.com">
              Designed by stories / Freepik
            </a>
          </h5>
        </div>
        <Footer mt="10" />
      </main>
    </>
  )
}

export default Custom404

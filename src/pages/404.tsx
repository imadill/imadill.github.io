import dynamic from "next/dynamic"
const SEO = dynamic(() => import("@components/SEO"))

function Custom404() {
  return (
    <>
      <SEO title="404: Page Not Found :(" imageAlt="404" />
      <main>
        <div className="mt-26 flex justify-center items-center">
          {/* eslint-disable */}
          <img
            lazy-loading="true"
            src="/404.jpg"
            alt="404 Error"
            width={600}
            height={400}
          />
          {/* eslint-enable */}
          <h5>
            <a href="http://www.freepik.com">Designed by stories / Freepik</a>
          </h5>
        </div>
      </main>
    </>
  )
}

export default Custom404
